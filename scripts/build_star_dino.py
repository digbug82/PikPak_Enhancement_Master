#!/usr/bin/env python3
"""Generate a Star Dino SVG for a GitHub repository.

The upper outline is the real cumulative GitHub star curve.
The lower outline is a decorative dinosaur silhouette generated under the curve.

No third-party Python packages are required.
"""
from __future__ import annotations

import argparse
import datetime as dt
import html
import json
import math
import os
import sys
import time
import urllib.error
import urllib.request
from collections import Counter
from pathlib import Path
from typing import Iterable, List, Sequence, Tuple

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
    start = dt.date.today() - dt.timedelta(days=95)
    bursts = [
        (0, 1), (2, 1), (9, 1), (17, 1), (25, 2),
        (28, 6), (31, 12), (34, 18), (37, 9), (41, 8),
        (46, 7), (52, 8), (58, 6), (64, 5), (72, 9),
        (79, 8), (86, 7), (92, 6),
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


def compact_series(series: Sequence[Tuple[dt.date, int]], max_points: int = 900) -> List[Tuple[dt.date, int]]:
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


def date_ticks(start: dt.date, end: dt.date, count: int = 7) -> List[dt.date]:
    if end <= start:
        return [start]
    days = (end - start).days
    return [start + dt.timedelta(days=round(days * i / (count - 1))) for i in range(count)]


def y_ticks(max_y: int, count: int = 6) -> List[int]:
    return [round(max_y * i / (count - 1)) for i in range(count)]


def format_date(d: dt.date) -> str:
    return d.strftime("%b %-d") if os.name != "nt" else d.strftime("%b %#d")


def points_to_path(points: Sequence[Point]) -> str:
    if not points:
        return ""
    parts = [f"M {points[0][0]:.1f} {points[0][1]:.1f}"]
    parts.extend(f"L {x:.1f} {y:.1f}" for x, y in points[1:])
    return " ".join(parts)


def dino_body_path(top_points: Sequence[Point], left: float, top: float, right: float, bottom: float) -> str:
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

    top_curve = points_to_path(top_points)
    return " ".join([
        top_curve,
        # Head, mouth, neck.
        f"C {min(right + 42, 992):.1f} {max(y1 + 18, py(0.08)):.1f} {min(right + 58, 1005):.1f} {py(0.17):.1f} {min(right + 18, 982):.1f} {py(0.23):.1f}",
        f"C {px(0.96):.1f} {py(0.34):.1f} {px(0.88):.1f} {py(0.44):.1f} {px(0.83):.1f} {py(0.56):.1f}",
        # Chest and front arm.
        f"L {px(0.74):.1f} {py(0.56):.1f}",
        f"C {px(0.78):.1f} {py(0.60):.1f} {px(0.79):.1f} {py(0.68):.1f} {px(0.75):.1f} {py(0.69):.1f}",
        f"C {px(0.70):.1f} {py(0.70):.1f} {px(0.68):.1f} {py(0.61):.1f} {px(0.60):.1f} {py(0.60):.1f}",
        # Front leg.
        f"C {px(0.55):.1f} {py(0.60):.1f} {px(0.53):.1f} {py(0.66):.1f} {px(0.55):.1f} {py(0.75):.1f}",
        f"C {px(0.57):.1f} {py(0.84):.1f} {px(0.48):.1f} {py(0.88):.1f} {px(0.46):.1f} {py(0.78):.1f}",
        # Belly and rear leg.
        f"C {px(0.43):.1f} {py(0.68):.1f} {px(0.37):.1f} {py(0.67):.1f} {px(0.33):.1f} {py(0.74):.1f}",
        f"C {px(0.30):.1f} {py(0.80):.1f} {px(0.33):.1f} {py(0.88):.1f} {px(0.25):.1f} {py(0.92):.1f}",
        f"C {px(0.22):.1f} {py(0.82):.1f} {px(0.16):.1f} {py(0.76):.1f} {px(0.10):.1f} {py(0.78):.1f}",
        # Tail reconnects to the real curve start.
        f"C {px(0.18):.1f} {py(0.88):.1f} {px(0.08):.1f} {py(0.98):.1f} {x0:.1f} {y0:.1f}",
        "Z",
    ])


def make_svg(repo: str, series: Sequence[Tuple[dt.date, int]], theme: str) -> str:
    if not series:
        raise ValueError("empty star series")

    is_dark = theme == "dark"
    bg = "#0d1117" if is_dark else "#ffffff"
    fg = "#f0f6fc" if is_dark else "#24292f"
    muted = "#8b949e" if is_dark else "#57606a"
    grid = "#30363d" if is_dark else "#d0d7de"
    accent = "#ff3b49" if is_dark else "#e5533d"
    fill = "rgba(255,59,73,0.20)" if is_dark else "rgba(229,83,61,0.16)"
    label_bg = "#161b22" if is_dark else "#ffffff"

    width, height = 1000, 640
    left, right = 92, 900
    top, bottom = 108, 555
    chart_w, chart_h = right - left, bottom - top
    start, end = series[0][0], series[-1][0]
    max_stars = max(v for _, v in series)
    max_y = nice_max(max_stars)
    total_days = max((end - start).days, 1)

    def x_of(day: dt.date) -> float:
        return left + ((day - start).days / total_days) * chart_w

    def y_of(value: int) -> float:
        return bottom - (value / max_y) * chart_h

    points = [(x_of(d), y_of(v)) for d, v in compact_series(series)]
    curve_path = points_to_path(points)
    body_path = dino_body_path(points, left, top, right, bottom)

    x_ticks = date_ticks(start, end, 8)
    ytick_values = y_ticks(max_y, 7)[1:]
    generated_at = dt.datetime.now(dt.timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

    svg: List[str] = []
    svg.append(f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="Star Dino chart for {e(repo)}">')
    svg.append('<title>Star Dino</title>')
    svg.append(f'<desc>The upper outline is the real cumulative GitHub star curve for {e(repo)}. The lower outline is a decorative dinosaur silhouette.</desc>')
    svg.append('<style>text{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,"Noto Sans",sans-serif}.mono{font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,"Liberation Mono",monospace}</style>')
    svg.append(f'<rect width="100%" height="100%" rx="16" fill="{bg}"/>')
    svg.append(f'<text x="38" y="48" font-size="27" font-weight="700" fill="{fg}">Star Dino</text>')
    svg.append(f'<text x="38" y="78" font-size="13" fill="{muted}">Real star curve + generated dinosaur silhouette · {e(repo)}</text>')

    # Grid and axes.
    for val in ytick_values:
        y = y_of(val)
        svg.append(f'<line x1="{left:.1f}" y1="{y:.1f}" x2="{right:.1f}" y2="{y:.1f}" stroke="{grid}" stroke-width="1" opacity="0.55"/>')
        svg.append(f'<text x="{left - 14:.1f}" y="{y + 5:.1f}" font-size="15" text-anchor="end" fill="{fg}">{val}</text>')
    svg.append(f'<line x1="{left:.1f}" y1="{top:.1f}" x2="{left:.1f}" y2="{bottom:.1f}" stroke="{fg}" stroke-width="2"/>')
    svg.append(f'<line x1="{left:.1f}" y1="{bottom:.1f}" x2="{right:.1f}" y2="{bottom:.1f}" stroke="{fg}" stroke-width="2"/>')
    for d in x_ticks:
        x = x_of(d)
        svg.append(f'<line x1="{x:.1f}" y1="{bottom:.1f}" x2="{x:.1f}" y2="{bottom + 5:.1f}" stroke="{fg}" stroke-width="1.5"/>')
        svg.append(f'<text x="{x:.1f}" y="{bottom + 25:.1f}" font-size="15" text-anchor="middle" fill="{fg}">{e(format_date(d))}</text>')
    svg.append(f'<text x="{(left+right)/2:.1f}" y="{height - 22}" font-size="15" text-anchor="middle" fill="{fg}">Date</text>')
    svg.append(f'<g transform="translate(29 {(top+bottom)/2:.1f}) rotate(-90)"><text font-size="15" text-anchor="middle" fill="{fg}">GitHub Stars</text></g>')

    # Dino fill, then the real curve again on top.
    svg.append(f'<path d="{body_path}" fill="{fill}" stroke="{accent}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>')
    svg.append(f'<path d="{curve_path}" fill="none" stroke="{accent}" stroke-width="3.5" stroke-linejoin="round" stroke-linecap="round"/>')
    for x, y in points[:: max(1, len(points)//18)]:
        svg.append(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="2.6" fill="{accent}"/>')

    # Eye and labels.
    eye_x = min(right + 12, 963)
    eye_y = max(top + 34, points[-1][1] + 34)
    svg.append(f'<circle cx="{eye_x:.1f}" cy="{eye_y:.1f}" r="2.2" fill="{accent}"/>')
    svg.append(f'<rect x="{left + 12:.1f}" y="{top + 10:.1f}" width="350" height="38" rx="8" fill="{label_bg}" stroke="{fg}" stroke-width="1.4"/>')
    svg.append(f'<circle cx="{left + 31:.1f}" cy="{top + 29:.1f}" r="4.5" fill="{accent}"/>')
    svg.append(f'<text class="mono" x="{left + 45:.1f}" y="{top + 34:.1f}" font-size="15" font-weight="600" fill="{fg}">{e(repo)}</text>')
    svg.append(f'<text x="{right:.1f}" y="{top - 20:.1f}" font-size="18" text-anchor="end" font-weight="700" fill="{fg}">{max_stars} stars</text>')
    svg.append(f'<text x="{right:.1f}" y="{top - 1:.1f}" font-size="12" text-anchor="end" fill="{muted}">generated {e(generated_at)}</text>')
    svg.append(f'<text x="{right:.1f}" y="{height - 22}" font-size="12" text-anchor="end" fill="{muted}">upper curve is real · lower outline is generated art</text>')
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
    args = parser.parse_args(argv)

    repo = args.repo.strip().strip("/")
    if "/" not in repo:
        raise SystemExit("--repo must be in owner/name format, for example digbug82/PikPak_Enhancement_Master")

    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

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
    # Always keep star-dino.svg as the light/default asset for simple Markdown embedding.
    if args.theme == "both":
        (out_dir / "star-dino.svg").write_text(make_svg(repo, series, "light"), encoding="utf-8")

    print(f"Generated Star Dino assets for {repo}: {series[-1][1]} stars, {len(series)} daily points")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
