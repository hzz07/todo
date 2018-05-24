import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import users from '@/view/users'
import daka from '@/view/daka'
import clockview from '@/view/clockview'
import Login from '@/view/login'
import Register from '@/view/register'
import gerenxinxi from '@/view/gerenxinxi'
import rank from '@/view/rank'
import stat from '@/view/stat'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user',
      name: 'users',
      component: users
    },
    {
      path: '/daka',
      name: 'daka',
      component: daka
    },
    {
      path: '/clockview/:id',
      name: 'clockview',
      component: clockview
    },{
      path:'/gerenxinxi',
      name:'gerenxinxi',
      component:gerenxinxi
    },{
      path:'/rank',
      name:'rank',
      component:rank
    },{
      path:'/stat',
      name:'stat',
      component:stat
    }

  ]
})
/*全局验证*/
router.beforeEach((to,from,next)=>{
  let token=localStorage.getItem('token');
  /*如果不是登录页*/
  if(to.path !='/login'){
    console.log('/////')
    console.log(token)
    /*验证token*/
    if(token==null){
      next({
        path:'/login'
      })

    }

  }
  else {
    if(token!=null){
      next({
        path:'/'
      })
    }
  }
next()
})
export default router;
