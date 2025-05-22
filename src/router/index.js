import { createRouter, createWebHistory } from 'vue-router'
// Importiamo il componente HomeView (lo creeremo nel prossimo passo)
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Placeholder per le altre pagine - creeremo i componenti e le routes complete dopo
    {
      path: '/portfolio',
      name: 'portfolio',
      component: () => import('../views/PortfolioView.vue'), // Creeremo PortfolioView.vue
    },
    {
      path: '/contenuti',
      name: 'contenuti',
      component: () => import('../views/ContenutiView.vue'), // Creeremo ContenutiView.vue
    },
    {
      path: '/contatti',
      name: 'contatti',
      component: () => import('../views/ContattiView.vue'), // Creeremo ContattiView.vue
    },
    // Routes per le pagine specifiche dei servizi
    {
      path: '/produzione',
      name: 'produzione',
      component: () => import('../views/ProduzioneView.vue'), // Creeremo ProduzioneView.vue
    },
    {
      path: '/recording-mix-master',
      name: 'recording-mix-master',
      component: () => import('../views/RecordingMixMasterView.vue'), // Creeremo RecordingMixMasterView.vue
    },
  ],
  // Aggiungi questo per far scrollare la pagina in alto quando si naviga
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})

export default router
