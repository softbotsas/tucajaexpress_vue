<template>
    <!-- Contenedor principal para El Salvador -->
    <div class="elsalvador-component country-content-area animate__animated animate__fadeIn">
  
      <!-- Banner Introductorio -->
      <section class="elsalvador-intro-banner">
        <div class="intro-banner-background">
          <!-- Imagen real en PNG -->
          <img src="/images/paises/elsalvador/banner.png" alt="Imagen introductoria de envíos a El Salvador" class="intro-banner-img">
          <!-- Overlay mejorado -->
          <div class="intro-banner-overlay"></div>
        </div>
        <div class="container intro-banner-content">
          <h1 class="intro-banner-title">Envíos a <span class="highlight-elsalvador">El Salvador</span>, <br>Rapidez y Confianza</h1>
          <p class="intro-banner-text">Tu conexión logística directa con la tierra de los volcanes.</p>
        </div>
      </section>
  
      <!-- Beneficios -->
      <section class="elsalvador-benefits section-padding">
        <div class="container">
          <h2 class="section-title text-center">Ventajas Exclusivas para <span class="highlight">El Salvador</span></h2>
          
          <div class="benefits-grid">
            <!-- Beneficio 1 -->
            <div class="benefit-card">
              <div class="benefit-icon" style="background-color: #0F4C81;">
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <h3>Entrega Express</h3>
              <p>Envíos prioritarios a San Salvador en 3-5 días hábiles.</p>
            </div>
            
            <!-- Beneficio 2 -->
            <div class="benefit-card">
              <div class="benefit-icon" style="background-color: #C4A484;">
                <i class="fas fa-warehouse"></i>
              </div>
              <h3>Centro Logístico</h3>
              <p>Almacenamiento gratuito por 7 días en nuestra bodega de San Salvador.</p>
            </div>
            
            <!-- Beneficio 3 -->
            <div class="benefit-card">
              <div class="benefit-icon" style="background-color: #5B92E5;">
                <i class="fas fa-shield-alt"></i>
              </div>
              <h3>Seguridad Garantizada</h3>
              <p>Protección total de tus envíos con seguro incluido.</p>
            </div>
          </div>
        </div>
      </section>
  
  <!-- Galería Visual -->
  <!-- Galería Visual -->
  <section class="elsalvador-visual-gallery section-padding bg-light">
    <div class="container">
      <h2 class="section-title text-center">Nuestra Operación en <span class="highlight">El Salvador</span></h2>
      
      <div class="gallery-grid">
        <div class="gallery-item">
          <div class="image-container">
            <img src="/images/paises/elsalvador/recepcion.png" alt="Recepción de paquetes en USA">
          </div>
          <div class="gallery-caption">1. Recepción en USA</div>
        </div>
        
        <div class="gallery-item">
          <div class="image-container">
            <img src="/images/embalaje2.png" alt="Embalaje">
          </div>
          <div class="gallery-caption">2. Embalaje y envio</div>
        </div>
        
        <div class="gallery-item">
          <div class="image-container">
            <img src="/images/llegada.png" alt="Despacho aduanal en El Salvador">
          </div>
          <div class="gallery-caption">3. Entrega Destino</div>
        </div>
      </div>
    </div>
  </section>
  
      <!-- Cobertura -->
      <section class="elsalvador-coverage section-padding">
        <div class="container">
          <h2 class="section-title text-center">Cobertura en <span class="highlight">El Salvador</span></h2>
          
          <div class="coverage-content">
            <div class="coverage-text">
              <p>Nuestra red cubre todo el territorio salvadoreño, incluyendo:</p>
              <ul>
                <li><i class="fas fa-city"></i> San Salvador (Área Metropolitana)</li>
                <li><i class="fas fa-city"></i> Santa Ana</li>
                <li><i class="fas fa-city"></i> San Miguel</li>
              </ul>
            </div>
            
            <div class="coverage-map">
              <img src="/images/106.jpg" alt="Mapa de cobertura en Guatemala" class="map-image">
            </div>
          </div>
        </div>
      </section>
  
      <!-- Slider -->
      <section class="elsalvador-slider section-padding bg-light">
        <div class="container">
          <h2 class="section-title text-center">Destinos en <span class="highlight">El Salvador</span></h2>
          
          <div class="slider-container">
            <div class="slider-wrapper">
              <!-- Slide 1 -->
              <div class="slide">
                <img src="/images/1190.jpg" alt="Despacho aduanal en El Salvador">
                <div class="slide-caption">
                  <h3>Área Metropolitana</h3>
                  <p>Entregas en todo San Salvador</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Servicios -->
      <section class="elsalvador-services section-padding">
        <div class="container">
          <h2 class="section-title text-center">Opciones de Envío a <span class="highlight">El Salvador</span></h2>
          
          <div class="services-container">
            <!-- Servicio 1 -->
            <div class="service-item">
              <div class="service-icon-wrapper">
                <i class="fas fa-box-open"></i>
              </div>
              <h4>Paquetería Estándar</h4>
              <p>Perfecto para envíos personales sin prisa (7-10 días hábiles).</p>
            </div>
            
            <!-- Servicio 2 -->
            <div class="service-item">
              <div class="service-icon-wrapper">
                <i class="fas fa-plane"></i>
              </div>
              <h4>Envío Aéreo Express</h4>
              <p>Entrega rápida para documentos y paquetes urgentes (3-5 días).</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA -->
      <section class="elsalvador-cta section-padding">
        <div class="container text-center">
          <div class="cta-card">
            <h2 class="cta-title">¿Listo para enviar a <span class="highlight-elsalvador">El Salvador</span>?</h2>
            <div class="cta-buttons">
              <router-link to="/cotizar?destino=elsalvador" class="cta-button primary">
                <i class="fas fa-calculator"></i> Cotizar Ahora
              </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Lógica básica del componente
  </script>
  
  <style scoped>
    .map-image { max-width: 100%; height: auto; border-radius: var(--border-radius); box-shadow: 0 8px 25px rgba(0,0,0,0.15); background-color: #eee; }
  /* Estilos base */
  .country-content-area {
    padding-top: 80px;
  }
  
  /* Placeholder para imágenes */
  .image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    background-size: cover;
    background-position: center;
  }
  
  /* Banner Introductorio */
  .elsalvador-intro-banner {
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
    color: white;
  }
  
  .intro-banner-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .intro-banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .intro-banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(15, 76, 129, 0.8), rgba(196, 164, 132, 0.4));
  }
  
  .intro-banner-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .intro-banner-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
  
  .highlight-elsalvador {
    color: #C4A484;
  }
  
  /* Secciones comunes */
  .section-padding {
    padding: 60px 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .bg-light {
    background-color: #f8f9fa;
  }
  
  /* Beneficios */
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }
  
  .benefit-card {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    text-align: center;
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
  
  /* Galería */
  .gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
  margin-top: 40px;
}

.gallery-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.image-container {
  position: relative;
  width: 100%;
  padding-top: 75%; /* Proporción 4:3 (ajusta según necesidad) */
  overflow: hidden;
}

.image-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ajuste clave para mantener proporciones */
  object-position: center;
  transition: transform 0.5s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.gallery-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  color: white;
  font-weight: 500;
  text-align: center;
  opacity: 1;
  transition: all 0.3s ease;
}

/* Versión alternativa si prefieres caption debajo */
/*
.gallery-caption {
  padding: 15px;
  background: white;
  color: #333;
  text-align: center;
  font-weight: 500;
}
*/

/* Responsive */
@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 576px) {
  .gallery-grid {
    grid-template-columns: 1fr;
  }
  
  .image-container {
    padding-top: 100%; /* Cuadrado en móviles */
  }
}
  /* Cobertura */
  .coverage-content {
    display: flex;
    gap: 40px;
    margin-top: 40px;
  }
  
  .coverage-text {
    flex: 1;
  }
  
  .coverage-map {
    flex: 1;
    min-height: 300px;
  }
  
  /* Slider */
  .slider-container {
    margin-top: 40px;
    position: relative;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
  }
  
  .slide {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  .slide-caption {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    background: rgba(0,0,0,0.7);
    color: white;
  }
  
  /* Servicios */
  .services-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-top: 40px;
  }
  
  .service-item {
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    text-align: center;
  }
  
  .service-icon-wrapper {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: #0F4C81;
    font-size: 2rem;
  }
  
  /* CTA */
  .elsalvador-cta {
    background: #0F4C81;
    color: white;
  }
  
  .cta-card {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 40px;
    border-radius: 10px;
    color: #333;
  }
  
  .cta-button {
    display: inline-block;
    padding: 12px 30px;
    background: #0F4C81;
    color: white;
    border-radius: 50px;
    text-decoration: none;
    margin: 10px;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .coverage-content {
      flex-direction: column;
    }
    
    .intro-banner-title {
      font-size: 2rem;
    }
    
    .section-title {
      font-size: 1.8rem;
    }
  }
  
  @media (max-width: 576px) {
    .intro-banner-title {
      font-size: 1.8rem;
    }
    
    .benefits-grid,
    .gallery-grid,
    .services-container {
      grid-template-columns: 1fr;
    }
  }
  </style>