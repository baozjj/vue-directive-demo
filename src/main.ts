import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'

import directives from './directives/index'
import './directives/style.css'

const app = createApp(App)
app.use(directives)
app.mount('#app')
