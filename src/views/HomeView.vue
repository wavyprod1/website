<script setup>
import { ref } from 'vue'
// Importa Swiper Vue components e stili
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importa i moduli Swiper
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const swiperModules = [Pagination, Navigation, Autoplay];

// Dati per le recensioni
const reviewsData = ref([
  { id: 1, author_name: 'Camilla Gainotti', rating: 5, text: 'Esperienza super quella in studio con Elia! È molto creativo, professionale, preciso e ha un gran gusto musicale! Abbiamo finora prodotto un paio di canzoni con lui e sicuramente andremo avanti a produrne altre!' },
  { id: 2, author_name: 'Giovanni Licari', rating: 5, text: 'Abbiamo collaborato con "Ancora" un progetto musicale, produzione mix e master di livello, organizzazione di un live a Milano, con uno shot personalizzato per l\'occasione! Che dire ... Una persona rara ed un artista che mi ha permesso di produrre e far conoscere la mia musica anche fuori dalla mia città!' },
  { id: 3, author_name: 'Tommaso Ottocento', rating: 5, text: 'Elia è molto professionale e simpatico. Ti fa sentire a tuo agio e cerca di capire il tuo progetto. Lavorare con lui è sempre stimolante e appassionante.' },
  { id: 4, author_name: 'Davide Bussolino', rating: 5, text: 'Sono arrivato in studio senza realmente sapere come fare le cose, Elia mi ha guidato nel migliore dei modi, davvero! È uscito un prodotto che non solo mia ha soddisfatto ma non mi sarei aspettato suonasse in quel modo, quindi davvero grazie ad Elia! Ve lo consiglio di cuore, oltre ad essere un professionista impeccabile, e a lavorare in un ambiente con attrezzatura iper professionale, è una gran persona!' },
]);

const starEmoji = '⭐';
</script>

<template>
  <main>
    <!-- HERO SECTION -->
    <!-- Applica la classe globale .section-gradient-overlay per lo sfondo -->
    <section class="hero section-gradient-overlay">
      <div class="container hero-content-wrapper">
        <div class="hero-text-column">
          <!-- h1 usa .section-title per coerenza, ma è un h1 -->
          <h1 class="section-title hero-main-title">IL TUO PRODUTTORE MUSICALE DI FIDUCIA</h1>
          <p class="hero-main-description">
            Se il tuo obbiettivo non è quello di "acquistare un servizio", ma di sviluppare il tuo
            progetto musicale, sono il produttore giusto per te.
            <br /><br />
            Il mio impegno è quello di essere il professionista che avrei voluto avere al
            mio fianco quando ho iniziato. Quello a cui avrei affidato il mio progetto musicale ad
            occhi chiusi.
          </p>
        </div>
        <div class="hero-image-column">
          <img
            src="/images/hero-profile-square.jpg"
            alt="Elia Pirrello - Produttore Musicale"
            class="hero-main-image"
          />
        </div>
      </div>
    </section>

    <!-- CTA SECTION 1 (PRINCIPALE) -->
    <!-- Classe .cta-primary dal CSS globale gestisce sfondo e colori testo -->
    <section class="cta cta-primary">
      <div class="container">
        <h2 class="section-title">SEI GIÀ PRONTO A SVILUPPARE LA TUA MUSICA?</h2>
        <p class="section-intro">Facciamo il primo passo insieme.</p>
        <a
          href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
          class="btn btn-primary"
          target="_blank"
        >RACCONTAMI DEL TUO PROGETTO</a>
      </div>
    </section>

    <!-- REVIEWS SECTION -->
    <!-- Classe .section-bg-light per sfondo chiaro e testo scuro (definita nello scoped CSS) -->
    <section class="reviews section-bg-light">
      <div class="container">
        <h2 class="section-title">COSA DICONO GLI ARTISTI CHE HANNO SCELTO DI AFFIDARSI A ME</h2>
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
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              centeredSlides: reviewsData.length > 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
              centeredSlides: reviewsData.length > 3,
            }
          }"
          class="reviews-swiper"
        >
          <swiper-slide v-for="review in reviewsData" :key="review.id" class="review-slide">
            <div class="review-card">
              <div class="review-card-header">
                <div class="review-author-avatar">
                  {{ review.author_name.charAt(0) }}
                </div>
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

  </main>
</template>

<style scoped>
/* Stili generali di SEZIONE per questo componente (sovrascrivono o specificano il globale) */
.section-title {
  /* Per desktop, il titolo della hero e CTA sono allineati a sinistra,
     mentre quello delle reviews è centrato. */
  /* Il CSS globale per h1/h2 imposta colore bianco e text-shadow.
     Questo viene sovrascritto per sezioni con sfondo chiaro. */
}
.hero .section-title { /* Titolo H1 della hero section */
    text-align: left;
    /* font-size: ... gestito da h1 globale o media query */
}
.cta-primary .section-title { /* Titolo H2 della CTA */
    text-align: center; /* Centriamo il titolo della CTA */
    /* Colore bianco e text-shadow da .cta-primary globale */
}
.reviews .section-title { /* Titolo H2 delle Reviews */
    text-align: center;
    color: var(--color-dark-gray); /* Testo scuro su sfondo chiaro */
    text-shadow: none; /* Rimuove ombra su sfondo chiaro */
    margin-bottom: 1.5rem;
}

.section-intro {
  /* Il CSS globale per .cta-primary e .cta-secondary gestisce colore e allineamento.
     Per le reviews non c'è un .section-intro, ma il link a Google. */
}


/* HERO SECTION SPECIFICS (Layout e testo) */
.hero-content-wrapper {
  display: flex;
  flex-direction: row; /* Desktop: testo a sinistra, immagine a destra */
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  position: relative; /* Essenziale per z-index */
  z-index: 2;       /* Sopra l'overlay ::before della classe .section-gradient-overlay */
  width: 100%;
  min-height: calc(100vh - 120px); /* Considera padding-top/bottom della section .hero e header */
  padding: 2rem 0; /* Padding interno al content wrapper */
}

.hero-text-column {
  flex: 1 1 55%;
  max-width: 650px;
}
.hero-main-title {
  /* Stili tipografici da h1 globale */
  margin-bottom: 1.5rem; /* Più spazio per H1 */
}
.hero-main-description {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: var(--color-light-gray); /* Testo descrizione chiaro su sfondo sfumato/scuro */
  line-height: 1.7;
}

.hero-image-column {
  flex: 1 1 40%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hero-main-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

/* REVIEWS SECTION (Sfondo chiaro) */
.reviews.section-bg-light { /* Classe per gestire lo sfondo chiaro */
  background-color: var(--color-light-gray);
}
.reviews.section-bg-light .google-link-container {
  text-align: center;
  margin-bottom: 2.5rem;
}
.reviews.section-bg-light .google-reviews-link {
  color: var(--color-blue); /* Userà il nuovo blu scuro */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}
.reviews.section-bg-light .google-reviews-link:hover {
  color: var(--color-dark-gray);
}

.reviews-swiper {
  padding-bottom: 3.5rem; /* Spazio per paginazione e navigazione */
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
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
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
  background-color: var(--color-blue); /* Userà il nuovo blu scuro */
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
  color: #333; /* Testo recensione un po' più scuro */
  flex-grow: 1;
}

/* Swiper Navigation/Pagination Colors per Reviews su sfondo chiaro */
:deep(.reviews.section-bg-light .reviews-swiper .swiper-button-next),
:deep(.reviews.section-bg-light .reviews-swiper .swiper-button-prev) {
  color: var(--color-red);
}
:deep(.reviews.section-bg-light .reviews-swiper .swiper-button-next)::after,
:deep(.reviews.section-bg-light .reviews-swiper .swiper-button-prev)::after {
  font-size: 16px;
}
:deep(.reviews.section-bg-light .reviews-swiper .swiper-pagination-bullet) {
  background-color: rgba(0,0,0,0.4);
}
:deep(.reviews.section-bg-light .reviews-swiper .swiper-pagination-bullet-active) {
  background-color: var(--color-red);
}


/* RESPONSIVE ADJUSTMENTS */
@media (max-width: 992px) { /* Tablet */
  .hero-content-wrapper {
    gap: 2rem;
    min-height: 0; /* Rimuovi min-height specifico per tablet */
    padding: 1rem 0;
  }
  .hero-image-column { max-width: 320px; }
}

@media (max-width: 768px) { /* Mobile */
  .hero-content-wrapper {
    flex-direction: column;
    text-align: center; /* Centra il testo dei figli ordinati */
    padding-top: 2rem; /* Spazio dal top della section (già con padding per header globale) */
    padding-bottom: 2rem;
    gap: 1.5rem;
  }

  /* Tutti i .section-title (h1, h2) su mobile */
  .section-title {
    text-align: center !important; /* Forza centro su mobile per tutti i titoli di sezione */
    /* font-size è gestito dal CSS globale per h1, h2 in media query */
  }

  .hero-text-column {
    display: contents; /* Permette l'ordinamento dei figli diretti */
  }

  /* Ordine e stili per gli elementi della Hero su mobile */
  .hero .hero-main-title { /* h1 nella hero */
    order: 1;
    margin-bottom: 1rem; /* Ridotto per mobile */
    width: 100%;
  }
  .hero-image-column {
    order: 2;
    width: 70vw;
    max-width: 280px;
    margin: 0 auto 1.5rem auto; /* Centra e aggiunge spazio sotto */
  }
  .hero-main-description {
    order: 3;
    font-size: 1rem;
    max-width: 90%;
    margin: 0 auto 2rem auto; /* Centra e aggiunge spazio sotto */
  }
  
  .review-author-info { /* Su mobile, nome e rating uno sopra l'altro */
    flex-direction: column;
    align-items: flex-start;
  }
  .review-rating {
    margin-left: 0;
    padding-left: 0;
    margin-top: 0.25rem;
  }
}
</style>