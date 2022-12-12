// iphone 内核
export const phoneUserAgent =
  'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'
// pad 内核
export const padUserAgent =
  'Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1'
export const categories = [
  {
    name: '常用工具',
    children: [
      {
        title: '菜鸟工具',
        url: 'https://c.runoob.com/',
        icon: 'app',
        id: '11'
      },
      {
        title: '前端技术栈',
        url: 'https://yaolx.github.io/#/site',
        icon: 'app',
        id: '12'
      },
      {
        title: '授权工具15',
        url: 'https://yaolx.github.io/#/front',
        icon: 'app',
        id: '13'
      }
    ]
  },
  {
    name: '公司',
    children: [
      {
        title: '授权工具',
        url: 'https://spanner-hub.beta.101.com/spanner-hub/index.html#/auth',
        icon: 'app',
        id: '21'
      },
      {
        title: '本地test',
        url: 'http://localhost:1314/#/site',
        icon: 'app',
        id: '22'
      }
    ]
  }
]

export const MENUS: Menu[] = [
  {
    title: '组件demo',
    id: 'msg',
    icon: 'component'
  },
  {
    title: '通讯录',
    id: 'address',
    icon: 'address'
  },
  {
    title: '我的博客',
    id: 'myBlog',
    url: 'https://yaolx.github.io/#/front',
    icon: 'blog'
  },
  {
    title: '应用工具',
    id: 'apps',
    icon: 'app'
  }
]
