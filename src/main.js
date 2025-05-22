import './assets/style.css' // LA NUOVA RIGA DA AGGIUNGERE

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Assumendo che tu abbia scelto Vue Router

const app = createApp(App)

if (sessionStorage.redirect) {
  const redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  // Se il redirect non è semplicemente la root (es. "/"), allora naviga
  if (redirect && redirect !== '/') {
    router.replace(redirect).catch(err => {
      // Gestisci eventuali errori di navigazione, opzionale
      console.warn('Errore durante il reindirizzamento iniziale:', err);
      // Potrebbe essere utile reindirizzare alla home se il path non è valido
      // router.replace('/'); 
    });
  }
}



app.use(router) // Assumendo che tu abbia scelto Vue Router

app.mount('#app')


