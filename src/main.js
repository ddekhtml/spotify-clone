import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
import Home from './components/Home.vue'

const pinia = createPinia();
const router = createRouter({routes: [
    {
        'path': "/", 
        'component' : Home
    }
], 
history: createWebHistory()});
// createApp(App).use(pinia).use(router).component("v-icon", OhVueIcon).mount('#app')
createApp(App).use(pinia).use(router).mount('#app')

