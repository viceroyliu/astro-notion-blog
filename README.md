我使用 Notion 和 Astro来部署博客，
部署的文章：https://nerdymomocat-templates.github.io/webtrotion-astro-notion-cms-website-blog/posts/introducing-webtrotion/#why-notion-and-astro
我的GitHub仓库：https://github.com/viceroyliu/astro-notion-blog

但是现在有个需求：
1. 我现在使用的giscus换成waline。
2. 代码我在constants-config.ts、和constants.ts，都已经添加waline配置、WALINE引用
3. 目前使用giscus的代码，都在src/components/blog/PostComments.astro中
4. 我在项目中已经安装		"@waline/client": "^3.6.0",
5. 我的需求是，不要使用cdn的方式，去改变PostComments.astro，把giscus换成waline。
6. 备选方案，如果无法更改PostComments.astro，直接放弃，重新创建一个walineComments组件。
7. 我接下来会给你PostComments.astro代码，如果还需要了解项目的其他信息，我一并发给你。

如果上面的你都听明白，回我收到，并且我会发你PostComments.astro代码及你需要的一切东西。