<template>
    <!-- Contenedor principal para Honduras -->
    <div class="honduras-component country-content-area">
      
      <!-- Hero Banner con efecto parallax -->
      <section class="hero-banner">
        <div class="parallax-bg">
          <img src="/images/paises/honduras/banner.jpeg" alt="Paisaje de Honduras" class="banner-img">
        </div>
        <div class="hero-content">
          <h1 class="hero-title">
            <span class="gradient-text">Envíos a Honduras</span><br>
            Rapidez y Confianza
          </h1>
          <p class="hero-subtitle">Tu conexión logística entre Estados Unidos y el corazón de Centroamérica</p>
          <div class="cta-buttons">
            <button class="btn-primary">
              <i class="fas fa-paper-plane"></i> Cotizar Envío
            </button>
            <button class="btn-outline">
              <i class="fas fa-headset"></i> Contactar Asesor
            </button>
          </div>
        </div>
      </section>
  
      <!-- Tarjetas de beneficios flotantes -->
      <section class="floating-benefits">
        <div class="benefit-card">
          <div class="card-icon">
            <i class="fas fa-shield-alt"></i>
          </div>
          <h3>Seguridad Garantizada</h3>
          <p>Protección de tus envíos en cada etapa del proceso</p>
        </div>
        <div class="benefit-card">
          <div class="card-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h3>Envíos Express</h3>
          <p>Entrega rápida a principales ciudades hondureñas</p>
        </div>
        <div class="benefit-card">
          <div class="card-icon">
            <i class="fas fa-hand-holding-usd"></i>
          </div>
          <h3>Precios Competitivos</h3>
          <p>Tarifas accesibles sin sacrificar calidad</p>
        </div>
      </section>
  
      <!-- Sección de cobertura con mapa interactivo -->
      <section class="coverage-section">
        <div class="section-header">
          <h2 class="section-title">Cobertura en <span>Tegucigalpa</span> y todo Honduras</h2>
          <p class="section-description">Llegamos a los principales destinos del país</p>
        </div>
        
        <div class="coverage-container">
          <div class="map-container">
            <img src="/images/paises/honduras/map.jpg" alt="Mapa de Honduras" class="honduras-map">
          </div>
          
          <div class="city-list">
            <h3>Principales ciudades:</h3>
            <ul>
              <li><i class="fas fa-map-marker-alt"></i> Tegucigalpa</li>
              <li><i class="fas fa-map-marker-alt"></i> San Pedro Sula</li>
              <li><i class="fas fa-map-marker-alt"></i> La Ceiba</li>
              <li><i class="fas fa-map-marker-alt"></i> Comayagua</li>
              <li><i class="fas fa-map-marker-alt"></i> Choluteca</li>
              <li><i class="fas fa-map-marker-alt"></i> Puerto Cortés</li>
            </ul>
            <button class="btn-text">
              Ver todas las coberturas <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
  
      <!-- Proceso de envío en pasos -->
      <section class="process-section">
        <div class="section-header">
          <h2 class="section-title">Cómo <span>enviamos</span> a Honduras</h2>
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
              <h3>Transporte a Honduras</h3>
              <p>Vía aérea o marítima según tus necesidades</p>
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
          <div class="gallery-item">
            <img src="/images/recepcion.png" alt="Recepción de paquetes">
            <div class="item-overlay">
              <h3>Recepción</h3>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/images/embalaje.png" alt="Embalaje profesional">
            <div class="item-overlay">
              <h3>Embalaje</h3>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/images/entrega.png" alt="Entrega en Honduras">
            <div class="item-overlay">
              <h3>Entrega</h3>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Testimonios -->
      <section class="testimonials-section">
        <div class="section-header">
          <h2 class="section-title">Clientes que <span>confían</span> en nosotros</h2>
          <p class="section-description">Experiencias reales de envíos a Honduras</p>
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
              "Excelente servicio, mi paquete llegó a Tegucigalpa en menos tiempo del estimado y en perfectas condiciones."
            </p>
            <div class="client-info">
              <div class="client-avatar">
                <i class="fas fa-user-circle"></i>
              </div>
              <div class="client-details">
                <h4>María Fernández</h4>
                <p>Tegucigalpa, Honduras</p>
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
              "Envío regularmente a mi familia en San Pedro Sula y siempre han sido muy confiables y con buen precio."
            </p>
            <div class="client-info">
              <div class="client-avatar">
                <i class="fas fa-user-circle"></i>
              </div>
              <div class="client-details">
                <h4>Carlos Martínez</h4>
                <p>Miami, Florida</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA final -->
      <section class="final-cta">
        <div class="cta-container">
          <h2>¿Listo para enviar a Honduras?</h2>
          <p>Comienza hoy mismo con nuestro servicio confiable y eficiente</p>
          <button class="btn-primary btn-large">
            <i class="fas fa-paper-plane"></i> Iniciar Envío
          </button>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Lógica para interactividad si es necesaria
  </script>
  
  <style scoped>
  /* Estilos base */
  .country-content-area {
    font-family: 'Inter', sans-serif;
    color: #333;
    line-height: 1.6;
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
  }
  
  .gradient-text {
    background: linear-gradient(90deg, #2c7be5, #00d97e);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  
  .hero-subtitle {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    margin-bottom: 40px;
    opacity: 0.9;
    font-weight: 300;
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
  }
  
  .btn-primary {
    background-color: #2c7be5;
    color: white;
    border: none;
  }
  
  .btn-primary:hover {
    background-color: #1a68d1;
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
    margin-top: -50px;
    position: relative;
    z-index: 3;
    padding: 0 20px;
  }
  
  .benefit-card {
    background: white;
    border-radius: 12px;
    padding: 30px;
    width: 280px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    text-align: center;
    transition: transform 0.3s ease;
  }
  
  .benefit-card:hover {
    transform: translateY(-10px);
  }
  
  .card-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(135deg, #2c7be5, #00d97e);
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
    color: #2c7be5;
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
  
  .honduras-map {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  }
  
  .city-marker {
    position: absolute;
    width: 12px;
    height: 12px;
    background-color: #2c7be5;
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
    color: #2c7be5;
  }
  
  .btn-text {
    background: none;
    border: none;
    color: #2c7be5;
    font-weight: 600;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 0;
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
    background: linear-gradient(135deg, #2c7be5, #00d97e);
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
  
  /* Testimonials Section */
  .testimonials-section {
    padding: 100px 0;
    background-color: white;
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
    color: #2c7be5;
    font-size: 1.5rem;
  }
  
  .client-details h4 {
    margin: 0;
    color: #2d3748;
  }
  
  .client-details p {
    margin: 5px 0 0;
    color: #718096;
    font-size: 0.9rem;
  }
  
  /* Final CTA */
  .final-cta {
    padding: 100px 20px;
    background: linear-gradient(135deg, #2c7be5, #00d97e);
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
  }
  </style>