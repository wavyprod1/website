<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import portfolioData from '@/data/portfolioData.json'

const publicPath = import.meta.env.BASE_URL
const route = useRoute()

const openModals = ref({})
const artists = ref(portfolioData.artists || [])
const soundtracks = ref(portfolioData.soundtracks || [])

const iframeRefs = ref({})

const setIframeRef = (el, projectId) => {
  if (el) {
    iframeRefs.value[projectId] = el
  }
}

const beforeIframeUnmount = (projectId) => {
  delete iframeRefs.value[projectId];
}

const openModal = (projectId) => {
  const item = allPortfolioItems.value.find(i => i.id === projectId);
  if (item) {
    openModals.value[projectId] = true
    document.body.style.overflow = 'hidden'

    if (item.youtubeLink) {
      nextTick(() => {
        const iframe = iframeRefs.value[projectId];
        if (iframe && iframe.dataset.originalSrc && iframe.src !== iframe.dataset.originalSrc) {
          iframe.src = iframe.dataset.originalSrc;
        } else if (iframe && !iframe.dataset.originalSrc) {
           iframe.dataset.originalSrc = iframe.src;
        }
      });
    }
  } else {
    console.warn(`Tentativo di aprire un modale per un ID non esistente: ${projectId}`)
  }
}

const closeModal = (projectId) => {
  const item = allPortfolioItems.value.find(i => i.id === projectId);

  if (item && item.youtubeLink) {
    const iframe = iframeRefs.value[projectId];
    if (iframe) {
      if (!iframe.dataset.originalSrc) {
        iframe.dataset.originalSrc = iframe.src;
      }
      iframe.src = ''; 
    }
  }

  openModals.value[projectId] = false
  const anyModalOpen = Object.values(openModals.value).some((status) => status === true)
  if (!anyModalOpen) {
    document.body.style.overflow = 'auto'
  }
}

const handleClickOutside = (event) => {
  Object.keys(openModals.value).forEach((modalId) => {
    if (openModals.value[modalId]) {
      const modalElement = document.getElementById(modalId + 'Modal')
      if (modalElement && event.target === modalElement) {
        closeModal(modalId)
      }
    }
  })
}

onMounted(() => {
  window.addEventListener('click', handleClickOutside)
  const modalToOpen = route.query.openModalId
  if (modalToOpen) {
    setTimeout(() => {
      openModal(modalToOpen)
    }, 100)
  }
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutside)
  if (Object.values(openModals.value).some((status) => status === true)) {
    document.body.style.overflow = 'auto'
  }
})

const allPortfolioItems = computed(() => {
  return [...artists.value, ...soundtracks.value]
})
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <!-- Applica la classe globale .section-gradient-overlay per lo sfondo sfumato -->
    <section class="page-hero section-gradient-overlay">
      <!-- Il contenuto di .page-hero deve avere z-index > 1 per stare sopra l'overlay -->
      <div class="container page-hero-content">
        <!-- h1 e p erediteranno colore bianco e text-shadow dal CSS globale -->
        <h1 class = "space-up-down hero-main-title">PORTFOLIO</h1>
        <p class="space-up-down hero-main-description">Alcuni progetti a cui ho avuto il piacere di contribuire.</p>
      </div>
    </section>

    <!-- Artists Portfolio Section -->
    <section class="portfolio-section">
      <div class="container">
        <!-- .service-detail-title sarà scuro su sfondo chiaro -->
        <h2 class="section-title service-detail-title">Artisti</h2>
        <div class="portfolio-grid">
          <div
            v-for="artist in artists"
            :key="artist.id"
            class="portfolio-item"
            @click="openModal(artist.id)"
          >
            <div class="portfolio-item-image">
              <img
                :src="`${publicPath}${artist.thumbnailImage}`"
                :alt="artist.name"
                v-if="artist.thumbnailImage"
              />
              <div
                v-else
                class="portfolio-item-placeholder"
              >
                <i class="fas fa-user" style="font-size: 3rem"></i>
              </div>
              <div class="portfolio-item-overlay">
                <!-- .portfolio-item-title è già bianco con ombra -->
                <h3 class="portfolio-item-title">{{ artist.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Soundtracks Portfolio Section -->
    <section class="portfolio-section soundtrack-section">
      <div class="container">
        <h2 class="section-title service-detail-title">Spettacoli / Soundtrack</h2>
        <div class="portfolio-grid">
          <div
            v-for="soundtrack in soundtracks"
            :key="soundtrack.id"
            class="portfolio-item"
            @click="openModal(soundtrack.id)"
          >
            <div class="portfolio-item-image">
              <img
                :src="`${publicPath}${soundtrack.thumbnailImage}`"
                :alt="soundtrack.name"
                v-if="soundtrack.thumbnailImage"
              />
              <div
                v-else
                class="portfolio-item-placeholder"
              >
                <i class="fas fa-film" style="font-size: 3rem"></i>
              </div>
              <div class="portfolio-item-overlay">
                <h3 class="portfolio-item-title">{{ soundtrack.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Portfolio Modals Renderizzati Dinamicamente -->
    <div v-for="itemData in allPortfolioItems" :key="itemData.id + 'ModalContainer'">
      <div :id="itemData.id + 'Modal'" class="portfolio-modal" v-show="openModals[itemData.id]">
        <div class="portfolio-modal-content">
          <button class="portfolio-modal-close" @click="closeModal(itemData.id)">
            <i class="fas fa-times"></i>
          </button>

          <div class="portfolio-modal-media">
            <div v-if="itemData.youtubeLink" class="youtube-embed-container">
              <iframe
                :ref="el => setIframeRef(el, itemData.id)"
                @vue:before-unmount="beforeIframeUnmount(itemData.id)"
                width="100%"
                height="100%"
                :src="itemData.youtubeLink"
                :title="itemData.name + ' - YouTube video player'"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div v-else-if="itemData.modalImage" class="portfolio-modal-image">
              <img :src="`${publicPath}${itemData.modalImage}`" :alt="itemData.name" />
            </div>
            <div v-else class="portfolio-modal-image">
              <div class="portfolio-modal-placeholder">
                <i
                  :class="itemData.id.startsWith('artist') ? 'fas fa-user' : 'fas fa-film'"
                  style="font-size: 5rem"
                ></i>
              </div>
            </div>
          </div>

          <div class="portfolio-modal-details">
            <!-- .portfolio-modal-title è già scuro -->
            <h2 class="portfolio-modal-title">{{ itemData.name }}</h2>
            <p
              class="portfolio-modal-description"
              v-html="itemData.story.replace(/\n/g, '<br>')"
            ></p>

            <div v-if="itemData.roles && itemData.roles.length" class="portfolio-modal-services">
              <span v-for="role in itemData.roles" :key="role" class="portfolio-modal-service">
                {{ role }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* Stile per il contenuto della page-hero per assicurare che sia sopra l'overlay */


/* Stile generale per i titoli h2 delle sezioni portfolio e servizi */
.section-title {
  /* text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); Ereditato dal globale se non sovrascritto */
  /* font-size, margin-bottom, text-transform ereditati dal globale per h2 */
}

.service-detail-title { /* Usato per "Artisti" e "Spettacoli / Soundtrack" */
  color: var(--color-dark-gray); /* Testo scuro su sfondi chiari (.portfolio-section) */
  text-shadow: none; /* Rimuove l'ombra del testo globale su sfondo chiaro */
  text-align: center;
  margin-bottom: 3rem; /* Come da stile globale per .benefits-title o .service-detail-title */
}

/* Stile per i titoli h2 nelle CTA (già gestito dal globale con .cta-primary .section-title) */
.cta-primary .section-title {
  color: var(--color-white);
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* Ombra standard */
  /* text-align e margin-bottom sono già nel CSS globale per .cta-primary .cta-title */
}


.portfolio-section {
  /* padding: 5rem 0; Ereditato da 'section' nel CSS globale */
}
.portfolio-section:nth-child(odd) { /* Questo odd/even si basa sulla posizione in <main> */
  background-color: var(--color-light-gray);
}
.portfolio-section:nth-child(even) {
  /* La page-hero è la prima, quindi Artists sarà even (bianco), Soundtracks sarà odd (grigio chiaro) */
  /* Se page-hero non contasse come :nth-child, Artists sarebbe odd. Controlla l'effetto. */
  background-color: var(--color-white);
}
/* Per evitare confusione con nth-child e la hero section che ora ha gradiente,
   potresti voler essere più esplicito con classi per gli sfondi:
.portfolio-section.bg-light { background-color: var(--color-light-gray); }
.portfolio-section.bg-white { background-color: var(--color-white); }
<section class="portfolio-section bg-white">...</section>
<section class="portfolio-section bg-light soundtrack-section">...</section>
*/


.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Force 3 columns */
  gap: 2rem;
  margin-top: 3rem; /* Spazio dal titolo della sezione */
}
.portfolio-item {
  background-color: var(--color-white); /* Sfondo della card */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  position: relative;
}
.portfolio-item:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}
.portfolio-item-image {
  height: 250px;
  background-color: var(--color-dark-gray); /* Fallback se l'immagine non carica */
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.portfolio-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.portfolio-item-placeholder,
.portfolio-modal-placeholder { /* Stile unificato per i placeholder */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-dark-gray);
  color: var(--color-white);
}
.portfolio-item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: flex-end; /* Titolo in basso */
  padding: 1.5rem;
  box-sizing: border-box;
}
.portfolio-item-title { /* Titolo dentro la card portfolio */
  color: var(--color-white);
  margin: 0;
  font-size: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5); /* Ombra per leggibilità su immagini varie */
  /* text-transform: uppercase; Ereditato da h3 globale */
}

/* Stili per i Modali */
.portfolio-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9); /* Sfondo scuro trasparente */
  z-index: 2000;
  overflow-y: auto;
  padding: 2rem 0; /* Spazio per scrollare e non toccare i bordi */
  display: flex; /* Per centrare il contenuto se meno alto dello schermo */
  align-items: center;
  justify-content: center;
}
.portfolio-modal-content {
  background-color: var(--color-white);
  width: 90%;
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column; /* Always stack vertically */
}

.portfolio-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--color-red);
  color: var(--color-white);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem; /* Leggermente ridotto */
  line-height: 1;
  cursor: pointer;
  z-index: 10; /* Sopra il contenuto del modale */
  border: none;
  transition: background-color 0.3s ease;
}
.portfolio-modal-close:hover {
    background-color: #cc0000; /* Rosso più scuro */
}

.portfolio-modal-media {
  width: 100%;
  background-color: var(--color-black);
  position: relative;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  max-height: 600px; /* Optional: limit maximum height */
}
.portfolio-modal-media iframe,
.portfolio-modal-media .portfolio-modal-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
.portfolio-modal-media .portfolio-modal-image img {
  width: 100%;
  height: 100%;
  object-fit: contain; /* 'contain' per vedere tutta l'immagine, 'cover' per riempire */
}

.portfolio-modal-title {
  color: var(--color-dark-gray);
  margin-bottom: 1.5rem;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bold;
  /* Removing text-align: center to keep original left alignment */
}

.portfolio-modal-details {
  padding: 2rem;
  color: var(--color-dark-gray);
  width: 100%;
  /* Removing max-width and margin auto to keep original full-width layout */
}

/* Update the .portfolio-grid styles */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Force 3 columns */
  gap: 2rem;
  margin-top: 3rem; /* Spazio dal titolo della sezione */
}

/* Add styles for empty grid spaces */
.portfolio-grid::after {
  content: '';
  grid-column: auto / span 1;
}

@media (max-width: 992px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on tablet */
  }
}

@media (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr; /* Single column on mobile */
  }
}

/* Remove or update the desktop media query */
@media (min-width: 769px) {
  .portfolio-modal-content {
    max-height: none; /* Remove max-height constraint */
  }
  
  .portfolio-modal-media {
    flex: none; /* Remove flex sizing */
    height: auto;
  }
  
  .portfolio-modal-details {
    flex: none; /* Remove flex sizing */
  }
}

@media (max-width: 768px) {
  .portfolio-modal {
    padding: 1rem 0; /* Riduci padding del backdrop modale */
  }
  .portfolio-modal-content {
    margin: 1rem; /* Margine dal bordo schermo */
    width: calc(100% - 2rem); /* Occupa quasi tutto lo schermo */
    max-width: calc(100% - 2rem);
  }
  .portfolio-modal-title {
    font-size: 1.8rem; /* Slightly smaller on mobile but keeping proportions */
  }
  
  .portfolio-modal-details {
    padding: 1.5rem;
  }

  .portfolio-grid {
    grid-template-columns: repeat(auto-fit, minmax(272px, 1fr));
  }
}
</style>