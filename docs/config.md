---
sidebarDepth: 2
---

# 配置

## 配置文件説明

- 站點配置文件`_config.yml`是 hexo 工作目錄下的主配置文件(還不知道是哪裏的，自己google)
- `butterfly.yml` 是 `Butterfly` 的配置文件。它需要你手動將主題目錄下的`_config.yml`文件複製到 hexo 工作目錄的`source/_data/butterfly.yml`中。如果文件或者文件夾不存在，需要手動創建。

## 語言

修改站點配置文件 `_config.yml`

默認語言是 en

主題支持三種語言

- default(en)
- zh-CN (簡體中文)
- zh-TW (繁體中文)

## 網站資料

修改網站各種資料，例如標題、副標題和郵箱等個人資料，請修改博客根目錄的`_config.yml`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/20191120000444.png)

## 導航菜單

配置`butterfly.yml`

```yaml
menu:
  Home: / || fa fa-home
  Archives: /archives/ || fa fa-archive
  Tags: /tags/ || fa fa-tags
  Categories: /categories/ || fa fa-folder-open
  Link: /link/ || fa fa-link
  About: /about/ || fa fa-heart
  List||fa fa-list:
    - Music || /music/ || fa fa-music
    - Movie || /movies/ || fa fa-film
```

> 必須是 `/xxx/`，後面`||`分開，然後寫圖標名。菜單名稱可自己修改
> 
> 格式： 
> 
> 顯示名稱: 
> 
> 路徑||icon
> 
> sub-menu格式
> 
>  名稱||icon:
> 
> - 名稱 || 路徑 || icon

**注意：** 導航的文字可自行更改

例如：

```markdown
menu:
  首頁: / || fa fa-home
  時間軸: /archives/ || fa fa-archive
  標籤: /tags/ || fa fa-tags
  分類: /categories/ || fa fa-folder-open
  清單||fa fa-heartbeat:
    - 音樂 || /music/ || fa fa-music
    - 照片 || /Gallery/ || fa fa-picture-o
    - 電影 || /movies/ || fa fa-film
  友鏈: /link/ || fa fa-link
  關於: /about/ || fa fa-heart
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-menu.png)

## 代碼

### 代碼高亮主題

`Butterfly` 支持了 [Material Theme](https://github.com/equinusocio/material-theme)全部 5 種代碼高亮樣式：

- default
- darker
- pale night
- light
- ocean

配置`butterfly.yml`

```yaml
highlight_theme: light
```

> default

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-default.png)

> darker

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-darker.png)

> pale night

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-pale-night.png)

> light

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-light.png)

> ocean

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-highlight-ocean.png)

### 代碼複製

主題支持代碼複製功能

配置`butterfly.yml`

```yaml
highlight_copy: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-copy.png)

### 代碼框展開/關閉

在默認情況下，代碼框自動展開，可設置是否所有代碼框都關閉狀態，點擊`>`可展開代碼

配置`butterfly.yml`

```yaml
highlight_shrink: true #代碼框不展開，需點擊 '>' 打開
```

`highlight_shrink: true`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-highlight-shrink-true.png)

`highlight_shrink: false`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-highlight-shrink-false.png)

`highlight_shrink: none`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-highlight-shirk-none.png)

### 代碼換行

在默認情況下，`hexo-highlight`在編譯的時候不會實現代碼自動換行。如果你不希望在代碼塊的區域裏有橫向滾動條的話，那麼你可以考慮開啟這個功能。

配置`butterfly.yml`

```yaml
code_word_wrap: true
```

然後找到你站點的 Hexo 配置文件`_config.yml`，將`line_number`改成`false`:

```yaml
highlight:
  enable: true
  line_number: false
  auto_detect: false
  tab_replace:
```

> 設置`code_word_wrap`之前:

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-word-wrap-before.png)

> 設置`code_word_wrap`之後:

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-code-word-wrap-after.png)

## 社交圖標

Butterfly支持 [font-awesome v4](https://fontawesome.com/v4.7.0/)和 [font-awesome v5](https://fontawesome.com/icons?from=io). 如需開啟[font-awesome v5](https://fontawesome.com/icons?from=io),需要在`Butterfly.yml`上開啟

```yaml
CDN_USE:
  css:
    - https://cdn.jsdelivr.net/npm/font-awesome@latest/css/font-awesome.min.css
    - https://use.fontawesome.com/releases/v5.8.1/css/all.css
```

無論V4還是V5,書寫格式都是一樣的`圖標名：url`

```yaml
social:
  fa fa-github: https://github.com/jerryc127
  fa fa-rss: /atom.xml
```

圖標名可在這尋找

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-fontawesome.png)

PC:

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-social-icon-pc.png)

Mobile:

![1560603353743](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-socila-icon-mobile.png)

## 主頁文章節選(自動節選和文章頁description)

因為主題UI的關係，`主頁文章節選`只支持`自動節選`和`文章頁description`。優先選擇`自動節選`。

在`butterfly.yml`裏可以開啟`auto_excerpt`的選項，你的文章將會在自動截取部分顯示在主頁。（默認顯示150個字）。

```yaml
auto_excerpt:
  enable: true
  length: 150
```

如果沒有開啟`自動節選`，則會顯示文章頁front-matter裏面設置的`description`。

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-description.png)

> 注意：如果開啟了自動節選功能，代碼塊的顯示將有可能不正常。

## 頂部圖

`頂部圖`有2種配置：具體url 和（留空，true和false，三個效果一樣）

### page頁

#### 當具體url時

主頁的頂部圖可以在`Butterfly.yml`設置`index_img`

archives頁的頂部圖可以在`Butterfly.yml`設置`archive_img`

其他`page`頁的頂部圖可以在各自的md頁面設置`front-matter`中的`top_img`

> 頁面如果沒有設置各自的`top_img`，則會顯示`default_top_img`圖片

#### 當頂部圖留空，true和false

主頁會顯示純顏色的頂部圖

其他page的頂部圖沒有設置時，也會顯示純顏色的頂部圖

### post頁

`post`頁的頂部圖會優先顯示各自`front-matter`中的`top_img`,如果沒有設置，則會縮略圖（即各自`front-matter`中的`cover`)，如果沒有則會顯示顯示`default_top_img`圖片

## 文章相關項

這個選項是用來顯示文章的相關信息的。

配置`butterfly.yml`

```yaml
post_meta:
  date_type: both #or created or updated 文章日期是創建日或者更新日或都顯示
  categories: true # or false 是否顯示分類
  tags: true # or false 是否顯示標籤
```

在文章頂部的資料，

`date_type`: 可設置文章日期顯示創建日期(`created`)或者更新日期(`updated`)或者兩種都顯示(`both`)

`categories` 是否顯示分類

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-info.png)

`tags`是否顯示標籤

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-tag.png)

## 文章版權

為你的博客文章展示文章版權和許可協議。

配置`butterfly.yml`

```yaml
post_copyright:
  enable: true
  license: CC BY-NC-SA 4.0
  license_url: https://creativecommons.org/licenses/by-nc-sa/4.0/
```

如果有文章（例如：轉載文章）不需要顯示版權，可以在文章Front-matter單獨設置

```yaml
copyright: false
```

**版權顯示截圖**

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-copyright.png)

## 文章打賞

在你每篇文章的結尾，可以添加打賞按鈕。相關二維碼可以自行配置

配置`butterfly.yml`

```yaml
reward:
  enable: true
  QR_code:
    - itemlist:
        img: /img/wechat.jpg
        text: 微信
    - itemlist:
        img: /img/alipay.jpg
        text: 支付寶
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-donate.png)

## 文章封面

文章的markdown文檔上,在`Front-matter`添加`cover`,并填上要顯示的圖片地址。
如果不配置`cover`,可以設置顯示默認的cover.

配置`butterfly.yml`

```yaml
default_cover: https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg.png
```

當配置多張圖片時,會隨機選擇一張作爲cover.此時寫法應爲

```yaml
default_cover:
  - https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg.png
  - https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg2.png
  - https://cdn.jsdelivr.net/gh/jerryc127/CDN@latest/cover/default_bg3.png
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-cover.png)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-cover-show.png)

## 文章隱藏

> 2.1.0版本以上支持

參考*printempw/hexo-hide-posts*，如果想要隱藏文章，可以在文章的Front-matter添加

```mark
hide: true
```

## 頭像

配置`butterfly.yml`

```yaml
avatar: https://xxxx/avatar.png
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-avatar.png)

## TOC

在文章頁，會有一個目錄，用於顯示TOC。 手機端默認顯示按鈕。

配置`butterfly.yml`

```yaml
toc:
  enable: true
  number: true   #顯示章節數字
```

**PC**
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-toc-pc.png)

**Mobile**
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-mobile-toc-new.png)

### 為特定的文章配置是否顯示TOC和特定的目錄章節數字

在你的文章`md`文件的頭部，加入`toc_number`和`toc`項，並配置`true`或者`false`即可。

`toc`是否顯示文章TOC

`toc_number` 是否顯示章節數

配置之後你的特定的文章將會擁有它自己的目錄數字的顯示與否，而不會受全局的配置影響。

> `enable: true`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-toc-true.png)

> `number: false`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-toc-number-false.png)

### 設置是否自動打開TOC

可選擇進入文章頁面時，是否自動打開sidebar顯示TOC

```YAML
auto_open_sidebar:
  enable: true
```

## 相關文章

相關文章推薦的原理是根據文章tags的比重來推薦

配置`butterfly.yml`

```yaml
related_post:
  enable: true
  limit: 6 # 顯示推薦文章數目
  date_type: created # or created or updated 文章日期顯示创建日或者更新日
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-releatedpost.png)

## Footer 設置

### 博客年份

`since`是一個來展示你站點起始時間的選項。它位於頁面的最底部。

配置`butterfly.yml`

```yaml
since: 2018
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-since.png)

### 頁腳自定義文本

`footer_custom_text`是一個給你用來在頁腳自定義文本的選項。通常你可以在這裏寫聲明文本等。支持 HTML。

配置`butterfly.yml`

```yaml
footer_custom_text: Hi, welcome to my <a href="https://jerryc.me/">blog</a>!
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-footer-text.png)

### ICP

對於部分有備案的域名，可以在ICP配置顯示。

配置`butterfly.yml`

```yaml
ICP:
  enable: true
  url: http://www.beian.miit.gov.cn/state/outPortal/loginPortal.action
  text: 粵ICP備xxxx
  icon: /img/icp.png
```

## 右下角按鈕

### 簡繁轉換

簡體繁體互換

右下角會有簡繁轉換按鈕。

配置`butterfly.yml`

```yaml
translate:
  enable: true
  # 默認按鈕顯示文字(網站是簡體，應設置為'default: 繁')
  default: 簡
  #網站默認語言，1: 繁體中文, 2: 簡體中文
  defaultEncoding: 1
  #延遲時間,若不在前, 要設定延遲翻譯時間, 如100表示100ms,默認為0
  translateDelay: 0
  #博客網址
  cookieDomain: "https://jerryc.me/"
  #當文字是簡體時，按鈕顯示的文字
  msgToTraditionalChinese: "繁"
  #當文字是繁體時，按鈕顯示的文字
  msgToSimplifiedChinese: "簡"
```

> 簡體

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-simp.png)

> 繁體

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-tranditional.png)

### 夜間模式

右下角會有夜間模式按鈕

配置`butterfly.yml`

```yaml
# 夜間模式
darkmode:
  enable: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-dark-mode.png)

> V2.0.0 開始增加一個選項，可開啓自動切換light mode 和 dark mode
> 
> autoChangeMode: 1  跟隨系統而變化，不支持的瀏覽器/系統將按照時間晚上6點到早上6點之間切換為 dark mode
> 
> autoChangeMode: 2  只按照時間 晚上6點到早上6點之間切換為 dark mode,其餘時間為light mode
> 
> autoChangeMode: false 取消自動切換

```yaml
# 自動切換 dark mode和 light mode
autoChangeMode: false
```

### 閲讀模式

閲讀模式下會去掉除文章外的內容，避免干擾閲讀。

只會出現在文章頁面，右下角會有閲讀模式按鈕。

配置`butterfly.yml`

```yaml
readmode:
  enable: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-read-mode.png)

## 側邊欄設置

### 側邊排版

可自行決定哪個項目需要顯示，可決定位置。

> 至少需要顯示一個

配置`butterfly.yml`

```yaml
aside:
  position: right # left or right
  card_author: true
  card_announcement: true
  card_recent_post: true
  card_categories: true
  card_tags: true
  card_archives: true
  card_webinfo: true
```

**left**
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-aside-left.png)

**right**
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-aside-right.png)

### 訪問人數 busuanzi (UV 和 PV)

訪問 busuanzi 的[官方網站](http://busuanzi.ibruce.info/)查看更多的介紹。

配置`butterfly.yml`

```yaml
busuanzi:
  site_uv: true
  site_pv: true
  page_pv: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-busuanzi-site-pv.png)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-pv.png)

### 運行時間

網頁已運行時間

配置`butterfly.yml`

```yaml
runtimeshow:
  enable: true
  start_date: 6/7/2018 00:00:00  
  ##網頁開通時間
  #格式: 月/日/年 時間
  #也可以寫成 年/月/日 時間
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-runtime.png)

## 標籤外掛（Tag Plugins）

### Note (Bootstrap Callout)

移植於next主題（注意，書寫不是markdown規範，而是hexo特有的功能，故在其它地方會顯示不出效果）

#### 配置

配置`butterfly.yml`

```yaml
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: simple
  icons: false
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```

#### 用法

```md
{% note [class] [no-icon] %}
Any content (support inline tags too.io).
{% endnote %}

[class]   : default | primary | success | info | warning | danger.
[no-icon] : Disable icon in note.

All parameters are optional.
```

具體效果、用法可查看[這裏](https://theme-next.org/docs/tag-plugins/note)

### Gallery相冊

> 2.0.0以上提供

區別于舊版的Gallery相冊,新的Gallery相冊會自動根據圖片長度進行排版，書寫也更加方便，與markdown格式一樣。可根據需要插入到相應的md。

寫法:

```md
{% gallery %}
markdown 圖片格式
{% endgallery %}
```

例如

```md
{% gallery %}
![](https://gratisography.com/wp-content/uploads/2019/10/gratisography-scary-pumpkin-hand-900x600.jpg)
![](https://gratisography.com/wp-content/uploads/2019/10/gratisography-fresh-fish-dinner-900x600.jpg)
![](https://gratisography.com/wp-content/uploads/2019/10/gratisography-mountain-cloud-landscape-900x600.jpg)
![](https://picjumbo.com/wp-content/uploads/iphone-free-stock-photos-2210x3315.jpg)
![](https://picjumbo.com/wp-content/uploads/young-millennial-girl-drinking-lemonade-and-overlooking-the-city-2210x1473.jpg)
![](https://picjumbo.com/wp-content/uploads/modern-graphic-designer-essentials_free_stock_photos_picjumbo_HNCK4919-2210x1474.jpg)
{% endgallery %}
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/20191101143214.png)

## 評論

> 只能選擇一個評論服務商

### Disqus

註冊 [disqus](https://disqus.com/)，配置你自己的 disqus，然後在`Butterfly`裏開啟它。

配置`butterfly.yml`

```yaml
disqus:
  enable: true
  shortname:
  count: false # top_img顯示評論數
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-disqus.png)

### Laibili（來必力）

註冊[來必力](http://www.laibili.com.cn/)，配置你自己的來必力設置，然後在`Butterfly`裏開啟它。

配置`butterfly.yml`

```yaml
laibili:
  enable: true
  uid:
```

laibili 的 uid 你能在這裏找到:

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-laibili.jpg)

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-laibili_2.png)

### Gitalk

遵循 [gitalk](https://github.com/gitalk/gitalk)的指示去獲取你的 github Oauth 應用的 client id 和 secret 值。以及查看它的相關配置説明。

然後配置`butterfly.yml`:

```yaml
gitalk:
  enable: true
  client_id: 你的client id 
  client_secret: 你的client secret
  repo: 你的github倉庫
  owner: 你的github用户名
  admin: 該倉庫的擁有者或協作者
  language: # en , zh-CN , zh-TW
  count: false # top_img顯示評論數

```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-gitalk.png)

### Valine

遵循 [Valine](https://github.com/xCss/Valine)的指示去配置你的 LeanCloud 應用。以及查看相應的配置説明。

然後配置`butterfly.yml`:

```yaml
valine:
  enable: false # if you want use valine,please set this value is true
  appId: # leancloud application app id
  appKey: # leancloud application app key
  notify: false # valine mail notify (true/false) https://github.com/xCss/Valine/wiki
  verify: false # valine verify code (true/false)
  pageSize: 10 # comment list page size
  avatar: monsterid # gravatar style https://valine.js.org/#/avatar
  lang: en # i18n: zh-cn/en
  placeholder: Please leave your footprints # valine comment input placeholder(like: Please leave your footprints )
  guest_info: nick,mail,link #valine comment header info
  bg: /img/comment_bg.png # valine background
  count: false # top_img顯示評論數
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-valine.png)

## 分享

> 只能選擇一個分享服務商

### AddThis

> 找到你的 pub-id

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-addthis.jpg)

配置`butterfly.yml`

```yaml
addThis:
  enable: true # or false
  pubid: 你的pub-id
```

### Sharejs

如果你不知道 [sharejs](https://github.com/overtrue/share.js/)，看看它的説明。

配置`butterfly.yml`

```yaml
sharejs:
  enable: true
  sites: facebook,twitter,wechat,weibo,qq  #想要顯示的內容
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-sharejs.png)

### Addtoany

可以到[addtoany](https://www.addtoany.com/)查看使用説明

```yaml
addtoany:
  enable: false
  item:   # 顯示的內容
    - facebook
    - twitter
    - wechat
    - sina_weibo
    - facebook_messenger
    - email
    - copy_link
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-addtoany.png)

## 搜索系統

### Algolia

1. 你需要安裝 [hexo-algolia](https://github.com/oncletom/hexo-algolia)或 [hexo-algoliasearch](https://github.com/LouisBarranqueiro/hexo-algoliasearch). 根據它們的説明文檔去做相應的配置。

2. 配置`butterfly.yml`

```yaml
algolia_search:
  enable: true
  hits:
    per_page: 6

  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
    hits_stats: "${hits} results found in ${time} ms"
```

### 本地搜索

1. 你需要安裝 [hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search). 根據它的文檔去做相應配置。**注意格式只支持 xml**。

2. 配置`butterfly.yml`

```yaml
local_search:
  enable: false
  labels:
    input_placeholder: Search for Posts
    hits_empty: "We didn't find any results for the search: ${query}" # if there are no result
```

## 網站驗證

如果需要搜索引擎收錄網站，可能需要登錄對應搜索引擎的管理平台進行提交。
各自的驗證碼可從各自管理平台拿到

配置`butterfly.yml`

```yaml
# Google Webmaster tools verification setting
# See: https://www.google.com/webmasters/
google_site_verification:

# Bing Webmaster tools verification setting
# See: https://www.bing.com/webmaster/
bing_site_verification:

# Yandex Webmaster tools verification setting
# See: https://webmaster.yandex.ru/
yandex_site_verification:

# Baidu Webmaster tools verification setting
# See: https://ziyuan.baidu.com/site/
baidu_site_verification:

# 360 Webmaster tools verification setting
# see http://zhanzhang.so.com/
qihu_site_verification:
```

## 分析統計

### 百度統計

1. 登錄百度統計的[官方網站](https://tongji.baidu.com/web/welcome/login)

2. 找到你百度統計的統計代碼

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-baidu-tongji.jpg)

3. 配置`butterfly.yml`

```yaml
baidu_analytics: 你的代碼
```

### 谷歌分析

1. 登錄谷歌分析的[官方網站](https://www.google.com/analytics/)

2. 找到你的谷歌分析的跟蹤 ID

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-google-analytics.jpg)

3. 配置`butterfly.yml`

```yaml
google_analytics: 你的代碼 # 通常以`UA-`打頭
```

### 騰訊分析

1. 登錄騰訊分析的[官方網站](https://ta.qq.com/)

2. 找到你的站點ID

   ![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-tengxun-analysic.png )

3. 配置`butterfly.yml`

   ```yam
   # Tencent_analytics ID
   tencent_analytics: 
   ```

   

## 廣告

### 谷歌廣告

主題已集成谷歌廣告（自動廣告）

配置`butterfly.yml`

```yaml
google_adsense:
  enable: true
  js: https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js
  client: # 填入個人識別碼
  enable_page_level_ads: true
```



![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-google-adsense.png)

## MathJax

> 建議使用 KaTex 獲得更好的效果，下文有介紹！

配置`butterfly.yml`:

```yaml
mathjax:
  enable: true
  # true 表示每一頁都加載mathjax.js
  # false 需要時加載，須在使用的Markdown Front-matter 加上 mathjax: true
  per_page: false
```

> 如果`per_page`設爲`true`,則每一頁都會加載Mathjax服務。設爲`false`，則需要在文章`Front-matter`添加`mathjax: true`,對應的文章才會加載Mathjax服務。

然後你需要修改一下默認的`markdown`渲染引擎來實現 MathJax 的效果。

查看: [hexo-renderer-kramed](https://www.npmjs.com/package/hexo-renderer-kramed)

以下操作在你 hexo 博客的目錄下 (**不是 Butterfly 的目錄!**):

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-mathjax.png)

效果：

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-mathjax-2.jpg)

## KaTeX

首先禁用`MathJax`（如果你配置過 MathJax 的話），然後修改你的`butterfly.yml`以便加載`katex.min.css`:

```yaml
katex:
  enable: true
  # true 表示每一頁都加載katex.js
  # false 需要時加載，須在使用的Markdown Front-matter 加上 katex: true
  per_page: false
  hide_scrollbar: true
```

你不需要添加`katex.min.js`來渲染數學方程。相應的你需要卸載你之前的 hexo 的 markdown 渲染器以及`hexo-math`，然後安裝新的`hexo-renderer-markdown-it-plus`:

```yaml
# 替換 `hexo-renderer-kramed` 或者 `hexo-renderer-marked` 等hexo的markdown渲染器
# 你可以在你的package.json裏找到hexo的markdwon渲染器，並將其卸載
npm un hexo-renderer-marked --save

# or

npm un hexo-renderer-kramed --save

# 卸載 `hexo-math`
npm un hexo-math --save

# 然後安裝 `hexo-renderer-markdown-it-plus`
npm i @upupming/hexo-renderer-markdown-it-plus --save
```

注意到 [`hexo-renderer-markdown-it-plus`](https://github.com/CHENXCHEN/hexo-renderer-markdown-it-plus)已經無人持續維護, 所以我們使用 [`@upupming/hexo-renderer-markdown-it-plus`](https://github.com/upupming/hexo-renderer-markdown-it-plus)。 這份 fork 的代碼使用了 [`@neilsustc/markdown-it-katex`](https://github.com/yzhang-gh/markdown-it-katex)同時它也是 VSCode 的插件 [Markdown All in One](https://github.com/yzhang-gh/vscode-markdown)所使用的, 所以我們可以獲得最新的 KaTex 功能例如 `\tag{}`。

你還可以通過 [`@neilsustc/markdown-it-katex`](https://github.com/yzhang-gh/markdown-it-katex)控制 KaTeX 的設置，所有可配置的選項參見 https://katex.org/docs/options.html。 比如你想要禁用掉 KaTeX 在命令行上輸出的宂長的警告信息，你可以在根目錄的 `_config.yml` 中使用下面的配置將 `strict` 設置為 false:

```yaml
markdown_it_plus:
  plugins:
    - plugin:
      name: '@neilsustc/markdown-it-katex'
      enable: true
      options:
        strict: false
```

當然，你還可以利用這個特性來定義一些自己常用的 `macros`。

因為 KaTeX 更快更輕量，因此沒有 MathJax 的功能多（比如右鍵菜單）。為那些使用 MathJax 的用户，我們也為 KaTeX 默認添加了 [_Copy As TeX Code_](https://github.com/upupming/katex-copytex)的功能。

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-katex.gif)

## 美化/特效

### 自定義主題色

可以修改大部分UI顏色

配置`butterfly.yml`，比如：

> 顏色值必須被雙引號包裹，就像`"#000"`而不是`#000`。否則將會在構建的時候報錯！

```yaml
theme_color:
  enable: true
  main: "#9370DB"
  paginator: "#7A7FF1"
  button_hover: "#FF7242"
  text_selection: "#69c46d"
  link_color: "#858585"
  hr_color: "#A4D8FA"
  read-mode-bg_color: '#FAF9DE'
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-color_1.png)
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-color_2.png)

### 網站背景

默認顯示白色，可設置圖片或者顔色

配置`butterfly.yml`

```yaml
# 圖片格式 background: url(http://xxxxxx.com/xxx.jpg)
# 顔色 background: '#49B202'
# 留空 顯示白色
background:
```

`background:'#49B202'`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-set-body-background-color.png)

`background: url(https://i.loli.net/2019/09/09/5oDRkWVKctx2b6A.png)`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-set-body-background-img.png)

### footer 背景

footer 的背景會與`top_img`的一致, 當設置`false`時，將與主題色一致。

配置`butterfly.yml`

```yaml
# footer是否顯示圖片背景(與top_img一致)
footer_bg: true
```

`true`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-footer-img.png)

### 打字效果

打字效果[activate-power-mode](https://github.com/disjukr/activate-power-mode)

配置`butterfly.yml`

```yaml
# 打字效果
activate_power_mode:
  enable: false
  colorful: true # 冒光特效
  shake: true # 抖動特效
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-type-animation.gif)

### 靜止彩帶

好看的彩帶背景，可設置每次刷新更換彩帶，或者每次點擊更換彩帶

配置`butterfly.yml`

```yaml
canvas_ribbon:
  enable: false
  size: 150
  alpha: 0.6
  zIndex: -1
  click_to_change: false  #設置是否每次點擊都更換彩帶
  mobile: false # false 手機端不顯示 true 手機端顯示
```

相關配置可查看[canvas_ribbon](https://github.com/hustcc/ribbon.js)

### 動態彩帶

好看的彩帶背景，會飄動

配置`butterfly.yml`

```yaml
canvas_ribbon_piao:
  enable: true
  mobile: false # false 手機端不顯示 true 手機端顯示
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-canvas-ribbon-piao.gif)

### canvas-nest

配置`butterfly.yml`

```yaml
canvas_nest:
  enable: true
  color: '0,0,255' #color of lines, default: '0,0,0'; RGB values: (R,G,B).(note: use ',' to separate.)
  opacity: 0.7 # the opacity of line (0~1), default: 0.5.
  zIndex: -1 # z-index property of the background, default: -1.
  count: 99 # the number of lines, default: 99.
  mobile: false # false 手機端不顯示 true 手機端顯示
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-canvas_nest.gif)

### 鼠標點擊效果

#### 煙花

配置`butterfly.yml`

```yaml
fireworks:
  enable: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-firewall.gif)

#### 愛心

配置`butterfly.yml`

```yaml
# 點擊出現愛心
click_heart:
  enable: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/click_love.gif)

#### 文字

配置`butterfly.yml`

```yaml
# 點擊出現文字，文字可自行修改
ClickShowText:
  enable: false
  text: 
    - 富强
    - 民主
    - 文明
    - 和谐
    - 自由
    - 平等
    - 公正
    - 法治
    - 爱国
    - 敬业
    - 诚信
    - 友善
  fontSize: 15px
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/click_word.gif)

### 文章頁美化

會改變ol、ul、h1-h5的樣式

配置`butterfly.yml`

```yaml
post_beautify:
  enable: true
  title-prefix-icon: '\f0c1'
  title-prefix-icon-color: "#F47466"
```

`title-prefix-icon`填寫的是fontawesome的icon的Unicode數。
![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-fontwesome-unicode.png)

> 未開啓美化

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-beautify.png)

> 開啓美化

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-post-beautif.png)

### 自定義字體

可自行設置字體的`font-family`

配置`butterfly.yml`

```yaml
font:
  enable: true
  font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB,"Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif
  code-font: consolas, Menlo, "PingFang SC", "Microsoft JhengHei","Microsoft YaHei", monospace, Helvetica Neue For Number
```

### 網站副標題

> 適用於 版本號 >= V1.2.0
> 
> V2.0.0開始增加一些第三方api調用

可設置主頁中顯示的網站副標題或者喜歡的座右銘。

配置`butterfly.yml`

```yaml
# 主頁subtitle
# 打字效果
subtitle: 
  enable: true
  # source調用第三方服務
  # source: false 關閉調用 
  # source: 1  調用金山詞霸的每日一句（簡體）
  # source: 2  調用一言网的一句話（簡體） #https://hitokoto.cn/
  # source: 3  調用一句网（簡體） http://yijuzhan.com/
  # source: 4  調用今日詩詞（簡體） https://www.jinrishici.com/
  # subtitle 會先顯示 source , 再顯示 sub 的内容
  source: false
  # (如果有英文逗號' , '，請使用轉義字符 &#44;)
  sub:
    - 今日事&#44;今日畢
    - Never put off till tomorrow what you can do today
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-index-subtitle.gif)

### 主頁文章cover位置

```yacas
# 主頁文章COVER顯示位置
# 三個值可配置 left , right , both
# left(全部圖片顯示在左邊)，right(全部圖片顯示在右邊)，both(左右左右順序顯示)
index_post_cover: left
```

`left`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-left.png)

`right`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-right.png)

`both`

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-docs-cover-both.png)

### 主頁top_img顯示大小

> 適用於 版本號 >= V1.2.0

默認的顯示為全屏。site-info的區域會居中顯示

```yaml
# 主頁設置
# 默認top_img全屏，site_info在中間
# 使用默認, 都無需填寫（建議默認）
index_top_img_height:  #主頁top_img高度 例如 300px/300em/300rem  不能使用百分比
```

注意：`index_top_img_height`的值不能使用百分比。
2個都不填的話，會使用默認值

舉例，當

```yaml
index_top_img_height: 400px
```

效果

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-index-top-img-setting.png)

## PWA

要為`Butterfly`配上 PWA 特性, 你需要如下幾個步驟:

1. 打開 hexo 工作目錄

2. `npm install hexo-offline --save` 或者 `yarn add hexo-offline`

3. 修改`_config.yml` 在站點`_config.yml`中增加以下內容。

```yaml
# offline config passed to sw-precache.
offline:
  maximumFileSizeToCacheInBytes: 10485760 # 緩存的最大文件大小，以字節為單位
  staticFileGlobs:
    - public/**/*.{js,html,css,png,jpg,gif,svg,webp,eot,ttf,woff,woff2}
  # 靜態文件合集，如果你的站點使用了例如webp格式的文件，請將文件類型添加進去。
  stripPrefix: public
  verbose: true
  runtimeCaching:
    # CDNs - should be cacheFirst, since they should be used specific versions so should not change
    - urlPattern: /* # 如果你需要加載CDN資源，請配置該選項，如果沒有，可以不配置。
      handler: cacheFirst
      options:
        origin: your_websie_url # 可替換成你的 url
```

更多內容請查看 [hexo-offline](https://github.com/JLHwung/hexo-offline)的官方文檔

4. 在`butterfly.yml`中開啟 pwa 選項。

```yaml
pwa:
  enable: true
  manifest: /img/pwa/manifest.json
  theme_color: "#fff"
  apple_touch_icon: /img/pwa/apple-touch-icon.png
  favicon_32_32: /img/pwa/32.png
  favicon_16_16: /img/pwa/16.png
  mask_icon: /img/pwa/safari-pinned-tab.svg
```

5. 在創建`source/`目錄中創建`manifest.json`文件。

```json
{
    "name": "string", //應用全稱
    "short_name": "Junzhou", //應用簡稱
    "theme_color": "#49b1f5", //匹配瀏覽器的地址欄顏色
    "background_color": "#49b1f5",//加載應用時的背景色
    "display": "standalone",//首選顯示模式 其他選項有：fullscreen,minimal-ui,browser
    "scope": "/",
    "start_url": "/",
    "icons": [ //該數組指定icons圖標參數，用來時適配不同設備（需為png，至少包含一個192px*192px的圖標）
        {
          "src": "images/pwaicons/36.png", //圖標文件的目錄，需在source/目錄下自行創建。
          "sizes": "36x36",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/48.png",
          "sizes": "48x48",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/72.png",
          "sizes": "72x72",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/96.png",
          "sizes": "96x96",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/144.png",
          "sizes": "144x144",
          "type": "image/png"
        },
        {
          "src": "images/pwaicons/192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
            "src": "images/pwaicons/512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
      ],
      "splash_pages": null //配置自定義啟動動畫。
  }
```

你也可以通過 [Web App Manifest](https://app-manifest.firebaseapp.com/)快速創建`manifest.json`。（Web App Manifest 要求至少包含一個 512*512 像素的圖標）

6. 可以通過`Chrome`插件`Lighthouse`檢查 PWA 配置是否生效以及配置是否正確。
   
   - 打開博客頁面
   - 啟動`Lighthouse`插件 (`Lighthouse`插件要求至少包含一個 512*512 像素的圖標)

關於 PWA（漸進式增強 Web 應用）的更多內容請參閲 [Google Tools for Web Developers](https://developers.google.com/web/tools/lighthouse/audits/address-bar)

## 字數統計

要為`Butterfly`配上字數統計特性, 你需要如下幾個步驟:

1. 打開 hexo 工作目錄

2. `npm install hexo-wordcount --save` or `yarn add hexo-wordcount`

3. 配置`butterfly.yml`:

```yaml
wordcount:
  enable: true
```

![](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/hexo-theme-butterfly-doc-word-count.png)

## 文章置頂

要為你一些文章置頂，你需要如下步驟:

1. 打開 hexo 工作目錄
2. `npm uninstall hexo-generator-index --save` 然後 `npm install hexo-generator-index-pin-top --save`
3. 你要在文章的`front-matter`區域裏添加`top: True`屬性來把這篇文章置頂。
4. 你可以參考 [hexo-generator-index-pin-top](https://github.com/netcan/hexo-generator-index-pin-top)這個倉庫來了解更多細節。

舉個例子:

你的某篇文章開頭如下：

```md
title: xxxx
tags:
  - xxx
date: 2018-08-08 08:08:08
---
// ....
```

現在把`top: True`加進去：

```md
title: xxxx
tags:
  - xxx
date: 2018-08-08 08:08:08
top: True
---
// ....
```

## 圖片大圖查看模式

### fancybox

配置`butterfly.yml`

```yaml
# fancybox http://fancyapps.com/fancybox/3/
fancybox:
  enable: true
```

![fancybox.gif](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/fancybox.gif)

### medium_zoom

配置`butterfly.yml`

```yaml
medium_zoom:
  enable: true
```

![medium_zoom.gif](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/medium_zoom.gif)

## Snackbar 彈窗

Snackbar彈窗,根據自己愛好開啓

配置`butterfly.yml`

```yaml
# Snackbar 彈窗
# https://github.com/polonel/SnackBar
# position 彈窗位置
# 可選 top-left / top-center / top-right / bottom-left / bottom-center / bottom-right
snackbar:
  enable: true
  position: bottom-left
  bg_light: '#49b1f5' #light mode時彈窗背景
  bg_dark: '#2d3035' #dark mode時彈窗背景
```

> 未開啓Snackbar

![snackbar_false.gif](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/snackbar_false.gif)

> 開啓Snackbar

![snackbar_true.gif](https://cdn.jsdelivr.net/gh/jerryc127/CDN/img/snackbar_true.gif)