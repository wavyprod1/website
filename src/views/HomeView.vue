<script setup>
import { ref } from 'vue'
// Importa Swiper Vue components e stili
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Importa i moduli Swiper
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

// --- Import data from JSON files ---
import artworksFromFile from '@/data/artworks.json'
import reviewsFromFile from '@/data/reviews.json' // NEW: Import reviews

// --- NEW: Get publicPath for images in public folder ---
const publicPath = import.meta.env.BASE_URL

const swiperModules = [Pagination, Navigation, Autoplay]

// --- MODIFIED: Initialize reviewsData from JSON ---
const reviewsData = ref(reviewsFromFile)

const starEmoji = '⭐'

const myWorksData = ref(artworksFromFile)

const bookingForm = ref({
  name: '',
  email: '',
  service: '',
  deadline: null,
  demoLink: '',
  message: '',
})

const bookingFormSuccessMessage = ref('')
const bookingFormErrorMessage = ref('')

const serviceOptions = [
  { value: 'prima-consulenza', text: 'Prima Consulenza GRATUITA' },
  { value: '', text: 'Seleziona un servizio...' },
  { value: 'produzione-completa', text: 'Produzione Musicale Completa' },
  { value: 'registrazione', text: 'Registrazione Vocale' },
  { value: 'mix-master', text: 'Mix & Master' },
  { value: 'consulenza', text: 'Consulenza Artistica/Tecnica' },
  { value: 'altro', text: 'Altro (specifica nel messaggio)' },
]

const formatDateForMail = (date) => {
  if (!date) return ''
  const d = new Date(date)
  const year = d.getFullYear()
  const month = (`0${d.getMonth() + 1}`).slice(-2)
  const day = (`0${d.getDate()}`).slice(-2)
  return `${year}-${month}-${day}`
}


const handleSubmitBooking = (event) => {
  event.preventDefault()
  bookingFormSuccessMessage.value = ''
  bookingFormErrorMessage.value = ''

  if (!bookingForm.value.name || !bookingForm.value.email || !bookingForm.value.service || !bookingForm.value.message) {
    bookingFormErrorMessage.value = 'Per favore, compila tutti i campi obbligatori (*).'
    return
  }

  const subject = `Richiesta di collaborazione: ${bookingForm.value.service} - ${bookingForm.value.name}`
  let body = `Ciao Elia,\n\nHo una richiesta di collaborazione:\n`
  body += `\nNome: ${bookingForm.value.name}`
  body += `\nEmail: ${bookingForm.value.email}`
  body += `\nServizio Richiesto: ${serviceOptions.find(opt => opt.value === bookingForm.value.service)?.text || bookingForm.value.service}`

  const formattedDeadline = bookingForm.value.deadline ? formatDateForMail(bookingForm.value.deadline) : ''
  if (formattedDeadline) {
    body += `\nScadenza Preferita: ${formattedDeadline}`
  }

  if (bookingForm.value.demoLink) {
    body += `\nLink Demo: ${bookingForm.value.demoLink}`
  }
  body += `\n\nMessaggio:\n${bookingForm.value.message}\n\n`
  body += `Grazie,\n${bookingForm.value.name}`

  const mailtoLink = `mailto:wavywork1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  const hiddenLink = document.createElement('a')
  hiddenLink.href = mailtoLink
  hiddenLink.style.display = 'none'
  document.body.appendChild(hiddenLink)
  hiddenLink.click()
  document.body.removeChild(hiddenLink)

  bookingFormSuccessMessage.value = 'Grazie per la tua richiesta! Se il tuo client di posta non si è aperto, copia e invia manualmente i dettagli a wavywork1@gmail.com.'
}

const scrollDown = () => {
  const heroHeight = window.innerHeight - 64
  window.scrollTo({
    top: heroHeight,
    behavior: 'smooth',
  })
}
</script>

<template>
  <main>
    <!-- HERO SECTION -->
    <section class="hero section-gradient-overlay">
      <div class="main-hero-wrapper container">
        <div class="hero-content-wrapper">
          <div class="hero-text-column">
            <h1 class="space-up-down section-title hero-main-title">ELIA PIRRELLO</h1>
            <h4>Produttore Musicale e Sound Engineer</h4>
            <div class="space-up-down hero-main-description">
              Se il tuo obbiettivo non è quello di "acquistare un servizio", ma di sviluppare il tuo
              progetto musicale, sono la persona giusta per te.
              <br /><br />
              <i>Quella a cui avrei affidato la mia arte ad occhi chiusi.</i>
            </div>
          </div>
          <div class="space-up-down hero-image-column">
            <!-- MODIFIED: Added publicPath to hero image src -->
            <img
              :src="`${publicPath}images/hero-profile-square.jpg`"
              alt="Elia Pirrello - Produttore Musicale"
              class="hero-main-image"
            />
          </div>
        </div>
        <div class="fas fa-chevron-down my-arrow" @click="scrollDown"></div>
      </div>
    </section>

    <!-- MY WORKS SECTION -->
    <section class="my-works-section section-bg-dark">
      <div class="container">
        <div class="works-grid">
          <div
            v-for="work in myWorksData"
            :key="work.id"
            class="work-item"
            :style="{ backgroundImage: `url(${publicPath}${work.coverUrl})` }"
            tabindex="0"
            role="button"
            :aria-label="`Dettagli per ${work.title} di ${work.artist}`"
          >
            <div class="work-item-overlay">
              <h3 class="work-title">{{ work.title }}</h3>
              <p class="work-artist">{{ work.artist }}</p>
            </div>
          </div>
        </div>
        <div class="spotify-embed-container">
          <h3 class="section-subtitle">ASCOLTA SU SPOTIFY</h3>
          <iframe
            style="border-radius: 12px"
            src="https://open.spotify.com/embed/playlist/0PRRxFSey0npw3xnS0oOgS?si=HqpbgivlQ72kjRuXEjxvJA&pi=gVdzUynsRWC6V"
            width="100%"
            height="352"
            frameBorder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>

    <!-- REVIEWS SECTION -->
    <section class="reviews section-bg-light">
      <div class="container">
        <h2 class="section-title">COSA DICONO GLI ARTISTI DI ME</h2>
        <div class="google-link-container">
          <a href="https://g.co/kgs/yNMLUtt" target="_blank" class="google-reviews-link">
            Visualizza tutte le recensioni su Google
          </a>
        </div>
        <swiper
          :modules="swiperModules"
          :slides-per-view="1"
          :space-between="30"
          :centered-slides="true"
          :loop="reviewsData.length > 1"
          :pagination="{ clickable: true }"
          :navigation="true"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :breakpoints="{
            768: { slidesPerView: 2, spaceBetween: 30, centeredSlides: reviewsData.length > 2, },
            1024: { slidesPerView: 3, spaceBetween: 30, centeredSlides: reviewsData.length > 3, },
          }"
          class="reviews-swiper"
        >
          <swiper-slide v-for="review in reviewsData" :key="review.id" class="review-slide">
            <div class="review-card">
              <div class="review-card-header">
                <div class="review-author-avatar">{{ review.author_name.charAt(0) }}</div>
                <div class="review-author-info">
                  <span class="review-author-name">{{ review.author_name }}</span>
                  <span class="review-rating">{{ review.rating }} {{ starEmoji }}</span>
                </div>
              </div>
              <p class="review-text">{{ review.text }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- BOOKING FORM SECTION -->
    <section class="booking-form-section section-bg-white">
      <div class="container">
        <div class="booking-title-container">
          <h2 class="section-title">LAVORIAMO INSIEME</h2>
          <div class="free-consultation-badge">
            <i class="fas fa-star badge-icon"></i> La Prima Consulenza è Gratuita!
          </div>
        </div>
        <p class="booking-form-intro">
          Hai un progetto in mente o vuoi discutere di una collaborazione? <br>Compila il form qui sotto.
        </p>
        <form @submit="handleSubmitBooking" class="booking-form">
          <div class="form-grid">
            <div class="form-group">
              <label for="booking-name">Nome*</label>
              <input type="text" id="booking-name" v-model="bookingForm.name" required />
            </div>
            <div class="form-group">
              <label for="booking-email">Email*</label>
              <input type="email" id="booking-email" v-model="bookingForm.email" required />
            </div>
            <div class="form-group full-width">
              <label for="booking-service">Per cosa mi contatti?*</label>
              <select id="booking-service" v-model="bookingForm.service" required>
                <option
                  v-for="option in serviceOptions"
                  :key="option.value"
                  :value="option.value"
                  :disabled="option.value === ''"
                >
                  {{ option.text }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="booking-deadline">Scadenza (Opzionale)</label>
              <Datepicker
                id="booking-deadline"
                v-model="bookingForm.deadline"
                :enable-time-picker="false"
                auto-apply
                placeholder="Seleziona una data"
                month-name-format="long"
                :clearable="true"
                :hide-input-icon="true"
              />
            </div>
            <div class="form-group">
              <label for="booking-demo">Link Demo (SoundCloud, Drive, etc.)</label>
              <input
                type="url"
                id="booking-demo"
                v-model="bookingForm.demoLink"
                placeholder="https://"
              />
            </div>
            <div class="form-group full-width">
              <label for="booking-message">Messaggio*</label>
              <textarea id="booking-message" v-model="bookingForm.message" rows="6" required></textarea>
            </div>
          </div>
          <div class="form-actions">
            <button type="submit" class="btn btn-primary">INVIA RICHIESTA</button>
          </div>
          <p v-if="bookingFormSuccessMessage" class="form-message success">{{ bookingFormSuccessMessage }}</p>
          <p v-if="bookingFormErrorMessage" class="form-message error">{{ bookingFormErrorMessage }}</p>
        </form>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Stili non modificati */
.main-hero-wrapper {
  width: 100%;
  height: 100%;
  display: grid;
}

.hero .section-title {
  text-align: left;
}

.reviews .section-title,
.booking-form-section .section-title
 {
  text-align: center;
  color: var(--color-dark-gray);
  text-shadow: none;
  margin-bottom: 0.5rem;
}

.hero-text-column {
  flex: 1 1 55%;
  max-width: 650px;
  padding: 0.5rem;
}

.hero-image-column {
  flex: 1 1 40%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
}
.hero-main-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
}

.my-works-section {
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  padding: 3rem 0;
}

.works-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.work-item {
  aspect-ratio: 1 / 1;
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.work-item:hover,
.work-item:focus {
  transform: scale(1.05);
  outline: 2px solid var(--color-red);
  outline-offset: 2px;
}

.work-item-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.work-item:hover .work-item-overlay,
.work-item:focus .work-item-overlay {
  opacity: 1;
}

.work-title {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 0 0 0.25rem 0;
  color: var(--color-white);
  text-shadow: 1px 1px 1px rgba(0,0,0,0.7);
}

.work-artist {
  font-size: 0.9rem;
  margin: 0;
  color: var(--color-light-gray);
}

.spotify-embed-container {
  margin-top: 2rem;
  text-align: center;
}

.spotify-embed-container .section-subtitle {
  color: var(--color-white);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.reviews.section-bg-light {
  background-color: var(--color-light-gray);
}
.reviews.section-bg-light .google-link-container {
  text-align: center;
  margin-bottom: 2.5rem;
}
.reviews.section-bg-light .google-reviews-link {
  color: var(--color-blue);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}
.reviews.section-bg-light .google-reviews-link:hover {
  color: var(--color-dark-gray);
}

.reviews-swiper {
  padding-bottom: 3.5rem;
}
.review-slide {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: auto;
  box-sizing: border-box;
}
.review-card {
  background-color: var(--color-white);
  color: var(--color-dark-gray);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 380px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.review-card-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.review-author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--color-blue);
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 12px;
  flex-shrink: 0;
}
.review-author-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
}
.review-author-name {
  font-weight: bold;
  font-size: 1rem;
  color: var(--color-dark-gray);
}
.review-rating {
  font-size: 0.9rem;
  color: var(--color-dark-gray);
}
.review-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333;
  flex-grow: 1;
}

:deep(.reviews.section-bg-light .reviews-swiper .swiper-button-next),
:deep(.reviews.section-bg-light .reviews-swiper .swiper-button-prev) {
  color: var(--color-red);
}
:deep(.reviews.section-bg-light .reviews-swiper .swiper-button-next)::after,
:deep(.reviews.section-bg-light .reviews-swiper .swiper-button-prev)::after {
  font-size: 16px;
}
:deep(.reviews.section-bg-light .reviews-swiper .swiper-pagination-bullet) {
  background-color: rgba(0, 0, 0, 0.4);
}
:deep(.reviews.section-bg-light .reviews-swiper .swiper-pagination-bullet-active) {
  background-color: var(--color-red);
}

.my-arrow {
  margin: 0 auto 0;
  font-size: 1.5rem;
  color: white;
  z-index: 2;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  padding-top: 1rem;
}

.my-arrow:hover {
  transform: translateY(5px);
}

.booking-form-section.section-bg-white {
  background-color: var(--color-white);
  padding: 3rem 0;
}

.booking-title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.free-consultation-badge {
  display: inline-block;
  background-color: var(--color-green);
  color: var(--color-white);
  padding: 0.5em 1em;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 0.5rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  transition: transform 0.2s ease-out;
}

.free-consultation-badge:hover {
  transform: translateY(-2px);
}

.free-consultation-badge .badge-icon {
  margin-right: 0.5em;
  animation: pulse-star 2s infinite;
}

@keyframes pulse-star {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}


.booking-form-intro {
  text-align: center;
  color: var(--color-dark-gray-soft);
  max-width: 700px;
  margin: 0 auto 2.5rem auto;
  line-height: 1.6;
}

.booking-form {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--color-light-gray);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--color-dark-gray);
  font-size: 0.9rem;
}

.form-group input[type='text'],
.form-group input[type='email'],
.form-group input[type='url'],
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1rem;
  color: var(--color-dark-gray);
  background-color: var(--color-white);
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

:deep(.form-group .dp__input) {
  padding: 0.8rem 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1rem;
  color: var(--color-dark-gray);
  background-color: var(--color-white);
  box-sizing: border-box;
  width: 100%;
  height: auto;
  line-height: normal;
  transition: border-color 0.3s ease;
}

.form-group input[type='text']:focus,
.form-group input[type='email']:focus,
.form-group input[type='url']:focus,
.form-group select:focus,
.form-group textarea:focus,
:deep(.form-group .dp__input:focus) {
  outline: none;
  border-color: var(--color-blue);
  box-shadow: 0 0 0 2px rgba(var(--color-blue-rgb, 0, 122, 255), 0.2);
}

.form-group select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23333' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
  padding-right: 2.5rem;
}

.form-actions {
  margin-top: 2rem;
  text-align: center;
}

.form-actions .btn {
  padding: 0.9rem 2rem;
  font-size: 1.1rem;
}

.form-message {
  text-align: center;
  margin-top: 1.5rem;
  padding: 0.8rem;
  border-radius: 5px;
  font-weight: bold;
}
.form-message.success {
  background-color: #e6ffed;
  color: #006421;
  border: 1px solid #b3ffc7;
}
.form-message.error {
  background-color: #ffe6e6;
  color: #a30000;
  border: 1px solid #ffb3b3;
}

@media (min-width: 769px) {
  .form-grid {
    grid-template-columns: 1fr 1fr;
  }
  .form-group.full-width {
    grid-column: 1 / -1;
  }
}

@media (max-width: 992px) { /* Tablet */
  .hero-image-column { max-width: 320px; }
  .works-grid { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
}

@media (max-width: 768px) { /* Mobile */
  .section-title { text-align: center !important; }
  .hero-text-column { order: 2; text-align: center; padding: 0; }
  .hero-image-column { order: 1; width: 70vw; max-width: 280px; }
  .hero-main-image { aspect-ratio: 1 / 1; object-fit: cover; object-position: center; width: min(10rem, 20vh); }
  .review-author-info { flex-direction: column; align-items: flex-start; }
  .review-rating { margin-left: 0; padding-left: 0; margin-top: 0.25rem; }
  .works-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .work-title { font-size: 1rem; }
  .work-artist { font-size: 0.8rem; }
  .spotify-embed-container .section-subtitle { font-size: 1.1rem; margin-bottom: 1rem; }
  .booking-form { padding: 1.5rem; }
  .booking-form-section .section-title { font-size: 1.8rem; margin-bottom: 0.25rem; }
  .booking-form-intro { font-size: 0.95rem; margin-bottom: 2rem; }
  .form-actions .btn { width: 100%; font-size: 1rem; }
  .free-consultation-badge { font-size: 0.8rem; padding: 0.4em 0.8em; }
}
</style>
