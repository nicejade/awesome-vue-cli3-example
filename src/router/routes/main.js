/** @format */

export default [
  {
    path: '/explore',
    meta: {
      ignoreAuth: true,
      title: '发现更多'
    },
    component: resolve => require(['@pages/ExploreMore'], resolve)
  }
]
