
import Tres from '@tresjs/core'
import { createApp } from 'vue'
import App from './App.vue'
// main.ts
import 'virtual:uno.css'

export const app = createApp(App)

app.use(Tres)
app.mount('#app')
