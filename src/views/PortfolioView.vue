<script setup>
import { ref, onMounted, onUnmounted, computed, nextTick } from 'vue' // Aggiungi nextTick
import { useRoute } from 'vue-router'
import portfolioData from '@/data/portfolioData.json'

const publicPath = import.meta.env.BASE_URL
const route = useRoute()

const openModals = ref({})
const artists = ref(portfolioData.artists || [])
const soundtracks = ref(portfolioData.soundtracks || [])

// Ref per gli elementi iframe
// Creeremo un oggetto per mappare gli ID dei progetti ai loro iframe
const iframeRefs = ref({})

// Funzione per impostare i ref dinamicamente
// La useremo nel template con :ref="..."
const setIframeRef = (el, projectId) => {
  if (el) {
    iframeRefs.value[projectId] = el
  }
}

// Funzione per pulire i ref quando un elemento viene smontato (opzionale ma buona pratica)
const beforeIframeUnmount = (projectId) => {
  delete iframeRefs.value[projectId];
}


const openModal = (projectId) => {
  const item = allPortfolioItems.value.find(i => i.id === projectId);
  if (item) {
    openModals.value[projectId] = true
    document.body.style.overflow = 'hidden'

    // Se il modale appena aperto ha un video, e c'era un src precedentemente "pausato",
    // lo ripristiniamo. Questo aiuta se l'utente riapre lo stesso modale.
    if (item.youtubeLink) {
      nextTick(() => { // Assicura che l'iframe sia nel DOM
        const iframe = iframeRefs.value[projectId];
        if (iframe && iframe.dataset.originalSrc && iframe.src !== iframe.dataset.originalSrc) {
          iframe.src = iframe.dataset.originalSrc;
        } else if (iframe && !iframe.dataset.originalSrc) {
          // Salva l'originale la prima volta, se non è già stato salvato
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
      // Salva l'URL originale se non l'abbiamo già fatto
      if (!iframe.dataset.originalSrc) {
        iframe.dataset.originalSrc = iframe.src;
      }
      // "Interrompi" il video ricaricando l'iframe con un src vuoto o ricaricandolo
      // Un modo semplice per interrompere è cambiare temporaneamente l'src
      iframe.src = ''; // Questo dovrebbe interrompere la riproduzione
      // Potresti volerlo reimpostare all'originale subito se vuoi che il video sia pronto per il play la prossima volta
      // ma per "interrompere e basta", src='' è sufficiente finché non viene riaperto e gestito da openModal.
      // Se si vuole che il video riparta da dove era stato interrotto, è necessaria l'API di YouTube.
      // Per la semplicità richiesta, ricaricare l'iframe è il metodo più diretto.
      // Per far sì che l'immagine di anteprima torni visibile e il video possa essere riavviato al prossimo open:
      // if (originalSrc) iframe.src = originalSrc; // Questo ricaricherebbe il video, ma non lo farebbe ripartire
      // Lasciarlo vuoto finché non viene riaperto va bene per "interrompere".
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
        closeModal(modalId) // closeModal ora gestirà l'interruzione del video
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
    <section class="page-hero">
      <div class="container">
        <h1>PORTFOLIO</h1>
        <p class="page-intro">Alcuni progetti a cui ho avuto il piacere di contribuire.</p>
      </div>
    </section>

    <!-- Artists Portfolio Section -->
    <section class="portfolio-section">
      <div class="container">
        <h2 class="service-detail-title">Artisti</h2>
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
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: var(--color-dark-gray);
                  color: var(--color-white);
                "
              >
                <i class="fas fa-user" style="font-size: 3rem"></i>
              </div>
              <div class="portfolio-item-overlay">
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
        <h2 class="service-detail-title">Spettacoli / Soundtrack</h2>
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
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: var(--color-dark-gray);
                  color: var(--color-white);
                "
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

    <!-- CTA Section -->
    <section class="cta cta-primary">
      <div class="container">
        <h2 class="cta-title">VUOI AFFIDARMI IL TUO PROSSIMO BRANO?</h2>
        <a
          href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
          class="btn btn-primary"
          target="_blank"
          >RACCONTAMI DEL TUO PROGETTO</a
        >
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
              <div
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: var(--color-dark-gray);
                  color: var(--color-white);
                "
              >
                <i
                  :class="itemData.id.startsWith('artist') ? 'fas fa-user' : 'fas fa-film'"
                  style="font-size: 5rem"
                ></i>
              </div>
            </div>
          </div>

          <div class="portfolio-modal-details">
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
/* Gli stili rimangono invariati */
.portfolio-section:nth-child(odd) {
  background-color: var(--color-light-gray);
}
.portfolio-section:nth-child(even) {
  background-color: var(--color-white);
}
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
.portfolio-item {
  background-color: var(--color-white);
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
  display: flex; /* Per centrare l'icona di fallback */
  align-items: center;
  justify-content: center;
}
.portfolio-item-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.portfolio-item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
}
.portfolio-item-title {
  color: var(--color-white);
  margin: 0;
  font-size: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* Stili per i Modali */
.portfolio-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  overflow-y: auto;
  padding: 2rem 0;
}
.portfolio-modal-content {
  background-color: var(--color-white);
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
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
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  border: none;
}

.portfolio-modal-media {
  width: 100%;
  background-color: var(--color-black);
  position: relative;
  padding-top: 56.25%;
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
  object-fit: contain;
}
.portfolio-modal-media .portfolio-modal-image > div {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.portfolio-modal-details {
  padding: 2rem;
}
.portfolio-modal-title {
  color: var(--color-dark-gray);
  margin-bottom: 1rem;
}
.portfolio-modal-description {
  margin-bottom: 2rem;
  white-space: pre-line;
}
.portfolio-modal-services {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.portfolio-modal-service {
  background-color: var(--color-light-gray);
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: bold;
  color: var(--color-dark-gray);
}
.portfolio-modal-player {
  margin-top: 2rem;
  background-color: var(--color-light-gray);
  padding: 1.5rem;
  border-radius: 10px;
  text-align: center;
}
.soundtrack-section {
  margin-top: 5rem;
}

@media (max-width: 768px) {
  .portfolio-modal-content {
    margin: 1rem;
    max-width: calc(100% - 2rem);
  }
}
</style>