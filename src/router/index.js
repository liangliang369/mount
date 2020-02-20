import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/Login'
import Users from '../views/users/User'
import PrivilegeMangement from '../views/privilegeManagement/PrivilegeManagement'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/users',
    children:[
      {
        path:'users',
        name:'users',
        component:Users
      },
      {
        path:'privilegeMangement',
        name:'privilegeMangement',
        component:PrivilegeMangement
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  routes
})

export default router
