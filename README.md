# Lens — Hexo 主题

> 一个现代、极简、受 Bing 新闻展示风格启发的 Hexo 主题。

版本: 1.0.0

## 简要说明
Lens 专为视觉叙事设计，首页采用“1+5”布局（1 张大图 + 5 条侧边列表），分页采用响应式卡片网格。主题依赖文章封面图以获得最佳效果。

## 安装
1. 将 `lens` 文件夹放置到你的 Hexo 项目根目录下的 `themes/` 目录中：

   `Your-Blog-Root/themes/lens/`

2. 在站点根目录的 `_config.yml` 中设置：

   ```yaml
   theme: lens
   ```

3. 运行 Hexo：

   ```powershell
   hexo clean
   hexo g
   hexo s
   ```

## 分页与首页行为
为了保证“第2页及以后每页显示 10 篇文章”的行为，请在站点根目录 `_config.yml` 中设置：

```yaml
per_page: 10
```

主题渲染说明：
- 首页（第1页）加载最新 10 篇文章；主题会自动取前 6 篇用于 Hero 区（1 大 + 5 列表），其余 4 篇显示于下方网格。
- 第2页及以后每页显示标准的 10 篇网格文章。

## 文章封面（Post Images）
主题强烈依赖 `photos` 字段来渲染封面图。请在文章 Front-matter 中添加：

```yaml
photos:
  - https://your-image-url.com/cover.jpg
```

如果未提供 `photos`，会使用主题配置中的 `default_cover` 作为回退。

建议图片比例为 16:9 或 4:3。

## 摘要（excerpt）建议
为更好地控制列表摘要，建议在 Front-matter 中添加 `excerpt` 字段：

```yaml
excerpt: 这是文章的简短摘要，用于首页和列表预览。
```

主题会优先显示 `post.excerpt`，否则回退为自动截取文章内容。

## 主题自定义
- 编辑 `themes/lens/_config.yml` 来配置 `menu`、`default_cover`、`social` 等。
- 修改配色请编辑 `themes/lens/source/css/style.css`，在 `:root` 中调整 `--accent-color` 等变量。

## 常见问题
- 首页未显示图片：请检查文章 Front-matter 中是否配置了 `photos`，或检查 `default_cover` 链接。
- 样式未更新：运行 `hexo clean` 后重建站点。

---

Designed for Hexo. Enjoy your writing!
