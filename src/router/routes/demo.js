/** @format */

export default [
  {
    path: '/learn-more',
    meta: {
      ignoreAuth: true,
      title: 'Learn More'
    },
    component: resolve => require(['@pages/LearnMore'], resolve)
  }
]
