
### AI提问方法
我使用 Notion 和 Astro来部署博客，
部署的文章：https://nerdymomocat-templates.github.io/webtrotion-astro-notion-cms-website-blog/posts/introducing-webtrotion/#why-notion-and-astro
我的GitHub仓库：https://github.com/viceroyliu/astro-notion-blog

但是现在有个需求：
1.xxx

如果上面的你都听明白，回我收到，并且我会发你需要的代码一切东西。


### 本地开发
本地开发需要创建一个.env文件，内容如下：
```
NOTION_API_SECRET=ntn_68***********ERyFzJVYL7cP
```
同时本地打包的命令用`npm run build-local`，然后用`npm run preview`去预览打包。
命令`npm run build`是留给github上自动构建action用的。
### 注意事项
项目需要先`npm run build`一下，才会生成style文件，然后再`npm run dev`进行开发
(原因：样式是通过constants-config.ts配置自动生成。如果实在想改，可以先在style/global.css中添加调试，确认好了，再添加到src/integrations/theme-constants-to-css.ts文件中)