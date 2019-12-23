---
sidebarDepth: 2
---

# 主題頁面

## Page Front-matter

```md
---
title:
date:
type: （tags,link,categories這三個頁面需要配置）
comments: (是否需要顯示評論，默認true)
description:
top_img: (設置頂部圖)
mathjax:
katex:
---
```

## Post Front-matter

```md
---
title:
date:
tags:
categories:
keywords:
description:
top_img: （除非特定需要，可以不寫）
comments  是否顯示評論（除非設置false,可以不寫）
cover:  縮略圖
toc:  是否顯示toc （除非特定文章設置，可以不寫）
toc_number: 是否顯示toc數字 （除非特定文章設置，可以不寫）
copyright: 是否顯示版權 （除非特定文章設置，可以不寫）
mathjax:
katex:
hide:
---
```

## 標籤頁

1. 前往你的 Hexo 博客的根目錄

2. 輸入`hexo new page tags`

3. 你會找到`source/tags/index.md`這個文件

4. 修改這個文件：

```md
---
title: 標籤
date: 2018-01-05 00:00:00
type: "tags"
---
```

## 分類頁

1. 前往你的 Hexo 博客的根目錄

2. 輸入`hexo new page categories`

3. 你會找到`source/categories/index.md`這個文件

4. 修改這個文件：

```md
---
title: 分類
date: 2018-01-05 00:00:00
type: "categories"
---
```

## 友情鏈接

為你的博客創建一個友情鏈接！

### 創建友情鏈接頁面

1. 前往你的 Hexo 博客的根目錄
2. 輸入 `hexo new page link`
3. 你會找到`source/link/index.md`這個文件
4. 修改這個文件：

```md
---
title: 友情鏈接
date: 2018-06-07 22:17:49
type: "link"
---
```

### 友情鏈接添加

在Hexo博客目錄中的`source/_data`，創建一個文件`link.yml`

```yml
class:
  class_name: 友情鏈接
  link_list:
    1:
      name: xxx
      link: https://blog.xxx.com
      avatar: https://cdn.xxxxx.top/avatar.png
      descr: xxxxxxx
    2:
      name: xxxxxx
      link: https://www.xxxxxxcn/
      avatar: https://xxxxx/avatar.png
      descr: xxxxxxx  

 class2:
   class_name: 鏈接無效
   link_list:
     1:
       name: 夢xxx
       link: https://blog.xxx.com
       avatar: https://xxxx/avatar.png
       descr: xxxx
     2:
       name: xx
       link: https://www.axxxx.cn/
       avatar: https://x
       descr: xx
```

### 友情鏈接界面設置

需要添加友情鏈接，可以在`Butterfly.yml`配置
可在友情鏈接上寫上自己的個人資料，方便其他人添加。

```yaml
Flink:
  headline: 友情鏈接
  info_headline: 我的Blog資料
  name: Blog 名字： JerryC
  address: Blog 地址： https://jerryc.me/
  avatar: Blog 頭像： https://jerryc.me/img/avatar.png
  info: Blog 簡介： 今日事,今日畢
  comment: 如果需要交換友鏈,請留言
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-flink-headline.png)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-flink.png)

## 音樂

音樂界面使用了插件[hexo-tag-aplayer](https://github.com/MoePlayer/hexo-tag-aplayer)。
使用方法請參考插件的文檔

音樂頁面只是普通的page頁，按普通頁面操作生成就行。

## 電影

電影界面使用了插件[hexo-douban](https://github.com/mythsman/hexo-douban)。
使用方法請參考插件的文檔。
