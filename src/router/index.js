import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import Game from '../views/Game'


Vue.use(VueRouter)

const routes = [
   {
       path:'/login',
       name:'login',
       component: Login
   },
   {
    path:'/game',
    name:'game',
    component: Game
}
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router