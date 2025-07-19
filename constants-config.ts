const config = {
	// Notion 数据库 ID - 你的 Notion 数据库的唯一标识符
	"database-id": "234fd8a80a7980409688f880560df08f",

	// 网站作者名称
	"author": "Viceroy",

	// 网站追踪分析配置
	"tracking": {
		// Google Analytics 配置
		"google-analytics": {
			"use-ga": true,                    // 是否启用 Google Analytics
			"public-ga-tracking-id": ""        // Google Analytics 追踪 ID (格式: GA-XXXXXXXXX)
		},
		// Umami 分析配置 (开源的网站分析工具)
		"umami": {
			"use-umami": false,                // 是否启用 Umami 分析
			"data-website-id": "",             // Umami 网站 ID
			"self-hosted": false,              // 是否使用自托管的 Umami
			"self-hosted-umami-url": ""        // 自托管 Umami 的 URL 地址
		}
	},

	// Google Search Console HTML 标签 - 用于验证网站所有权
	"google-search-console-html-tag": "",

	// 社交媒体链接配置
	"socials": {
		"email": "",                         // 电子邮箱地址
		"github": "",                        // GitHub 用户名
		"googlescholar": "",                 // Google Scholar 个人主页 ID
		"semanticscholar": "",               // Semantic Scholar 个人主页 ID
		"dblp": "",                          // DBLP 计算机科学文献库个人主页
		"substack": "",                      // Substack 订阅链接
		"facebook": "",                      // Facebook 用户名
		"twitter": "",                       // Twitter/X 用户名
		"threads": "",                       // Threads 用户名
		"instagram": "",                     // Instagram 用户名
		"mastodon": "",                      // Mastodon 账号 (格式: @username@instance.social)
		"bluesky": "",                       // Bluesky 用户名
		"calendar": "",                      // 日历链接 (如 Calendly)
		"kofi": "",                          // Ko-fi 赞助链接
		"buy-me-a-coffee": ""                // Buy Me a Coffee 赞助链接
	},

	// 自定义域名 - 如果你有自己的域名，在这里填写 (例如: example.com)
	"custom-domain": "",

	// 基础路径 - 如果网站部署在子目录下使用 (例如: /blog)
	"base-path": "",

	// Giscus 评论系统配置 (基于 GitHub Discussions)
	"giscus": {
		"data-repo": "viceroyliu/astro-notion-blog",       // GitHub 仓库名
		"data-repo-id": "R_kgDOK0FuUA",                    // 仓库 ID
		"data-category": "General",                         // 讨论分类
		"data-category-id": "DIC_kwDOK0FuUM4CbZ5A",       // 分类 ID
		"data-mapping": "pathname",                         // 评论映射方式 (pathname/url/title等)
		"data-input-position": "top",                       // 评论框位置 (top/bottom)
		"data-reactions-enabled": true                      // 是否启用表情反应
	},

	// Bluesky 评论配置
	"bluesky-comments": {
		"show-comments-from-bluesky": false,               // 是否显示来自 Bluesky 的评论
		"auto-search-for-match": {
			"turn-on-auto-search": false,                    // 是否自动搜索匹配的帖子
			"author": "",                                     // Bluesky 作者用户名
			"echo-feed-emoji": ""                             // Echo feed 表情符号
		}
	},

	// 引用和链接设置
	"references": {
		"site-links-in-page": true,                        // 显示页面内的站内链接
		"external-links-in-page": true,                    // 显示页面内的外部链接
		"media-and-file-links-in-this-page": true,        // 显示页面内的媒体和文件链接
		"links-to-this-page": true,                        // 显示链接到当前页面的其他页面
		"popovers": true,                                  // 启用链接悬停预览
		"footnotes": true                                  // 启用脚注功能
	},

	// 短代码配置 - 用于在 Notion 中插入特殊内容
	"shortcodes": {
		"html-render": "<!DOCTYPE html> <!-- iframe -->",  // HTML 渲染标记 (iframe 方式)
		"html-inject": "<!DOCTYPE html> <!-- inject -->",  // HTML 注入标记 (直接注入方式)
		"alt-text": {                                      // 替代文本标记
			"start": "<<alt-text-start>>",                  // 开始标记
			"end": "<<alt-text-end>>"                        // 结束标记
		},
		"expressive-code": {                               // 代码高亮标记
			"start": "<<expressive-code-start>>",            // 开始标记
			"end": "<<expressive-code-end>>"                // 结束标记
		},
		"shiki-transform": "<<shiki-transform>>",          // Shiki 代码转换标记
		"table": "<<🗂️>>"                                  // 表格标记
	},

	// 是否在首页显示最近的文章
	"recent-posts-on-home-page": false,

	// 主题配置
	"theme": {
		// 颜色配置 (使用 RGB 值)
		"colors": {
			"bg": {                                          // 背景色
				"light": "249 249 249",                        // 浅色模式背景
				"dark": "28 30 32"                             // 深色模式背景
			},
			"text": {                                        // 文本颜色
				"light": "34 39 42",                           // 浅色模式文本
				"dark": "255 255 255"                          // 深色模式文本
			},
			"link": {                                        // 链接颜色
				"light": "85 123 118",                         // 浅色模式链接
				"dark": "199 200 203"                          // 深色模式链接
			},
			"accent": {                                      // 主要强调色
				"light": "203 41 65",                          // 浅色模式强调色
				"dark": "41 188 136"                           // 深色模式强调色
			},
			"accent-2": {                                    // 次要强调色
				"light": "17 17 17",                           // 浅色模式次要强调色
				"dark": "237 237 237"                          // 深色模式次要强调色
			},
			"quote": {                                       // 引用文本颜色
				"light": "203 41 65",                          // 浅色模式引用色
				"dark": "205 254 183"                          // 深色模式引用色
			}
		},
		// Google 字体配置
		"fontfamily-google-fonts": {
			// Google Fonts 组合 URL
			// "combined-url": "https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
			// 使用国际CND替换Google Fonts
			"combined-url": "https://fonts.bunny.net/css2?family=Roboto+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap",
			"sans-font-name": "Roboto, -apple-system, BlinkMacSystemFont, 'Noto Sans SC', 'Microsoft YaHei', sans-serif",         // 无衬线字体名称
			"serif-font-name": "'Noto Serif SC', serif",                          																								// 衬线字体名称
			"mono-font-name": "'Roboto Mono', 'JetBrains Mono', 'Source Code Pro', 'Noto Sans SC', 'Microsoft YaHei', monospace"              // 等宽字体名称
		}
	},

	// Webmention 配置 (用于接收其他网站的提及通知)
	"webmention": {
		"webmention-api-key": "",                          // Webmention API 密钥
		"webmention-link": ""                              // Webmention 链接
	},

	// 每页显示的文章数量
	"number-of-posts-per-page": 10,

	// 是否启用图片灯箱效果 (点击图片放大查看)
	"enable-lightbox": true,

	// 菜单页面集合名称 - Notion 中用于导航菜单的集合
	"menu-pages-collection": "main",

	// 用作标题的 Notion 块类型
	"heading-blocks": ["heading_1", "heading_2", "heading_3"],

	// 需要显示完整预览的集合名称
	"full-preview-collections": ["研发项目"],

	// 是否在列表中隐藏以下划线开头的 slug
	"hide-underscore-slugs-in-lists": true,

	// 主页的 slug (URL 路径)
	"home-page-slug": "主页",

	// 所有脚注页面的 slug
	"all-footnotes-page-slug": "_all-footnotes",

	// Open Graph (OG) 图片生成设置
	"og-setup": {
		"columns": 1,                                      // 列数
		"excerpt": false,                                  // 是否显示摘要
		"title-font-url": "https://fonts.googleapis.com/css2?family=Kreon:wght@500&display=swap",     // 标题字体 URL
		"footnote-font-url": "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@700&display=swap"  // 脚注字体 URL
	},

	// 社交媒体嵌入是否使用全宽度显示
	"full-width-social-embeds": false,

	// 是否优化图片 (压缩、调整大小等)
	"optimize-images": true,

	// URL 重定向配置 (格式: {"旧路径": "新路径"})
	"redirects": {}
} as const; // 重要：as const 是让 TypeScript 推断出更精确的类型

// 使用 as const 的好处：
//
// 所有字符串值会被推断为字面量类型而不是 string
// 对象和数组会变成只读
// 不需要手动写 interface

// 导出配置
export default config;
