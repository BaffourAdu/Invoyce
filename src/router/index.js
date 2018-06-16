import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import Dashboard from '@/components/Dashboard'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Header
        },
        {
            path: '/login',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/register',
            name: 'SignUp',
            component: SignUp
        },

        {
            path: '/dashboard',
            name: 'Dashboard',
            component: Dashboard
        }

    ]
})