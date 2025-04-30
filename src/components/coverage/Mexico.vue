<template>
  <div class="mexico-component country-content-area">
    
    <!-- Hero Banner con efecto parallax -->
    <section class="hero-banner">
      <div class="parallax-bg">
        <img src="/images/backgrounds/mexico-intro.jpeg" alt="Paisaje de México" class="banner-img">
      </div>
      <div class="hero-content">
        <div class="flag-colors">
          <div class="color green"></div>
          <div class="color white"></div>
          <div class="color red"></div>
        </div>
        <h1 class="hero-title">
          <span class="gradient-text">Envíos a México</span><br>
          Rápidos y Seguros
        </h1>
        <p class="hero-subtitle">Tu conexión confiable entre Estados Unidos y México</p>
        <div class="cta-buttons">
          <router-link to="/cotizar?destino=mexico" class="btn-primary">
            <i class="fas fa-paper-plane"></i> Cotizar Envío
          </router-link>
          <router-link to="/contacto?asunto=EnvioMexico" class="btn-outline">
            <i class="fas fa-headset"></i> Contactar Asesor
          </router-link>
        </div>
      </div>
    </section>

    <!-- Tarjetas de beneficios flotantes -->
    <section class="floating-benefits">
      <div class="benefit-card">
        <div class="card-icon" style="background: linear-gradient(135deg, #006847, #38b09d);">
          <i class="fas fa-truck"></i>
        </div>
        <h3>Cobertura Nacional</h3>
        <p>Llegamos a todos los estados de México</p>
      </div>
      <div class="benefit-card">
        <div class="card-icon" style="background: linear-gradient(135deg, #CE1126, #E74C3C);">
          <i class="fas fa-clock"></i>
        </div>
        <h3>Envíos Express</h3>
        <p>Entrega rápida a principales ciudades</p>
      </div>
      <div class="benefit-card">
        <div class="card-icon" style="background: linear-gradient(135deg, #AB8F5A, #D4AF37);">
          <i class="fas fa-lock"></i>
        </div>
        <h3>Seguridad Garantizada</h3>
        <p>Protección de tus envíos en cada paso</p>
      </div>
    </section>

    <!-- Sección de cobertura con mapa interactivo -->
    <section class="coverage-section">
      <div class="section-header">
        <h2 class="section-title">Cobertura en <span>México</span></h2>
        <p class="section-description">Llegamos a los principales destinos del país</p>
      </div>
      
      <div class="coverage-container">
        <div class="map-container">
          <img src="/images/paises/mexico/map.png" alt="Mapa de México" class="mexico-map">
        </div>
        
        <div class="city-list">
          <h3>Principales ciudades:</h3>
          <ul>
            <li><i class="fas fa-map-marker-alt" style="color: #006847;"></i> Ciudad de México</li>
            <li><i class="fas fa-map-marker-alt" style="color: #CE1126;"></i> Guadalajara</li>
            <li><i class="fas fa-map-marker-alt" style="color: #AB8F5A;"></i> Monterrey</li>
            <li><i class="fas fa-map-marker-alt" style="color: #38b09d;"></i> Cancún</li>
            <li><i class="fas fa-map-marker-alt" style="color: #4B0082;"></i> Puebla</li>
            <li><i class="fas fa-map-marker-alt" style="color: #FF8C00;"></i> Tijuana</li>
          </ul>
          <button class="btn-text" @click="showFullCoverage">
            Ver todas las coberturas <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- Proceso de envío en pasos -->
    <section class="process-section">
      <div class="section-header">
        <h2 class="section-title">Cómo <span>enviamos</span> a México</h2>
        <p class="section-description">Un proceso simple y transparente</p>
      </div>
      
      <div class="process-steps">
        <div class="step">
          <div class="step-number">1</div>
          <div class="step-content">
            <h3>Recibimos tu paquete</h3>
            <p>En nuestros centros de recepción en EE.UU.</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">2</div>
          <div class="step-content">
            <h3>Procesamiento y embalaje</h3>
            <p>Preparamos tu envío con los más altos estándares</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">3</div>
          <div class="step-content">
            <h3>Transporte a México</h3>
            <p>Vía aérea o terrestre según tus necesidades</p>
          </div>
        </div>
        <div class="step">
          <div class="step-number">4</div>
          <div class="step-content">
            <h3>Entrega final</h3>
            <p>En la dirección que nos indiques</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Galería minimalista -->
    <section class="gallery-section">
      <div class="section-header">
        <h2 class="section-title">Nuestros <span>envíos</span> en acción</h2>
        <p class="section-description">Así trabajamos para ti</p>
      </div>
      
      <div class="gallery-grid">
        <div class="gallery-item" @click="openLightbox('/images/imagen1.jpg')">
          <img src="/images/imagen1.jpg" alt="Recepción de paquetes">
          <div class="item-overlay">
            <h3>Recepción</h3>
          </div>
        </div>
        <div class="gallery-item" @click="openLightbox('/images/12.jpg')">
          <img src="/images/12.jpg" alt="Transporte de paquetes">
          <div class="item-overlay">
            <h3>Transporte</h3>
          </div>
        </div>
        <div class="gallery-item" @click="openLightbox('/images/entrega.jpeg')">
          <img src="/images/entrega.jpeg" alt="Entrega en México">
          <div class="item-overlay">
            <h3>Entrega</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Destinos populares -->
    <section class="destinations-section">
      <div class="section-header">
        <h2 class="section-title">Destinos <span>populares</span></h2>
        <p class="section-description">Ciudades a las que enviamos frecuentemente</p>
      </div>
      
      <div class="destinations-grid">
        <div class="destination-card">
          <img src="/images/8095.jpg" alt="Ciudad de México">
          <div class="destination-info">
            <h3>Ciudad de México</h3>
            <p>Capital vibrante y cosmopolita</p>
          </div>
        </div>
        <div class="destination-card">
          <img src="/images/6355.jpg" alt="Cancún">
          <div class="destination-info">
            <h3>Riviera Maya</h3>
            <p>Paraíso de playas y cultura</p>
          </div>
        </div>
        <div class="destination-card">
          <img src="/images/guadalajara.jpg" alt="Guadalajara">
          <div class="destination-info">
            <h3>Guadalajara</h3>
            <p>Tradición y modernidad</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonios -->
    <section class="testimonials-section">
      <div class="section-header">
        <h2 class="section-title">Clientes que <span>confían</span> en nosotros</h2>
        <p class="section-description">Experiencias reales de envíos a México</p>
      </div>
      
      <div class="testimonials-container">
        <div class="testimonial-card">
          <div class="client-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p class="testimonial-text">
            "Excelente servicio, mi paquete llegó a CDMX en menos tiempo del estimado y en perfectas condiciones."
          </p>
          <div class="client-info">
            <div class="client-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="client-details">
              <h4>Ana Rodríguez</h4>
              <p>Ciudad de México</p>
            </div>
          </div>
        </div>
        
        <div class="testimonial-card">
          <div class="client-rating">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
          </div>
          <p class="testimonial-text">
            "Envío regularmente a mi familia en Guadalajara y siempre han sido muy confiables y con buen precio."
          </p>
          <div class="client-info">
            <div class="client-avatar">
              <i class="fas fa-user-circle"></i>
            </div>
            <div class="client-details">
              <h4>Carlos Méndez</h4>
              <p>Los Ángeles, California</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="final-cta" style="background: linear-gradient(135deg, #006847, #CE1126);">
      <div class="cta-container">
        <h2>¿Listo para enviar a México?</h2>
        <p>Comienza hoy mismo con nuestro servicio confiable y eficiente</p>
        <button class="btn-primary btn-large" @click="scrollToQuote">
          <i class="fas fa-paper-plane"></i> Iniciar Envío
        </button>
      </div>
    </section>

    <!-- Lightbox para galería -->
    <div class="lightbox" v-if="lightboxVisible" @click="closeLightbox">
      <div class="lightbox-content">
        <img :src="currentImage" alt="Imagen ampliada">
        <button class="lightbox-close" @click.stop="closeLightbox">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const lightboxVisible = ref(false);
const currentImage = ref('');

const showFullCoverage = () => {
  alert('Mostrar modal con cobertura completa para México');
};

const openLightbox = (image) => {
  currentImage.value = image;
  lightboxVisible.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  lightboxVisible.value = false;
  document.body.style.overflow = '';
};

const scrollToQuote = () => {
  const quoteSection = document.querySelector('#quote-section');
  if (quoteSection) {
    quoteSection.scrollIntoView({ behavior: 'smooth' });
  } else {
    router.push('/cotizar?destino=mexico');
  }
};
</script>

<style scoped>
/* Estilos base */
.country-content-area {
  font-family: 'Inter', sans-serif;
  color: #333;
  line-height: 1.6;
  overflow-x: hidden;
}

/* Hero Banner */
.hero-banner {
  position: relative;
  height: 90vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.parallax-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.banner-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
}

.flag-colors {
  display: flex;
  width: 150px;
  height: 8px;
  margin: 0 auto 20px;
  border-radius: 4px;
  overflow: hidden;
}

.flag-colors .color {
  flex: 1;
}

.flag-colors .green { background-color: #006847; }
.flag-colors .white { background-color: white; }
.flag-colors .red { background-color: #CE1126; }

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin-bottom: 20px;
  line-height: 1.2;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
}

.gradient-text {
  background: linear-gradient(90deg, #006847, #CE1126);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.hero-subtitle {
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  margin-bottom: 40px;
  opacity: 0.9;
  font-weight: 300;
  text-shadow: 1px 1px 4px rgba(0,0,0,0.5);
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary, .btn-outline {
  padding: 12px 30px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.btn-primary {
  background-color: #006847;
  color: white;
  border: none;
}

.btn-primary:hover {
  background-color: #005538;
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

.btn-outline {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-outline:hover {
  background-color: rgba(255,255,255,0.1);
  transform: translateY(-3px);
}

/* Floating Benefits */
.floating-benefits {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  margin: -50px auto 0;
  position: relative;
  z-index: 3;
  padding: 0 20px;
  max-width: 1200px;
}

.benefit-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  width: 280px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.benefit-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0,0,0,0.12);
}

.card-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 1.8rem;
}

.benefit-card h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #2d3748;
}

.benefit-card p {
  color: #718096;
  font-size: 0.95rem;
}

/* Section Styles */
.section-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 60px;
  padding: 0 20px;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 700;
  margin-bottom: 15px;
  color: #2d3748;
}

.section-title span {
  color: #006847;
}

.section-description {
  font-size: 1.1rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
}

/* Coverage Section */
.coverage-section {
  padding: 100px 0;
  background-color: #f8fafc;
}

.coverage-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 50px;
  align-items: center;
  flex-wrap: wrap;
}

.map-container {
  flex: 1;
  min-width: 300px;
  position: relative;
}

.mexico-map {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.city-marker {
  position: absolute;
  width: 12px;
  height: 12px;
  background-color: #006847;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px rgba(44,123,229,0.5);
  transform: translate(-50%, -50%);
  cursor: pointer;
  transition: all 0.3s ease;
}

.city-marker:hover {
  transform: translate(-50%, -50%) scale(1.5);
}

.city-list {
  flex: 1;
  min-width: 300px;
}

.city-list h3 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: #2d3748;
}

.city-list ul {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.city-list li {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4a5568;
}

.city-list i {
  font-size: 1.1rem;
}

.btn-text {
  background: none;
  border: none;
  color: #006847;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 5px 0;
  font-size: 1rem;
}

.btn-text:hover {
  text-decoration: underline;
}

/* Process Section */
.process-section {
  padding: 100px 0;
  background-color: white;
}

.process-steps {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.step {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  position: relative;
}

.step:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 35px;
  top: 60px;
  bottom: -40px;
  width: 2px;
  background-color: #e2e8f0;
}

.step-number {
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  background: linear-gradient(135deg, #006847, #CE1126);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.8rem;
  font-weight: 700;
}

.step-content {
  padding-top: 10px;
}

.step-content h3 {
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #2d3748;
}

.step-content p {
  color: #718096;
}

/* Gallery Section */
.gallery-section {
  padding: 100px 0;
  background-color: #f8fafc;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 4/3;
  cursor: pointer;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.item-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
}

.item-overlay h3 {
  margin: 0;
  font-size: 1.3rem;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
}

.gallery-item:hover .item-overlay h3 {
  transform: translateY(0);
  opacity: 1;
}

/* Destinations Section */
.destinations-section {
  padding: 100px 0;
  background-color: white;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.destination-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 3/4;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.destination-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.destination-card:hover img {
  transform: scale(1.05);
}

.destination-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 25px;
  background: linear-gradient(transparent, rgba(0,0,0,0.8));
  color: white;
}

.destination-info h3 {
  margin: 0 0 5px 0;
  font-size: 1.4rem;
}

.destination-info p {
  margin: 0;
  font-size: 0.95rem;
  opacity: 0.9;
}

/* Testimonials Section */
.testimonials-section {
  padding: 100px 0;
  background-color: #f8fafc;
}

.testimonials-container {
  display: flex;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
  justify-content: center;
}

.testimonial-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 500px;
  border: 1px solid #edf2f7;
}

.client-rating {
  color: #f6c342;
  margin-bottom: 20px;
}

.testimonial-text {
  font-style: italic;
  color: #4a5568;
  margin-bottom: 25px;
  position: relative;
  font-size: 1.05rem;
  line-height: 1.6;
}

.testimonial-text::before {
  content: '"';
  font-size: 3rem;
  color: #e2e8f0;
  position: absolute;
  top: -20px;
  left: -15px;
  font-family: serif;
  line-height: 1;
}

.client-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.client-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #edf2f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #006847;
  font-size: 1.5rem;
}

.client-details h4 {
  margin: 0;
  color: #2d3748;
  font-size: 1.1rem;
}

.client-details p {
  margin: 5px 0 0;
  color: #718096;
  font-size: 0.9rem;
}

/* Final CTA */
.final-cta {
  padding: 100px 20px;
  color: white;
  text-align: center;
}

.cta-container {
  max-width: 800px;
  margin: 0 auto;
}

.final-cta h2 {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  margin-bottom: 15px;
}

.final-cta p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.btn-large {
  padding: 16px 40px;
  font-size: 1.1rem;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.9);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
}

.lightbox-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-banner {
    height: auto;
    padding: 120px 0;
  }
  
  .floating-benefits {
    margin-top: 0;
    padding: 0 20px 40px;
  }
  
  .benefit-card {
    width: 100%;
    max-width: 400px;
  }
  
  .coverage-container {
    flex-direction: column;
  }
  
  .step:not(:last-child)::after {
    left: 35px;
    top: 60px;
    bottom: -30px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.2rem;
  }
  
  .cta-buttons {
    flex-direction: column;
    width: 100%;
  }
  
  .btn-primary, .btn-outline {
    width: 100%;
    justify-content: center;
  }
  
  .step {
    flex-direction: column;
    gap: 15px;
  }
  
  .step:not(:last-child)::after {
    left: 35px;
    top: 70px;
    bottom: -30px;
    height: 30px;
    width: 2px;
  }
  
  .testimonials-container {
    flex-direction: column;
  }
}
</style>