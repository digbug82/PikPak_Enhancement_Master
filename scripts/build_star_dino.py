from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import math
import os
import time
import urllib.error
import urllib.request
from collections import Counter
from pathlib import Path
from typing import List, Sequence, Tuple

Point = Tuple[float, float]

DEFAULT_REPO = "digbug82/PikPak_Enhancement_Master"
API_VERSION = "2022-11-28"


def e(s: object) -> str:
    return html.escape(str(s), quote=True)


def parse_date_from_starred_at(value: str) -> dt.date:
    if value.endswith("Z"):
        value = value[:-1] + "+00:00"
    return dt.datetime.fromisoformat(value).date()


def request_json(url: str, token: str | None) -> object:
    headers = {
        "Accept": "application/vnd.github.star+json",
        "X-GitHub-Api-Version": API_VERSION,
        "User-Agent": "star-dino-generator",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(url, headers=headers, method="GET")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as ex:
        body = ex.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"GitHub API request failed: HTTP {ex.code}; {body[:600]}") from ex
    except urllib.error.URLError as ex:
        raise RuntimeError(f"GitHub API request failed: {ex}") from ex


def fetch_stargazer_dates(repo: str, token: str | None) -> List[dt.date]:
    dates: List[dt.date] = []
    page = 1
    while True:
        url = f"https://api.github.com/repos/{repo}/stargazers?per_page=100&page={page}"
        payload = request_json(url, token)
        if not isinstance(payload, list):
            raise RuntimeError(f"Unexpected GitHub API response: {payload!r}")
        if not payload:
            break
        for item in payload:
            if isinstance(item, dict) and item.get("starred_at"):
                dates.append(parse_date_from_starred_at(str(item["starred_at"])))
            else:
                raise RuntimeError(
                    "GitHub response did not include starred_at. "
                    "The request must use Accept: application/vnd.github.star+json."
                )
        page += 1
        time.sleep(0.08)
    dates.sort()
    return dates


def demo_stargazer_dates() -> List[dt.date]:
    start = dt.date.today() - dt.timedelta(days=68)
    bursts = [
        (0, 1), (3, 1), (11, 1), (18, 1), (21, 1),
        (23, 3), (25, 8), (27, 12), (30, 17), (33, 10),
        (37, 9), (42, 9), (47, 7), (53, 6), (60, 10),
        (64, 8), (67, 8),
    ]
    out: List[dt.date] = []
    for offset, count in bursts:
        out.extend([start + dt.timedelta(days=offset)] * count)
    return out


def build_daily_series(star_dates: Sequence[dt.date]) -> List[Tuple[dt.date, int]]:
    if not star_dates:
        return []
    counts = Counter(star_dates)
    start = min(star_dates)
    end = max(max(star_dates), dt.date.today())
    series: List[Tuple[dt.date, int]] = []
    total = 0
    day = start
    while day <= end:
        total += counts.get(day, 0)
        series.append((day, total))
        day += dt.timedelta(days=1)
    return series


def load_series_from_history(path: Path) -> Tuple[str, List[Tuple[dt.date, int]]] | None:
    if not path.exists():
        return None
    payload = json.loads(path.read_text(encoding="utf-8"))
    daily = payload.get("daily")
    if not isinstance(daily, list) or not daily:
        return None
    repo = str(payload.get("repo") or DEFAULT_REPO)
    series: List[Tuple[dt.date, int]] = []
    for row in daily:
        if isinstance(row, dict) and row.get("date") is not None and row.get("stars") is not None:
            series.append((dt.date.fromisoformat(str(row["date"])), int(row["stars"])))
    return repo, series


def compact_series(series: Sequence[Tuple[dt.date, int]], max_points: int = 650) -> List[Tuple[dt.date, int]]:
    if len(series) <= max_points:
        return list(series)
    step = max(1, math.ceil(len(series) / max_points))
    out = [series[0]]
    out.extend(series[i] for i in range(step, len(series) - 1, step))
    out.append(series[-1])
    return out


def nice_max(value: int) -> int:
    if value <= 10:
        return max(10, value)
    magnitude = 10 ** int(math.floor(math.log10(value)))
    normalized = value / magnitude
    if normalized <= 1.2:
        rounded = 1.2
    elif normalized <= 1.5:
        rounded = 1.5
    elif normalized <= 2:
        rounded = 2
    elif normalized <= 3:
        rounded = 3
    elif normalized <= 5:
        rounded = 5
    else:
        rounded = 10
    return int(math.ceil(rounded * magnitude))


def date_ticks(start: dt.date, end: dt.date, count: int = 8) -> List[dt.date]:
    if end <= start:
        return [start]
    days = (end - start).days
    return [start + dt.timedelta(days=round(days * i / (count - 1))) for i in range(count)]


def y_ticks(max_y: int, count: int = 7) -> List[int]:
    return [round(max_y * i / (count - 1)) for i in range(count)]


def format_date(d: dt.date) -> str:
    return d.strftime("%b %-d") if os.name != "nt" else d.strftime("%b %#d")


def jitter_value(seed: int, scale: float) -> float:
    # Deterministic pseudo-random jitter without importing random.
    return math.sin(seed * 12.9898 + 78.233) * 43758.5453 % 1 * 2 * scale - scale


def chart_points(series: Sequence[Tuple[dt.date, int]], left: float, right: float, top: float, bottom: float, max_y: int) -> List[Point]:
    start, end = series[0][0], series[-1][0]
    total_days = max((end - start).days, 1)

    def x_of(day: dt.date) -> float:
        return left + ((day - start).days / total_days) * (right - left)

    def y_of(value: int) -> float:
        return bottom - (value / max_y) * (bottom - top)

    return [(x_of(d), y_of(v)) for d, v in compact_series(series)]


def visual_points_from_daily(series: Sequence[Tuple[dt.date, int]], left: float, right: float, top: float, bottom: float, max_y: int) -> List[Point]:
    """Convert daily cumulative counts into a smooth Star-History-like curve.

    The SVG still uses the real cumulative totals, but it avoids drawing a hard
    staircase. Each day with new stars becomes one key point; the path then uses
    a Catmull-Rom curve through those key points, which is visually much closer
    to the hand-drawn Star History chart.
    """
    if not series:
        return []
    start_day, end_day = series[0][0], series[-1][0]
    total_days = max((end_day - start_day).days, 1)

    def xf(day: dt.date) -> float:
        return left + ((day - start_day).days / total_days) * (right - left)

    def yf(value: int) -> float:
        return bottom - (value / max_y) * (bottom - top)

    pts: List[Point] = [(xf(start_day), yf(0))]
    prev = 0
    for day, total in series:
        if total != prev:
            # Put the daily total near the middle of that day, but keep the
            # x-axis ending at today's date below.
            x = min(right, xf(day) + (right - left) / total_days * 0.45)
            pts.append((x, yf(total)))
            prev = total
    if pts[-1][0] < right - 0.5:
        pts.append((right, yf(series[-1][1])))
    return pts


def catmull_rom_path(points: Sequence[Point], jitter: bool = False) -> str:
    if not points:
        return ""
    pts = list(points)
    if jitter:
        pts = [
            (x + jitter_value(i * 2 + 1, 0.75), y + jitter_value(i * 2 + 2, 0.95))
            for i, (x, y) in enumerate(pts)
        ]
    if len(pts) == 1:
        x, y = pts[0]
        return f"M {x:.1f} {y:.1f}"

    d = [f"M {pts[0][0]:.1f} {pts[0][1]:.1f}"]
    for i in range(len(pts) - 1):
        p0 = pts[i - 1] if i > 0 else pts[i]
        p1 = pts[i]
        p2 = pts[i + 1]
        p3 = pts[i + 2] if i + 2 < len(pts) else p2
        c1x = p1[0] + (p2[0] - p0[0]) / 6.0
        c1y = p1[1] + (p2[1] - p0[1]) / 6.0
        c2x = p2[0] - (p3[0] - p1[0]) / 6.0
        c2y = p2[1] - (p3[1] - p1[1]) / 6.0
        d.append(f"C {c1x:.1f} {c1y:.1f} {c2x:.1f} {c2y:.1f} {p2[0]:.1f} {p2[1]:.1f}")
    return " ".join(d)


def x_of(day: dt.date, start: dt.date, end: dt.date, left: float, right: float) -> float:
    return left + ((day - start).days / max((end - start).days, 1)) * (right - left)


def y_of(value: int, max_y: int, top: float, bottom: float) -> float:
    return bottom - (value / max_y) * (bottom - top)


def dino_under_path(top_points: Sequence[Point], left: float, top: float, right: float, bottom: float) -> str:
    """Lower T-Rex outline connected to the real upper star curve.

    This path intentionally keeps the real star curve as the upper back. Only the
    lower belly/legs/tail/head-side are generated.
    """
    if not top_points:
        return ""
    x0, y0 = top_points[0]
    x1, y1 = top_points[-1]
    w = right - left
    h = bottom - top

    def px(v: float) -> float:
        return left + w * v

    def py(v: float) -> float:
        return top + h * v

    # Clamp control points so the figure remains inside the image even when the
    # current star curve ends close to the chart border.
    head_tip_x = min(right + 54, 970)
    head_tip_y = max(top + 42, min(y1 + 45, py(0.22)))
    jaw_x = min(right + 18, 942)
    jaw_y = py(0.31)

    return " ".join([
        catmull_rom_path(top_points, jitter=False),
        # Nose / forehead / jaw. This turns the real curve end into the dinosaur head.
        f"C {x1 + 26:.1f} {y1 + 4:.1f} {head_tip_x:.1f} {head_tip_y - 18:.1f} {head_tip_x:.1f} {head_tip_y:.1f}",
        f"C {head_tip_x:.1f} {head_tip_y + 20:.1f} {jaw_x:.1f} {jaw_y - 4:.1f} {jaw_x:.1f} {jaw_y:.1f}",
        # Long neck and chest.
        f"C {px(0.94):.1f} {py(0.39):.1f} {px(0.88):.1f} {py(0.48):.1f} {px(0.83):.1f} {py(0.57):.1f}",
        f"C {px(0.78):.1f} {py(0.66):.1f} {px(0.73):.1f} {py(0.66):.1f} {px(0.69):.1f} {py(0.61):.1f}",
        # Small arm, drawn as a notch rather than a big blob.
        f"C {px(0.72):.1f} {py(0.63):.1f} {px(0.73):.1f} {py(0.67):.1f} {px(0.70):.1f} {py(0.68):.1f}",
        f"C {px(0.66):.1f} {py(0.69):.1f} {px(0.65):.1f} {py(0.63):.1f} {px(0.60):.1f} {py(0.62):.1f}",
        # Front thigh and foot.
        f"C {px(0.56):.1f} {py(0.62):.1f} {px(0.54):.1f} {py(0.68):.1f} {px(0.56):.1f} {py(0.75):.1f}",
        f"C {px(0.58):.1f} {py(0.83):.1f} {px(0.53):.1f} {py(0.88):.1f} {px(0.48):.1f} {py(0.86):.1f}",
        f"C {px(0.45):.1f} {py(0.84):.1f} {px(0.43):.1f} {py(0.78):.1f} {px(0.40):.1f} {py(0.73):.1f}",
        # Belly, kept smooth and slimmer.
        f"C {px(0.35):.1f} {py(0.66):.1f} {px(0.29):.1f} {py(0.65):.1f} {px(0.25):.1f} {py(0.72):.1f}",
        # Rear thigh and rear foot. Keep this lower than the old version so
        # the tail stays slender instead of becoming a large loop.
        f"C {px(0.22):.1f} {py(0.78):.1f} {px(0.25):.1f} {py(0.87):.1f} {px(0.19):.1f} {py(0.91):.1f}",
        f"C {px(0.15):.1f} {py(0.93):.1f} {px(0.10):.1f} {py(0.93):.1f} {px(0.06):.1f} {py(0.95):.1f}",
        # Thin tail underside back to the real curve start.
        f"C {px(0.12):.1f} {py(0.98):.1f} {px(0.06):.1f} {py(0.99):.1f} {x0:.1f} {y0:.1f}",
        "Z",
    ])


def sketch_line(x1: float, y1: float, x2: float, y2: float, seed: int) -> str:
    mx = (x1 + x2) / 2 + jitter_value(seed, 1.6)
    my = (y1 + y2) / 2 + jitter_value(seed + 99, 1.6)
    return f"M {x1:.1f} {y1:.1f} Q {mx:.1f} {my:.1f} {x2:.1f} {y2:.1f}"


def make_svg(repo: str, series: Sequence[Tuple[dt.date, int]], theme: str) -> str:
    if not series:
        raise ValueError("empty star series")

    is_dark = theme == "dark"
    bg = "#0d1117" if is_dark else "#ffffff"
    fg = "#f0f6fc" if is_dark else "#24292f"
    muted = "#8b949e" if is_dark else "#57606a"
    grid = "#30363d" if is_dark else "#d0d7de"
    accent = "#ff4b5c" if is_dark else "#e5533d"
    fill = "rgba(255,75,92,0.10)" if is_dark else "rgba(229,83,61,0.11)"
    label_bg = "#0d1117" if is_dark else "#ffffff"
    watermark = "#6e7681" if is_dark else "#57606a"

    width, height = 1000, 640
    left, right = 94, 884
    top, bottom = 96, 552
    start, end = series[0][0], series[-1][0]
    max_stars = max(v for _, v in series)
    max_y = nice_max(max_stars)
    points = visual_points_from_daily(series, left, right, top, bottom, max_y)

    # Smooth interpolation gives a closer Star History / xkcd feeling than daily steps.
    curve_path = catmull_rom_path(points, jitter=False)
    rough_curve_path = catmull_rom_path(points, jitter=True)
    body_path = dino_under_path(points, left, top, right, bottom)

    x_ticks = date_ticks(start, end, 8)
    ytick_values = y_ticks(max_y, 7)[1:]
    generated_at = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    svg: List[str] = []
    svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="Star Dino chart for {e(repo)}">')
    svg.append('<title>Star Dino</title>')
    svg.append(f'<desc>The upper outline is the real cumulative GitHub star curve for {e(repo)}. The lower outline is a generated dinosaur silhouette.</desc>')
    svg.append('<defs>')
    svg.append('<filter id="rough" x="-3%" y="-3%" width="106%" height="106%"><feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="8" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="1.6" xChannelSelector="R" yChannelSelector="G"/></filter>')
    svg.append('<filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="1.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>')
    svg.append('</defs>')
    svg.append('<style>text{font-family:"Comic Sans MS","Marker Felt","Bradley Hand",-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,"Noto Sans",sans-serif}.mono{font-family:"Comic Sans MS",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}</style>')
    svg.append(f'<rect width="100%" height="100%" fill="{bg}"/>')

    # Header: closer to star-history's playful look.
    svg.append(f'<text x="500" y="50" font-size="28" text-anchor="middle" font-weight="700" fill="{fg}" filter="url(#rough)">🌟 Star History</text>')

    # Grid.
    for val in ytick_values:
        y = y_of(val, max_y, top, bottom)
        svg.append(f'<line x1="{left:.1f}" y1="{y:.1f}" x2="{right:.1f}" y2="{y:.1f}" stroke="{grid}" stroke-width="1" opacity="0.28"/>')
        svg.append(f'<text x="{left - 13:.1f}" y="{y + 5:.1f}" font-size="16" text-anchor="end" fill="{fg}" filter="url(#rough)">{val}</text>')

    # Hand-drawn axes, duplicated lightly to mimic xkcd/sketch lines.
    axis_paths = [
        sketch_line(left, top - 8, left, bottom + 3, 1),
        sketch_line(left + 2, top - 5, left - 1, bottom + 2, 2),
        sketch_line(left - 1, bottom, right + 4, bottom, 3),
        sketch_line(left, bottom + 2, right + 2, bottom - 1, 4),
    ]
    for p in axis_paths:
        svg.append(f'<path d="{p}" fill="none" stroke="{fg}" stroke-width="2.6" stroke-linecap="round" opacity="0.95" filter="url(#rough)"/>')

    for i, d in enumerate(x_ticks):
        x = x_of(d, start, end, left, right)
        svg.append(f'<path d="{sketch_line(x, bottom, x + jitter_value(i, 0.9), bottom + 7, 30+i)}" fill="none" stroke="{fg}" stroke-width="1.5" stroke-linecap="round"/>')
        svg.append(f'<text x="{x:.1f}" y="{bottom + 28:.1f}" font-size="17" text-anchor="middle" fill="{fg}" filter="url(#rough)">{e(format_date(d))}</text>')
    svg.append(f'<text x="{(left+right)/2:.1f}" y="{height - 25}" font-size="18" text-anchor="middle" fill="{fg}" filter="url(#rough)">Date</text>')
    svg.append(f'<g transform="translate(45 {(top+bottom)/2:.1f}) rotate(-90)"><text font-size="18" text-anchor="middle" fill="{fg}" filter="url(#rough)">GitHub Stars</text></g>')

    # Legend.
    legend_x, legend_y = left + 18, top + 8
    legend_w = min(360, max(270, len(repo) * 8.3 + 48))
    svg.append(f'<rect x="{legend_x:.1f}" y="{legend_y:.1f}" width="{legend_w:.1f}" height="36" rx="6" fill="{label_bg}" stroke="{fg}" stroke-width="1.5" filter="url(#rough)"/>')
    svg.append(f'<circle cx="{legend_x + 18:.1f}" cy="{legend_y + 18:.1f}" r="4.5" fill="{accent}"/>')
    svg.append(f'<text class="mono" x="{legend_x + 34:.1f}" y="{legend_y + 23:.1f}" font-size="15" font-weight="700" fill="{fg}" filter="url(#rough)">{e(repo)}</text>')

    # Generated dino. The upper curve is drawn again on top to keep it visually real and clean.
    svg.append(f'<path d="{body_path}" fill="{fill}" stroke="{accent}" stroke-width="0"/>')
    svg.append(f'<path d="{body_path}" fill="none" stroke="{accent}" stroke-width="3.6" stroke-linejoin="round" stroke-linecap="round" opacity="0.95" filter="url(#rough)"/>')
    svg.append(f'<path d="{body_path}" fill="none" stroke="{accent}" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round" opacity="0.75"/>')
    svg.append(f'<path d="{curve_path}" fill="none" stroke="{bg}" stroke-width="7.0" stroke-linejoin="round" stroke-linecap="round" opacity="0.55"/>')
    svg.append(f'<path d="{rough_curve_path}" fill="none" stroke="{accent}" stroke-width="3.8" stroke-linejoin="round" stroke-linecap="round" filter="url(#rough)"/>')
    svg.append(f'<path d="{curve_path}" fill="none" stroke="{accent}" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round" opacity="0.95"/>')

    # Tiny eye near the head.
    eye_x = min(right + 34, 958)
    eye_y = max(top + 46, min(points[-1][1] + 33, top + 95))
    svg.append(f'<circle cx="{eye_x:.1f}" cy="{eye_y:.1f}" r="2.4" fill="{accent}" filter="url(#softGlow)"/>')

    # Star count and watermark-like notes.
    svg.append(f'<text x="{right:.1f}" y="{top - 18:.1f}" font-size="18" text-anchor="end" font-weight="700" fill="{fg}" filter="url(#rough)">{max_stars} stars</text>')
    svg.append(f'<text x="{right:.1f}" y="{top + 1:.1f}" font-size="11" text-anchor="end" fill="{muted}">generated {e(generated_at)}</text>')
    svg.append(f'<text x="{right:.1f}" y="{height - 25}" font-size="13" text-anchor="end" fill="{watermark}" filter="url(#rough)">★ star-dino · upper curve is real</text>')
    svg.append('</svg>')
    return "\n".join(svg) + "\n"


def write_history(out_dir: Path, repo: str, series: Sequence[Tuple[dt.date, int]]) -> None:
    payload = {
        "repo": repo,
        "generated_at": dt.datetime.now(dt.timezone.utc).isoformat(timespec="seconds"),
        "total_stars": series[-1][1] if series else 0,
        "daily": [{"date": d.isoformat(), "stars": v} for d, v in series],
        "note": "This file stores daily cumulative counts only; stargazer usernames are not persisted.",
    }
    (out_dir / "star-history.json").write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main(argv: Sequence[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Generate GitHub Star Dino SVG assets.")
    parser.add_argument("--repo", default=os.environ.get("STAR_DINO_REPO") or os.environ.get("GITHUB_REPOSITORY") or DEFAULT_REPO, help="GitHub repo in owner/name format")
    parser.add_argument("--out-dir", default="assets", help="Output directory")
    parser.add_argument("--theme", choices=["light", "dark", "both"], default="both", help="SVG theme to generate")
    parser.add_argument("--demo", action="store_true", help="Use built-in demo data instead of GitHub API")
    parser.add_argument("--from-history", action="store_true", help="Regenerate SVG from existing assets/star-history.json instead of calling GitHub API")
    args = parser.parse_args(argv)

    repo = args.repo.strip().strip("/")
    if "/" not in repo:
        raise SystemExit("--repo must be in owner/name format, for example digbug82/PikPak_Enhancement_Master")

    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    if args.from_history:
        loaded = load_series_from_history(out_dir / "star-history.json")
        if not loaded:
            raise SystemExit(f"No usable history found at {out_dir / 'star-history.json'}")
        repo, series = loaded
    else:
        token = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
        star_dates = demo_stargazer_dates() if args.demo else fetch_stargazer_dates(repo, token)
        if not star_dates:
            raise SystemExit(f"No stars found for {repo}; nothing generated.")
        series = build_daily_series(star_dates)
        write_history(out_dir, repo, series)

    themes = ["light", "dark"] if args.theme == "both" else [args.theme]
    for theme in themes:
        svg = make_svg(repo, series, theme)
        suffix = "" if theme == "light" else "-dark"
        (out_dir / f"star-dino{suffix}.svg").write_text(svg, encoding="utf-8")
    if args.theme == "both":
        (out_dir / "star-dino.svg").write_text(make_svg(repo, series, "light"), encoding="utf-8")

    print(f"Generated Star Dino assets for {repo}: {series[-1][1]} stars, {len(series)} daily points")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
