<template>
  <div class="service-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background-banner"></div>
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="highlight">Servicio Puerta a Puerta</span><br>
          Conectando Centroamérica con Excelencia
        </h1>
        <p class="hero-subtitle">
          Envíos rápidos, seguros y confiables a México, Guatemala, Honduras, El Salvador, Nicaragua y Costa Rica
        </p>
        <div class="hero-actions">
          <button class="btn-primary" @click="scrollToForm">Cotizar Ahora</button>
          <button class="btn-outline" @click="scrollToFeatures">Conoce Más</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="hero-image-container">
          <img
            src="/images/cajita.png"
            alt="Servicio puerta a puerta"
            class="hero-img"
          >
        </div>
      </div>
    </section>

    <!-- Service Features -->
    <section class="features-section" id="features" ref="featuresSection">
      <div class="section-header">
        <h2 class="section-title">Por qué elegir nuestro servicio</h2>
        <p class="section-subtitle">Ofrecemos soluciones logísticas integrales con los más altos estándares de calidad</p>
      </div>
      <div class="features-grid">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="feature-card"
        >
          <div class="feature-icon" :style="{ backgroundColor: feature.color }">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
          <div class="feature-badge" :style="{ backgroundColor: feature.color }">
            {{ feature.badge }}
          </div>
        </div>
      </div>
    </section>

    <!-- Coverage Section with Details Panel -->
    <section class="coverage-section">
      <div class="section-header">
        <h2 class="section-title">Nuestra Cobertura Detallada</h2>
        <p class="section-subtitle">Explora los servicios y ventajas en cada destino</p>
      </div>
      <div class="coverage-container">
        <!-- Lista de Países -->
        <div class="countries-list">
          <div
            v-for="(country, index) in countries"
            :key="country.code"
            class="country-item"
            :class="{ active: activeCountry === index }"
            @mouseenter="activeCountry = index"
            @click="activeCountry = index"
          >
            <div class="country-flag" :style="{ backgroundColor: country.color }">
              <i :class="country.icon"></i>
            </div>
            <div class="country-info">
              <h4>{{ country.name }}</h4>
              <p>{{ country.cities }} ciudades</p>
            </div>
          </div>
        </div>

        <!-- Panel de Detalles del País -->
        <div class="map-visualization">
          <Transition name="fade" mode="out-in">
            <div v-if="selectedCountryData" :key="selectedCountryData.code" class="coverage-details-panel" :style="{'--active-color': activeCountryColor}">

              <div class="details-header">
                <div class="details-icon" :style="{ backgroundColor: activeCountryColor }">
                  <i :class="selectedCountryData.icon"></i>
                </div>
                <h3 class="details-title">{{ selectedCountryData.name }}</h3>
              </div>

              <div class="details-stats">
                <div class="stat-item">
                  <i class="fas fa-city"></i>
                  <span>{{ selectedCountryData.cities }}</span> Ciudades Cubiertas
                </div>
                <div class="stat-item">
                  <i class="fas fa-truck-fast"></i>
                  <span>Tiempos Variables</span>
                </div>
              </div>

              <div class="details-points">
                <h4>Ventajas Clave:</h4>
                <ul>
                  <li v-for="(detail, i) in selectedCountryData.details" :key="i">
                    <i class="fas fa-check-circle"></i> {{ detail }}
                  </li>
                </ul>
              </div>

              <div class="details-illustration">
                <img
                  :src="selectedCountryData.illustration"
                  :alt="`Ilustración servicio en ${selectedCountryData.name}`"
                  class="illustration-img"
                  @error="onImageError"
                >
                <p v-if="!selectedCountryData.illustration" class="illustration-fallback">
                  <i class="fas fa-shipping-fast fa-3x"></i>
                </p>
              </div>

              <a href="#quoteForm" @click.prevent="scrollToFormSmooth" class="btn-details-cta">
                Cotizar Envío a {{ selectedCountryData.name }}
              </a>

            </div>
            <div v-else class="coverage-details-placeholder">
              <p>Selecciona un país de la lista para ver los detalles.</p>
              <i class="fas fa-hand-point-left fa-2x"></i>
            </div>
          </Transition>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="process-section">
      <div class="section-header">
        <h2 class="section-title">¿Cómo funciona?</h2>
        <p class="section-subtitle">Simple, rápido y sin complicaciones</p>
      </div>
      <div class="process-steps">
        <div
          v-for="(step, index) in processSteps"
          :key="index"
          class="process-step"
        >
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">Lo que dicen nuestros clientes</h2>
        <p class="section-subtitle">Experiencias reales con nuestro servicio</p>
      </div>
      <div class="testimonials-carousel">
        <button class="carousel-btn prev" @click="prevTestimonial">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="testimonials-track" :style="{ transform: `translateX(-${currentTestimonial * 100}%)` }">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card"
          >
            <div class="testimonial-rating">
              <i
                v-for="star in 5"
                :key="'star-'+star"
                :class="['fas', star <= testimonial.rating ? 'fa-star' : 'fa-star-half-alt']"
              ></i>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar" :style="{ backgroundColor: getRandomColor() }">
                {{ testimonial.name.charAt(0) }}
              </div>
              <div class="author-info">
                <h4>{{ testimonial.name }}</h4>
                <p>{{ testimonial.location }}</p>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-btn next" @click="nextTestimonial">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div class="testimonials-dots">
        <button
          v-for="(dot, index) in testimonials"
          :key="'dot-'+index"
          :class="{active: currentTestimonial === index}"
          @click="currentTestimonial = index"
        ></button>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section" id="quoteForm" ref="formSection">
      <div class="cta-content">
        <h2 class="cta-title">¿Listo para enviar?</h2>
        <p class="cta-subtitle">Completa el formulario y nos pondremos en contacto contigo</p>
        <form @submit.prevent="submitQuoteRequest" class="quote-form">
          <div class="form-group">
            <label for="name">Nombre completo</label>
            <input type="text" id="name" v-model="formData.name" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="email">Correo electrónico</label>
              <input type="email" id="email" v-model="formData.email" required>
            </div>
            <div class="form-group">
              <label for="phone">Teléfono</label>
              <input type="tel" id="phone" v-model="formData.phone" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="origin">Origen</label>
              <select id="origin" v-model="formData.origin" required>
                <option value="" disabled>Selecciona un país</option>
                <option v-for="country in countries" :key="'origin-'+country.code" :value="country.name">
                  {{ country.name }}
                </option>
              </select>
            </div>
            <div class="form-group">
              <label for="destination">Destino</label>
              <select id="destination" v-model="formData.destination" required>
                <option value="" disabled>Selecciona un país</option>
                 <option v-for="country in countries" :key="'dest-'+country.code" :value="country.name">
                   {{ country.name }}
                 </option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="details">Detalles del envío (peso, dimensiones, tipo de mercancía)</label>
            <textarea id="details" v-model="formData.details" rows="4" required></textarea>
          </div>
          <button type="submit" class="btn-primary" :disabled="isSubmitting">
            {{ isSubmitting ? 'Enviando...' : 'Solicitar Cotización' }}
          </button>
        </form>
      </div>
      <div class="cta-image">
        <div class="image-placeholder">
          <i class="fas fa-box-open fa-5x"></i>
          <p>Imagen de paquete</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'DoorToDoorService',
  setup() {
    const featuresSection = ref(null);
    const formSection = ref(null);
    const activeCountry = ref(0); // Índice del país activo (0 = México por defecto)
    const currentTestimonial = ref(0);
    const isSubmitting = ref(false);

    // Datos de países con detalles e ilustración
    const countries = ref([
       {
         code: 'mex', name: 'México', cities: 45, icon: 'fas fa-pepper-hot', color: '#3B75F4',
         details: [ "Amplia red en ciudades principales y zonas fronterizas.", "Expertos en trámites aduanales simplificados.", "Opciones de entrega express y estándar."],
         illustration: '/images/illustrations/mexico-truck.svg' // Asegúrate que esta ruta sea correcta desde /public
       },
       {
         code: 'gua', name: 'Guatemala', cities: 32, icon: 'fas fa-volcano', color: '#9023E5',
         details: [ "Cobertura nacional, incluyendo áreas rurales.", "Servicio de recolección programada flexible.", "Alianzas estratégicas con transportistas locales." ],
         illustration: '/images/illustrations/guatemala-delivery.svg'
       },
       {
         code: 'sal', name: 'El Salvador', cities: 18, icon: 'fas fa-coffee', color: '#599933',
         details: ["Entregas rápidas en el área metropolitana.", "Soluciones logísticas para e-commerce.", "Manejo especializado de paquetes pequeños y medianos."],
         illustration: '/images/illustrations/el-salvador-package.svg'
       },
       {
         code: 'hon', name: 'Honduras', cities: 25, icon: 'fas fa-umbrella-beach', color: '#9FC914',
         details: ["Conexiones eficientes entre ciudades principales.", "Seguro de mercancía incluido hasta $XXX.", "Soporte proactivo para seguimiento de envíos."],
         illustration: '/images/illustrations/honduras-box.svg'
       },
       {
         code: 'nic', name: 'Nicaragua', cities: 22, icon: 'fas fa-water', color: '#FFD400',
         details: ["Servicio confiable a cabeceras departamentales.", "Tarifas competitivas para envíos recurrentes.", "Gestión de documentación de exportación/importación."],
         illustration: '/images/illustrations/nicaragua-scooter.svg'
       },
       {
         code: 'crc', name: 'Costa Rica', cities: 28, icon: 'fas fa-tree', color: '#FF8500',
         details: ["Red de distribución moderna en el GAM.", "Opciones de envío refrigerado disponibles (consultar).", "Compromiso con entregas puntuales y seguras."],
         illustration: '/images/illustrations/costa-rica-van.svg'
       }
    ]);

    // Computada para obtener los datos del país activo
    const selectedCountryData = computed(() => {
      if (activeCountry.value >= 0 && activeCountry.value < countries.value.length) {
        return countries.value[activeCountry.value];
      }
      return null;
    });

    // Computada para el color del país activo
    const activeCountryColor = computed(() => {
      return selectedCountryData.value ? selectedCountryData.value.color : '#CCCCCC';
    });

    // Datos del formulario
    const formData = ref({
      name: '', email: '', phone: '', origin: '', destination: '', details: ''
    });

    // Datos para otras secciones (sin cambios aquí, mantenlos como los tenías)
    const features = ref([
      { icon: 'fas fa-bolt', title: 'Entrega Rápida', description: 'Tiempos de entrega optimizados...', badge: '24-48 hrs', color: '#3B75F4' },
      { icon: 'fas fa-shield-alt', title: 'Seguridad Garantizada', description: 'Protección total de tu mercancía...', badge: '100% seguro', color: '#9023E5' },
      { icon: 'fas fa-dollar-sign', title: 'Precios Competitivos', description: 'Tarifas accesibles sin sacrificar calidad...', badge: 'Ahorra 30%', color: '#599933' },
      { icon: 'fas fa-headset', title: 'Soporte 24/7', description: 'Asesoramiento personalizado...', badge: 'Soporte VIP', color: '#9FC914' },
      { icon: 'fas fa-map-marked-alt', title: 'Cobertura Amplia', description: 'Llegamos a más de 200 ciudades...', badge: '200+ ciudades', color: '#FFD400' },
    ]);
    const processSteps = ref([
        { title: 'Solicita tu cotización', description: 'Completa nuestro formulario con los detalles de tu envío.' },
        { title: 'Recolección en origen', description: 'Recogemos tu paquete en la dirección que nos indiques.' },
        { title: 'Transporte seguro', description: 'Movemos tu mercancía con los más altos estándares de seguridad.' },
        { title: 'Entrega en destino', description: 'Llevamos tu paquete hasta la puerta de tu destinatario.' }
    ]);
    const testimonials = ref([
        { name: 'María González', location: 'Miami a Guatemala', text: 'Servicio excepcional, rápido y confiable. Mi paquete llegó perfecto.', rating: 5 },
        { name: 'Carlos Mendoza', location: 'Houston a El Salvador', text: 'Excelente comunicación y seguimiento. Muy profesionales.', rating: 5 },
        { name: 'Laura Ramírez', location: 'LA a Nicaragua', text: 'Precios justos y entrega antes de lo esperado. Muy satisfecha.', rating: 4 },
        { name: 'Roberto Sánchez', location: 'NY a Costa Rica', text: 'Un aliado clave para nuestro negocio. Siempre cumplen.', rating: 5 }
    ]);

    // Funciones auxiliares
    const getRandomColor = () => {
      const colors = ['#3B75F4', '#9023E5', '#599933', '#9FC914', '#FFD400', '#FF8500'];
      return colors[Math.floor(Math.random() * colors.length)];
    };
    const scrollToForm = () => { formSection.value?.scrollIntoView({ behavior: 'smooth' }); };
    const scrollToFeatures = () => { featuresSection.value?.scrollIntoView({ behavior: 'smooth' }); };
    const scrollToFormSmooth = (event) => { event.preventDefault(); scrollToForm(); };
    const nextTestimonial = () => { currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.value.length; };
    const prevTestimonial = () => { currentTestimonial.value = (currentTestimonial.value - 1 + testimonials.value.length) % testimonials.value.length; };
    const submitQuoteRequest = () => {
      isSubmitting.value = true;
      setTimeout(() => {
        alert('¡Gracias por tu solicitud! Nos pondremos en contacto pronto.');
        formData.value = { name: '', email: '', phone: '', origin: '', destination: '', details: '' };
        isSubmitting.value = false;
      }, 1500);
    };
    const onImageError = (event) => {
      console.warn("Error al cargar ilustración:", event.target.src);
      // Opcional: esconder imagen o mostrar fallback visualmente
       event.target.style.display = 'none'; // Esconde la imagen rota
       // El <p class="illustration-fallback"> debería mostrarse si la img está oculta y no hay src
    };

    // Retorno del setup
    return {
      featuresSection, formSection, activeCountry, currentTestimonial, isSubmitting,
      countries, selectedCountryData, activeCountryColor, formData, features, processSteps, testimonials,
      getRandomColor, scrollToForm, scrollToFeatures, scrollToFormSmooth, nextTestimonial, prevTestimonial, submitQuoteRequest, onImageError
    };
  }
}
</script>

<style scoped>
  /* Variables de diseño */
  :root {
    --primary: #0061ff;
    --primary-light: #60efff;
    --secondary: #9023e5;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
    --dark: #1f2937;
    --light: #f9fafb;
    --gray: #6b7280;
    --gray-light: #e5e7eb;
  }

  /* Estilos base */
  .service-page {
    font-family: 'Poppins', sans-serif;
    color: var(--dark);
    line-height: 1.6;
    overflow-x: hidden; /* Importante para evitar scroll horizontal */
  }

  /* --- Estilos Hero Section --- */
 .hero-section {
    display: flex;
    align-items: center;
    min-height: 90vh;
    height: auto;
    padding: 6rem 5% 4rem;
    position: relative;
    overflow: hidden;
    background-color: #f8faff;
  }
  .hero-background-banner {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/images/puerta.jpeg') center/cover no-repeat;
    opacity: 0.15;
    z-index: 0;
  }
  .hero-content {
    flex: 1;
    max-width: 600px;
    position: relative;
    z-index: 1;
    padding-right: 2rem;
  }
   .hero-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  .highlight {
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    display: inline;
  }
  .hero-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    color: var(--gray);
    margin-bottom: 2.5rem;
    max-width: 550px;
  }
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
 .btn-primary, .btn-outline {
    padding: 0.8rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    border: none; /* Base reset */
  }
  .btn-primary {
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    color: white;
    box-shadow: 0 4px 15px rgba(0, 97, 255, 0.3);
  }
  .btn-primary:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 97, 255, 0.4);
  }
  .btn-outline {
    background: transparent;
    color: var(--primary);
    border: 2px solid var(--primary);
  }
  .btn-outline:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-3px);
  }
  .hero-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    min-width: 300px;
  }
  .hero-image-container {
    width: clamp(300px, 80%, 500px);
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hero-img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
     filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.2));
  }
  .image-placeholder { display: none; } /* Oculto si tienes hero-img */


  /* --- Estilos Secciones Generales --- */
  .section-header {
    text-align: center;
    margin-bottom: 4rem;
  }
  .section-title {
    font-size: clamp(2rem, 4vw, 2.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
  }
  .section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    border-radius: 2px;
  }
  .section-subtitle {
    font-size: clamp(1rem, 2.5vw, 1.2rem);
    color: var(--gray);
    max-width: 700px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  /* --- Estilos Features Section --- */
  .features-section {
    padding: 6rem 5%;
    background-color: white;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  .feature-card {
    background: white;
    border-radius: 12px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    border: 1px solid var(--gray-light);
    display: flex;
    flex-direction: column;
  }
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
  }
  .feature-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: white;
    font-size: 1.5rem;
    flex-shrink: 0;
  }
  .feature-title {
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
  }
  .feature-description {
    color: var(--gray);
    margin-bottom: 1.5rem;
    flex-grow: 1;
  }
  .feature-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    padding: 0.3rem 0.8rem;
    border-radius: 50px;
    color: white;
    font-size: 0.75rem;
    font-weight: 600;
  }

  /* --- Estilos Coverage Section (Panel de Detalles) --- */
  .coverage-section {
    padding: 6rem 5%;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  }
  .coverage-container {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
    align-items: stretch;
  }
  .countries-list {
    flex: 0 0 320px;
    max-width: 320px;
  }
  .country-item {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: white;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
    border-left: 4px solid transparent;
 }
 .country-item:hover {
    transform: translateX(5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
    border-left-color: var(--gray-light);
 }
 .country-item.active {
    transform: translateX(8px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    border-left-color: var(--active-color, var(--primary));
 }
  .country-flag {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;
    color: white;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .country-info h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.2rem;
  }
  .country-info p {
    color: var(--gray);
    font-size: 0.85rem;
  }

  .map-visualization {
    flex: 1;
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .coverage-details-panel {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 15px;
    padding: 2rem 2.5rem;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.08);
    border: 1px solid var(--gray-light);
    display: flex;
    flex-direction: column;
    border-top: 5px solid var(--active-color, var(--primary));
    transition: border-color 0.4s ease;
  }
  .coverage-details-placeholder {
      text-align: center;
      color: var(--gray);
      padding: 2rem;
  }
  .coverage-details-placeholder i {
      margin-top: 1rem;
      color: var(--primary);
  }
  .details-header {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid var(--gray-light);
    gap: 1.5rem;
  }
  .details-icon {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.6rem;
    flex-shrink: 0;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
  }
  .details-title {
    font-size: 1.7rem;
    font-weight: 700;
    color: var(--dark);
    line-height: 1.3;
  }
  .details-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    text-align: center;
  }
  .stat-item {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 8px;
    border: 1px solid var(--gray-light);
    font-size: 0.9rem;
    color: var(--gray);
  }
  .stat-item i {
    font-size: 1.4rem;
    color: var(--active-color, var(--primary));
    margin-bottom: 0.5rem;
    display: block;
  }
  .stat-item span {
    font-weight: 700;
    font-size: 1.2rem;
    margin-right: 0.4rem;
    display: inline-block;
    color: var(--dark);
  }
  .details-points {
    margin-bottom: 2rem;
    flex-grow: 1;
  }
  .details-points h4 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: var(--dark);
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--gray-light);
    display: inline-block;
  }
  .details-points ul { list-style: none; padding: 0; margin: 0; }
  .details-points li {
    margin-bottom: 0.8rem;
    display: flex;
    align-items: flex-start;
    color: var(--gray);
    font-size: 0.95rem;
    line-height: 1.6;
  }
  .details-points li i {
    margin-right: 0.8rem;
    color: var(--success);
    font-size: 1rem;
    margin-top: 4px;
    flex-shrink: 0;
  }
  .details-illustration {
      text-align: center;
      margin-bottom: 2rem;
      min-height: 100px;
      max-height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
  }
  .illustration-img {
      max-width: 100%;
      max-height: 140px;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 5px 8px rgba(0,0,0,0.1));
  }
  .illustration-fallback {
      color: var(--gray-light);
  }
  .illustration-fallback i {
      font-size: 3.5rem;
      opacity: 0.8;
  }
 .btn-details-cta {
      display: block;
      width: fit-content;
      margin: 1rem auto 0 auto;
      padding: 0.8rem 2rem;
      background-color: var(--active-color, var(--primary));
      color: white;
      text-align: center;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 600;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      border: none;
  }
  .btn-details-cta:hover {
      filter: brightness(1.1);
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.15);
  }
  .fade-enter-active,
  .fade-leave-active { transition: opacity 0.4s ease; }
  .fade-enter-from,
  .fade-leave-to { opacity: 0; }

  /* --- Estilos Process Section --- */
  .process-section {
    padding: 6rem 5%;
    background-color: white;
  }
  .process-steps {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 3rem;
    position: relative;
  }
  .process-steps::before {
    content: ''; position: absolute; top: 29px; left: 5%; right: 5%; height: 2px;
    background: linear-gradient(to right, var(--primary-light), var(--primary));
    opacity: 0.25; z-index: 0; display: none;
   }
   @media (min-width: 992px) { .process-steps::before { display: block; } }
  .process-step {
    flex: 1; min-width: 220px; position: relative; z-index: 1;
    background: white; padding: 2rem 1.5rem; border-radius: 12px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06); transition: all 0.3s ease;
    border-top: 4px solid var(--primary); text-align: center;
  }
  .process-step:hover { transform: translateY(-8px); box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1); }
  .step-number {
    width: 50px; height: 50px; border-radius: 50%;
    background: linear-gradient(135deg, var(--primary), var(--primary-light));
    color: white; display: flex; align-items: center; justify-content: center;
    font-size: 1.4rem; font-weight: 700; margin: 0 auto 1.5rem auto;
    box-shadow: 0 4px 10px rgba(0, 97, 255, 0.3);
  }
  .step-content h3 { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.8rem; }
  .step-content p { color: var(--gray); font-size: 0.9rem; }

  /* --- Estilos Testimonials Section --- */
  .testimonials-section {
    padding: 6rem 5%; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); position: relative;
  }
  .testimonials-carousel {
    position: relative; max-width: 850px; margin: 0 auto; overflow: hidden;
    background-color: white; border-radius: 12px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  }
  .testimonials-track { display: flex; transition: transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55); }
  .testimonial-card {
    min-width: 100%; padding: 3rem clamp(1.5rem, 5vw, 4rem); box-sizing: border-box;
    text-align: center; flex-shrink: 0;
  }
  .testimonial-rating { color: var(--warning); font-size: 1.3rem; margin-bottom: 1.5rem; }
  .testimonial-text {
    font-size: clamp(1rem, 2.5vw, 1.15rem); font-style: italic; color: var(--dark);
    margin-bottom: 2rem; line-height: 1.7; max-width: 600px; margin-left: auto; margin-right: auto;
  }
  .testimonial-author { display: inline-flex; align-items: center; justify-content: center; gap: 1rem; }
  .author-avatar {
    width: 55px; height: 55px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
    color: white; font-weight: bold; font-size: 1.4rem; flex-shrink: 0; text-transform: uppercase;
  }
  .author-info { text-align: left; }
  .author-info h4 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.2rem; }
  .author-info p { color: var(--gray); font-size: 0.9rem; }
 .carousel-btn {
    position: absolute; top: 50%; transform: translateY(-50%); width: 45px; height: 45px; border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.8); border: none; box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    color: var(--primary); font-size: 1rem; z-index: 2; transition: background-color 0.3s, transform 0.3s;
  }
  .carousel-btn:hover { background-color: white; transform: translateY(-50%) scale(1.1); }
  .carousel-btn.prev { left: 20px; }
  .carousel-btn.next { right: 20px; }
  .testimonials-dots { display: flex; justify-content: center; margin-top: 2.5rem; gap: 0.7rem; }
  .testimonials-dots button {
    width: 10px; height: 10px; border-radius: 50%; border: none; background-color: var(--gray-light);
    cursor: pointer; transition: all 0.3s ease; padding: 0;
  }
  .testimonials-dots button.active { background-color: var(--primary); transform: scale(1.3); width: 12px; height: 12px; }

  /* --- Estilos CTA Section --- */
 .cta-section {
    display: flex; align-items: center; padding: 6rem 5%;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    color: white; gap: 3rem; overflow: hidden;
  }
  .cta-content { flex: 1; max-width: 650px; }
  .cta-title { font-size: clamp(2rem, 4vw, 2.5rem); font-weight: 700; margin-bottom: 1rem; }
  .cta-subtitle { font-size: clamp(1rem, 2.5vw, 1.1rem); margin-bottom: 2.5rem; opacity: 0.9; max-width: 500px; }
  .quote-form { max-width: 100%; }
  .form-group { margin-bottom: 1.2rem; }
  .form-group label { display: block; margin-bottom: 0.5rem; font-weight: 500; font-size: 0.9rem; }
  .form-group input, .form-group select, .form-group textarea {
    width: 100%; padding: 0.9rem 1rem; border-radius: 8px; border: 1px solid transparent;
    font-family: 'Poppins', sans-serif; background-color: rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease; font-size: 1rem; color: var(--dark); box-sizing: border-box;
  }
   .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
     outline: none; background-color: white; box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5); border-color: var(--primary);
   }
  .form-group textarea { min-height: 100px; resize: vertical; }
  .form-row { display: flex; gap: 1.5rem; flex-wrap: wrap; }
  .form-row .form-group { flex: 1 1 calc(50% - 0.75rem); min-width: 180px; }
  .cta-section .btn-primary { /* Submit button in CTA form */
    background: white; color: var(--primary); box-shadow: 0 4px 15px rgba(0,0,0, 0.15);
    padding: 1rem 2.5rem; margin-top: 1rem; font-weight: 700;
  }
   .cta-section .btn-primary:disabled {
     background-color: var(--gray-light); color: var(--gray); cursor: not-allowed;
     transform: none; box-shadow: none;
   }
  .cta-image { /* Image container in CTA */
    flex: 0 0 40%; display: flex; justify-content: center; align-items: center;
  }
   .cta-image .image-placeholder { /* Placeholder styles if used in CTA */
     width: clamp(250px, 80%, 400px); height: auto; min-height: 250px; border-style: solid;
     border-color: rgba(255, 255, 255, 0.5); background-color: rgba(255, 255, 255, 0.1); color: white;
     display: flex; flex-direction: column; align-items: center; justify-content: center; border-radius: 12px; /* Added from original */
   }
   .cta-image .image-placeholder i { font-size: 4rem; opacity: 0.7; margin-bottom: 1rem; /* Added */ }


  /* --- Responsive Design --- */
  @media (max-width: 992px) {
    .hero-section { flex-direction: column; text-align: center; padding-top: 5rem; min-height: auto; }
    .hero-content { padding-right: 0; max-width: 100%; margin-bottom: 3rem; }
    .hero-actions { justify-content: center; }
    .hero-subtitle { margin-left: auto; margin-right: auto; }
    .hero-image { min-width: auto; }

    .coverage-container { flex-direction: column; align-items: center; gap: 2rem; }
    .countries-list {
      max-width: 100%; flex: 0 0 auto; display: flex; flex-wrap: wrap; justify-content: center;
      gap: 0.8rem; margin-bottom: 0; order: 1; padding: 0 1rem; box-sizing: border-box;
    }
    .country-item { width: auto; flex-grow: 1; max-width: calc(50% - 0.4rem); }
    .map-visualization { order: 2; width: 100%; max-width: 700px; min-height: auto; }
    .coverage-details-panel { padding: 1.5rem; }
    .details-title { font-size: 1.5rem; }

    .process-steps::before { display: none; }

    .cta-section { flex-direction: column; text-align: center; }
    .cta-content { max-width: 100%; margin-bottom: 2rem;}
    .cta-subtitle { margin-left: auto; margin-right: auto; }
    .quote-form { max-width: 500px; margin: 0 auto;}
    .form-row .form-group { flex-basis: 100%; }
     .cta-image { display: none; }
  }

  @media (max-width: 768px) {
    .section-title { font-size: 1.8rem; }
    .section-subtitle { font-size: 1rem; }
    .features-grid { grid-template-columns: 1fr; }
    .country-item { max-width: calc(50% - 0.4rem); font-size: 0.9rem; }
    .country-info h4 { font-size: 1rem; } .country-info p { font-size: 0.8rem; }
    .details-stats { grid-template-columns: 1fr; gap: 1rem; }
    .details-header { flex-direction: column; text-align: center; margin-bottom: 1.5rem; padding-bottom: 1rem; gap: 1rem; }
    .details-icon { margin-right: 0; }
    .details-points li { font-size: 0.9rem; }
    .details-illustration { max-height: 100px; } .illustration-img { max-height: 100px; }
    .process-steps { gap: 1.5rem; } .process-step { min-width: 100%; }
    .testimonials-carousel { max-width: 90%; } .carousel-btn.prev { left: 10px; } .carousel-btn.next { right: 10px; }
    .testimonial-card { padding: 2.5rem 1.5rem; } .testimonial-text { font-size: 1rem; }
    .author-avatar { width: 50px; height: 50px; font-size: 1.3rem;} .author-info h4 { font-size: 1rem;}
  }

  @media (max-width: 576px) {
     .hero-title { font-size: 2rem; }
     .hero-actions { flex-direction: column; }
     .btn-primary, .btn-outline { width: 100%; max-width: 300px; margin: 0.5rem auto; }
     .countries-list { max-width: 100%; gap: 0.5rem;}
     .country-item {
         max-width: 100%; border-left-width: 0; border-bottom: 3px solid transparent; border-radius: 6px; padding: 0.8rem;
      }
     .country-item:hover, .country-item.active {
         transform: none; border-bottom-color: var(--active-color, var(--primary)); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.07);
     }
     .coverage-details-panel { padding: 1.2rem; border-radius: 10px;}
     .details-title { font-size: 1.4rem;} .stat-item span { font-size: 1.1rem;} .details-points h4 { font-size: 1.1rem;}
     .btn-details-cta { width: 100%; padding: 0.7rem 1.5rem; font-size: 0.9rem;}
     .testimonials-dots button { width: 8px; height: 8px; } .testimonials-dots button.active { width: 10px; height: 10px; }
     .quote-form { max-width: 100%; }
     .form-row .form-group { flex: 1 1 100%; } /* Asegura 1 columna en móvil para el form */
   }
</style>