import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import { BiSpotify, BiThreeDots, FaChevronLeft, FaChevronRight, IoAdd, IoAddOutline, IoAddSharp, IoHome, IoLibrarySharp, IoSearchOutline, IoSearchSharp, LaAngleLeftSolid, LaAngleRightSolid, PrSearch, RiHome4Fill } from 'oh-vue-icons/icons' //  jangan lupa import 

import Home from './components/Home.vue'
import Library from './components/Library.vue'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import Premium from './components/Premium.vue'
import Create from './components/Create.vue'

addIcons(BiSpotify, IoHome,PrSearch, IoSearchOutline, IoSearchSharp, IoLibrarySharp, IoAddOutline, BiThreeDots, LaAngleLeftSolid, LaAngleRightSolid, RiHome4Fill) //kalau mau nambah lebih banyak icon taruh disini 

const pinia = createPinia();
const router = createRouter({routes: [
    {
        'path': "/", 
        'component' : Home,
        'name' : 'spotify'
    }

], 
history: createWebHistory()});
createApp(App).use(pinia).use(router).component("v-icon", OhVueIcon).mount('#app')
