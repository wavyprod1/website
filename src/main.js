import './assets/style.css' // LA NUOVA RIGA DA AGGIUNGERE

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Assumendo che tu abbia scelto Vue Router

const app = createApp(App)

app.use(router) // Assumendo che tu abbia scelto Vue Router

app.mount('#app')
