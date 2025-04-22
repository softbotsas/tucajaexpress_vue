<template>
  <div class="paises-view">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-content">
        <h1 class="hero-title animate__animated animate__fadeInDown">
          Operamos en <span class="highlight">todo México</span> y <span class="highlight">Centroamérica</span>
        </h1>
        <p class="hero-subtitle animate__animated animate__fadeInUp animate__delay-1s">
          Conectamos tus envíos desde Estados Unidos a toda la región
        </p>
      </div>
      
      <!-- Selector de Países -->
      <div class="country-selector">
        <router-link
          v-for="country in countries"
          :key="country.id"
          :to="'/paises/' + country.path"
          class="country-tab"
          :class="{ 'active': $route.path.includes(country.path) }"
        >
          <div class="flag-placeholder">
            [{{ country.name.charAt(0) }}]
          </div>
          <span>{{ country.name }}</span>
        </router-link>
      </div>
      
      <div class="scroll-indicator animate__animated animate__bounce animate__infinite animate__delay-2s">
        <i class="fas fa-chevron-down"></i>
      </div>
    </section>

    <!-- Contenido Dinámico -->
    <section class="country-content">
      <router-view />
    </section>

    <!-- Beneficios Regionales -->
    <section class="regional-benefits">
      <div class="container">
        <h2 class="section-title">Ventajas de <span class="highlight">nuestra red regional</span></h2>
        
        <div class="benefits-grid">
          <div class="benefit-card" v-for="(benefit, index) in regionalBenefits" :key="index">
            <div class="benefit-icon" :style="{ backgroundColor: benefit.color }">
              <i :class="benefit.icon"></i>
            </div>
            <h3>{{ benefit.title }}</h3>
            <p>{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Regional -->
    <section class="regional-cta">
      <div class="container">
        <h2>¿Necesitas enviar a múltiples países?</h2>
        <p>Ofrecemos soluciones logísticas integradas para toda la región</p>
        <router-link to="/contacto" class="cta-button">
          <i class="fas fa-envelope"></i> Consultar solución personalizada
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue'
import 'animate.css'

export default {
  name: 'PaisesView',
  setup() {
    const countries = ref([
      { id: 1, name: 'México', path: 'mexico' },
      { id: 2, name: 'Guatemala', path: 'guatemala' },
      { id: 3, name: 'El Salvador', path: 'el-salvador' },
      { id: 4, name: 'Honduras', path: 'honduras' },
      { id: 5, name: 'Costa Rica', path: 'costa-rica' },
      { id: 6, name: 'Panamá', path: 'panama' }
    ])

    const regionalBenefits = ref([
      {
        icon: 'fas fa-network-wired',
        title: 'Red Integrada',
        description: 'Una sola operación para enviar a múltiples países',
        color: '#FF6B6B'
      },
      {
        icon: 'fas fa-flag',
        title: 'Conocimiento Local',
        description: 'Expertos en regulaciones de cada país',
        color: '#4ECDC4'
      },
      {
        icon: 'fas fa-clock',
        title: 'Tiempos Optimizados',
        description: 'Rutas eficientes entre todos los países',
        color: '#45B7D1'
      },
      {
        icon: 'fas fa-handshake',
        title: 'Socio Confiable',
        description: '10 años conectando la región',
        color: '#FFA07A'
      }
    ])

    return {
      countries,
      regionalBenefits
    }
  }
}
</script>

<style scoped>
/* Estilos base */
.paises-view {
  font-family: 'Poppins', sans-serif;
  color: #2c3e50;
  line-height: 1.6;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.highlight {
  color: #e74c3c;
  position: relative;
  display: inline-block;
}

.highlight::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.highlight:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

/* Hero Banner */
.hero-banner {
  height: 90vh;
  min-height: 600px;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), 
              url('@/assets/mapa-regional.jpg') center/cover no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
  margin-bottom: 40px;
  z-index: 2;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

/* Selector de países */
.country-selector {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 30px;
  z-index: 2;
}

.country-tab {
  display: flex;
  align-items: center;
  padding: 12px 25px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  text-decoration: none;
  color: white;
}

.country-tab:hover {
  background: rgba(255, 255, 255, 0.2);
}

.country-tab.active {
  background: #e74c3c;
  border-color: white;
  transform: translateY(-5px);
}

.flag-placeholder {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
}

.scroll-indicator {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
  color: white;
  animation-duration: 2s;
  cursor: pointer;
  z-index: 2;
}

/* Contenido del país */
.country-content {
  padding: 60px 0;
}

/* Beneficios Regionales */
.regional-benefits {
  padding: 80px 0;
  background: #f9f9f9;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 60px;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #e74c3c;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.benefit-card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-10px);
}

.benefit-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 2rem;
}

.benefit-card h3 {
  margin-bottom: 15px;
  color: #2c3e50;
}

.benefit-card p {
  color: #7f8c8d;
  font-size: 0.95rem;
}

/* CTA Regional */
.regional-cta {
  padding: 80px 0;
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  text-align: center;
}

.regional-cta h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.regional-cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.cta-button {
  padding: 15px 40px;
  background: #e74c3c;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.cta-button:hover {
  background: white;
  color: #e74c3c;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Responsive */
@media (max-width: 992px) {
  .hero-title {
    font-size: 2.8rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .hero-banner {
    height: auto;
    padding: 100px 0 60px;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .country-selector {
    flex-direction: column;
    align-items: center;
  }
  
  .country-tab {
    width: 80%;
    justify-content: center;
  }
}

@media (max-width: 576px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .section-title {
    font-size: 1.6rem;
    margin-bottom: 40px;
  }
  
  .regional-cta h2 {
    font-size: 2rem;
  }
  
  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>