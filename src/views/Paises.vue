<template>
  <!-- La clase 'country-view-active' se añade al div principal cuando un país está seleccionado -->
  <div class="paises-view" :class="{ 'country-view-active': isCountrySelected }">

    <!-- ================================================== -->
    <!-- ==      Hero Banner / Top Header Dinámico       == -->
    <!-- ================================================== -->
    <section class="hero-banner" :class="{ 'header-shrunk': isCountrySelected }">
      <!-- Overlay oscuro -->
      <div class="hero-overlay"></div>

      <!-- Imagen de fondo cuando NO hay país seleccionado -->
      <div v-if="!isCountrySelected" class="hero-background-image"></div>

      <!-- Contenedor del Contenido del Header -->
      <div class="container header-content-wrapper">

        <!-- Contenido GRANDE del Header (Solo visible cuando NO hay país seleccionado) -->
        <div v-if="!isCountrySelected" class="hero-main-content">
          <h1 class="hero-title animate__animated animate__fadeInDown">
            Envíos a <span class="highlight">México</span> y <span class="highlight">Centroamérica</span> sin complicaciones
          </h1>
          <p class="hero-subtitle animate__animated animate__fadeInUp animate__delay-0.5s">
            Tu conexión directa desde Estados Unidos a toda la región. Rápido, seguro y confiable.
          </p>
        </div>

        <!-- Selector de Países (Siempre visible, pero se reubica/restila) -->
        <div class="country-selector">
          <p v-if="!isCountrySelected" class="selector-prompt animate__animated animate__fadeInUp animate__delay-1s">
            Selecciona un país para ver detalles:
          </p>
          <div class="tabs-container">
            <router-link
              v-for="country in countries"
              :key="country.id"
              :to="'/paises/' + country.path"
              class="country-tab"
              :class="{ 'active': $route.path.endsWith('/' + country.path) }"
              @click="handleCountryClick"
            >
              <img
                :src="country.flagSrc"
                :alt="'Bandera de ' + country.name"
                class="flag-icon"
              />
              <span>{{ country.name }}</span>
            </router-link>
          </div>
        </div> <!-- Fin Country Selector -->

      </div> <!-- Fin Header Content Wrapper -->

      <!-- Indicador de Scroll (Solo visible cuando NO hay país seleccionado) -->
      <div v-if="!isCountrySelected" @click="scrollToContent" class="scroll-indicator animate__animated animate__bounce animate__infinite animate__delay-2s">
        <i class="fas fa-chevron-down"></i>
      </div>

    </section> <!-- Fin Hero Banner / Top Header -->

    <!-- ================================================== -->
    <!-- ==           Contenido Dinámico                 == -->
    <!-- ================================================== -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>

    <!-- ================================================== -->
    <!-- == Secciones Adicionales (Solo Vista General)   == -->
    <!-- ================================================== -->
    <template v-if="!isCountrySelected">
      <section id="intro-regional" class="intro-regional section-padding">
        <div class="container">
          <h2 class="section-title text-center">Conectando <span class="highlight">el Continente</span></h2>
          <p class="text-center intro-text">
            Somos especialistas en logística entre Estados Unidos y Latinoamérica. Ofrecemos soluciones a medida para tus necesidades de envío a México y todos los países de Centroamérica.
          </p>
        </div>
      </section>

      <section class="regional-benefits section-padding bg-light">
        <div class="container">
          <h2 class="section-title text-center">Ventajas de <span class="highlight">Nuestra Red</span></h2>
          <div class="benefits-grid">
            <div
              class="benefit-card animate__animated animate__fadeInUp"
              v-for="(benefit, index) in regionalBenefits"
              :key="`regional-${index}`"
              :style="{ animationDelay: `${index * 0.15}s` }"
            >
              <div class="benefit-icon" :style="{ backgroundColor: benefit.color }">
                <i :class="benefit.icon"></i>
              </div>
              <h3>{{ benefit.title }}</h3>
              <p>{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="regional-cta section-padding">
        <div class="container text-center">
          <h2 class="cta-title animate__animated animate__fadeIn">¿Listo para <span class="highlight">expandir tus envíos</span>?</h2>
          <p class="cta-text animate__animated animate__fadeIn animate__delay-0.5s">
            Gestionamos envíos a múltiples destinos con la mejor calidad y servicio.
          </p>
          <router-link to="/contacto" class="cta-button">
            <i class="fas fa-headset"></i> Contactar a un Experto
          </router-link>
        </div>
      </section>
    </template>

  </div> <!-- Fin Paises View -->
</template>

<script>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import 'animate.css'

export default {
  name: 'PaisesView',
  setup() {
    const route = useRoute()

    const countries = ref([
      { id: 1, name: 'México', path: 'mexico', flagSrc: '/images/flags/mexico.png' },
      { id: 2, name: 'Guatemala', path: 'guatemala', flagSrc: '/images/flags/guatemala.png' },
      { id: 3, name: 'El Salvador', path: 'el-salvador', flagSrc: '/images/flags/salvador.png' },
      { id: 4, name: 'Honduras', path: 'honduras', flagSrc: '/images/flags/honduras.png' },
      { id: 5, name: 'Nicaragua', path: 'nicaragua', flagSrc: '/images/flags/nicaragua.png' },
    ])

    const regionalBenefits = ref([
      { icon: 'fas fa-network-wired', title: 'Red Logística Integrada', description: 'Cobertura completa en toda la región', color: '#e74c3c' },
      { icon: 'fas fa-map-marked-alt', title: 'Experiencia Local', description: 'Conocimiento profundo de cada mercado', color: '#3498db' },
      { icon: 'fas fa-shipping-fast', title: 'Tiempos Óptimos', description: 'Rutas eficientes y tiempos de entrega garantizados', color: '#2ecc71' },
      { icon: 'fas fa-handshake', title: 'Socio Confiable', description: 'Años de experiencia en envíos internacionales', color: '#f39c12' }
    ])

    const isCountrySelected = computed(() => {
      return route.path !== '/paises' && countries.value.some(country => 
        route.path.startsWith(`/paises/${country.path}`)
      )
    })

    const scrollToContent = () => {
      const firstSection = document.querySelector('#intro-regional')
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    const handleCountryClick = () => {
      setTimeout(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, 100)
    }

    return {
      countries,
      regionalBenefits,
      isCountrySelected,
      scrollToContent,
      handleCountryClick
    }
  }
}
</script>

<style scoped>
/* --- Variables CSS Globales --- */
:root {
  --primary-color: #e74c3c;
  --secondary-color: #3498db;
  --dark-color: #2c3e50;
  --light-color: #f8f9fa;
  --text-color: #333;
  --text-muted: #6c757d;
  --font-family: 'Poppins', sans-serif;
  --border-radius: 8px;
  --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  --header-height-shrunk: 75px;
  --header-transition-duration: 0.4s;
}

/* --- Estilos Base --- */
.paises-view {
  font-family: var(--font-family);
  color: var(--text-color);
  line-height: 1.7;
  background-color: #fff;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  position: relative;
  z-index: 2;
}

.highlight {
  color: var(--primary-color);
  font-weight: 600;
}

.text-center {
  text-align: center;
}

.section-padding {
  padding: 80px 0;
}

.bg-light {
  background-color: var(--light-color);
}

/* ================================================== */
/* ==      Estilos del Header (Dinámico)           == */
/* ================================================== */
.hero-banner {
  position: relative;
  color: white;
  text-align: center;
  overflow: hidden;
  transition: min-height var(--header-transition-duration) ease-in-out,
              padding var(--header-transition-duration) ease-in-out,
              background-color var(--header-transition-duration) ease-in-out;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0 80px;
  background-color: var(--dark-color);
}

.hero-background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/images/backgrounds/paises-intro.jpeg') center center / cover no-repeat;
  z-index: 0;
  opacity: 1;
  transition: opacity var(--header-transition-duration) ease-in-out;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(44, 62, 80, 0.7), rgba(44, 62, 80, 0.85));
  z-index: 1;
  transition: background var(--header-transition-duration) ease-in-out;
}

.header-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
}

.hero-main-content {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  max-width: 800px;
  margin-bottom: 40px;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 3.8rem);
  margin-bottom: 20px;
  font-weight: 700;
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  line-height: 1.3;
  color: white;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.4rem);
  margin-bottom: 0;
  font-weight: 300;
  opacity: 0.9;
}

.country-selector {
  width: 100%;
  position: relative;
  z-index: 5;
  transition: margin-top var(--header-transition-duration) ease-in-out,
              padding var(--header-transition-duration) ease-in-out,
              background-color var(--header-transition-duration) ease-in-out;
  margin-top: 30px;
}

.selector-prompt {
  font-size: 1rem;
  margin-bottom: 20px;
  opacity: 0.8;
}

.tabs-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.country-tab {
  display: inline-flex;
  align-items: center;
  padding: 10px 18px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  text-decoration: none;
  color: white;
  font-size: 0.95rem;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  white-space: nowrap;
}

.country-tab:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}

.country-tab.active {
  background: var(--primary-color);
  color: white;
  font-weight: 600;
  border-color: rgba(255, 255, 255, 0.5);
  transform: translateY(-3px);
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.flag-icon {
  width: 22px;
  height: auto;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 3px;
  flex-shrink: 0;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  z-index: 2;
  transition: opacity 0.3s ease-out;
}

.scroll-indicator:hover {
  color: white;
}

/* ================================================== */
/* ==       Estado Encogido del Header             == */
/* ================================================== */
.hero-banner.header-shrunk {
  min-height: var(--header-height-shrunk);
  height: var(--header-height-shrunk);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--dark-color);
  box-shadow: 0 3px 12px rgba(0,0,0,0.15);
}

.hero-banner.header-shrunk .hero-background-image {
  opacity: 0;
}

.hero-banner.header-shrunk .hero-overlay {
  background: linear-gradient(rgba(44, 62, 80, 0.9), rgba(44, 62, 80, 0.98));
}

.hero-banner.header-shrunk .hero-main-content {
  opacity: 0;
  transform: scale(0.8);
  height: 0;
  overflow: hidden;
  pointer-events: none;
  margin-bottom: 0;
}

.hero-banner.header-shrunk .header-content-wrapper {
  justify-content: center;
  height: 100%;
}

.hero-banner.header-shrunk .country-selector {
  margin-top: 0;
  padding: 0;
  background-color: transparent;
  height: 100%;
  display: flex;
  align-items: center;
}

.hero-banner.header-shrunk .tabs-container {
  justify-content: center;
  gap: 0;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  padding: 0 10px;
}

.hero-banner.header-shrunk .tabs-container::-webkit-scrollbar {
    display: none;
}

.hero-banner.header-shrunk .country-tab {
  padding: 8px 12px;
  background: transparent;
  box-shadow: none;
  border: none;
  border-bottom: 3px solid transparent;
  border-radius: 0;
  margin: 0 8px;
  transform: none !important;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.hero-banner.header-shrunk .country-tab:hover {
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
}

.hero-banner.header-shrunk .country-tab.active {
  background-color: transparent;
  border-color: var(--primary-color);
  color: white;
  font-weight: 600;
}

.hero-banner.header-shrunk .scroll-indicator {
  opacity: 0;
  pointer-events: none;
}

/* ================================================== */
/* ==           Contenido Dinámico                 == */
/* ================================================== */
/* Transición para Router View */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ================================================== */
/* ==     Estilos Secciones Generales (Intro, etc) == */
/* ================================================== */
.section-title {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  margin-bottom: 50px;
  position: relative;
  padding-bottom: 15px;
  font-weight: 600;
  color: var(--dark-color);
}

.section-title.text-center::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 4px;
  background: var(--primary-color);
  border-radius: 2px;
}

.intro-regional {
  background-color: #fff;
}

.intro-text {
  max-width: 800px;
  margin: 20px auto 0;
  color: var(--text-muted);
  font-size: 1.1rem;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
}

.benefit-card {
  background: white;
  border-radius: var(--border-radius);
  padding: 35px 30px;
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-top: 5px solid transparent;
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12);
}

.benefit-card:nth-child(1) { border-top-color: #e74c3c; }
.benefit-card:nth-child(2) { border-top-color: #3498db; }
.benefit-card:nth-child(3) { border-top-color: #2ecc71; }
.benefit-card:nth-child(4) { border-top-color: #f39c12; }

.benefit-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  color: white;
  font-size: 2rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.benefit-card h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
  color: var(--dark-color);
  font-weight: 600;
}

.benefit-card p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

.regional-cta {
  background: linear-gradient(135deg, var(--dark-color) 0%, #4a6a8a 100%);
  color: white;
}

.cta-title {
  font-size: clamp(2rem, 5vw, 2.8rem);
  margin-bottom: 15px;
  font-weight: 700;
  color: white;
}

.cta-text {
  font-size: 1.2rem;
  margin-bottom: 35px;
  opacity: 0.9;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button {
  padding: 15px 35px;
  background: var(--primary-color);
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  background: white;
  color: var(--primary-color);
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

/* ================================================== */
/* ==            Media Queries Responsive          == */
/* ================================================== */
@media (max-width: 992px) {
  .section-padding { padding: 70px 0; }
}

@media (max-width: 768px) {
  :root {
    --header-height-shrunk: 65px;
  }
  
  .hero-banner {
    min-height: 75vh;
  }
  
  .hero-banner.header-shrunk .country-tab {
    padding: 6px 10px;
    font-size: 0.85rem;
    margin: 0 5px;
  }
  
  .hero-banner.header-shrunk .flag-icon {
    width: 18px;
    margin-right: 6px;
  }
  
  .section-padding { padding: 60px 0; }
  
  .benefits-grid { grid-template-columns: 1fr; }
}

@media (max-width: 576px) {
  .hero-banner {
    min-height: 70vh;
    padding-bottom: 60px;
  }
  
  .hero-title { font-size: 2rem; }
  .hero-subtitle { font-size: 1rem; }
  .tabs-container { gap: 8px; }
  
  .hero-banner.header-shrunk .tabs-container {
    padding: 0 5px;
  }
  
  .hero-banner.header-shrunk .country-tab {
    margin: 0 3px;
    padding: 5px 8px;
  }
  
  .section-padding { padding: 50px 0; }
  
  .cta-button { 
    width: 90%; 
    justify-content: center; 
  }
}
</style>