import { createCEApp } from 'vue-tea'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createCEApp(App)

app.use(createPinia())
app.use(router)

app.mount('ce-app')
