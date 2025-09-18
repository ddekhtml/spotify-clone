import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from 'vue-router'
import { createPinia } from 'pinia'

const pinia = createPinia();
const router = createRouter({routers: [

]});
createApp(App).use(pinia).use(router).mount('#app')
