---
sidebarDepth: 2
---

以下是一些網友在安裝的過程中出現的問題。在提問題之前，先看有沒有解決方法。

## 問題1

頁面只顯示 `extends includes/layout.pug block content #recent-posts.recent-posts include includes/recent-posts.pug include includes/pagination.pug #aside_content.aside_content include includes/aside.pug`

> 请下载安装：`npm install hexo-renderer-pug hexo-renderer-stylus --save` or `yarn add hexo-renderer-pug hexo-renderer-stylus

## 問題2

配置友情鏈接頁面時出現報錯

```
ERROR D:\Desktop\orxing-blog\themes\Butterfly\layout\flink.pug:2
    1| .flink
  > 2|   each i in site.data.link
    3|     p.comment-word= i.class_name
    4|     .post-cards
    5|       ul.md-links

Cannot read property &#39;length&#39; of undefined
TypeError: D:\Desktop\orxing-blog\themes\Butterfly\layout\flink.pug:2
    1| .flink
  > 2|   each i in site.data.link
    3|     p.comment-word= i.class_name
    4|     .post-cards
    5|       ul.md-links

Cannot read property &#39;length&#39; of undefined
    at eval (eval at wrap (D:\Desktop\orxing-blog\node_modules\pug-runtime\wrap.js:6:10), <anonymous>:1890:32)
    at eval (eval at wrap (D:\Desktop\orxing-blog\node_modules\pug-runtime\wrap.js:6:10), <anonymous>:2017:4)
    at template (eval at wrap (D:\Desktop\orxing-blog\node_modules\pug-runtime\wrap.js:6:10), <anonymous>:10152:72)
    at Theme._View.View._compiled (D:\Desktop\orxing-blog\node_modules\hexo\lib\theme\view.js:123:48)
    at Theme._View.View.View.render (D:\Desktop\orxing-blog\node_modules\hexo\lib\theme\view.js:29:15)
    at D:\Desktop\orxing-blog\node_modules\hexo\lib\hexo\index.js:349:21
    at tryCatcher (D:\Desktop\orxing-blog\node_modules\bluebird\js\release\util.js:16:23)
    at D:\Desktop\orxing-blog\node_modules\bluebird\js\release\method.js:15:34
    at RouteStream._read (D:\Desktop\orxing-blog\node_modules\hexo\lib\hexo\router.js:123:3)
    at RouteStream.Readable.read (_stream_readable.js:457:10)
    at resume_ (_stream_readable.js:936:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:9)
```

> 請檢查 `link.yml`文檔内代碼的空格

## 問題3

升級最新版本hexo g後報錯

```
INFO  Deleted database.
INFO  Start processing
FATAL Something&#39;s wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
TypeError: Cannot read property &#39;enable&#39; of undefined
    at Hexo.<anonymous> (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/themes/Butterfly/scripts/post-lazyload.js:5:23)
    at Hexo.tryCatcher (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/util.js:16:23)
    at Hexo.<anonymous> (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/method.js:15:34)
    at /Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/hexo/lib/extend/filter.js:60:50
    at tryCatcher (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/util.js:16:23)
    at Object.gotValue (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/reduce.js:155:18)
    at Object.gotAccum (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/reduce.js:144:25)
    at Object.tryCatcher (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/promise.js:517:31)
    at Promise._settlePromise (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/promise.js:574:18)
    at Promise._settlePromiseCtx (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/promise.js:611:10)
    at _drainQueueStep (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/async.js:142:12)
    at _drainQueue (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/async.js:131:9)
    at Async._drainQueues (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/async.js:147:5)
    at Immediate.Async.drainQueues [as _onImmediate] (/Users/qinkangdeid/Nextcloud/work/codes/personal/github/personal/qinkangdeid.github.io/node_modules/bluebird/js/release/async.js:17:14)
    at processImmediate (internal/timers.js:439:21)
```

> 請參照最新版的_config.xml, 比對后，把缺的配置複製到butterfly.xml去

## 問題4

報錯`wordcount is not a function`

> 請檢查是否安裝了wordcount插件 `npm i --save hexo-wordcount`

## 問題5

舊版本升級到2.0.0后報錯

```
INFO Start processing
FATAL Something’s wrong. Maybe you can find the solution here: https://hexo.io/docs/troubleshooting.html
Template render error: (unknown path)
unexpected end of file
at Object.prettifyError (F:\hexo\nodemodules\nunjucks\src\lib.js:36:11)
at Template.render (F:\hexo\node_modules\nunjucks\src\environment.js:542:21)
at Environment.renderString (F:\hexo\node_modules\nunjucks\src\environment.js:380:17)
at Promise.fromCallback.cb (F:\hexo\node_modules\hexo\lib\extend\tag.js:123:48)
at tryCatcher (F:\hexo\node_modules\bluebird\js\release\util.js:16:23)
at Function.Promise.fromNode.Promise.fromCallback (F:\hexo\node_modules\bluebird\js\release\promise.js:185:30)
at Tag.render (F:\hexo\node_modules\hexo\lib\extend\tag.js:123:18)
at Object.onRenderEnd (F:\hexo\node_modules\hexo\lib\hexo\post.js:280:20)
at Promise.then.then.result (F:\hexo\node_modules\hexo\lib\hexo\render.js:64:19)
at tryCatcher (F:\hexo\node_modules\bluebird\js\release\util.js:16:23)
at Promise.settlePromiseFromHandler (F:\hexo\nodemodules\bluebird\js\release\promise.js:517:31)

```

> 2.0.0版本以上刪掉了gallery，而引入新的gallery。所以如果有使用舊版，需刪掉或者更改寫法。
