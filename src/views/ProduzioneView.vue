<script setup>
// import { RouterLink } from 'vue-router'; // Assicurati che sia importato se lo usi
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <section class="page-hero section-gradient-overlay">
      <div class="container page-hero-content">
        <h1 class="space-up-down hero-main-title">PRODUZIONE MUSICALE:</h1>
        <p class="space-up-down hero-main-description">
          Per trasformare la tua visione artistica in un brano che ti rispecchi al 100%
        </p>
      </div>
    </section>

    <!-- Come Lavoro Section (COME NASCONO LE TUE PRODUZIONI) -->
    <!-- Applico bg-light esplicitamente -->
    <section class="service-detail-section bg-light">
      <div class="container">
        <h2 class="section-title section-title-on-light">COME NASCONO LE PRODUZIONI</h2>

        <div class="service-detail-content">
          <div class="service-detail-text-wrapper">
            <div class="service-detail-text">
              <p>
                La tua musica è più di semplici note e parole: è la tua storia. Per questo, ogni
                produzione inizia da te. Non ti chiederò di adattarti a un genere, ma costruiremo
                insieme un suono che sia solo tuo.
              </p>
              <div style="margin-top: 2rem">
                <h4><strong>Step 1: La Nostra Sessione Conoscitiva</strong></h4>
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
    <!-- Applico bg-white esplicitamente -->
    <section class="service-detail-section bg-white">
      <div class="container">
        <h2 class="section-title section-title-on-light">UN PERCORSO SU MISURA PER TE</h2>
        <div class="service-detail-content">
          <div class="service-detail-text-wrapper">
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
                <li>Esplorazione Creativa con più Demo Beat Iniziali</li>
                <li>Sessioni di Songwriting Collaborative</li>
                <li>Vocal Coaching</li>
                <li>Registrazione Vocale Guidata e Professionale</li>
                <li>Mixing e Mastering di Livello Radiofonico</li>
                <li>Social Media Strategy</li>
              </ul>
            </div>
          </div>
          <div class="service-detail-image-wrapper">
            <div class="service-detail-image">
              <img
                src="/images/produzione/steps-produzione.jpg"
                alt="Strumentazione professionale per produzione musicale avanzata"
              />
            </div>
            <div class="bonus-box image-related-box">
              <!-- .bonus-title (h3) sarà scuro su sfondo giallo -->
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

    <!-- CTA Section -->
    <section class="cta cta-primary">
      <div class="container">
        <!-- .cta-title (h2) sarà bianco con ombra su sfondo blu -->
        <h2 class="section-title cta-title">PRONTO A DAR VITA ALLE TUE IDEE MUSICALI?</h2>
        <p class="section-intro cta-text">Trasformiamole in brani veramente tuoi.</p>
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
/* Stile per il contenuto della page-hero */

/* Titoli h2 specifici se necessario, altrimenti .section-title-on-light è sufficiente */
/* .service-detail-title è ridondante se si usa .section-title-on-light */

.service-detail-section {
  padding: 1rem 0;
}
/* Classi esplicite per lo sfondo */
.service-detail-section.bg-light {
  background-color: var(--color-light-gray);
}
.service-detail-section.bg-white {
  background-color: var(--color-white);
}
/* La sezione case study non ha bisogno di bg-light/bg-white perché il .case-study div ha il suo sfondo */
.section-case-study {
  background-color: var(
    --color-white
  ); /* Sfondo della section che contiene il box scuro .case-study */
}

.service-detail-content {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; /* Allinea gli item all'inizio del loro asse trasversale */
}

.service-detail-image,
.case-study-image {
  position: relative;
  background-color: var(--color-light-gray); /* Fallback */
  width: 100%; /* L'immagine prende la larghezza del suo wrapper */
}

.service-detail-image {
  max-width: 500px; /* Limita la larghezza massima dell'immagine */
  margin-left: auto; /* Centra se il wrapper è più largo */
  margin-right: auto;
}

.case-study-image {
  max-width: 400px; /* Dimensione diversa per l'immagine del case study */
  margin-left: auto;
  margin-right: auto;
}

.service-detail-image img,
.case-study-image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.image-related-box {
  margin-top: 1.5rem;
  width: 100%;
  max-width: 500px; /* Coerente con service-detail-image */
  margin-left: auto; /* Centra se il wrapper è più largo */
  margin-right: auto;
}

.info-box-produzione {
  background-color: var(--color-light-gray); /* Sfondo chiaro per la info box */
  border-left: 5px solid var(--color-blue);
  padding: 1.5rem;
  border-radius: 0 5px 5px 0; /* Arrotonda solo gli angoli a destra */
}
.info-box-produzione p {
  color: var(--color-dark-gray);
  margin-bottom: 0;
}
.info-box-produzione strong {
  color: var(--color-blue);
}

.service-detail-list {
  margin: 1.5rem 0; /* Ridotto margine */
  padding-left: 1.5rem;
  list-style: none;
}
.service-detail-list li {
  margin-bottom: 0.8rem; /* Ridotto spazio tra li */
  position: relative;
  color: var(--color-dark-gray); /* Testo scuro */
  padding-left: 1rem; /* Spazio per il bullet */
  line-height: 1.6;
}
.service-detail-list li::before {
  content: '';
  position: absolute;
  left: -0.75rem; /* Posiziona il bullet fuori dal testo */
  top: 0.5em; /* Allinea verticalmente con il testo */
  width: 0.6rem;
  height: 0.6rem;
  background-color: var(--color-red);
  border-radius: 50%;
}

.case-study {
  background-color: var(--color-dark-gray); /* Sfondo scuro per il box case study */
  color: var(--color-white); /* Testo di default bianco */
  padding: 2.5rem; /* Padding interno */
  border-radius: 10px;
  margin: 0; /* Il margine è sulla section-case-study se necessario */
  overflow: hidden;
}

.case-study-title {
  /* Titolo H3 nel case study */
  color: var(--color-white); /* Testo bianco, ombra da h3 globale */
  margin-bottom: 2rem; /* Aumentato spazio sotto il titolo */
  text-align: center;
  font-size: 1.8rem; /* Dimensione specifica */
}

.case-study-content {
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem; /* Aumentato gap */
  align-items: center;
}

.case-study-text {
  flex: 1 1 55%; /* Testo prende più spazio */
  min-width: 280px;
}
.case-study-text p {
  color: var(--color-light-gray); /* Testo paragrafo chiaro */
  line-height: 1.7;
  margin-bottom: 1rem;
}

.case-study-image-wrapper {
  flex: 1 1 40%;
  min-width: 250px;
  display: flex;
  justify-content: center;
  hyphens: auto;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  align-items: center;
}

.case-study-image img {
  display: block;
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.text-link-arrow {
  display: block;
  margin-top: 1.5rem;
  color: var(--color-yellow);
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}
.text-link-arrow:hover {
  color: var(--color-white);
}
.text-link-arrow .fas {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}
.text-link-arrow:hover .fas {
  transform: translateX(5px);
}

.bonus-box {
  background-color: var(--color-yellow); /* Sfondo giallo per bonus box */
  color: var(--color-dark-gray); /* Testo di default scuro */
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* Ombra più sottile */
}
.bonus-box::before {
  /* Stile nastro BONUS */
  content: 'BONUS';
  position: absolute;
  top: 10px;
  right: -35px; /* Leggermente aggiustato */
  background-color: var(--color-red);
  color: var(--color-white);
  padding: 0.4rem 3.5rem; /* Leggermente aggiustato */
  transform: rotate(45deg);
  font-weight: bold;
  font-size: 0.75rem; /* Leggermente più piccolo */
  transform-origin: top right;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Ombra per il nastro */
}

.bonus-title {
  /* Titolo H3 nel bonus box */
  color: var(--color-dark-gray); /* Testo scuro */
  text-shadow: none; /* No ombra su sfondo giallo */
  margin-bottom: 1rem;
  font-size: 1.3rem; /* Dimensione specifica */
}
.bonus-box p {
  color: var(--color-dark-gray); /* Testo paragrafo scuro */
  line-height: 1.6;
}
.bonus-box strong {
  color: var(--color-dark-gray); /* Anche lo strong scuro */
  font-weight: 700;
}

.cta-primary .section-title {
  /* Titolo H2 nella CTA */
  text-align: center;
  /* Colore bianco e ombra da .cta-primary globale */
}
.cta-primary .section-intro {
  /* Paragrafo nella CTA */
  text-align: center;
  /* Colore bianco da .cta-primary globale */
}

@media (max-width: 992px) {
  /* Tablet */
  .service-detail-image-wrapper,
  .case-study-image-wrapper {
    /* Su tablet, potrebbero ancora stare affiancati o iniziare ad impilarsi
           a seconda dello spazio. flex-wrap si occuperà di questo. */
  }
}

@media (max-width: 768px) {
  /* Mobile */
  .service-detail-content {
    flex-direction: column;
  }
  .service-detail-text-wrapper {
    order: 1;
  }
  .service-detail-image-wrapper {
    order: 2;
    width: 100%;
  }

  .service-detail-image,
  .image-related-box {
    width: 100%;
    min-width: none;
  }

  .case-study-content {
    flex-direction: column;
    align-items: center;
  }
  .case-study-image-wrapper {
    /* Immagine prima del testo su mobile nel case study */
    order: -1;
    width: 100%; /* Occupa tutta la larghezza */
  }
  .case-study-image {
    margin-bottom: 1.5rem; /* Spazio tra immagine e testo */
  }
  .case-study-text {
    order: 2;
    line-height: 1.7;
  }

  /* Titoli di sezione H2 */
  .section-title-on-light,
  .case-study-title,
  .cta-primary .section-title {
    font-size: 1.6rem; /* Dimensione ridotta per mobile */
  }
  /* Titoli H3 */
  .bonus-title {
    font-size: 1.2rem;
  }
  /* Titoli H4 */
  .service-detail-text h4 {
    font-size: 1.15rem;
  }
}
</style>
