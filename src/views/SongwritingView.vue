<script setup>
// Nessuna logica JavaScript specifica per questa pagina al momento.
// import { RouterLink } from 'vue-router'; // Se necessario per link interni
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1>SONGWRITING & COMPOSIZIONE: MOSTRA LE TUE EMOZIONI.</h1>
        <p class="page-intro">
          Quando fai sentire le tue canzoni più commoventi le persone non si emozionano?
        </p>
      </div>
    </section>

    <!-- Il Mio Approccio Section -->
    <section class="service-detail-section">
      <div class="container">
        <h2 class="service-detail-title">HAI SOLO BISOGNO DI UN METODO</h2>

        <div class="service-detail-content">
          <div class="service-detail-text">
            <p>
              Il mio metodo consolidato ti aiuta a far emozionare con le tue idee, mostrare invece
              di raccontare.
              <br /><br />Creare ritornelli che restino impressi. <br /><br />
              Per migliorare il tuo brano attuale, ma anche tutti i tuoi brani futuri.
            </p>
          </div>

          <div class="service-detail-image">
            <!-- Placeholder for image -->
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
              <i class="fas fa-pen-fancy" style="font-size: 3rem"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cosa Possiamo Fare Insieme Section -->
    <section class="service-detail-section">
      <div class="container">
        <h2 class="service-detail-title">Cosa Possiamo Fare Insieme:</h2>

        <div class="service-detail-content">
          <div class="service-detail-text">
            <ul class="service-detail-list">
              <li>Sviluppo melodico e armonico.</li>
              <li>Arrangiamento e struttura della canzone.</li>
              <li>Refining dei testi per maggiore impatto emotivo.</li>
              <li>Co-writing per sbloccare nuove idee.</li>
              <li>Creazione di topline su beat esistenti.</li>
            </ul>
            <!--
            <div class="testimonial">
              <p class="testimonial-text">
                "Lavorare con Elia sul testo e la melodia del mio brano ha completamente trasformato
                la mia canzone. Ha saputo cogliere esattamente quello che volevo esprimere e lo ha
                reso molto più potente ed emozionante."
              </p>
              <p class="testimonial-author">- Artista Emergente</p>
            </div>
             -->
          </div>

          <div class="service-detail-image">
            <!-- Placeholder for image -->
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
              <i class="fas fa-music" style="font-size: 3rem"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta cta-primary">
      <div class="container">
        <h2 class="cta-title">HAI UN TESTO O UNA MELODIA CHE ASPETTA DI DIVENTARE UNA CANZONE?</h2>
        <p class="cta-text">
          Trasformiamo insieme le tue idee in una canzone che emoziona e resta impressa.
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
/* Stili specifici per la pagina SongwritingView.
   Questi stili erano definiti nel tag <style> della pagina songwriting.html originale. */

.service-detail-section:nth-child(odd) {
  background-color: var(--color-light-gray);
}

.service-detail-section:nth-child(even) {
  background-color: var(--color-white);
}

/* La classe .service-detail-title è usata per i titoli di sezione. */
.service-detail-title {
  color: var(--color-dark-gray);
  text-shadow: none;
  /* text-align: center; i titoli sembrano già centrati o allineati a sx a seconda del layout */
  margin-bottom: 1.5rem;
}

.service-detail-content {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: center;
}

.service-detail-text {
  flex: 1;
  min-width: 300px;
}

.service-detail-image {
  flex: 1;
  min-width: 300px;
  height: 350px;
  background-color: var(--color-dark-gray);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.service-detail-image img {
  /* Se usi <img> reali */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-detail-list {
  margin: 2rem 0;
  padding-left: 1.5rem;
  list-style: none;
}

.service-detail-list li {
  margin-bottom: 0.8rem;
  position: relative;
  color: var(--color-dark-gray);
}

.service-detail-list li::before {
  content: '';
  position: absolute;
  left: -1.5rem;
  top: 0.5em;
  transform: translateY(-50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--color-red);
  border-radius: 50%;
}

.testimonial {
  background-color: var(--color-blue);
  color: var(--color-white);
  padding: 3rem;
  border-radius: 10px;
  margin: 3rem 0;
  position: relative; /* Per ::before */
}

.testimonial::before {
  content: '"'; /* Virgoletta singola o doppia come preferisci */
  position: absolute;
  top: -0.5rem; /* Aggiustato per migliore posizionamento */
  left: 1rem;
  font-size: 6rem;
  font-family: Georgia, serif;
  color: rgba(255, 255, 255, 0.2);
  line-height: 1;
  z-index: 0; /* Sotto il testo */
}

.testimonial-text {
  font-style: italic;
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
  position: relative; /* Per stare sopra ::before */
  z-index: 1;
}

.testimonial-author {
  font-weight: bold;
  text-align: right;
}

@media (max-width: 768px) {
  .service-detail-content {
    flex-direction: column;
  }

  .service-detail-image {
    width: 100%;
    order: -1;
  }
}
</style>
