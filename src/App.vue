<script setup>
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const router = useRouter()

const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const currentYear = ref(new Date().getFullYear())

const handleNavLinkClick = () => {
  if (isMobileMenuOpen.value) {
    toggleMobileMenu()
  }
}

watch(
  () => router.currentRoute.value.path,
  () => {
    if (isMobileMenuOpen.value) {
      isMobileMenuOpen.value = false
      document.body.style.overflow = ''
    }
  },
)
</script>

<template>
  <header>
    <div class="container">
      <div class="header-container">
        <RouterLink to="/" class="nav-link nav-link-home" @click="handleNavLinkClick">
          HOME
        </RouterLink>
        <button
          class="mobile-menu-btn"
          @click="toggleMobileMenu"
          aria-label="Apri menu"
          :aria-expanded="isMobileMenuOpen"
        >
          <i class="fas" :class="{ 'fa-bars': !isMobileMenuOpen, 'fa-times': isMobileMenuOpen }"></i>
        </button>
        <ul class="nav-menu" :class="{ active: isMobileMenuOpen }">
          <li class="nav-item">
            <RouterLink
              to="/portfolio"
              class="nav-link nav-link-portfolio"
              @click="handleNavLinkClick"
              >Portfolio</RouterLink
            >
          </li>
          <li class="nav-item">
            <!-- MODIFIED: Link to /about, text is About -->
            <RouterLink
              to="/about"
              class="nav-link nav-link-about"
              @click="handleNavLinkClick"
              >About</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </header>

  <RouterView />

  <footer>
    <div class="container">
      <div class="footer-container">
        <div class="footer-col">
          <h3>ELIA PIRRELLO</h3>
          <p>Produttore Musicale a Milano</p>
          <div class="social-links">
            <a href="https://www.instagram.com/elia.pirrello/" class="social-link" target="_blank">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="mailto:produzioni@eliapirrello.it" class="social-link">
              <i class="far fa-envelope"></i>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h3>NAVIGAZIONE</h3>
          <ul class="footer-nav">
            <li class="footer-nav-item">
              <RouterLink
                to="/"
                class="footer-nav-link footer-nav-link-home"
                @click="handleNavLinkClick"
                >Home</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <RouterLink
                to="/portfolio"
                class="footer-nav-link footer-nav-link-portfolio"
                @click="handleNavLinkClick"
                >Portfolio</RouterLink
              >
            </li>
            <li class="footer-nav-item">
              <!-- MODIFIED: Link to /about, text is About -->
              <RouterLink
                to="/about"
                class="footer-nav-link footer-nav-link-about"
                @click="handleNavLinkClick"
                >About</RouterLink
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
/* Header & Navigation */
header {
  align-content: center;
  width: 100%; /* Kept for full-width background */
  height: 4rem; /* Kept for consistent header height */
  background-color: var(--color-dark-gray);
  transition: background-color 0.3s ease;
}

.header-container {
  justify-content: center;
  display: flex;
  align-items: center;
  height: rem;
  position: relative; /* Kept for layout, e.g., positioning of mobile-menu-btn */

}

.header-logo-link {
  display:contents;
  font-weight: bold;
  font-size: 1.3rem;
  color: var(--color-white);
  text-decoration: none;
  text-transform: uppercase;
  padding-top: 1px;
  transition: color 0.3s ease;
  position: relative; /* Was already relative */
  z-index: 1003; /* Was 1003. Button also 1003. This is fine. */
}

.header-logo-link:hover {
  color: var(--color-light-gray);
}

.nav-menu { /* Desktop styles */
  display: flex;
  list-style: none;
  margin-left: auto;
  /* z-index: 1001; */ /* z-index on non-positioned element has no effect, removed for clarity */
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
  padding: 0rem 0;
  position: relative;
}

.nav-link.nav-link-home:hover {
  color: var(--color-green);
}

.nav-link.nav-link-portfolio:hover {
  color: var(--color-red);
}
.nav-link.nav-link-about:hover {
  color: var(--color-blue);
}

/* Stili per Mobile (<= 768px) */
@media (max-width: 768px) {
  .desktop-only { display: none !important; }
  .mobile-only { display: block !important; }
  .header-container { justify-content: space-between; }
  .header-logo-link-mobile:hover { color: var(--color-light-gray); }

  .mobile-menu-btn {
    display: flex;
    position: relative; /* Important for z-index to work correctly */
    background: none;
    border: none;
    color: var(--color-white);
    font-size: 1.3rem;
    cursor: pointer;
    z-index: 1003; /* Ensures button is above the mobile menu overlay */
  }
  .mobile-menu-btn i { transition: transform 0.3s ease; }
  .mobile-menu-btn i.fa-times { transform: rotate(180deg); }

  .nav-menu { /* Mobile menu base styles */
    /* display: none; */ /* REMOVED: Now controlled by left position and visibility for transition */
    display: flex; /* Set to flex for layout properties to apply */
    position: fixed;
    top: 0;
    left: -100%; /* Start off-screen for slide-in animation */
    width: 100%;
    height: 100vh;
    background-color: var(--color-dark-gray);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 4rem;
    z-index: 1001; /* Below the menu button (1003) but above other page content */
    overflow-y: auto; /* Allows the menu itself to scroll if content overflows */
    box-sizing: border-box;
    font-size: 1.6rem;
    transition: left 0.3s ease-in-out, visibility 0.3s ease-in-out; /* ADDED transition for slide & visibility */
    visibility: hidden; /* ADDED: Start hidden, to be revealed by .active */
  }

  .nav-menu.active {
    /* display: flex; */ /* REMOVED: display:flex is now in base .nav-menu mobile rule */
    left: 0; /* Slide into view */
    visibility: visible; /* ADDED: Make visible */
  }

  .nav-menu .nav-item { margin: 1rem 0; width: 100%; }
  .nav-menu .nav-link { display: block; text-align: center; }
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
.footer-col h3 {
  color: var(--color-white);
  margin-bottom: 1rem;
}
.footer-nav { list-style: none; padding-left: 0; }
.footer-nav-item { margin-bottom: 0.8rem; }
.footer-nav-link {
  color: var(--color-white);
  text-decoration: none;
  transition: color 0.3s ease;
}
.footer-nav-link.footer-nav-link-home:hover { color: var(--color-light-gray); }
.footer-nav-link.footer-nav-link-portfolio:hover { color: var(--color-red); }
.footer-nav-link.footer-nav-link-about:hover {
  color: var(--color-blue);
}

.social-links { display: flex; gap: 1rem; margin-top: 1rem; }
.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--color-white);
  border-radius: 50%;
  text-decoration: none;
  transition: all 0.3s ease;
}
.social-link:hover { background-color: var(--color-red); transform: translateY(-3px); }
.copyright { margin-top: 3rem; text-align: center; font-size: 0.9rem; color: rgba(255, 255, 255, 0.7); }

@media (max-width: 576px) {
  .footer-container { grid-template-columns: 1fr; text-align: center; }
  .social-links { justify-content: center; }
  .footer-col h3 { text-align: center; }
  .footer-nav { text-align: center; }
}
</style>
