<script setup>
import { onMounted } from 'vue'
// import { RouterLink } from 'vue-router'; // Non sembra usato qui

onMounted(() => {
  // Newsletter form submission
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
        subscribers.push({
          email: email,
          date: new Date().toISOString(),
        })
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
    <section class="page-hero">
      <div class="container">
        <h1>FACCIAMO MUSICA INSIEME?</h1>
        <p class="page-intro">
          Hai un'idea, un progetto, o semplicemente vuoi fare due chiacchiere sulla tua musica? Non
          vedo l'ora di sentirti.
        </p>
      </div>
    </section>

    <!-- Contact Methods Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-methods">
          <!-- WhatsApp Contact Method -->
          <div class="contact-method">
            <!-- MODIFICA: Aggiunta classe icon-green -->
            <div class="contact-icon icon-green">
              <i class="fab fa-whatsapp"></i>
            </div>
            <h2 class="contact-title">WHATSAPP</h2>
            <p class="contact-description">
              Il modo più veloce per raccontarmi del tuo progetto e iniziare a collaborare.
            </p>
            <!-- MODIFICA: Aggiunta classe btn-green -->
            <a
              href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20raccontarti%20del%20mio%20progetto%20musicale%21"
              class="btn btn-green"
              target="_blank"
              >SCRIVIMI</a
            >
          </div>

          <!-- Email Contact Method -->
          <div class="contact-method">
            <!-- MODIFICA: Aggiunta classe icon-blue -->
            <div class="contact-icon icon-blue">
              <i class="far fa-envelope"></i>
            </div>
            <h2 class="contact-title">EMAIL</h2>
            <p class="contact-description">
              Preferisci scrivere una mail? Sarò felice di risponderti al più presto.
            </p>
            <!-- MODIFICA: Mantenuto btn-secondary (che è già blu) o puoi creare btn-blue se vuoi essere esplicito -->
            <a href="mailto:wavywork1@gmail.com" class="btn btn-secondary">INVIAMI UNA EMAIL</a>
          </div>

          <!-- Instagram Contact Method -->
          <div class="contact-method">
            <!-- MODIFICA: Aggiunta classe icon-red -->
            <div class="contact-icon icon-red">
              <i class="fab fa-instagram"></i>
            </div>
            <h2 class="contact-title">INSTAGRAM</h2>
            <p class="contact-description">
              Seguimi per contenuti esclusivi e scrivimi in DM per qualsiasi domanda.
            </p>
            <!-- MODIFICA: Aggiunta classe btn-red -->
            <a href="https://www.instagram.com/wavyprod1/" class="btn btn-red" target="_blank"
              >VISITA IL PROFILO</a
            >
          </div>
        </div>

        <!-- Newsletter Section (invariata) -->
        <div class="newsletter-section">
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
.contact-section:nth-child(odd) {
  background-color: var(--color-light-gray);
}
.contact-section:nth-child(even) {
  background-color: var(--color-white);
}
.contact-methods {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;
  justify-content: center;
}
.contact-method {
  background-color: var(--color-white);
  border-radius: 10px;
  padding: 2.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  display: flex; /* NEW */
  flex-direction: column; /* NEW */
}
.contact-method:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

/* Stili base per contact-icon, il colore verrà sovrascritto */
.contact-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  /* color: var(--color-red); Rimosso colore di default, verrà specificato con classi */
}

/* MODIFICA: Aggiunta classi per icone colorate */
.contact-icon.icon-green {
  color: var(--color-green);
}
.contact-icon.icon-blue {
  color: var(--color-blue);
}
.contact-icon.icon-red {
  color: var(--color-red);
}

.contact-title {
  color: var(--color-dark-gray);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
.contact-description {
  color: var(--color-dark-gray);
  margin-bottom: 1.5rem;
  flex: 1; /* NEW: makes description take available space */
}

/* MODIFICA: Aggiunta classi per bottoni colorati */
/* .btn è definito globalmente. Aggiungiamo varianti di colore. */
/* .btn-primary è già rosso (var(--color-red)) */
/* .btn-secondary è già blu (var(--color-blue)) */

.btn.btn-green {
  background-color: var(--color-green);
  color: var(--color-white); /* Assicurati che il testo sia leggibile */
}
.btn.btn-green:hover {
  background-color: #2aa34a; /* Un verde leggermente più scuro per l'hover */
  /* Puoi aggiungere transform e box-shadow come per gli altri btn se vuoi */
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(52, 199, 89, 0.3);
}

.btn.btn-red {
  /* Questa classe serve se vuoi distinguere dal btn-primary */
  background-color: var(--color-red);
  color: var(--color-white);
}
.btn.btn-red:hover {
  background-color: #e6352b;
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 59, 48, 0.3);
}
/* Se btn-secondary (blu) va bene per l'email, non serve .btn-blue.
   Se vuoi una classe esplicita .btn-blue, la puoi definire come sopra.
   .btn.btn-blue {
     background-color: var(--color-blue);
     color: var(--color-white);
   }
   .btn.btn-blue:hover {
     background-color: #0066d6;
     transform: translateY(-3px);
     box-shadow: 0 5px 15px rgba(0, 122, 255, 0.3);
   }
*/

.newsletter-section {
  background-color: var(--color-dark-gray);
  padding: 3rem;
  border-radius: 10px;
  margin-top: 4rem;
  color: var(--color-white);
  text-align: center;
}
.newsletter-title {
  color: var(--color-white);
  margin-bottom: 1rem;
}
.newsletter-description {
  max-width: 600px;
  margin: 0 auto 2rem;
}
.newsletter-form {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
}
.newsletter-input {
  flex: 1;
  min-width: 250px;
  padding: 1rem;
  border: none;
  border-radius: 5px;
  font-family: var(--font-primary);
  font-size: 1rem;
}

@media (max-width: 768px) {
  .contact-methods {
    flex-direction: column;
    align-items: center;
  }
  .contact-method {
    width: 100%;
    max-width: 100%;
  }
  .newsletter-form {
    flex-direction: column;
  }
}
</style>
