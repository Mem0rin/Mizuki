# Memorin Blog

Memorin 的个人博客，用于记录自己的学习历程。目前正在从传统 Java 后端转向 AI Agent，希望通过持续学习和实践，成为一名不错的开发者。

- 网站：[www.mem0rin.top](https://www.mem0rin.top/)
- 文章归档：[www.mem0rin.top/archive](https://www.mem0rin.top/archive/)
- RSS：[www.mem0rin.top/rss.xml](https://www.mem0rin.top/rss.xml)
- Atom：[www.mem0rin.top/atom.xml](https://www.mem0rin.top/atom.xml)

## 内容与页面

- 文章：博客内容将在整理并统一格式后逐步更新。
- 项目：展示复杂网络节点保护科研项目 [Graph-decycler](https://github.com/Mem0rin/Graph-decycler)。
- 时间线：记录学习经历、科研项目与获奖经历。
- 关于：介绍 Memorin、学习方向与联系方式。
- 搜索与订阅：使用 Pagefind 提供全文搜索，并生成 RSS、Atom 与 Sitemap。

技能、追番、日记、友链、相册和设备页面目前暂不展示。

## 技术栈

- [Astro](https://astro.build/)
- TypeScript
- Svelte
- Tailwind CSS
- Pagefind
- Mizuki Theme

## 本地开发

环境要求：Node.js 20+、pnpm 9+。

```bash
pnpm install
pnpm dev
```

常用命令：

```bash
pnpm check          # Astro 类型与内容检查
pnpm build          # 生产构建、搜索索引与字体压缩
pnpm preview        # 预览 dist 构建结果
pnpm new-post 标题  # 创建文章
```

## 维护入口

- 站点、导航、个人资料与功能开关：`src/config.ts`
- 关于页：`src/content/spec/about.md`
- 文章：`src/content/posts/`
- 项目：`src/data/projects.ts`
- 时间线：`src/data/timeline.ts`
- 环境变量示例：`.env.example`

提交前建议依次运行：

```bash
pnpm check
pnpm build
```

## 部署

本站由 Vercel 托管，并通过 Vercel 与 GitHub 仓库的连接自动部署。构建设置为：

- Install Command：`pnpm install`
- Build Command：`pnpm build`
- Output Directory：`dist`

如需启用内容仓库分离、Twikoo 评论、Umami 或 IndexNow，请先配置自己的服务和密钥，不要使用主题演示值。

## 致谢与许可

本站基于 [LyraVoid/Mizuki](https://github.com/LyraVoid/Mizuki) 开发，Mizuki 又基于 Fuwari，并从 Yukina、Firefly 等项目获得设计灵感。相关上游许可见 [LICENSE](./LICENSE) 与 [LICENSE.MIT](./LICENSE.MIT)。

除文章单独注明外，本站原创内容采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。
