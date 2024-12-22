import { createApp, provide, h } from 'vue'
import { createPinia } from 'pinia'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './graphql/client'
import router from './router'
import App from './App.vue'
import './style.css'

const app = createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient)
    return () => h(App)
  },
})

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.mount('#app')