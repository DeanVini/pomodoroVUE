import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Pomodoro from '../views/Pomodoro.vue'
import Sobre from '../views/Sobre.vue'

const routes = [
    {path: '/',
     name: 'Home',
     component: Home
    },

    {path: '/perfil',
     name: 'Perfil',
     component: Perfil
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
        path: '/pomodoro',
        name: 'Pomodoro',
        component: Pomodoro
    },
    {
        path: '/sobre',
        name: 'Sobre',
        component: Sobre
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router