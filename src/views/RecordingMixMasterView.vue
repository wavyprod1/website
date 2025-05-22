<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Stato per il modale dell'attrezzatura
const isEquipmentModalOpen = ref(false)

const openEquipmentModal = () => {
  isEquipmentModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeEquipmentModal = () => {
  isEquipmentModalOpen.value = false
  document.body.style.overflow = 'auto'
}

// Funzione per gestire il click esterno per chiudere il modale
const handleClickOutsideEquipmentModal = (event) => {
  if (isEquipmentModalOpen.value) {
    const modalElement = document.getElementById('equipmentModal')
    // Chiudi se si clicca sull'elemento .portfolio-modal (lo sfondo scuro)
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
  // Assicurati che lo scroll del body sia ripristinato se il componente viene smontato con il modale aperto
  if (isEquipmentModalOpen.value) {
    document.body.style.overflow = 'auto'
  }
})
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1>RECORDING, MIX & MASTER:<br />L'ATTENZIONE CHE FA LA DIFFERENZA</h1>
        <p class="page-intro">
          Dalla performance perfetta in studio al suono impeccabile su ogni piattaforma.
        </p>
      </div>
    </section>

    <!-- Recording Section -->
    <section class="service-detail-section">
      <div class="container">
        <h2 class="benefits-title">Recording</h2>

        <div class="service-detail-content">
          <div class="service-detail-text-wrapper">
            <div class="service-detail-text">
              <p>
                Nelle sessioni di registrazione ti guido per tirare fuori il meglio dal tuo testo.
                <br /><br />
                Tutto il tempo necessario per ottenere la performance perfetta, un ambiente
                professionale e consigli tecnici.
              </p>
              <button
                @click="openEquipmentModal"
                class="btn btn-secondary"
                style="margin-top: 1.5rem"
              >
                SCHEDA TECNICA STUDIO
              </button>
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
    <section class="service-detail-section">
      <div class="container">
        <h2 class="benefits-title">Mixing & Mastering</h2>

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
            <div class="guarantee-box image-related-box">
              <h3 class="guarantee-title">LE MIE GARANZIE PER TE:</h3>
              <ul class="guarantee-list">
                <!-- Changed class for clarity -->
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
      <div class="portfolio-modal-content">
        <button class="portfolio-modal-close" @click="closeEquipmentModal">
          <i class="fas fa-times"></i>
        </button>
        <div class="portfolio-modal-details" style="padding-top: 4rem">
          <!-- Added padding-top to avoid overlap with close button -->
          <h2 class="portfolio-modal-title" style="text-align: center">Scheda Tecnica Studio</h2>
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
        <h2 class="cta-title">VUOI FINALIZZARE O REGISTRARE IL TUO BRANO?</h2>
        <p class="cta-text">
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
/* Stili specifici per la pagina RecordingMixMasterView. */
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

.service-detail-text-wrapper,
.service-detail-image-wrapper {
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
}

.service-detail-text {
  /* Styles for the text block itself */
}

.service-detail-text p {
  color: var(--color-black);
  margin-bottom: 1rem;
}

.service-detail-image {
  position: relative;
  background-color: var(--color-light-gray); /* Fallback */
  width: 100%;
  max-width: 500px;
}

.service-detail-image img {
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
  max-width: 500px;
}

.guarantee-box {
  background-color: var(--color-green);
  color: var(--color-white);
  padding: 2rem;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.guarantee-box::before {
  content: 'GARANZIA';
  position: absolute;
  top: 10px;
  right: -45px;
  background-color: var(--color-red);
  color: var(--color-white);
  padding: 0.3rem 4rem;
  transform: rotate(45deg);
  font-weight: bold;
  font-size: 0.8rem;
  transform-origin: top right;
}

.guarantee-title {
  color: var(--color-white);
  margin-bottom: 1rem;
}

/* Stili per la lista UL dentro guarantee-box */
.guarantee-list {
  /* Renamed from service-detail-list for specificity */
  list-style: none;
  padding-left: 1.5rem;
  margin-top: 0.5rem;
  color: var(--color-white);
}
.guarantee-list li {
  position: relative;
  margin-bottom: 0.8rem;
  padding-left: 0.5rem;
}
.guarantee-list li::before {
  content: '';
  position: absolute;
  left: -1rem;
  top: 0.6em;
  transform: translateY(-50%);
  width: 0.5rem;
  height: 0.5rem;
  background-color: var(--color-white);
  border-radius: 50%;
}

/* Stili per il Modale dell'Attrezzatura (riutilizzando stili portfolio) */
.portfolio-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  overflow-y: auto;
  padding: 2rem 0;
  display: flex; /* Per centrare il contenuto verticalmente e orizzontalmente */
  align-items: center;
  justify-content: center;
}
.portfolio-modal-content {
  background-color: var(--color-white);
  max-width: 600px; /* Larghezza adatta per una lista */
  width: calc(100% - 4rem); /* Responsive con padding laterale */
  margin: auto; /* Centra orizzontalmente */
  border-radius: 10px;
  overflow: hidden; /* In realtà, per questo modale con solo testo, potrebbe non essere necessario */
  position: relative;
  padding: 2rem; /* Padding interno per il contenuto */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}
.portfolio-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--color-red);
  color: var(--color-white);
  width: 35px; /* Leggermente più piccolo */
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem; /* Leggermente più piccolo */
  cursor: pointer;
  z-index: 10;
  border: none;
}
.portfolio-modal-title {
  /* Già definito, ma assicuriamoci che vada bene */
  color: var(--color-dark-gray);
  margin-bottom: 1.5rem; /* Spazio prima della lista */
  text-align: center;
}
.portfolio-modal-details {
  /* Usato per il padding intorno al titolo e alla lista */
  /* padding-top: 4rem; Rimosso, gestito dal padding del content */
}

.equipment-list {
  list-style: none;
  padding-left: 0;
  color: var(--color-dark-gray);
}
.equipment-list li {
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--color-light-gray);
  font-size: 1.1rem;
}
.equipment-list li:last-child {
  border-bottom: none;
}

@media (max-width: 768px) {
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
    max-width: none;
  }
  .service-detail-image {
    margin-bottom: 0;
  }

  .service-detail-title {
    font-size: 1.8rem;
  }

  .portfolio-modal-content {
    max-width: calc(100% - 2rem); /* Più spazio su mobile */
    padding: 1.5rem;
  }
  .portfolio-modal-title {
    font-size: 1.5rem;
  }
  .equipment-list li {
    font-size: 1rem;
  }
}
</style>
