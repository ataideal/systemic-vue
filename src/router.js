import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/authentication/Login.vue'
import SignUp from './views/authentication/SignUp.vue'
import UpdatePassword from './views/authentication/UpdatePassword.vue'
import InLayout from './layouts/InLayout.vue'
import DashBoard from './views/home/Dashboard.vue'
import Users from './views/home/Users.vue'
import Canvas from './views/home/Canvas.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/cadastrar',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/alterar-senha',
      name: 'UpdatePassword',
      component: UpdatePassword
    },
    {
      path: '/home',
      name: 'Home',
      component: InLayout,
      redirect:{
        name: 'DashBoard'
      },
      children:[
        {
          path: 'dashboard',
          name: 'DashBoard',
          component: DashBoard
        },
        {
          path: 'usuarios',
          name: 'Users',
          component: Users
        },
        {
          path: 'canvas',
          name: 'Canvas',
          component: Canvas
        },
      ]
    },
  ]
})
