<script setup>
// Placeholder for modal logic if you implement it later
// import { ref } from 'vue';
// const isTommiModalOpen = ref(false);
// const openTommiModal = () => {
//   isTommiModalOpen.value = true;
//   // Add logic to show modal
// };
// const closeTommiModal = () => {
//   isTommiModalOpen.value = false;
//   // Add logic to hide modal
// };

// If using RouterLink for the case study, import it:
// import { RouterLink } from 'vue-router';
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1>PRODUZIONE MUSICALE:<br />DIAMO VITA ALLE TUE IDEE</h1>
        <p class="page-intro">
          Trasformiamo la tua visione artistica in un brano che ti rispecchi al 100%,<br />originale
          e autentico.
        </p>
      </div>
    </section>

    <!-- Come Lavoro Section (COME NASCONO LE TUE PRODUZIONI) -->
    <section class="service-detail-section">
      <div class="container">
        <h2 class="benefits-title">COME NASCONO LE TUE PRODUZIONI</h2>

        <div class="service-detail-content">
          <div class="service-detail-text-wrapper">
            <!-- Wrapper for text to manage order on mobile -->
            <div class="service-detail-text">
              <p>
                La tua musica è più di semplici note e parole: è la tua storia. Per questo, ogni
                produzione inizia da te. Non ti chiederò di adattarti a un genere, ma costruiremo
                insieme un suono che sia solo tuo.
              </p>

              <div style="margin-top: 2rem">
                <h4>
                  <strong>Step 1: La Nostra Sessione Conoscitiva</strong>
                </h4>
                <p>
                  Tutto parte da una chiacchierata gratuita e senza impegno.<br />Voglio capire chi
                  sei: i tuoi obiettivi, le tue reference musicali e il messaggio che vuoi
                  comunicare. In questa fase, definiamo anche le tempistiche: così potrai
                  concentrarti solo sulla tua musica, senza stress.
                </p>
              </div>

              <div style="margin-top: 1.5rem">
                <h4><strong>Step 2: Costruiamo Insieme, Sessione Dopo Sessione</strong></h4>
                <p>
                  Per il tuo primo brano, lavoreremo fianco a fianco, in presenza nel mio studio.
                  Assisterai alla nascita della tua traccia: sceglieremo insieme gli elementi
                  essenziali, dai suoni agli arrangiamenti.
                </p>
              </div>

              <div style="margin-top: 1.5rem">
                <h4><strong>Step 3: Dalla Demo al Suono Professionale</strong></h4>
                <p>
                  Una volta definita la struttura e l'anima del brano, mi occuperò di finalizzare la
                  produzione, arricchendola con quel tocco professionale che la renderà pronta per
                  le registrazioni vocali e gli step successivi.
                </p>
              </div>
            </div>
          </div>

          <div class="service-detail-image-wrapper">
            <!-- Wrapper for image and infobox -->
            <div class="service-detail-image">
              <img
                src="/images/produzione/processo-creativo.jpg"
                alt="Elia Pirrello in studio di registrazione durante il processo creativo"
              />
            </div>
            <div class="info-box-produzione image-related-box">
              <p>
                <strong>Info:</strong> I progetti musicali che posso seguire contemporaneamente sono
                limitati, per garantire la massima attenzione e qualità. Se vuoi lavorare insieme
                contattami e organizziamo subito il primo incontro!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Un Percorso su Misura Section -->
    <section class="service-detail-section">
      <div class="container">
        <h2 class="benefits-title">UN PERCORSO SU MISURA PER TE</h2>

        <div class="service-detail-content">
          <div class="service-detail-text-wrapper">
            <!-- Wrapper for text -->
            <div class="service-detail-text">
              <p>
                Ogni artista ha esigenze diverse.<br />
                Il mio obiettivo non è venderti un 'pacchetto standard', ma costruire insieme il
                percorso perfetto per il tuo brano e per la tua crescita.
              </p>
              <p>
                A partire dalla seconda produzione inizieremo a conoscerci meglio, e potremo
                finalmente iniziare a lavorare a progetto!<br />Questo ci permetterà di includere
                uno o più di questi extra:
              </p>

              <ul class="service-detail-list">
                <li>
                  Esplorazione Creativa con più Demo Beat Iniziali: Per fornirti più di un punto di
                  partenza, così da scegliere con più precisione o avere materiale per scrivere
                  nuovi brani.
                </li>
                <li>
                  Sessioni di Songwriting Collaborative: Se senti che il tuo brano ha bisogno di
                  quel 'qualcosa in più' a livello di testo o melodia.
                </li>
                <li>
                  Vocal Coaching: Sessione 1 a 1 con il nostro vocal coach di fiducia, che ti
                  aiuterà a prepararti per la registrazione definitiva del brano e la performance
                  live!
                </li>
                <li>
                  Registrazione Vocale Guidata e Professionale: Ti supporto in studio per ottenere
                  la tua migliore performance, curando ogni sfumatura.
                </li>
                <li>
                  Mixing e Mastering di Livello Radiofonico: Finalizziamo il tuo brano perché suoni
                  incredibile su ogni piattaforma e possa competere con le grandi hit.
                </li>
                <li>
                  Social Media Strategy: Sessione 1 a 1 con la nostra Social Media Manager di
                  fiducia per realizzare la release strategy perfetta per te, per arrivare a più
                  persone pianificando contenuti veramente tuoi.
                </li>
              </ul>
            </div>
          </div>

          <div class="service-detail-image-wrapper">
            <!-- Wrapper for image and bonus box -->
            <div class="service-detail-image">
              <img
                src="/images/produzione/steps-produzione.jpg"
                alt="Strumentazione professionale per produzione musicale avanzata"
              />
            </div>
            <div class="bonus-box image-related-box">
              <h3 class="bonus-title">BONUS ESCLUSIVO:</h3>
              <p>
                <strong>Sound Design Starter Kit Personale:</strong> Riceverai una mini-libreria di
                suoni unici creati durante la nostra produzione, da usare per le tue future
                produzioni.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Study Section -->
    <section class="service-detail-section">
      <div class="container">
        <div class="case-study">
          <h3 class="case-study-title">DALL'IDEA AL GENERE UNICO: LA STORIA DI TOMMIOTTOCENTO</h3>

          <div class="case-study-content">
            <div class="case-study-text">
              <p>
                Con Tommiottocento è nato tutto da una chiacchiera al bar. Attraverso sessioni di
                esperimenti per trovare il sound giusto, abbiamo creato un genere unico che unisce
                l'hyperpop all'indie italiano. Oggi, questa collaborazione si è evoluta in un
                supporto completo, che va dalla produzione musicale alla direzione creativa, fino
                all'accompagnamento live come tastierista.
              </p>
              <RouterLink
                :to="{ path: '/portfolio', query: { openModalId: 'tommiottocento' } }"
                class="text-link-arrow"
              >
                Scopri di più sul progetto <i class="fas fa-arrow-right"></i>
              </RouterLink>
            </div>

            <div class="case-study-image">
              <img
                src="/images/produzione/tommiottocento-performance.jpg"
                alt="Tommiottocento in una performance live con Elia Pirrello"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta cta-primary">
      <div class="container">
        <h2 class="cta-title">PRONTO A DAR VITA ALLE TUE IDEE MUSICALI?</h2>
        <p class="cta-text">Trasformiamole in brani veramente tuoi.</p>
        <a
          href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20parlarti%20del%20mio%20progetto%20di%20produzione%21"
          class="btn btn-primary"
          target="_blank"
          >PARLAMI DEL TUO PROGETTO</a
        >
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Stili specifici per la pagina ProduzioneView. */

.service-detail-section {
  padding: 5rem 0;
}

.service-detail-section:nth-child(odd) {
  background-color: var(--color-light-gray);
}

.service-detail-section:nth-child(even) {
  background-color: var(--color-white);
}

.service-detail-title {
  color: var(--color-dark-gray);
  text-shadow: none;
  margin-bottom: 2rem;
}

.service-detail-content {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: flex-start;
}

.service-detail-text-wrapper, /* New wrapper for text content */
.service-detail-image-wrapper {
  /* New wrapper for image content + related box */
  flex: 1;
  min-width: 300px; /* Ensure they take up space */
  display: flex; /* Enable flex for internal alignment if needed */
  flex-direction: column; /* Stack image and box */
}

.service-detail-text {
  /* flex: 1; Removed, wrapper handles flex now */
  /* min-width: 300px; Removed */
}
.service-detail-text h4 {
  color: var(--color-dark-gray);
  text-shadow: none;
  text-transform: none;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}
.service-detail-text p {
  color: var(--color-black);
  margin-bottom: 1rem;
}

/* Styling for image containers */
.service-detail-image,
.case-study-image {
  /* flex: 1; Removed, wrapper handles flex now */
  position: relative;
  background-color: var(--color-light-gray); /* Fallback background */
  /* min-height: 250px;  Let image define height */
}

.service-detail-image {
  /* min-width: 300px;  Removed */
  max-width: 500px;
  width: 100%; /* Image container takes width of its wrapper */
  /* min-height: 350px; Removed */
}

.case-study-image {
  /* min-width: 250px; Removed */
  max-width: 350px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.05); /* Darker fallback for dark section */
}

/* Styling for actual images */
.service-detail-image img,
.case-study-image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

/* Box related to an image (infobox, bonusbox) */
.image-related-box {
  margin-top: 1.5rem; /* Space between image and this box */
  width: 100%; /* Takes full width of its wrapper */
  max-width: 500px; /* Consistent with image max-width */
}

.info-box-produzione {
  background-color: var(--color-light-gray);
  border-left: 5px solid var(--color-blue);
  padding: 1.5rem;
  /* margin-top: 2rem; Handled by .image-related-box or inline */
  border-radius: 5px;
}
.info-box-produzione p {
  color: var(--color-dark-gray);
  margin-bottom: 0;
}
.info-box-produzione strong {
  color: var(--color-blue);
}

.service-detail-list {
  margin: 2rem 0;
  padding-left: 1.5rem;
  list-style: none;
}

.service-detail-list li {
  margin-bottom: 1rem;
  position: relative;
  color: var(--color-dark-gray);
  padding-left: 1rem;
}

.service-detail-list li::before {
  content: '';
  position: absolute;
  left: -0.75rem;
  top: 0.6em;
  transform: translateY(-50%);
  width: 0.6rem;
  height: 0.6rem;
  background-color: var(--color-red);
  border-radius: 50%;
}

.case-study {
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  padding: 3rem;
  border-radius: 10px;
  margin: 3rem 0;
}

.case-study-title {
  color: var(--color-white);
  margin-bottom: 1.5rem;
  text-align: center;
}

.case-study-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: center;
}

.case-study-text {
  flex: 2;
  min-width: 300px;
}
.case-study-text p {
  color: var(--color-light-gray);
}

/* Sober link for case study */
.text-link-arrow {
  display: inline-block;
  margin-top: 1.5rem;
  color: var(--color-yellow); /* Or another accent color from your palette */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}
.text-link-arrow:hover {
  color: var(--color-white); /* Brighter on hover */
}
.text-link-arrow .fas {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}
.text-link-arrow:hover .fas {
  transform: translateX(5px);
}

.bonus-box {
  background-color: var(--color-yellow);
  color: var(--color-dark-gray);
  padding: 2rem;
  border-radius: 10px;
  /* margin-top: 2rem; Handled by .image-related-box or inline */
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15); /* Same shadow as images */
}

.bonus-box::before {
  content: 'BONUS';
  position: absolute;
  top: 10px;
  right: -30px;
  background-color: var(--color-red);
  color: var(--color-white);
  padding: 0.3rem 3rem;
  transform: rotate(45deg);
  font-weight: bold;
  font-size: 0.8rem;
  transform-origin: top right;
}

.bonus-title {
  color: var(--color-dark-gray);
  margin-bottom: 1rem;
}
.bonus-box p {
  color: var(--color-black);
}
.bonus-box strong {
  color: var(--color-dark-gray);
}

@media (max-width: 768px) {
  .service-detail-content {
    flex-direction: column;
  }

  .service-detail-text-wrapper {
    /* Text comes first on mobile */
    order: 1;
  }
  .service-detail-image-wrapper {
    /* Image and its related box come after text */
    order: 2;
    width: 100%; /* Full width for image wrapper on mobile */
  }

  .service-detail-image,
  .case-study-image,
  .image-related-box {
    /* Ensure related boxes also go full width and have consistent max-width */
    width: 100%;
    max-width: none;
  }
  .service-detail-image {
    margin-bottom: 0; /* Remove margin if related box follows directly */
  }
  .case-study-image {
    order: -1; /* For case study, image still comes before text on mobile */
    margin-bottom: 2rem;
  }

  .service-detail-title {
    font-size: 1.8rem;
  }
  .service-detail-text h4 {
    font-size: 1.1rem;
  }
}
</style>
