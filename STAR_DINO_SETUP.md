# Star Dino 自动生成与 GitHub 托管说明

## 1. 放置文件

把压缩包内容解压到仓库根目录：

```text
.github/workflows/star-dino.yml
scripts/build_star_dino.py
assets/
STAR_DINO_README_SNIPPET.md
```

## 2. 启用自动生成

提交后进入 GitHub 仓库：

```text
Actions → Star Dino → Run workflow
```

之后它会每天自动运行一次，并更新：

```text
assets/star-dino.svg
assets/star-dino-dark.svg
assets/star-history.json
```

## 3. README 嵌入

把 `STAR_DINO_README_SNIPPET.md` 里的片段复制到 README。

## 4. 权限说明

workflow 已经设置：

```yaml
permissions:
  contents: write
```

这样 GitHub Actions 才能把生成后的 SVG commit 回仓库。如果仓库设置里禁用了 Actions 写权限，到：

```text
Settings → Actions → General → Workflow permissions
```

确认允许工作流写入仓库内容。

## 5. 本地预览

无需联网的演示数据：

```bash
python scripts/build_star_dino.py --repo digbug82/PikPak_Enhancement_Master --out-dir assets --theme both --demo
```

真实 GitHub Star 数据：

```bash
GITHUB_TOKEN=你的token python scripts/build_star_dino.py --repo digbug82/PikPak_Enhancement_Master --out-dir assets --theme both
```

公开仓库也可以不带 token，但带 token 更稳定。

## 6. 数据隐私

脚本只把每日累计 star 数写入 `assets/star-history.json`，不会持久化 stargazer 用户名。
