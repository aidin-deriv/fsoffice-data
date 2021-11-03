const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Image gallery',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/fsnewoffice/',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'photobank',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Palladium',
        link: '/Palladium/',
      },
      {
        text: 'Saei',
        link: '/saei/',
      },
      /*{
        text: 'Orfi 1',
        link: '/orfi1/',
      },
      {
        text: 'Jordan-Atefi(Option1)',
        link: '/jordan-atefi1/',
      },
      {
        text: 'Jordan-Atefi(Option 2)',
        link: '/jordan-atefi2/',
      },
      {
        text: 'Jordan-Tandis',
        link: '/jordan-tandis/',
      },
      {
        text: 'Fereshteh',
        link: '/fereshteh/',
      },
      {
        text: 'Dibaji',
        link: '/dibaji/',
      },
      {
        text: 'Saba',
        link: '/saba/',
      },*/
      {
        text: 'Vozara',
        link: '/vozara/',
      },/*
      {
        text: 'Fereshteh-Maryam',
        link: '/fereshteh-maryam/',
      },
      {
        text: 'Parkway',
        link: '/parkway/',
      },
      {
        text: 'Dolat',
        link: '/dolat/',
      },*/
      {
        text: 'Lidoma',
        link: '/lidoma/',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
