---
sidebarDepth: 2
---

# 快速開始

`hexo-theme-butterfly`是基於[Molunerfinn](https://github.com/Molunerfinn)的[hexo-theme-melody](https://github.com/Molunerfinn/hexo-theme-melody)的基礎上進行開發的。
文檔也是在[hexo-theme-melody](https://molunerfinn.com/hexo-theme-melody-doc/)的文檔基礎上修改。因為一些配置變更導致與原主題配置上有部分區別。故如果安裝`hexo-theme-butterfly`主題，請參考這篇文檔。

## 主題安裝和升級

### 安裝

在你的博客根目錄裏

```git
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
```

如果想要安裝比較新的dev分支，可以

```git
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/Butterfly
```

### 應用主題

修改站點配置文件`_config.yml`，把主題改為`Butterfly`

```yaml
theme: Butterfly
```

> 如果你沒有 pug 以及 stylus 的渲染器，請下載安裝： `npm install hexo-renderer-pug hexo-renderer-stylus --save` or `yarn add hexo-renderer-pug hexo-renderer-stylus`

### 平滑升級

為了主題的平滑升級, `Butterfly` 使用了 [data files](https://hexo.io/docs/data-files.html)特性。

推薦把主題默認的配置文件`_config.yml`複製到 Hexo 工作目錄下的`source/_data/butterfly.yml`，如果`source/_data`的目錄不存在那就創建一個。

> 注意，如果你創建了`butterfly.yml`, 它將會替換主題默認配置文件`_config.yml`裏的配置項 (**不是合併而是替換**), 之後你就只需要通過`git pull`的方式就可以平滑地升級 `theme-butterfly`了。