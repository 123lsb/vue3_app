
import vueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(vueRouter)

import home from '../pages/Home/home'
const Login =() => import('../pages/Login/login')
const routes =[
    {
        path:'/',
        component:home
    },
    {
        path:'/home',
        component:home,
        

    },{
        path:'/login',
        component:Login,
        

    },

]
const router = new vueRouter({
    // 配置路由和组件之间的应用关系
    routes,
    mode: 'history',
    linkActiveClass: 'active'
  })
 
  //3.将router对象传入到Vue实例
  export default router