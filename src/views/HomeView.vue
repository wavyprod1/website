<script setup>
import { ref } from 'vue' // Rimosso onMounted perché le reviews sono ora nel template
//import { RouterLink } from 'vue-router'

// Importa Swiper Vue components e stili
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Importa i moduli Swiper
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Aggiunto Autoplay come opzione

const swiperModules = [Pagination, Navigation, Autoplay];

// Dati per le recensioni (ora direttamente nello script setup)
const reviewsData = ref([
  { id: 1, author_name: 'Camilla Gainotti', rating: 5, text: 'Esperienza super quella in studio con Elia! È molto creativo, professionale, preciso e ha un gran gusto musicale! Abbiamo finora prodotto un paio di canzoni con lui e sicuramente andremo avanti a produrne altre!' },
  { id: 2, author_name: 'Giovanni Licari', rating: 5, text: 'Abbiamo collaborato con "Ancora" un progetto musicale, produzione mix e master di livello, organizzazione di un live a Milano, con uno shot personalizzato per l\'occasione! Che dire ... Una persona rara ed un artista che mi ha permesso di produrre e far conoscere la mia musica anche fuori dalla mia città!' },
  { id: 3, author_name: 'Tommaso Ottocento', rating: 5, text: 'Elia è molto professionale e simpatico. Ti fa sentire a tuo agio e cerca di capire il tuo progetto. Lavorare con lui è sempre stimolante e appassionante.' },
  { id: 4, author_name: 'Davide Bussolino', rating: 5, text: 'Sono arrivato in studio senza realmente sapere come fare le cose, Elia mi ha guidato nel migliore dei modi, davvero! È uscito un prodotto che non solo mia ha soddisfatto ma non mi sarei aspettato suonasse in quel modo, quindi davvero grazie ad Elia! Ve lo consiglio di cuore, oltre ad essere un professionista impeccabile, e a lavorare in un ambiente con attrezzatura iper professionale, è una gran persona!' },
]);


const starEmoji = '⭐'; // Emoji per le stelle

</script>

<template>
  <main>
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-content-wrapper">
        <div class="hero-text-column">
          <h1 class="hero-main-title">ELIA PIRRELLO</h1>
          <h2 class="hero-main-subtitle">Il Tuo Produttore Musicale Di Fiducia</h2>
          <p class="hero-main-description">
            Dalla scrittura alla produzione, dalla registrazione alla release.
            <br /><br />
            Se il tuo obbiettivo non è quello di "acquistare un servizio", ma di sviluppare un
            progetto musicale, sei nel posto giusto.
            <br /><br />
            Il mio impegno è quello di essere l'artista ed il produttore che avrei voluto avere al
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


    <!-- REVIEWS SECTION -->
    <section class="reviews">
      <div class="container">
        <h2 class="section-title reviews-title">COSA DICONO GLI ARTISTI CHE HANNO SCELTO DI AFFIDARSI A ME</h2>
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
            // Quando la larghezza della finestra è >= 768px
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

    <!-- CTA SECTION 1 (PRINCIPALE) -->
    <section class="cta cta-primary">
      <div class="container">
        <h2 class="section-title cta-title">SEI GIÀ PRONTO A SVILUPPARE LA TUA MUSICA?</h2>
        <p class="section-intro cta-text">Facciamo il primo passo insieme.</p>
        <a
          href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
          class="btn btn-primary"
          target="_blank"
        >RACCONTAMI DEL TUO PROGETTO</a>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* Stili generali di sezione (per coerenza, potrebbero essere globali) */
.section-title {
  text-align: center;
  margin-bottom: 1rem; /* Ridotto rispetto al .benefits-title originale per più flessibilità */
}
.section-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem auto; /* Centra e aggiunge spazio sotto */
}

/* HERO SECTION */
.hero {
  /* L'altezza e il padding-top sono gestiti dal CSS globale per mobile */
  /* min-height: 100vh;  Gestito globalmente */
  /* padding-top: 70px; Gestito globalmente */
  display: flex; /* Mantenuto dal globale */
  align-items: center; /* Mantenuto dal globale */
  position: relative; /* Mantenuto dal globale */
  overflow: hidden; /* Mantenuto dal globale */
}
.hero-bg { /* Immagine di sfondo, già nel globale */ }

.hero-content-wrapper { /* Nuovo wrapper per il contenuto della hero */
  display: flex;
  flex-direction: row; /* Default per desktop */
  align-items: center;
  justify-content: space-between;
  gap: 3rem; /* Spazio tra testo e immagine su desktop */
  position: relative;
  z-index: 2;
  width: 100%;
}

.hero-text-column {
  flex: 1 1 55%; /* Permette al testo di prendere più spazio */
  max-width: 650px;
}
.hero-main-title { /* h1 */
  font-size: 3.2rem; /* Leggermente aggiustato */
  margin-bottom: 0.75rem;
}
.hero-main-subtitle { /* h2 */
  font-size: 1.6rem; /* Leggermente aggiustato */
  margin-bottom: 1.5rem;
  font-weight: normal; /* Sottotitolo meno pesante */
  text-transform: none; /* Non uppercase per il sottotitolo */
}
.hero-main-description { /* p */
  font-size: 1.1rem; /* Leggermente aggiustato */
  margin-bottom: 2rem;
  color: var(--color-light-gray); /* Testo descrizione più chiaro su sfondo scuro */
}
.hero-main-cta { /* .btn */
  /* Stili del bottone già definiti globalmente */
}

.hero-image-column {
  flex: 1 1 40%;
  max-width: 400px; 
  display: flex; /* Per centrare l'immagine se necessario */
  justify-content: center;
  align-items: center;
}
.hero-main-image {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5; /* Mantiene questo aspect ratio */
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}


/* BENEFITS SECTION */
.benefits .section-title { color: var(--color-dark-gray); } /* Titolo scuro su sfondo chiaro */
.benefits .section-intro { color: var(--color-dark-gray); }

.benefits-swiper {
  padding-bottom: 3rem; /* Spazio per la paginazione */
}
.benefit-item {
  background-color: var(--color-white);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
  height: 300px; /* Altezza fissa per coerenza nel carosello */
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Allinea contenuto in alto */
  align-items: center;
  box-sizing: border-box;
}
.benefit-icon { /* Stili già nel globale, ma per specificità del colore */
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.benefit-icon.icon-blue { color: var(--color-blue); }
.benefit-icon.icon-green { color: var(--color-green); }
.benefit-icon.icon-red { color: var(--color-red); }

.benefit-title {
  color: var(--color-dark-gray); /* Titolo scuro */
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
}
.benefit-text {
  color: var(--color-dark-gray); /* Testo scuro */
  font-size: 0.95rem;
  line-height: 1.5;
}


/* REVIEWS SECTION */
.reviews {
  background-color: var(--color-dark-gray); /* Sfondo scuro per le recensioni */
  color: var(--color-white);
}
.reviews .section-title { /* Titolo bianco su sfondo scuro */
  color: var(--color-white);
  margin-bottom: 1.5rem; /* Più spazio prima del link Google */
}
.google-link-container {
  text-align: center;
  margin-bottom: 2.5rem;
}
.google-reviews-link {
  color: var(--color-blue);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}
.google-reviews-link:hover {
  color: var(--color-light-gray);
}

.reviews-swiper {
  padding-bottom: 3.5rem; /* Spazio per paginazione e navigazione */
}
.review-slide {
  display: flex; /* Per centrare la card se è più stretta dello slide */
  justify-content: center;
  align-items: stretch; /* Fa sì che le card occupino l'altezza dello swiper-wrapper */
  height: auto; /* Permette a swiper di calcolare l'altezza */
  box-sizing: border-box;
}
.review-card {
  background-color: var(--color-white);
  color: var(--color-dark-gray);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.15);
  width: 100%; /* La card prende la larghezza dello slide */
  max-width: 380px; /* Massimo per non essere troppo larga */
  display: flex;
  flex-direction: column;
  /* Altezza fissa per tutte le card, aggiusta se necessario */
  /* min-height: 280px;  O usa flex per allungare la card più corta */
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
  background-color: var(--color-blue); /* Colore avatar */
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
  flex-direction: column; /* Nome sopra, rating sotto se necessario */
  align-items: flex-start; /* Allinea a sinistra */
  flex-grow: 1;
}
.review-author-name {
  font-weight: bold;
  font-size: 1rem;
  color: var(--color-dark-gray);
}
.review-rating {
  font-size: 0.9rem;
  color: var(--color-dark-gray); /* O #fbbc05 per il colore della stella */
  margin-left: auto; /* Spinge il rating a destra */
  padding-left: 0.5rem; /* Spazio dal nome se sono sulla stessa riga */
}

/* Per mettere nome e rating sulla stessa riga con rating a destra */
.review-author-info {
    flex-direction: row;
    justify-content: space-between; /* Spinge il rating all'estrema destra */
    align-items: center; /* Allinea verticalmente se hanno altezze diverse */
}


.review-text {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #333; /* Testo recensione un po' più scuro */
  flex-grow: 1; /* Permette al testo di occupare lo spazio rimanente per l'altezza uguale */
}

/* Swiper Navigation/Pagination Colors (già definiti nel globale o qui) */
:deep(.reviews-swiper .swiper-button-next),
:deep(.reviews-swiper .swiper-button-prev) {
  color: var(--color-white); /* Frecce bianche su sfondo scuro */
  background-color: rgba(0,0,0,0.2);
}
:deep(.reviews-swiper .swiper-button-next::after),
:deep(.reviews-swiper .swiper-button-prev::after) {
  font-size: 16px;
}
:deep(.reviews-swiper .swiper-pagination-bullet) {
  background-color: rgba(255,255,255,0.5);
}
:deep(.reviews-swiper .swiper-pagination-bullet-active) {
  background-color: var(--color-white);
}

:deep(.benefits-swiper .swiper-button-next),
:deep(.benefits-swiper .swiper-button-prev) {
  color: var(--color-red); /* Frecce rosse su sfondo chiaro */
}
:deep(.benefits-swiper .swiper-pagination-bullet) {
  background-color: var(--color-dark-gray);
}
:deep(.benefits-swiper .swiper-pagination-bullet-active) {
  background-color: var(--color-red);
}


/* RESPONSIVE ADJUSTMENTS */
@media (max-width: 992px) { /* Tablet e sotto */
  .hero-content-wrapper {
    gap: 2rem;
  }
  .hero-main-title { font-size: 2.8rem; }
  .hero-main-subtitle { font-size: 1.4rem; }
  .hero-image-column { max-width: 320px; }
}

@media (max-width: 768px) { /* Mobile */
  .hero {
    padding-top: 70px; /* Assicurati che questo sia l'altezza del tuo header */
    min-height: 100vh;
    height: auto; /* Per permettere al contenuto di espandersi */
  }
  .hero-content-wrapper {
    flex-direction: column;
    justify-content: flex-start; /* Allinea all'inizio su mobile */
    text-align: center;
    padding-top: 2rem; /* Spazio extra in cima sotto l'header */
    padding-bottom: 2rem; /* Spazio in fondo */
    gap: 1.5rem; /* Gap ridotto per mobile */
  }

  .hero-text-column {
    order: 1; /* Testo prima (Titolo, Sottotitolo) */
    max-width: 100%;
    margin-bottom: 0; /* Rimuovi se il gap è sufficiente */
  }
  .hero-main-title { order: 1; font-size: 2.2rem; margin-bottom: 0.5rem; }
  .hero-main-subtitle { order: 2; font-size: 1.3rem; margin-bottom: 1.5rem; }
  
  .hero-image-column {
    order: 3; /* Immagine dopo titolo e sottotitolo */
    width: 70vw;
    max-width: 280px; /* O la tua dimensione preferita per 4:5 */
    margin-bottom: 1.5rem;
  }
  .hero-main-image {
    aspect-ratio: 4 / 5; /* Forza l'aspect ratio qui */
    width: 100%;
    height: auto; /* L'altezza si adatta all'aspect ratio */
    max-height: calc(280px * 5 / 4); /* Calcola max-height basato su max-width */
  }

  .hero-main-description {
    order: 4; /* Descrizione dopo l'immagine */
    font-size: 1rem;
    max-width: 90%;
    margin: 0 auto 2rem auto; /* Centra e aggiunge spazio */
  }
  .hero-main-cta {
    order: 5; /* Bottone alla fine */
  }

  .benefits-swiper {
     /* Breakpoint già gestito da swiper, assicurati che sia 1 slide per view */
  }
  .benefit-item {
      height: auto; /* Su mobile, lascia che l'altezza si adatti */
      min-height: 280px; /* Altezza minima per evitare che siano troppo schiacciati */
      padding: 1.5rem;
  }

  .reviews-swiper {
    /* Breakpoint per 1 slide per view già gestito da swiper (default) */
  }
  .review-card {
    /* min-height: 260px; */ /* Altezza minima per le card su mobile */
    /* L'altezza uguale è gestita da Swiper se usi `autoHeight: true` o assicurandoti
       che il contenuto non vari troppo o usando `align-items: stretch` sullo slide.
       Per ora, lasciamo che il contenuto determini l'altezza e usiamo `align-items: stretch`
       sullo .review-slide.
    */
  }
   .review-author-info {
    flex-direction: column; /* Nome e rating uno sopra l'altro su mobile */
    align-items: flex-start;
  }
  .review-rating {
    margin-left: 0; /* Reset margin */
    padding-left: 0;
    margin-top: 0.25rem; /* Spazio tra nome e rating */
  }

  .section-title { font-size: 1.8rem; }
  .section-intro { font-size: 1rem; margin-bottom: 2rem; }
}
</style>