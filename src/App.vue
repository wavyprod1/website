<script setup>
// ... (lo script setup rimane invariato rispetto alla tua ultima versione) ...
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

// Gestione menu mobile
const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Se apriamo il menu mobile, chiudiamo la dropdown servizi se era aperta
  if (isMobileMenuOpen.value) {
    isServicesDropdownOpen.value = false
  }
}

// Gestione dropdown servizi
const isServicesDropdownOpen = ref(false)
let servicesTimeout = null // Per gestire il ritardo sull'hover out

const toggleServicesDropdown = () => {
  isServicesDropdownOpen.value = !isServicesDropdownOpen.value
}

const openServicesDropdown = () => {
  clearTimeout(servicesTimeout) // Cancella eventuale timeout di chiusura
  isServicesDropdownOpen.value = true
}

const closeServicesDropdown = (immediate = false) => {
  if (immediate) {
    isServicesDropdownOpen.value = false
  } else {
    servicesTimeout = setTimeout(() => {
      isServicesDropdownOpen.value = false
    }, 200) // Un piccolo ritardo per permettere di muovere il mouse sulla dropdown
  }
}

// Gestione copyright year
const currentYear = ref(new Date().getFullYear())

// Logica per chiudere menu mobile e dropdown servizi quando si clicca un link
const handleNavLinkClick = () => {
  isMobileMenuOpen.value = false
  isServicesDropdownOpen.value = false // Chiude anche la dropdown servizi
}
</script>

<template>
  <header>
    <div class="container header-container">
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <li class="nav-item">
          <!-- Aggiunta classe per hover specifico -->
          <RouterLink to="/" class="nav-link nav-link-home" @click="handleNavLinkClick"
            >Home</RouterLink
          >
        </li>

        <li
          class="nav-item nav-item-dropdown"
          @mouseenter="openServicesDropdown"
          @mouseleave="closeServicesDropdown()"
        >
          <!-- Aggiunta classe per hover specifico -->
          <a
            href="#"
            class="nav-link nav-link-servizi"
            @click.prevent="toggleServicesDropdown"
            aria-haspopup="true"
            :aria-expanded="isServicesDropdownOpen"
          >
            Servizi
            <i
              class="fas fa-chevron-down dropdown-arrow"
              :class="{ 'rotate-arrow': isServicesDropdownOpen }"
            ></i>
          </a>
          <ul
            class="dropdown-menu"
            v-if="isServicesDropdownOpen"
            @mouseenter="openServicesDropdown"
            @mouseleave="closeServicesDropdown()"
          >
            <li>
              <RouterLink to="/produzione" class="dropdown-link" @click="handleNavLinkClick"
                >Produzione Musicale</RouterLink
              >
            </li>

            <li>
              <RouterLink
                to="/recording-mix-master"
                class="dropdown-link"
                @click="handleNavLinkClick"
                >Recording, Mix & Master</RouterLink
              >
            </li>
          </ul>
        </li>

        <li class="nav-item">
          <!-- Aggiunta classe per hover specifico -->
          <RouterLink
            to="/portfolio"
            class="nav-link nav-link-portfolio"
            @click="handleNavLinkClick"
            >Portfolio</RouterLink
          >
        </li>
        <li class="nav-item">
          <!-- Aggiunta classe per hover specifico -->
          <RouterLink
            to="/contenuti"
            class="nav-link nav-link-contenuti"
            @click="handleNavLinkClick"
            >Contenuti</RouterLink
          >
        </li>
        <li class="nav-item">
          <!-- Aggiunta classe per hover specifico -->
          <RouterLink to="/contatti" class="nav-link nav-link-contatti" @click="handleNavLinkClick"
            >Contatti</RouterLink
          >
        </li>
      </ul>
    </div>
  </header>

  <RouterView />

  <footer>
    <!-- ... (footer rimane invariato) ... -->
    <div class="container">
      <div class="footer-container">
        <div class="footer-col">
          <h3>ELIA PIRRELLO</h3>
          <p>Produttore Musicale a Milano</p>
          <div class="social-links">
            <a href="https://www.instagram.com/wavyprod1/" class="social-link" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:wavywork1@gmail.com" class="social-link">
              <i class="far fa-envelope"></i>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3>NAVIGAZIONE</h3>
          <ul class="footer-nav">
            <li class="footer-nav-item">
              <RouterLink to="/" class="footer-nav-link" @click="handleNavLinkClick"
                >Home</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <RouterLink to="/portfolio" class="footer-nav-link" @click="handleNavLinkClick"
                >Portfolio</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <RouterLink to="/contenuti" class="footer-nav-link" @click="handleNavLinkClick"
                >Contenuti</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <RouterLink to="/contatti" class="footer-nav-link" @click="handleNavLinkClick"
                >Contatti</RouterLink
              >
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>SERVIZI</h3>
          <ul class="footer-nav">
            <li class="footer-nav-item">
              <RouterLink to="/produzione" class="footer-nav-link" @click="handleNavLinkClick"
                >Produzione Musicale</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <RouterLink to="/songwriting" class="footer-nav-link" @click="handleNavLinkClick"
                >Songwriting & Composizione</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <RouterLink
                to="/recording-mix-master"
                class="footer-nav-link"
                @click="handleNavLinkClick"
                >Recording, Mix & Master</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="copyright">
        © <span>{{ currentYear }}</span> Elia Pirrello. P.IVA [P.IVA_PLACEHOLDER]
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* ... (stili dropdown invariati) ... */
.nav-item-dropdown {
  position: relative; /* Necessario per posizionare la dropdown */
}

.dropdown-arrow {
  margin-left: 0.5em;
  font-size: 0.8em;
  transition: transform 0.3s ease;
}

.rotate-arrow {
  transform: rotate(180deg);
}

.dropdown-menu {
  display: block; /* v-if si occupa della visibilità */
  position: absolute;
  top: 100%; /* Sotto l'elemento "Servizi" */
  left: 0;
  background-color: var(--color-dark-gray); /* Stesso sfondo dell'header */
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  min-width: 220px; /* Larghezza minima per i link */
  z-index: 1001; /* Sopra altri elementi */
  border-radius: 0 0 5px 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.dropdown-menu li {
  padding: 0;
}

.dropdown-link {
  display: block;
  padding: 0.75rem 1.5rem;
  color: var(--color-white);
  text-decoration: none;
  font-weight: normal; /* Diverso da .nav-link per distinguerli */
  text-transform: none; /* Diverso da .nav-link */
  white-space: nowrap;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.dropdown-link:hover {
  background-color: var(--color-red);
  color: var(--color-white);
}

/* Stili per hover colorati dei nav-link principali */
/* Il nav-link base ha già una transizione color 0.3s ease dal CSS globale */

.nav-link.nav-link-home:hover {
  color: var(
    --color-light-gray
  ); /* Home rosso (come il default originale, o bianco se preferisci: var(--color-white)) */
}
.nav-link.nav-link-servizi:hover {
  /* Questo è il link "Servizi" che apre la dropdown */
  color: var(--color-green);
}
.nav-link.nav-link-portfolio:hover {
  color: var(--color-red);
}
.nav-link.nav-link-contenuti:hover {
  color: var(--color-yellow);
}
.nav-link.nav-link-contatti:hover {
  color: var(--color-blue);
}

/* Adattamenti per il menu mobile */
@media (max-width: 768px) {
  /* ... (stili dropdown mobile invariati) ... */
  .nav-menu.active .nav-item-dropdown .nav-link {
    /* Nel menu mobile, il link "Servizi" si comporta come gli altri */
  }

  .nav-menu.active .dropdown-menu {
    position: static; /* Rimuove il posizionamento assoluto */
    background-color: transparent; /* Sfondo trasparente, si integra nel menu mobile */
    border: none;
    box-shadow: none;
    padding-left: 1rem; /* Indentazione per i sotto-elementi */
    margin-top: 0.5rem;
    border-radius: 0;
  }

  .nav-menu.active .dropdown-link {
    padding: 0.5rem 1rem; /* Padding ridotto per mobile */
    text-align: center; /* O come gli altri link nel menu mobile */
  }

  .nav-menu.active .dropdown-link:hover {
    background-color: var(--color-red); /* Stesso hover del nav-link principale */
  }

  /* Nello stato active del menu mobile, potremmo volere che gli hover colorati si applichino comunque,
     o potremmo volere un comportamento di hover standard (es. sempre rosso).
     Se vogliamo mantenere gli hover colorati specifici anche nel menu mobile: */
  .nav-menu.active .nav-link.nav-link-home:hover {
    color: var(--color-light-gray);
  }
  .nav-menu.active .nav-link.nav-link-servizi:hover {
    color: var(--color-green);
  }
  .nav-menu.active .nav-link.nav-link-portfolio:hover {
    color: var(--color-red);
  }
  .nav-menu.active .nav-link.nav-link-contenuti:hover {
    color: var(--color-yellow);
  }
  .nav-menu.active .nav-link.nav-link-contatti:hover {
    color: var(--color-blue);
  }
}
</style>
