module.exports = {
  title: 'hexo-theme-butterfly',
  description: 'A Hexo Theme: Butterfly',
  base: '/',
  port: 4000,
  themeConfig: {
    repo: 'jerryc127/hexo-theme-butterfly',
    docsRepo: 'jerryc127/hexo-theme-butterfly-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '幫助我們改善此頁面！',
    nav: [
    { text: '快速開始', link: '/quick-start/'},
    { 
      text: '設置直達',
      ariaLabel: '設置直達',
      items: [
        { text: '主題頁面', link: '/theme-page/'},
        { text: '配置', link: '/config/'},
        { text: '解決問題', link: '/question/'}
      ]    
    },
    { text: '主題預覽', link: 'https://demo.jerryc.me/', target:'_blank'},
    ],
    sidebar: [
    {
      title: 'hexo-theme-butterfly',
      collapsable: false,
      children: [
        ['quick-start', '快速開始'],
        ['theme-page','主題頁面'],
        ['config','配置'],
        ['question','解決問題']
      ]
    }
  ],
  lastUpdated: 'Last Updated', // string | boolean
  smoothScroll: true
  },
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/medium-zoom'],
    ['@vuepress/nprogress']
  ]
}
