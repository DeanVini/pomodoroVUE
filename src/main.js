import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './App.vue'
import router from './router'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

library.add(faUserSecret, faCircleUser)


const pinia = createPinia()


createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(pinia).use(VueSweetalert2).mount('#app')

