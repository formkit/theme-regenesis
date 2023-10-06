import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App)
app.use(plugin, defaultConfig)
app.mount('#app')
