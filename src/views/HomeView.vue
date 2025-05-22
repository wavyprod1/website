<script setup>
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

// Importa Swiper Vue components e stili
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination'; // Già presente per i puntini
import 'swiper/css/navigation'; // Necessario per i pulsanti di navigazione

// Importa i moduli specifici che userai
import { Pagination, Navigation } from 'swiper/modules'; // <<<<<<< MODIFICA QUI

// Array di moduli da passare a Swiper
const swiperModules = [Pagination, Navigation]; // <<<<<<< MODIFICA QUI

onMounted(() => {
  // Google Reviews Integration
  const reviewsContainer = document.querySelector('.google-reviews-container')
  if (reviewsContainer) {
    const reviews = [
      { author_name: 'Camilla Gainotti', rating: 5, text: 'Esperienza super quella in studio con Elia! È molto creativo, professionale, preciso e ha un gran gusto musicale! Abbiamo finora prodotto un paio di canzoni con lui e sicuramente andremo avanti a produrne altre!', time: '' },
      { author_name: 'Giovanni Licari', rating: 5, text: 'Abbiamo collaborato con "Ancora" un progetto musicale, produzione mix e master di livello, organizzazione di un live a Milano, con uno shot personalizzato per l\'occasione! Che dire ... Una persona rara ed un artista che mi ha permesso di produrre e far conoscere la mia musica anche fuori dalla mia città!', time: '' },
      { author_name: 'Tommaso Ottocento', rating: 5, text: 'Elia è molto professionale e simpatico. Ti fa sentire a tuo agio e cerca di capire il tuo progetto. Lavorare con lui è sempre stimolante e appassionante.', time: '' },
      { author_name: 'Davide Bussolino', rating: 5, text: 'Sono arrivato in studio senza realmente sapere come fare le cose, Elia mi ha guidato nel migliore dei modi, davvero! È uscito un prodotto che non solo mia ha soddisfatto ma non mi sarei aspettato suonasse in quel modo, quindi davvero grazie ad Elia! Ve lo consiglio di cuore, oltre ad essere un professionista impeccabile, e a lavorare in un ambiente con attrezzatura iper professionale, è una gran persona!', time: '' },
    ];

    const loadingMessage = reviewsContainer.querySelector('.reviews-loading')
    if (loadingMessage) loadingMessage.remove();
    else reviewsContainer.innerHTML = '';

    const reviewsWrapper = document.createElement('div')
    reviewsWrapper.className = 'reviews-wrapper'

    const googleLink = document.createElement('div')
    googleLink.className = 'google-link'
    googleLink.style.textAlign = 'center'
    googleLink.style.marginBottom = '2rem'
    googleLink.innerHTML = `
      <a href="https://g.co/kgs/yNMLUtt" target="_blank" style="color: var(--color-blue); text-decoration: none; font-weight: bold;">
          Visualizza tutte le recensioni su Google
      </a>
    `;
    reviewsContainer.appendChild(googleLink)

    reviews.forEach((review) => {
      const reviewCard = document.createElement('div')
      reviewCard.className = 'review-card'
      reviewCard.style.backgroundColor = 'white'
      reviewCard.style.borderRadius = '10px'
      reviewCard.style.padding = '1.5rem'
      reviewCard.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)'

      let stars = ''
      for (let i = 0; i < review.rating; i++) {
        stars += '<span style="color: #fbbc05;">★</span>'
      }

      reviewCard.innerHTML = `
        <div style="display: flex; align-items: center; margin-bottom: 1rem;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #4285f4; color: white; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-weight: bold; flex-shrink: 0;">
                ${review.author_name.charAt(0)}
            </div>
            <div>
                <div style="font-weight: bold; color: var(--color-dark-gray);">${review.author_name}</div>
                <div style="font-size: 0.8rem; color: #70757a;">${review.time}</div>
            </div>
        </div>
        <div style="margin-bottom: 0.5rem;">${stars}</div>
        <p style="color: #333; line-height: 1.5; font-size: 0.9rem;">${review.text}</p>
      `;
      reviewsWrapper.appendChild(reviewCard)
    })
    reviewsContainer.appendChild(reviewsWrapper)
  }
})
</script>

<template>
  <main>
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container hero-container-mobile-flex">
        <!-- Layout per Desktop -->
        <div class="hero-layout-desktop">
          <div class="hero-text-content-desktop">
            <h1>ELIA PIRRELLO</h1>
            <h2 class="hero-subtitle">Il Tuo Produttore Musicale Di Fiducia</h2>
            <p class="hero-description">
              Dalla scrittura alla produzione, dalla registrazione alla release.
              <br /><br />
              Se il tuo obbiettivo non è quello di "acquistare un servizio", ma di sviluppare un
              progetto musicale, sei nel posto giusto.
              <br /><br />
              Il mio impegno è quello di essere l'artista ed il produttore che avrei voluto avere al
              mio fianco quando ho iniziato. Quello a cui avrei affidato il mio progetto musicale ad
              occhi chiusi.
            </p>
            <a
              href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
              class="btn btn-primary"
              target="_blank"
              >RACCONTAMI DEL TUO PROGETTO</a
            >
          </div>
          <div class="hero-image-container-desktop">
            <img
              src="/images/hero-profile.jpg"
              alt="Elia Pirrello - Produttore Musicale"
              class="hero-profile-img"
            />
          </div>
        </div>

        <!-- Contenuto specifico per Mobile -->
        <h1 class="hero-title-mobile">ELIA PIRRELLO</h1>
        <h2 class="hero-subtitle-mobile">Il Tuo Produttore Musicale Di Fiducia</h2>
        <div class="hero-image-container-mobile">
          <img
            src="/images/hero-profile-square.jpg"
            alt="Elia Pirrello - Produttore Musicale"
            class="hero-profile-img-mobile"
          />
        </div>
        <div class="hero-description-cta-mobile">
            <p class="hero-description">
              Dalla scrittura alla produzione, dalla registrazione alla release.
              <br /><br />
              Se il tuo obbiettivo non è quello di "acquistare un servizio", ma di sviluppare un
              progetto musicale, sei nel posto giusto.
              <br /><br />
              Il mio impegno è quello di essere l'artista ed il produttore che avrei voluto avere al
              mio fianco quando ho iniziato. Quello a cui avrei affidato il mio progetto musicale ad
              occhi chiusi.
            </p>
            <a
              href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
              class="btn btn-primary"
              target="_blank"
              >RACCONTAMI DEL TUO PROGETTO</a
            >
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits">
      <div class="container">
        <h2 class="benefits-title">COSA ASPETTARTI FACENDO MUSICA INSIEME</h2>
        <p class="benefits-intro">Non solo un servizio, ma un percorso.</p>

        <!-- Carosello per Mobile -->
        <div class="benefits-carousel-mobile">
          <swiper
            :slides-per-view="1.2"
            :space-between="15"
            :centered-slides="true"
            :pagination="{ clickable: true }"
            :navigation="true"           
            :modules="swiperModules"           
            class="mySwiper"
          >
            <swiper-slide>
              <div class="benefit-item">
                <div class="benefit-icon icon-blue"><i class="fas fa-lightbulb"></i></div>
                <h3 class="benefit-title">Massima Attenzione</h3>
                <p class="benefit-text">Per comprendere la tua unicità.<br />Dall'idea al suono personalizzato.</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="benefit-item">
                <div class="benefit-icon icon-green"><i class="fas fa-chart-line"></i></div>
                <h3 class="benefit-title">Crescita Artistica</h3>
                <p class="benefit-text">Acquisirai più consapevolezza per la tua carriera artistica:<br />Da metodi di scrittura unici a nozioni di marketing.</p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="benefit-item">
                <div class="benefit-icon icon-red"><i class="fas fa-users"></i></div>
                <h3 class="benefit-title">Un Team al Tuo Fianco</h3>
                <p class="benefit-text">Accesso a professionisti fidati (come SMM e Vocal Coach) per sviluppare ogni lato del tuo progetto artistico.</p>
              </div>
            </swiper-slide>
            <!-- Aggiungi gli slot per i pulsanti di navigazione se vuoi posizionarli manualmente
                 o lascia che Swiper li aggiunga automaticamente con :navigation="true" -->
            <!--
            <template #container-end>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </template>
            -->
          </swiper>
        </div>

        <!-- Griglia per Desktop -->
        <div class="benefits-grid-desktop">
          <div class="benefit-item">
            <div class="benefit-icon icon-blue"><i class="fas fa-lightbulb"></i></div>
            <h3 class="benefit-title">Massima Attenzione</h3>
            <p class="benefit-text">Per comprendere la tua unicità.<br />Dall'idea al suono personalizzato.</p>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon icon-green"><i class="fas fa-chart-line"></i></div>
            <h3 class="benefit-title">Crescita Artistica</h3>
            <p class="benefit-text">Acquisirai più consapevolezza per la tua carriera artistica:<br />Da metodi di scrittura unici a nozioni di marketing.</p>
          </div>
          <div class="benefit-item">
            <div class="benefit-icon icon-red"><i class="fas fa-users"></i></div>
            <h3 class="benefit-title">Un Team al Tuo Fianco</h3>
            <p class="benefit-text">Accesso a professionisti fidati (come SMM e Vocal Coach) per sviluppare ogni lato del tuo progetto artistico.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="reviews">
      <div class="container reviews-container">
        <h2>COSA DICONO GLI ARTISTI CHE HANNO SCELTO DI AFFIDARSI A ME</h2>
        <div id="google-reviews" style="width: 100%; margin-top: 3rem">
          <div class="google-reviews-container">
            <div class="reviews-loading">Caricamento recensioni...</div>
            <!-- Il JS popolerà .reviews-wrapper qui -->
          </div>
        </div>
      </div>
    </section>

    <!-- Second CTA Section -->
    <section class="cta cta-primary">
      <div class="container">
        <h2 class="cta-title">SEI GIÀ PRONTO A SVILUPPARE LA TUA MUSICA?</h2>
        <p class="cta-text">Facciamo il primo passo insieme.</p>
        <a
          href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
          class="btn btn-primary"
          target="_blank"
          >RACCONTAMI DEL TUO PROGETTO</a
        >
      </div>
    </section>

    <!-- Optional Soft CTA to Content -->
    <section class="cta cta-secondary">
      <div class="container">
        <h3 class="cta-title">SE INVECE STAI ANCORA LAVORANDO SUI TUOI BRANI</h3>
        <p class="cta-text">Ecco un paio di consigli per sbloccare la creatività.</p>
        <RouterLink to="/contenuti" class="btn btn-secondary">SCOPRI I MIEI CONTENUTI</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.reviews-loading {
  text-align: center;
  padding: 2rem;
  font-style: italic;
  color: #70757a;
}

/* Icone colorate per Benefits section */
.benefit-icon.icon-blue { color: var(--color-blue); }
.benefit-icon.icon-green { color: var(--color-green); }
.benefit-icon.icon-red { color: var(--color-red); }
.benefit-icon.icon-yellow { color: var(--color-yellow); }


/* HERO SECTION STYLES */
.hero-layout-desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.hero-text-content-desktop { flex: 0 1 60%; max-width: 650px; }
.hero-image-container-desktop { flex: 0 1 40%; max-width: 400px; min-width: 270px; }
.hero-profile-img { width: 100%; height: auto; max-height: 580px; object-fit: cover; border-radius: 10px; box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3); }

.hero-title-mobile,
.hero-subtitle-mobile,
.hero-image-container-mobile,
.hero-description-cta-mobile {
  display: none; /* Nascosti di default */
}


/* BENEFITS SECTION STYLES */
.benefits-grid-desktop {
  display: grid; /* Questo è lo stile per desktop */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
.benefits-carousel-mobile {
  display: none; /* Nascosto di default su desktop */
  position: relative; /* Necessario per posizionare i pulsanti di navigazione custom */
}
.benefits-carousel-mobile .benefit-item {
  width: 260px;
  min-width: 260px;
  max-width: 260px;
  height: 320px;
  min-height: 320px;
  max-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.07);
  padding: 2rem 1rem 1rem 1rem;
}

/* Stili per i pulsanti di navigazione di Swiper */
/* Puoi personalizzare questi stili come preferisci */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: var(--color-red); /* Colore delle frecce */
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 30px; /* Riduci dimensione dei pulsanti */
  height: 30px;
  margin-top: -15px; /* Per centrarli verticalmente rispetto allo slide */
}
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 14px; /* Riduci dimensione dell'icona della freccia */
  font-weight: bold;
}
:deep(.swiper-button-prev) {
  left: 5px; /* Avvicina i pulsanti ai bordi del carosello */
}
:deep(.swiper-button-next) {
  right: 5px;
}

/* Stili per la paginazione (puntini) di Swiper */
:deep(.swiper-pagination-bullet) {
  background-color: var(--color-dark-gray);
  opacity: 0.5;
}
:deep(.swiper-pagination-bullet-active) {
  background-color: var(--color-red);
  opacity: 1;
}


/* REVIEWS SECTION STYLES */
:deep(.reviews-wrapper) {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
}


/* Mobile Layout (<= 768px) */
@media (max-width: 768px) {
  .hero {
    min-height: 100vh;
    height: auto;
    display: flex;
    align-items: center;
    padding-top: 70px;
    padding-bottom: 2rem;
    box-sizing: border-box;
  }

  .hero .container.hero-container-mobile-flex {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    width: 100%;
    height: calc(100vh - 70px - 2rem - 2rem);
    padding: 1rem 0;
    gap: 0.5rem;
  }

  .hero-layout-desktop { display: none; }

  .hero-title-mobile,
  .hero-subtitle-mobile,
  .hero-image-container-mobile,
  .hero-description-cta-mobile {
    display: block;
    width: 100%;
    padding: 0 1rem;
  }

  .hero-title-mobile { order: 1; font-size: 2.2rem; margin-bottom: 0.25rem; }
  .hero-subtitle-mobile { order: 2; font-size: 1.3rem; margin-bottom: 1rem; }

  .hero-image-container-mobile {
    order: 3;
    width: 60vw;
    max-width: 220px;
    height: 60vw;
    max-height: 220px;
    min-width: 120px;
    min-height: 120px;
    margin: 0 auto 1rem auto;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    padding: 0;
    aspect-ratio: 1 / 1;
  }
  .hero-profile-img-mobile {
    width: 100%;
    height: 100%;
    min-width: 120px;
    min-height: 120px;
    object-fit: cover;
    border-radius: 10px;
    aspect-ratio: 1 / 1;
  }

  .hero-description-cta-mobile { order: 4; }
  .hero-description-cta-mobile .hero-description {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
    max-width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  /* Benefits Carousel su Mobile */
  .benefits-grid-desktop { display: none; }
  .benefits-carousel-mobile {
    display: block;
    padding: 0 0 2.5rem 0; /* Aumentato padding per i puntini e un po' di spazio sotto */
  }
  .benefit-item {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .benefit-item p.benefit-text { font-size: 0.9rem; }

  /* Reviews Grid su Mobile */
  :deep(.reviews-wrapper) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  :deep(.review-card) { padding: 1rem; }
  :deep(.review-card p) { font-size: 0.85rem; }
  :deep(.review-card div[style*="font-weight: bold"]) { font-size: 0.9rem; }
}

/* Per schermi molto piccoli, potresti volere una singola colonna per le recensioni */
@media (max-width: 480px) {
  :deep(.reviews-wrapper) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .hero-title-mobile { font-size: 2rem; }
  .hero-subtitle-mobile { font-size: 1.1rem; }
  .hero-image-container-mobile {
    width: 55vw;
    height: 55vw;
    max-width: 180px; /* Riduci ulteriormente se necessario */
    max-height: 180px;
  }
  .hero-description-cta-mobile .hero-description { font-size: 0.85rem; }

  /* Riduci ulteriormente la dimensione dei pulsanti di navigazione Swiper */
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 25px;
    height: 25px;
    margin-top: -12.5px;
  }
  :deep(.swiper-button-next::after),
  :deep(.swiper-button-prev::after) {
    font-size: 12px;
  }
}
</style>