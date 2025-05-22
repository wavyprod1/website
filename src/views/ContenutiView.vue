<script setup>
// Nessuna logica JavaScript specifica per questa pagina al momento.
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <!-- Applica la classe globale .section-gradient-overlay per lo sfondo sfumato -->
    <section class="page-hero section-gradient-overlay">
      <div class="container page-hero-content">
        <!-- h1 e p erediteranno colore bianco e text-shadow dal CSS globale -->
        <h1>I MIEI CONTENUTI</h1>
        <p class="page-intro">
          Per migliorare la tua musica con le mie tecniche e trovare ispirazione.<br />Spero
          ti siano utili!
        </p>
      </div>
    </section>

    <!-- Instagram Reels Section -->
    <!-- Applico bg-light esplicitamente per chiarezza, anziché affidarmi solo a nth-child -->
    <section class="content-section bg-light">
      <div class="container">
        <!-- Titolo scuro su sfondo chiaro -->
        <h2 class="section-title section-title-on-light">Reel Instagram</h2>

        <div class="reels-grid">
          <!-- Reel 1 -->
          <div class="instagram-embed-wrapper">
            <iframe
              src="https://www.instagram.com/p/DJl7c0xtcol/embed"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
              allowfullscreen="true"
            >
            </iframe>
          </div>

          <!-- Reel 2 -->
          <div class="instagram-embed-wrapper">
            <iframe
              src="https://www.instagram.com/p/DIyFpCEtZvr/embed"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
              allowfullscreen="true"
            >
            </iframe>
          </div>

          <!-- Reel 3 -->
          <div class="instagram-embed-wrapper">
            <iframe
              src="https://www.instagram.com/p/DHmSMCgNO8Z/embed"
              frameborder="0"
              scrolling="no"
              allowtransparency="true"
              allowfullscreen="true"
            >
            </iframe>
          </div>
          <!-- Aggiungi altri reel qui se necessario -->
        </div>

        <!-- Instagram CTA Section (interna a content-section) -->
        <div class="instagram-cta-section">
          <!-- h3 erediterà colore bianco e ombra dal CSS globale su sfondo scuro -->
          <h3>SEGUIMI SU INSTAGRAM PER ALTRI CONSIGLI!</h3>
          <p>
            Scopri nuovi reel, stories e post con trucchi e ispirazioni per far crescere la tua
            musica e migliorare le tue produzioni.
          </p>
          <a href="https://www.instagram.com/wavyprod1" class="btn btn-secondary" target="_blank">
            <i class="fab fa-instagram"></i> VAI AL PROFILO INSTAGRAM
          </a>
        </div>
      </div>
    </section>

  </main>
</template>

<style scoped>
/* Stile per il contenuto della page-hero per assicurare che sia sopra l'overlay */
.page-hero-content {
  position: relative;
  z-index: 2; /* Sopra l'overlay ::before di .section-gradient-overlay */
  text-align: center;
  padding: 2rem 0; /* Padding verticale per distanziare dal bordo della hero */
}

/* Stile per i titoli di sezione (H2) su sfondi chiari */
.section-title-on-light {
  color: var(--color-dark-gray);
  text-shadow: none; /* Rimuove l'ombra del testo globale */
  text-align: center;
  margin-bottom: 3rem; /* Spazio standard sotto i titoli di sezione */
  /* font-size e text-transform ereditati da h2 globale */
}

/* Sezione Contenuti */
.content-section {
  /* padding: 5rem 0; Ereditato da 'section' nel CSS globale */
}
/* Classi esplicite per lo sfondo per maggiore controllo */
.content-section.bg-light {
  background-color: var(--color-light-gray);
}
.content-section.bg-white {
  background-color: var(--color-white);
}
/* Rimuovo nth-child per evitare conflitti se la struttura cambia */
/* .content-section:nth-child(odd) { background-color: var(--color-light-gray); } */
/* .content-section:nth-child(even) { background-color: var(--color-white); } */


.reels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
  gap: 2rem;
  margin-top: 3rem; /* Spazio dal titolo "Reel Instagram" */
}

.instagram-embed-wrapper {
  max-width: 540px;
  min-width: 326px; /* Larghezza minima embed Instagram */
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  background-color: #fff; /* Sfondo bianco per l'embed se non riempie */
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1); /* Ombra per l'embed */
  overflow: hidden; /* Per il border-radius dell'iframe */
}

.instagram-embed-wrapper iframe {
  width: 100%;
  min-height: 500px; /* Altezza minima per la maggior parte dei reel */
  /* L'altezza effettiva è spesso controllata dall'embed stesso,
     ma impostare un'altezza minima può aiutare con il layout.
     Instagram suggerisce un'altezza fino a 710px per i post,
     ma per i reel potrebbe essere diverso e spesso sono più verticali.
     Una soluzione potrebbe essere un aspect-ratio se l'altezza non è fissa.
     Per ora, un'altezza fissa o min-height.
  */
  height: 650px; /* Valore di esempio, aggiusta in base all'aspetto dei tuoi reel */
  border: none;
  display: block;
}

.instagram-cta-section {
  background-color: var(--color-dark-gray); /* Sfondo scuro per la CTA */
  text-align: center;
  padding: 3rem 1.5rem; /* Aggiunto padding laterale per mobile */
  margin-top: 4rem; /* Più spazio sopra la CTA */
  border-radius: 10px;
}

.instagram-cta-section h3 {
  color: var(--color-white); /* Testo bianco, ombra da h3 globale */
  margin-bottom: 1.5rem;
  font-size: 1.6rem; /* Leggermente più piccolo di un h2 standard */
}

.instagram-cta-section p {
  color: var(--color-light-gray); /* Testo paragrafo chiaro */
  max-width: 600px;
  margin: 0 auto 2rem;
}

.instagram-cta-section .btn i {
    margin-right: 0.5rem; /* Spazio tra icona e testo nel bottone */
}

@media (max-width: 768px) {
  .reels-grid {
    grid-template-columns: 1fr; /* Colonna singola su mobile */
    gap: 1.5rem; /* Gap ridotto */
  }
  .instagram-embed-wrapper iframe {
    height: 600px; /* Altezza leggermente ridotta per mobile, se necessario */
  }
  .section-title-on-light {
    margin-bottom: 2rem;
  }
  .instagram-cta-section {
    margin-top: 3rem;
  }
}
</style>