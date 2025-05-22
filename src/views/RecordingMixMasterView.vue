<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isEquipmentModalOpen = ref(false)

const openEquipmentModal = () => {
  isEquipmentModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeEquipmentModal = () => {
  isEquipmentModalOpen.value = false
  document.body.style.overflow = 'auto'
}

const handleClickOutsideEquipmentModal = (event) => {
  if (isEquipmentModalOpen.value) {
    const modalElement = document.getElementById('equipmentModal')
    if (modalElement && event.target === modalElement) {
      closeEquipmentModal()
    }
  }
}

onMounted(() => {
  window.addEventListener('click', handleClickOutsideEquipmentModal)
})

onUnmounted(() => {
  window.removeEventListener('click', handleClickOutsideEquipmentModal)
  if (isEquipmentModalOpen.value) {
    document.body.style.overflow = 'auto'
  }
})
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <section class="page-hero section-gradient-overlay">
      <div class="container page-hero-content">
        <h1 class="space-up-down hero-main-title">RECORDING, MIX & MASTER:</h1>
        <p class="space-up-down hero-main-description">
          Per ottenere la performance perfetta in studio e un suono impeccabile su ogni piattaforma.
        </p>
      </div>
    </section>

    <section class="service-detail-section bg-light">
      <div class="container">
        <h2 class="section-title section-title-on-light">Recording</h2>
        <div class="service-detail-content">
          <div class="service-detail-text-wrapper">
            <div class="service-detail-text">
              <p>
                Nelle sessioni di registrazione ti guido per tirare fuori il meglio dal tuo testo.
                <br /><br />
                Tutto il tempo necessario per ottenere la performance perfetta, un ambiente
                professionale e consigli tecnici.
              </p>
              <div class="btn-wrapper">
                <button
                  @click="openEquipmentModal"
                  class="btn btn-secondary"
                  style="margin-bottom: 1.5rem"
                >
                  SCHEDA TECNICA STUDIO
                </button>
              </div>
            </div>
          </div>
          <div class="service-detail-image-wrapper">
            <div class="service-detail-image">
              <img
                src="/images/mix-master/mic.jpg"
                alt="Microfono professionale Neumann U87 in studio di registrazione"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mixing & Mastering Section -->
    <!-- Applico bg-white esplicitamente -->
    <section class="service-detail-section bg-white">
      <div class="container">
        <h2 class="section-title section-title-on-light">Mixing & Mastering</h2>
        <div class="service-detail-content">
          <div class="service-detail-text-wrapper">
            <div class="service-detail-text">
              <p>
                Non mi limito a bilanciare i volumi. Plasmo ogni suono per dare al tuo brano
                l'impatto che merita.
                <br />Anche le produzioni più semplici possono suonare grandi e professionali.
              </p>
              <p>Ed il mio lavoro di mixing e mastering te lo garantisce.</p>
            </div>
            <div class="guarantee-box">
              <!-- .guarantee-title (h3) sarà bianco con ombra su sfondo verde -->
              <h3 class="guarantee-title">LE MIE GARANZIE PER TE:</h3>
              <ul class="guarantee-list">
                <li>Consegna in meno di 7 giorni (altrimenti ricevi uno sconto del 20%)</li>
                <li>
                  Garanzia di soddisfazione: Se per qualsiasi ragione non dovessi essere
                  soddisfatto, rifaccio mix e master da zero, gratis!
                </li>
              </ul>
            </div>
          </div>
          <div class="service-detail-image-wrapper">
            <div class="service-detail-image">
              <img
                src="/images/mix-master/speakers.jpg"
                alt="Monitor da studio Neumann e console per mixing e mastering"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Equipment Modal -->
    <div id="equipmentModal" class="portfolio-modal" v-show="isEquipmentModalOpen">
      <div class="portfolio-modal-content equipment-modal-content">
        <button class="portfolio-modal-close" @click="closeEquipmentModal">
          <i class="fas fa-times"></i>
        </button>
        <div class="portfolio-modal-details">
          <!-- .portfolio-modal-title (h2) sarà scuro su sfondo bianco -->
          <h2 class="portfolio-modal-title">Scheda Tecnica Studio</h2>
          <ul class="equipment-list">
            <li>Microfono Neumann U87</li>
            <li>Microfono AKG C214</li>
            <li>Microfono Shure Beta58A</li>
            <li>Microfono Universal Audio Townsend LABS Sphere L22</li>
            <li>Scheda Audio Apollo X8</li>
            <li>Monitor Neumann Kh310 + Sub Neumann KH810</li>
            <li>Monitor monovia Auratone</li>
            <li>Monitor iLoud Micro</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="cta cta-primary">
      <div class="container">
        <!-- .cta-title (h2) sarà bianco con ombra su sfondo blu -->
        <h2 class="section-title cta-title">VUOI FINALIZZARE O REGISTRARE IL TUO BRANO?</h2>
        <p class="section-intro cta-text">
          Se hai già registrato il tuo brano e vuoi che suoni al meglio, o se stai cercando uno
          studio a Milano per registrare la tua musica.
        </p>
        <a
          href="https://wa.me/393661980944?text=Ciao%20Elia%2C%20vorrei%20parlarti%20di%20recording%2C%20mix%20o%20master%21"
          class="btn btn-primary"
          target="_blank"
          >CHIEDIMI UN PREVENTIVO</a
        >
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Titoli h2 specifici se necessario, altrimenti .section-title-on-light è sufficiente */
/* .service-detail-title è ridondante se si usa .section-title-on-light */

/* Classi esplicite per lo sfondo */
.service-detail-section.bg-light {
  background-color: var(--color-light-gray);
}
.service-detail-section.bg-white {
  background-color: var(--color-white);
}

.service-detail-content {
  display: flex;
  flex-wrap: wrap;

  align-items: flex-start;
}

.service-detail-image {
  position: relative;
  background-color: var(--color-light-gray); /* Fallback */
  width: 100%; /* L'immagine prende la larghezza del suo wrapper, fino a max-width */
  max-width: 500px; /* Limita la larghezza massima dell'immagine */
}

.service-detail-image img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.guarantee-box {
  background-color: var(--color-green); /* Sfondo verde per guarantee box */
  color: var(--color-white); /* Testo di default bianco */
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  order: 2;
  margin-bottom: 1.5rem;
}
.guarantee-box::before {
  /* Stile nastro GARANZIA */
  content: 'GARANZIA';
  position: absolute;
  top: 10px;
  right: -45px; /* Aggiustato per testo più lungo */
  background-color: var(--color-red);
  color: var(--color-white);
  padding: 0.4rem 4rem; /* Aggiustato per testo più lungo */
  transform: rotate(45deg);
  font-weight: bold;
  font-size: 0.75rem;
  transform-origin: top right;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.guarantee-title {
  /* Titolo H3 nel guarantee box */
  color: var(--color-white); /* Testo bianco, ombra da h3 globale */
  margin-bottom: 1rem;
  font-size: 1.3rem;
}
.guarantee-list {
  list-style: none;
  padding-left: 1.5rem; /* Spazio per i bullet */
  margin-top: 0.5rem;
  color: var(--color-white); /* Testo della lista bianco */
}
.guarantee-list li {
  position: relative;
  margin-bottom: 0.8rem;
  padding-left: 0.5rem; /* Spazio tra bullet e testo */
  line-height: 1.6;
}
.guarantee-list li::before {
  content: '';
  position: absolute;
  left: -1rem; /* Posiziona il bullet fuori dal testo */
  top: 0.5em; /* Allinea verticalmente con il testo */
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--color-white); /* Bullet bianchi */
  border-radius: 50%;
}

/* Stili per il Modale dell'Attrezzatura */
.portfolio-modal {
  /* Stile backdrop */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.85); /* Leggermente più scuro */
  z-index: 2000;
  overflow-y: auto;
  padding: 2rem; /* Padding per il backdrop stesso */
  display: flex;
  align-items: center;
  justify-content: center;
}
.equipment-modal-content {
  /* Specifico per il contenuto del modale attrezzatura */
  background-color: var(--color-white);
  max-width: 550px; /* Adattato per la lista */
  width: 100%; /* Occupa la larghezza disponibile fino a max-width */
  margin: auto;
  border-radius: 8px;
  position: relative;
  padding: 2.5rem; /* Padding interno maggiore */
  padding-top: 3.5rem; /* Più spazio in alto per il bottone di chiusura */
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
}
.portfolio-modal-close {
  position: absolute;
  top: 1rem; /* Spazio dal bordo superiore del modal-content */
  right: 1rem; /* Spazio dal bordo destro del modal-content */
  background: var(--color-red);
  color: var(--color-white);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem; /* Icona leggermente più piccola */
  line-height: 1;
  cursor: pointer;
  z-index: 10;
  border: none;
  transition: background-color 0.3s ease;
}
.portfolio-modal-close:hover {
  background-color: #cc0000; /* Rosso più scuro */
}

.portfolio-modal-title {
  /* Titolo H2 nel modale */
  color: var(--color-dark-gray); /* Testo scuro */
  text-shadow: none; /* No ombra su sfondo bianco */
  margin-bottom: 2rem; /* Più spazio prima della lista */
  text-align: center;
  font-size: 1.8rem; /* Dimensione per il titolo del modale */
  /* text-transform: uppercase; Ereditato da h2 globale */
}
/* .portfolio-modal-details non è necessario se .equipment-modal-content ha già padding */

.equipment-list {
  list-style: none;
  padding-left: 0;
  color: var(--color-dark-gray); /* Testo della lista scuro */
}
.equipment-list li {
  padding: 0.8rem 0; /* Padding verticale per ogni item */
  border-bottom: 1px solid var(--color-light-gray);
  font-size: 1.05rem; /* Leggermente più grande */
  line-height: 1.5;
}
.equipment-list li:first-child {
  padding-top: 0; /* Rimuovi padding sopra il primo elemento */
}
.equipment-list li:last-child {
  border-bottom: none;
  padding-bottom: 0; /* Rimuovi padding sotto l'ultimo elemento */
}

.cta-primary .section-title {
  /* Titolo H2 nella CTA */
  text-align: center;
}
.cta-primary .section-intro {
  /* Paragrafo nella CTA */
  text-align: center;
}

@media (max-width: 768px) {
  /* Mobile */
  .service-detail-content {
    flex-direction: column;
    align-items: center;
  }

  /* Titoli di sezione H2 */
  .section-title-on-light,
  .cta-primary .section-title {
    font-size: 1.6rem;
  }
  /* Titolo H3 */
  .guarantee-title {
    font-size: 1.2rem;
  }

  .equipment-modal-content {
    max-width: calc(100% - 2rem); /* Più stretto su mobile */
    padding: 2rem;
    padding-top: 3rem;
  }
  .portfolio-modal-title {
    /* Titolo H2 nel modale su mobile */
    font-size: 1.5rem;
  }
  .equipment-list li {
    font-size: 1rem;
  }
}
</style>
