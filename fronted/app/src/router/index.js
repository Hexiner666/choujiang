import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import manage from '../views/manage.vue'





Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/manage',
        name: 'manage',
        component: manage
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
