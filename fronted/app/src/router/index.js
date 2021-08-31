import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import manage from '../views/manage.vue'
const BackedpageA = () => import('../components/BackedpageA')
const BackedpageB = () => import('../components/BackedpageB')






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
        component: manage,
        children:[ {
            path: 'BackedpageA',
            name: 'BackedpageA',
            component: BackedpageA
        },
        {
            path: 'BackedpageB',
            name: 'BackedpageB',
            component: BackedpageB
        }]
    },
   
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
