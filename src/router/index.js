import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/views/LoginPage'
import NotificationPage from '@/views/NotificationPage'
import reportsPage from '@/views/reportsPage'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/Login',
            component: LoginPage
        },
        {
            path: '/Notification',
            component: NotificationPage
        },
        {
            path: '/reports',
            component: reportsPage
        }
    ]
})



export default router