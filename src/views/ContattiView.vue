<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const newsletterForm = document.getElementById('newsletter-form')
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault()
      const emailInput = document.getElementById('newsletter-email')
      const email = emailInput.value
      const mailtoLink = `mailto:wavywork1@gmail.com?subject=Iscrizione%20Newsletter&body=Vorrei%20iscrivermi%20alla%20newsletter:%20${encodeURIComponent(email)}`
      const hiddenLink = document.createElement('a')
      hiddenLink.href = mailtoLink
      hiddenLink.style.display = 'none'
      document.body.appendChild(hiddenLink)
      hiddenLink.click()
      document.body.removeChild(hiddenLink)
      const successMessage = document.getElementById('newsletter-success')
      if (successMessage) successMessage.style.display = 'block'
      if (emailInput) emailInput.value = ''
      try {
        const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]')
        subscribers.push({ email: email, date: new Date().toISOString() })
        localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers))
      } catch (error) {
        console.error('Error saving to localStorage:', error)
      }
    })
  }
})
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <!-- Applica la classe globale .section-gradient-overlay per lo sfondo sfumato -->
    <section class="page-hero section-gradient-overlay">
      <div class="container page-hero-content">
        <!-- h1 e p erediteranno colore bianco e text-shadow dal CSS globale -->
        <h1 class = "space-up-down hero-main-title">CONTATTI</h1>
        <p class="space-up-down hero-main-description">
          Hai un'idea, un progetto, o semplicemente vuoi fare due chiacchiere sulla tua musica? Non
          vedo l'ora di sentirti.
        </p>
      </div>
    </section>

    <!-- Contact Methods Section -->
    <!-- Applico bg-white esplicitamente per chiarezza -->
    <section class="contact-section bg-white">
      <div class="container">
        <div class="contact-methods">
          <!-- WhatsApp Contact Method -->
          <div class="contact-method">
            <div class="contact-icon icon-green">
              <i class="fab fa-whatsapp"></i>
            </div>
            <!-- .contact-title sarà scuro su sfondo bianco -->
            <h2 class="contact-title">WHATSAPP</h2>
            <p class="contact-description">
              Il modo più veloce per raccontarmi del tuo progetto e iniziare a collaborare.
            </p>
            <a
              href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
              class="btn btn-green"
              target="_blank"
              >SCRIVIMI</a
            >
          </div>

          <!-- Email Contact Method -->
          <div class="contact-method">
            <div class="contact-icon icon-blue">
              <i class="far fa-envelope"></i>
            </div>
            <h2 class="contact-title">EMAIL</h2>
            <p class="contact-description">
              Preferisci scrivere una mail? Sarò felice di risponderti al più presto.
            </p>
            <a href="mailto:wavywork1@gmail.com" class="btn btn-secondary">INVIAMI UNA EMAIL</a>
          </div>

          <!-- Instagram Contact Method -->
          <div class="contact-method">
            <div class="contact-icon icon-red">
              <i class="fab fa-instagram"></i>
            </div>
            <h2 class="contact-title">INSTAGRAM</h2>
            <p class="contact-description">
              Seguimi per contenuti esclusivi e scrivimi in DM per qualsiasi domanda.
            </p>
            <a href="https://www.instagram.com/wavyprod1/" class="btn btn-red" target="_blank"
              >VISITA IL PROFILO</a
            >
          </div>
        </div>

        <!-- Newsletter Section -->
        <div class="newsletter-section">
          <!-- .newsletter-title (h3) sarà bianco con ombra su sfondo scuro -->
          <h3 class="newsletter-title">RIMANI ISPIRATO: CONSIGLI E NOVITÀ ESCLUSIVE PER TE</h3>
          <p class="newsletter-description">
            Consigli di produzione, anteprime dei miei lavori e offerte solo per gli iscritti.
          </p>
          <form class="newsletter-form" id="newsletter-form" action="javascript:void(0);">
            <input
              type="email"
              class="newsletter-input"
              id="newsletter-email"
              placeholder="Il tuo indirizzo email"
              required
            />
            <button type="submit" class="btn btn-primary">ISCRIVITI</button>
          </form>
          <div
            id="newsletter-success"
            style="display: none; margin-top: 1rem; color: #4caf50; font-weight: bold"
          >
            Grazie per l'iscrizione! Riceverai una nostra email a breve.
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

.contact-section {
  /* padding: 5rem 0; Ereditato da 'section' nel CSS globale */
}
/* Classi esplicite per lo sfondo */
.contact-section.bg-light {
  background-color: var(--color-light-gray);
}
.contact-section.bg-white {
  background-color: var(--color-white);
}
/* Rimuovo nth-child per evitare conflitti se la struttura cambia */
/* .contact-section:nth-child(odd) { background-color: var(--color-light-gray); } */
/* .contact-section:nth-child(even) { background-color: var(--color-white); } */

.contact-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
.contact-method {
  background-color: var(--color-white); /* Sfondo bianco della card */
  border-radius: 10px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 280px; /* Aumentato leggermente per dare più respiro */
  max-width: 360px; /* Aumentato leggermente */
  display: flex;
  flex-direction: column;
}

.contact-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}
.contact-icon.icon-green { color: var(--color-green); }
.contact-icon.icon-blue { color: var(--color-blue); }
.contact-icon.icon-red { color: var(--color-red); }

.contact-title { /* Titolo H2 dentro la card di contatto */
  color: var(--color-dark-gray); /* Testo scuro */
  text-shadow: none; /* Rimuove l'ombra del testo globale */
  margin-bottom: 1rem;
  font-size: 1.5rem; /* Dimensione standard per questi titoli */
  /* text-transform: uppercase; Ereditato da h2 globale */
}
.contact-description {
  color: var(--color-dark-gray); /* Testo descrizione scuro */
  margin-bottom: 1.5rem;
  flex-grow: 1; /* Fa sì che la descrizione occupi lo spazio e il bottone sia in fondo */
  line-height: 1.6;
}

/* Stili per i bottoni colorati (alcuni potrebbero essere già nel globale) */
.btn.btn-green {
  background-color: var(--color-green);
  color: var(--color-white);
}
.btn.btn-green:hover {
  background-color: #2aa34a;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 199, 89, 0.3);
}

.btn.btn-red { /* .btn-primary è già rosso, questa è una ridondanza se hanno lo stesso effetto */
  background-color: var(--color-red);
  color: var(--color-white);
}
.btn.btn-red:hover {
  background-color: #e6352b;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 59, 48, 0.3);
}
/* .btn-secondary è già blu, quindi non serve una classe .btn-blue dedicata a meno di stili diversi */


.newsletter-section {
  background-color: var(--color-dark-gray); /* Sfondo scuro */
  padding: 3rem 1.5rem; /* Aggiunto padding laterale */
  border-radius: 10px;
  margin-top: 3rem; /* Spazio dalla sezione metodi di contatto */
  margin-bottom: 3rem;
  color: var(--color-white); /* Testo di default bianco */
  text-align: center;
}
.newsletter-title { /* Titolo H3 nella newsletter */
  color: var(--color-white); /* Testo bianco, ombra da h3 globale */
  margin-bottom: 1rem;
  font-size: 1.6rem; /* Leggermente più grande per H3 */
}
.newsletter-description {
  max-width: 600px;
  margin: 0 auto 2rem;
  color: var(--color-light-gray); /* Testo descrizione più chiaro */
}
.newsletter-form {
  display: flex;
  flex-wrap: wrap; /* Permette al bottone di andare sotto su mobile se non c'è spazio */
  gap: 1rem;
  max-width: 550px; /* Leggermente più grande */
  margin: 0 auto;
  align-items: center; /* Allinea verticalmente input e bottone */
}
.newsletter-input {
  flex: 1 1 300px; /* Permette di crescere ma ha una base */
  padding: 1rem;
  border: 1px solid var(--color-dark-gray); /* Bordo per contrasto su alcuni client email */
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1rem;
  color: var(--color-dark-gray); /* Testo scuro nell'input */
}
.newsletter-form .btn-primary { /* Bottone Iscriviti */
    flex-shrink: 0; /* Evita che il bottone si restringa troppo */
}

@media (max-width: 768px) {
  .contact-methods {
    flex-direction: column;
    align-items: stretch; /* Fa sì che le card prendano tutta la larghezza disponibile */
    gap: 1.5rem; /* Gap ridotto */
  }
  .contact-method {
    width: 100%; /* Occupa tutta la larghezza */
    max-width: 100%; /* Sovrascrive max-width precedente */
    min-width: unset; /* Rimuove min-width */
    padding: 2rem; /* Padding leggermente ridotto */
  }
  .newsletter-form {
    
  }
  .newsletter-input,
  .newsletter-form .btn-primary {
    width: 100%; /* Input e bottone a larghezza piena su mobile */
  }
}
</style>