import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'

import Home from './pages/Home.vue'
import Favourites from './pages/Favourites.vue'

const app = createApp(App)

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/favourites', name: 'Favourites', component: Favourites },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export const getUrl = (name) => {
    return new URL(`${import.meta.env.BASE_URL}${name}`, import.meta.url)
}

app.use(autoAnimatePlugin)
app.use(router)

app.mount('#app')
