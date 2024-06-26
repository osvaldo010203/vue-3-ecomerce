import { createApp } from 'vue'
import App from './App.vue'

// Vuetify
//import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
  //Pinia
import { createPinia } from 'pinia'
// Vue Router
//import ProductList from './components/ProductList.vue' 
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  theme:{
    defaultTheme:'dark'
  }
});

const app = createApp(App)

app.use(vuetify)
app.use(router)
app.use(createPinia())

app.mount('#app')
