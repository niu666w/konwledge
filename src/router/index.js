import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/ceshi',
      name:'ceshi',
      component:()=>import('@/components/ceshi')
    },
    {
      path:'/',
      // name:'colSapn',
      // component:()=>import('@/components/colSpan')
      name:'zhezhao',
      component:()=>import('@/components/zhezhao')
    }
  ]
})
