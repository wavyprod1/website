<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router' // Aggiunto RouterLink per il CTA

onMounted(() => {
  // Google Reviews Integration (codice invariato)
  const reviewsContainer = document.querySelector('.google-reviews-container')

  if (reviewsContainer) {
    const reviews = [
      {
        author_name: 'Camilla Gainotti',
        rating: 5,
        text: 'Esperienza super quella in studio con Elia! È molto creativo, professionale, preciso e ha un gran gusto musicale! Abbiamo finora prodotto un paio di canzoni con lui e sicuramente andremo avanti a produrne altre!',
        time: '',
      },
      {
        author_name: 'Giovanni Licari',
        rating: 5,
        text: 'Abbiamo collaborato con "Ancora" un progetto musicale, produzione mix e master di livello, organizzazione di un live a Milano, con uno shot personalizzato per l\'occasione! Che dire ... Una persona rara ed un artista che mi ha permesso di produrre e far conoscere la mia musica anche fuori dalla mia città!',
        time: '',
      },
      {
        author_name: 'Tommaso Ottocento',
        rating: 5,
        text: 'Elia è molto professionale e simpatico. Ti fa sentire a tuo agio e cerca di capire il tuo progetto. Lavorare con lui è sempre stimolante e appassionante.',
        time: '',
      },
      {
        author_name: 'Davide Bussolino',
        rating: 5,
        text: 'Sono arrivato in studio senza realmente sapere come fare le cose, Elia mi ha guidato nel migliore dei modi, davvero! È uscito un prodotto che non solo mia ha soddisfatto ma non mi sarei aspettato suonasse in quel modo, quindi davvero grazie ad Elia! Ve lo consiglio di cuore, oltre ad essere un professionista impeccabile, e a lavorare in un ambiente con attrezzatura iper professionale, è una gran persona!',
        time: '',
      },
    ]

    const loadingMessage = reviewsContainer.querySelector('.reviews-loading')
    if (loadingMessage) {
      loadingMessage.remove()
    } else {
      reviewsContainer.innerHTML = ''
    }

    const reviewsWrapper = document.createElement('div')
    reviewsWrapper.className = 'reviews-wrapper'
    reviewsWrapper.style.display = 'grid'
    reviewsWrapper.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))'
    reviewsWrapper.style.gap = '2rem'

    const googleLink = document.createElement('div')
    googleLink.className = 'google-link'
    googleLink.style.textAlign = 'center'
    googleLink.style.marginBottom = '2rem'
    googleLink.innerHTML = `
      <a href="https://g.co/kgs/yNMLUtt" target="_blank" style="color: var(--color-blue); text-decoration: none; font-weight: bold;">
          Visualizza tutte le recensioni su Google
      </a>
    `
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
            <div style="width: 40px; height: 40px; border-radius: 50%; background-color: #4285f4; color: white; display: flex; align-items: center; justify-content: center; margin-right: 10px; font-weight: bold;">
                ${review.author_name.charAt(0)}
            </div>
            <div>
                <div style="font-weight: bold; color: var(--color-dark-gray);">${review.author_name}</div>
                <div style="font-size: 0.8rem; color: #70757a;">${review.time}</div>
            </div>
        </div>
        <div style="margin-bottom: 0.5rem;">${stars}</div>
        <p style="color: #333; line-height: 1.5;">${review.text}</p>
      `
      reviewsWrapper.appendChild(reviewCard)
    })
    reviewsContainer.appendChild(reviewsWrapper)
  }
})
</script>

<template>
  <main>
    <!-- Hero Section with new layout -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="container">
        <div class="hero-layout">
          <div class="hero-text-content">
            <h1>ELIA PIRRELLO</h1>
            <h2 class="hero-subtitle">Il Tuo Produttore Musicale Di Fiducia</h2>
            <p class="hero-description">
              Se il tuo obbiettivo non è quello di "acquistare un servizio", ma di sviluppare un
              progetto musicale, sei nel posto giusto.
              <br /><br />
              Il mio impegno è quello di essere l'artista ed il produttore che avrei voluto avere al
              mio fianco quando ho iniziato. Quello a cui avrei affidato il mio progetto musicale ad
              occhi chiusi.
              <br /><br />
              Dalla scrittura alla produzione, dalla registrazione alla release.
            </p>
            <a
              href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
              class="btn btn-primary"
              target="_blank"
              >RACCONTAMI DEL TUO PROGETTO</a
            >
          </div>
          <div class="hero-image-container">
            <img
              src="/images/hero-profile.jpg"
              alt="Elia Pirrello - Produttore Musicale"
              class="hero-profile-img"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="benefits">
      <div class="container">
        <h2 class="benefits-title">COSA ASPETTARTI FACENDO MUSICA INSIEME</h2>
        <p class="benefits-intro">Non solo un servizio, ma un percorso.</p>

        <div class="benefits-grid">
          <div class="benefit-item">
            <!-- MODIFICA: Aggiunta classe icon-blue -->
            <div class="benefit-icon icon-blue">
              <i class="fas fa-lightbulb"></i>
            </div>
            <h3 class="benefit-title">Massima Attenzione</h3>
            <p class="benefit-text">
              Per comprendere la tua unicità.<br />Dall'idea al suono personalizzato.
            </p>
          </div>

          <div class="benefit-item">
            <!-- MODIFICA: Aggiunta classe icon-green -->
            <div class="benefit-icon icon-green">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="benefit-title">Crescita Artistica</h3>
            <p class="benefit-text">
              Acquisirai più consapevolezza per la tua carriera artistica:<br />Da metodi di
              scrittura unici a nozioni di marketing.
            </p>
          </div>

          <div class="benefit-item">
            <!-- MODIFICA: Aggiunta classe icon-red -->
            <div class="benefit-icon icon-red">
              <i class="fas fa-users"></i>
            </div>
            <h3 class="benefit-title">Un Team al Tuo Fianco</h3>
            <p class="benefit-text">
              Accesso a professionisti fidati (come SMM e Vocal Coach) per sviluppare ogni lato del
              tuo progetto artistico.
            </p>
          </div>

          <!-- Se avessi altri benefit items, potresti continuare ad assegnare classi di colore
               o usare una logica più dinamica se i colori dovessero cambiare spesso.
               Per 3-5 items, le classi dirette vanno benissimo.
          <div class="benefit-item">
            <div class="benefit-icon icon-yellow"> // Esempio per il giallo
              <i class="fas fa-music"></i>
            </div>
            <h3 class="benefit-title">Suono Unico</h3>
            <p class="benefit-text">Creiamo insieme un sound design che parli solo di te.</p>
          </div>
           -->
        </div>
      </div>
    </section>

    <!-- Reviews Section with Google Reviews (codice invariato) -->
    <section class="reviews">
      <div class="container reviews-container">
        <h2>COSA DICONO GLI ARTISTI CHE HANNO SCELTO DI AFFIDARSI A ME</h2>
        <div id="google-reviews" style="width: 100%; margin-top: 3rem">
          <div class="google-reviews-container">
            <div class="reviews-loading">Caricamento recensioni...</div>
          </div>
        </div>
        <div class="inline-styles-for-reviews-placeholder"></div>
      </div>
    </section>

    <!-- Second CTA Section (codice invariato) -->
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

    <!-- Optional Soft CTA to Content (codice invariato) -->
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

/* MODIFICA: Aggiunta stili per le icone colorate */
.benefit-icon {
  /* Gli stili base per .benefit-icon sono già nel CSS globale (src/assets/style.css)
     font-size: 2.5rem;
     margin-bottom: 1rem;
     Potremmo rimuovere il color: var(--color-red); dal globale se qui lo sovrascriviamo sempre
     o lasciarlo come default se non tutti gli icon avranno un colore specifico.
     Per ora, assumiamo che il CSS globale abbia:
     .benefit-icon {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: var(--color-red); // Questo sarà il default o il colore per le icone non specificate
     }
  */
}

.benefit-icon.icon-blue {
  color: var(--color-blue);
}

.benefit-icon.icon-green {
  color: var(--color-green);
}

.benefit-icon.icon-red {
  color: var(--color-red); /* Già il default, ma esplicito per chiarezza se vuoi cambiarlo*/
}

.benefit-icon.icon-yellow {
  /* Esempio se vuoi usare anche il giallo */
  color: var(--color-yellow);
}

/* Updated hero layout styles */
.hero-layout {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Changed from default to space-between */
  gap: 4rem; /* Increased gap for better spacing */
  position: relative;
  z-index: 2;
  max-width: 1200px; /* Added max-width for larger screens */
  margin: 0 auto; /* Center the layout */
  padding: 0 2rem; /* Add padding to prevent content touching edges */
}

.hero-text-content {
  flex: 0 1 60%; /* Changed from flex: 1 to specific ratio */
  max-width: 650px;
}

.hero-image-container {
  flex: 0 1 40%; /* Added flex ratio for image container */
  max-width: 400px; /* Increased max-width for better proportion */
  min-width: 270px; /* Maintains minimum width */
}

.hero-profile-img {
  width: 100%;
  height: auto;
  max-height: 580px; /* Increased max-height */
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

/* Updated responsive styles */
@media (max-width: 992px) {
  .hero-layout {
    flex-direction: column;
    text-align: center;
    padding: 0 1rem; /* Reduced padding for mobile */
    gap: 2rem; /* Reduced gap for mobile */
  }

  .hero-text-content {
    flex: 1 1 auto;
    max-width: 100%;
    margin-bottom: 2rem;
  }

  .hero-image-container {
    flex: 0 1 auto;
    width: 100%;
    max-width: 320px; /* Adjusted for mobile */
    margin: 0 auto;
    order: 2;
  }
}
</style>
