import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import store from './store'
import mitt from "mitt";


const emitter = mitt()
export default emitter


createApp(App).use(store).use(router).mount('#app')
