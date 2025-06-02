<script setup>
// No specific script logic needed for this static About page yet.
// onMounted from ContattiView for newsletter is not included here.
</script>

<template>
  <main>
    <!-- Page Hero Section -->
    <section class="page-hero section-gradient-overlay">
      <div class="container page-hero-content">
        <h1 class="space-up-down hero-main-title">ABOUT</h1>
        <p class="space-up-down hero-main-description">
          Scopri chi sono, la mia storia e la mia passione per la musica.
        </p>
      </div>
    </section>

    <!-- About Me Description Section -->
    <section class="about-me-section bg-white">
      <div class="container">
        <div class="about-content">
          <p>
            Ciao, sono Elia, produttore musicale con base a Milano, specializzato in Urban ed
            Elettronica. La mia passione è scovare e amplificare le caratteristiche più originali
            degli artisti con cui collaboro, curando ogni aspetto della creazione musicale: dal
            songwriting alla produzione, dalla registrazione fino al mixaggio e al mastering.
          </p>

          <p>Un po' di contesto su di me:</p>

          <p>
            Sono di Torino, dove mi sono laureato in Ingegneria Informatica al Politecnico e ho
            frequentato un corso di Produzione Musicale. Mi sono reso conto abbastanza in fretta,
            però, che quello non fosse l'ambiente giusto per me.
          </p>
          <p>
            Così mi sono trasferito a Milano, con la geniale scusa dell'università ("Music
            Engineering", sempre al Politecnico, per non farmi mancare nulla...).
          </p>
          <p>
            Ovviamente, al posto di studiare, ho passato le giornate a produrre musica, frequentare
            mille eventi e rischiare di perdere i sensi per i Gin Tonic. Fortunatamente, queste
            scorribande sono anche servite a qualcosa.
          </p>
          <p>
            Ho lavorato a tanta musica, ho stretto amicizie meravigliose e, con alcune di queste, ho
            dato vita a discovery.<br> "discovery" è l'ambiente che sognavo quando ho iniziato: un hub
            social attraverso cui io e il mio team supportiamo e aiutiamo gratuitamente gli artisti
            indipendenti.
          </p>
          <p>
            Ora sono stabile a Milano, e insieme ai miei collaboratori
            aiuto gli artisti a portare la loro musica al livello successivo, evitandogli tutti gli errori che ho fatto io.

          </p>
        </div>
      </div>
    </section>

    <!-- If you want the Newsletter section on the About page as well,
         you can copy it from ContattiView.vue and place it here.
         Remember to also copy its specific script logic and styles if you do.
         For now, I'm keeping the About page focused on the description.
    -->
  </main>
</template>

<style scoped>
/* Styles for the hero section are assumed to be global or inherited from App.vue/global styles */

/* Section styling to maintain visual consistency with other pages */
.about-me-section {
  padding: 3rem 0; /* Adjust padding as needed */
  background-color: var(--color-white); /* Explicitly set for clarity */
  color: var(--color-dark-gray); /* Default text color for this section */
}

.about-content {
  max-width: 800px; /* Adjust for desired content width */
  margin: 0 auto; /* Center the content */
  line-height: 1.7;
}

.about-content h3 {
  color: var(--color-dark-gray); /* Ensure heading is dark on white background */
  text-shadow: none; /* Remove any global text shadow if it's light */
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.5rem; /* Or your preferred size for subheadings */
  /* text-transform: uppercase; If you want uppercase, inherited from global h3 or add here */
}

.about-content p {
  margin-bottom: 1rem;
  color: var(--color-dark-gray); /* Ensure paragraph text is dark */
}

/* If you had specific styles for .page-hero in ContattiView.vue's scoped styles
   that are not global, you might need to replicate them here or make them global.
   However, .page-hero styling is often handled globally. */
</style>
