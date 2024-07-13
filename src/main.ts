import './assets/main.css'

import { createCEApp, resolveVueTeaProps, VueTeaProvider } from 'vue-tea'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { defineComponent, h } from 'vue'


const rootApp = defineComponent({
  setup(){
    return () => {
      return h(
        VueTeaProvider,
        resolveVueTeaProps({
          name: 'root-app',
          component: App,
        }) as any
      )
    }
  }
})

const app = createCEApp(rootApp)

app.use(createPinia())
app.use(router)

app.mount('ce-app')
