/**
 * /*
 * 通用路由配置，需要放在配置项数组的末端
 *
 * @format
 */

import NotFound from '@pages/partials/NotFound'

export default [
  {
    path: '/',
    meta: {
      title: 'Vue-cli Overall Example',
      ignoreAuth: true
    },
    component: resolve => require(['@pages/Homepage'], resolve)
  },
  {
    path: '/',
    redirect: '/homepage'
  },
  {
    path: '*',
    meta: {
      title: 'Page Not Found',
      ignoreAuth: true
    },
    component: NotFound
  }
]
