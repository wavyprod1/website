<script setup>
// Nessuna logica JavaScript specifica per questa pagina al momento,
// a parte quella già gestita globalmente in App.vue o main.js.
// Importa RouterLink se hai link interni da convertire (già fatto nel template sotto).
//import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1>ISPIRAZIONE PER LA TUA MUSICA</h1>
        <p class="page-intro">
          Qui trovi alcuni dei miei reel con delle tecniche per migliorare la tua musica.<br />Spero
          ti siano utili!
        </p>
      </div>
    </section>

    <!-- Instagram Reels Section -->
    <section class="content-section">
      <div class="container">
        <!-- Assicurati che la classe 'benefits-title' sia definita nel tuo style.css globale
                 Se non lo è, potresti usare 'service-detail-title' (che è già usata in portfolio.html e stilizzata)
                 o creare uno stile specifico per questo titolo qui in <style scoped> o globalmente.
                 Ho usato 'benefits-title' come nell'HTML originale. -->
        <h2 class="benefits-title">Reel Instagram</h2>

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

          <!-- Reel 3 - Usavi un URL placeholder, lo mantengo -->
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

          <!-- Se avevi Reel 4 e 5, aggiungili qui. Ho visto che li avevi rimossi nell'ultima versione di contenuti.html.
                     Se li rivuoi, basta aggiungere altri div.instagram-embed-wrapper con i relativi iframe.
                     Esempio:
                <div class="instagram-embed-wrapper">
                    <iframe 
                        src="https://www.instagram.com/p/Cdummyurl102/embed"
                        frameborder="0" 
                        scrolling="no" 
                        allowtransparency="true" 
                        allowfullscreen="true">
                    </iframe>
                </div>
                <div class="instagram-embed-wrapper">
                    <iframe 
                        src="https://www.instagram.com/p/Cdummyurl103/embed"
                        frameborder="0" 
                        scrolling="no" 
                        allowtransparency="true" 
                        allowfullscreen="true">
                    </iframe>
                </div>
                -->
        </div>

        <!-- Instagram CTA Section -->
        <div class="instagram-cta-section">
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

    <!-- CTA Section (Main Project CTA) -->
    <section class="cta cta-primary">
      <div class="container">
        <h2 class="cta-title">VUOI APPROFONDIRE QUESTI ARGOMENTI INSIEME?</h2>
        <p class="cta-text">
          Parliamone, vediamo come posso aiutarti a far crescere la tua musica.
        </p>
        <a
          href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
          class="btn btn-primary"
          target="_blank"
          >RACCONTAMI DEL TUO PROGETTO</a
        >
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Stili specifici per la pagina ContenutiView.
   Questi stili erano definiti nel tag <style> della pagina contenuti.html originale. */

.content-section:nth-child(odd) {
  /* In questo caso, la section dei reel è la prima 'content-section', quindi sarà dispari */
  background-color: var(--color-light-gray);
}

.content-section:nth-child(even) {
  background-color: var(--color-white);
}

.reels-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr)); /* Instagram's min embed width */
  gap: 2rem;
  margin-top: 3rem;
}

.instagram-embed-wrapper {
  max-width: 540px; /* Instagram's max embed width */
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

.instagram-embed-wrapper iframe {
  width: 100%;
  height: 720px; /* Adjust if necessary to ensure full visibility of embed content */
  border: none;
  display: block; /* Removes any extra space below if it's an inline element */
  border-radius: 8px; /* Optional: if embeds don't have their own */
  overflow: hidden; /* Ensures content fits cleanly */
}

.instagram-cta-section {
  background-color: var(--color-dark-gray);
  text-align: center;
  padding: 3rem 0;
  margin-top: 3rem;
  border-radius: 10px;
}

.instagram-cta-section h3 {
  color: var(--color-white);
  margin-bottom: 1.5rem;
}

.instagram-cta-section p {
  color: var(--color-light-gray);
  max-width: 600px;
  margin: 0 auto 2rem;
}

/* Il titolo "Reel Instagram" usa .benefits-title.
   Se questa classe non è stilizzata globalmente per essere scura su sfondi chiari,
   o se vuoi uno stile diverso per i titoli di sezione in ContenutiView,
   puoi aggiungere uno stile qui:
   h2.benefits-title {
       color: var(--color-dark-gray);
       text-shadow: none;
   }
   Assicurati che .benefits-title sia appropriato o usa .service-detail-title (già stilizzato per portfolio)
   o crea una classe più generica per i titoli di sezione scuri.
*/

@media (max-width: 768px) {
  .reels-grid {
    grid-template-columns: 1fr; /* Single column on smaller screens */
  }
}
</style>
