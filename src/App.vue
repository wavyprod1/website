<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter();

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    isServicesDropdownOpen.value = false
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}

const isServicesDropdownOpen = ref(false)
let servicesTimeout = null

const toggleServicesDropdown = (event) => {
  if (window.innerWidth <= 768) {
    isServicesDropdownOpen.value = !isServicesDropdownOpen.value;
  } else {
    event.preventDefault();
    isServicesDropdownOpen.value = !isServicesDropdownOpen.value;
  }
}

const openServicesDropdownDesktop = () => {
  if (window.innerWidth > 768) {
    clearTimeout(servicesTimeout)
    isServicesDropdownOpen.value = true
  }
}

const closeServicesDropdownDesktop = (immediate = false) => {
  if (window.innerWidth > 768) {
    if (immediate) {
      isServicesDropdownOpen.value = false
    } else {
      servicesTimeout = setTimeout(() => {
        isServicesDropdownOpen.value = false
      }, 200)
    }
  }
}

const currentYear = ref(new Date().getFullYear())

const handleNavLinkClick = () => {
  if (isMobileMenuOpen.value) {
    toggleMobileMenu();
  }
  isServicesDropdownOpen.value = false
}

watch(() => router.currentRoute.value.path, () => {
  if (isMobileMenuOpen.value) {
    isMobileMenuOpen.value = false;
    document.body.style.overflow = '';
  }
  isServicesDropdownOpen.value = false;
});

</script>

<template>
  <header>
    <div class="container header-container">
      <RouterLink to="/" class="header-logo-link desktop-only" @click="handleNavLinkClick">
        ELIA PIRRELLO
      </RouterLink>
      <RouterLink to="/" class="header-logo-link-mobile mobile-only" @click="handleNavLinkClick">
        ELIA PIRRELLO
      </RouterLink>
      <button class="mobile-menu-btn" @click="toggleMobileMenu" aria-label="Apri menu" :aria-expanded="isMobileMenuOpen">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
        <li
          class="nav-item nav-item-dropdown"
          @mouseenter="openServicesDropdownDesktop"
          @mouseleave="closeServicesDropdownDesktop()"
        >
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
            v-show="isServicesDropdownOpen"
            @mouseenter="openServicesDropdownDesktop" 
            @mouseleave="closeServicesDropdownDesktop()"
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
          <RouterLink
            to="/portfolio"
            class="nav-link nav-link-portfolio"
            @click="handleNavLinkClick"
            >Portfolio</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            to="/contenuti"
            class="nav-link nav-link-contenuti"
            @click="handleNavLinkClick"
            >Contenuti</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink to="/contatti" class="nav-link nav-link-contatti" @click="handleNavLinkClick"
            >Contatti</RouterLink
          >
        </li>
      </ul>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="footer-col">
          <!-- Il titolo H3 "ELIA PIRRELLO" nel footer non è un link, quindi non ha hover colorato -->
          <h3>ELIA PIRRELLO</h3>
          <p>Produttore Musicale a Milano</p>
          <div class="social-links">
            <a href="https://www.instagram.com/wavyprod1/" class="social-link" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:wavywork1@gmail.com" class="social-link">
              <i class="far fa-envelope"></i>
            </a>
            <!-- Aggiungi altri social link se necessario -->
          </div>
        </div>

        <div class="footer-col">
          <h3>NAVIGAZIONE</h3>
          <ul class="footer-nav">
            <li class="footer-nav-item">
              <!-- Aggiunta classe specifica per hover -->
              <RouterLink to="/" class="footer-nav-link footer-nav-link-home" @click="handleNavLinkClick"
                >Home</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <!-- Aggiunta classe specifica per hover -->
              <RouterLink to="/portfolio" class="footer-nav-link footer-nav-link-portfolio" @click="handleNavLinkClick"
                >Portfolio</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <!-- Aggiunta classe specifica per hover -->
              <RouterLink to="/contenuti" class="footer-nav-link footer-nav-link-contenuti" @click="handleNavLinkClick"
                >Contenuti</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <!-- Aggiunta classe specifica per hover -->
              <RouterLink to="/contatti" class="footer-nav-link footer-nav-link-contatti" @click="handleNavLinkClick"
                >Contatti</RouterLink
              >
            </li>
          </ul>
        </div>

        <div class="footer-col">
          <h3>SERVIZI</h3>
          <ul class="footer-nav">
            <li class="footer-nav-item">
              <!-- Aggiunta classe specifica per hover -->
              <RouterLink to="/produzione" class="footer-nav-link footer-nav-link-servizi" @click="handleNavLinkClick"
                >Produzione Musicale</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <!-- Aggiunta classe specifica per hover (può usare la stessa di servizi o una sua) -->
              <RouterLink
                to="/recording-mix-master"
                class="footer-nav-link footer-nav-link-servizi" 
                @click="handleNavLinkClick"
                >Recording, Mix & Master</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="copyright">
        © <span>{{ currentYear }}</span> Elia Pirrello. P.IVA 13196910015
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* Stili Header */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--color-dark-gray);
  padding: 1rem 0;
  transition: background-color 0.3s ease;
}

.header-container {
  display: flex;
  align-items: center;
}

/* Logo/Nome Link per Desktop */
.header-logo-link {
  font-size: 1.7rem;
  font-weight: bold;
  color: var(--color-white);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease; /* Aggiunta transizione */
}
.header-logo-link:hover {
  color: var(--color-light-gray); /* MODIFICATO: Hover grigio chiaro */
}

/* Menu di navigazione per Desktop */
.nav-menu {
  display: flex;
  list-style: none;
  margin-left: auto;
}
.nav-item {
  margin-left: 2rem;
}
.nav-link {
  color: var(--color-white);
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
  transition: color 0.3s ease;
  padding: 0.5rem 0;
  position: relative;
  font-size: 1.1rem;  /* Esempio: leggermente più grande del default, se vuoi. Il default è spesso 1rem per <p> */
}

.nav-link.nav-link-servizi:hover { color: var(--color-green); }
.nav-link.nav-link-portfolio:hover { color: var(--color-red); }
.nav-link.nav-link-contenuti:hover { color: var(--color-yellow); }
.nav-link.nav-link-contatti:hover { color: var(--color-blue); }


.mobile-only { display: none !important; }
.desktop-only { display: block !important; }


/* Dropdown Menu (Desktop) */
.nav-item-dropdown {
  position: relative;
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
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--color-dark-gray);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  min-width: 240px;
  z-index: 1001;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
}
.nav-item-dropdown:hover .dropdown-menu,
.dropdown-menu:hover,
.nav-item-dropdown .dropdown-menu[style*="display: block;"],
.nav-item-dropdown .nav-link[aria-expanded="true"] + .dropdown-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-menu li { padding: 0; }
.dropdown-link {
  display: block;
  padding: 0.75rem 1.5rem;
  color: var(--color-white);
  text-decoration: none;
  font-weight: normal;
  text-transform: none;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.dropdown-link:hover {
  color: var(--color-green);
}


/* Stili per Mobile (<= 768px) */
@media (max-width: 768px) {
  .desktop-only { display: none !important; }
  .mobile-only { display: block !important; }

  .header-container {
    justify-content: center;
    position: relative;
  }

  .header-logo-link-mobile {
    font-size: 1.7rem;
    font-weight: bold;
    color: var(--color-white);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s ease; /* Aggiunta transizione */
  }
  .header-logo-link-mobile:hover {
    color: var(--color-light-gray); /* MODIFICATO: Hover grigio chiaro */
  }

  .mobile-menu-btn {
    display: block;
    position: absolute;
    right: 1.5rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--color-white);
    font-size: 1.8rem;
    cursor: pointer;
    z-index: 1002;
  }

  .nav-menu {
    display: none;
    position: fixed;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100vh;
    background-color: var(--color-dark-gray);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 70px;
    transition: left 0.3s ease-in-out;
    z-index: 1001;
    overflow-y: auto;
    box-sizing: border-box;
  }

  .nav-menu.active {
    display: flex;
    left: 0;
  }
  
  .nav-menu .nav-item {
    margin: 1rem 0;
    width: 100%;
  }
  .nav-menu .nav-link {
    display: block;
    padding: 1rem 0;
    font-size: 1.5rem;
    text-align: center;
    
  }
  
  .nav-menu.active .dropdown-menu {
    position: static;
    background-color: transparent;
    border: none;
    box-shadow: none;
    padding-left: 0;
    margin-top: 0.5rem;
    width: 100%;
    text-align: center;
  }
  .nav-menu.active .dropdown-link {
    padding: 0.75rem 1rem;
    font-size: 1.4rem;
    color: var(--color-light-gray);
  }
  .nav-menu.active .dropdown-link:hover {
    color: var(--color-green);
  }

  /* Ulteriori stili esistenti per il mobile... */
}

/* Footer */
footer {
  background-color: var(--color-dark-gray);
  color: var(--color-white);
  padding: 4rem 0 2rem;
}
.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3rem;
}
.footer-col h3 { /* Titoli nel footer */
    color: var(--color-white);
    margin-bottom: 1rem; /* Assicura spazio sotto i titoli */
    /* text-shadow ereditato dal globale per h3 */
}
.footer-nav { list-style: none; padding-left: 0; } /* Rimuovi padding di default della lista */
.footer-nav-item { margin-bottom: 0.8rem; }
.footer-nav-link {
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
}
/* Hover colorati per i link di navigazione del footer */
.footer-nav-link.footer-nav-link-home:hover { color: var(--color-light-gray); }
.footer-nav-link.footer-nav-link-servizi:hover { color: var(--color-green); }
.footer-nav-link.footer-nav-link-portfolio:hover { color: var(--color-red); }
.footer-nav-link.footer-nav-link-contenuti:hover { color: var(--color-yellow); }
.footer-nav-link.footer-nav-link-contatti:hover { color: var(--color-blue); }


.social-links { display: flex; gap: 1rem; margin-top: 1rem; }
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255,255,255,0.1);
  color: var(--color-white);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}
.social-link:hover {
  background-color: var(--color-red); /* Hover per social link */
  transform: translateY(-3px);
}
.copyright {
  margin-top: 3rem;
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255,255,255,0.7);
}

@media (max-width: 576px) {
  .footer-container { grid-template-columns: 1fr; text-align: center; }
  .social-links { justify-content: center; }
  .header-logo-link-mobile { font-size: 1.7rem; }
  .mobile-menu-btn { font-size: 1.6rem; }
  .footer-col h3 { text-align: center; } /* Centra titoli footer su mobile molto piccolo */
  .footer-nav { text-align: center; } /* Centra link nav footer su mobile molto piccolo */
}
</style>