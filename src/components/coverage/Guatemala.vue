<template>
    <!-- Contenedor principal para el contenido específico de Guatemala -->
    <div class="guatemala-component country-content-area animate__animated animate__fadeIn">
  
      <!-- ==================================================== -->
      <!-- ==    1. Banner Introductorio (Guatemala)         == -->
      <!-- ==================================================== -->
      <section class="guatemala-intro-banner">
        <div class="intro-banner-background">
          <!-- ***** IMAGEN PLACEHOLDER (Banner Intro Guatemala) ***** -->
          <!-- Reemplaza con imagen de Guatemala (Tikal, Antigua, Lago Atitlán) -->
          <!-- Ejemplo: /images/backgrounds/guatemala-intro.jpg -->
          <img src="/images/paises/guatemala/banner.jpeg" alt="Imagen introductoria de envíos a Guatemala" class="intro-banner-img">
          <div class="intro-banner-overlay"></div>
        </div>
        <div class="container intro-banner-content">
          <h1 class="intro-banner-title">Envíos a <span class="highlight-guatemala">Guatemala</span>, <br>Conexión Segura y Eficiente</h1>
          <p class="intro-banner-text">Tu puente logístico desde Estados Unidos al corazón del mundo Maya.</p>
        </div>
      </section>
  
      <!-- ==================================================== -->
      <!-- ==    2. Por Qué Elegirnos (Beneficios Guatemala) == -->
      <!-- ==================================================== -->
      <section class="guatemala-benefits section-padding">
        <div class="container">
          <h2 class="section-title text-center">Ventajas Exclusivas para <span class="highlight">Guatemala</span></h2>
          <p class="section-subtitle text-center">Descubre cómo optimizamos tus envíos al territorio guatemalteco.</p>
          <div class="benefits-grid">
            <!-- Beneficio 1 -->
            <div class="benefit-card animate__animated animate__fadeInUp" data-wow-delay="0.1s">
              <div class="benefit-icon" style="background-color: #000b74;">
                 <i class="fas fa-map-signs"></i> <!-- Icono sugerido: Señales de mapa -->
              </div>
              <h3>Cobertura Estratégica</h3>
              <p>Llegamos a Ciudad de Guatemala, Quetzaltenango, Antigua y más.</p>
            </div>
            <!-- Beneficio 3 -->
            <div class="benefit-card animate__animated animate__fadeInUp" data-wow-delay="0.3s">
               <div class="benefit-icon" style="background-color: #F39C12;"> <!-- Naranja/Dorado -->
                 <i class="fas fa-route"></i> <!-- Icono sugerido: Ruta -->
               </div>
               <h3>Rutas Optimizadas</h3>
               <p>Tiempos de entrega confiables ajustados a las rutas locales.</p>
            </div>
             <!-- Beneficio 4 -->
            <div class="benefit-card animate__animated animate__fadeInUp" data-wow-delay="0.4s">
              <div class="benefit-icon" style="background-color: var(--secondary-color);"> <!-- Azul secundario -->
                <i class="fas fa-users"></i> <!-- Icono sugerido: Grupo de personas -->
              </div>
              <h3>Equipo Local</h3>
              <p>Personal familiarizado con la logística y cultura guatemalteca.</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ==================================================== -->
      <!-- ==      3. Galería Visual (Envíos a GT)           == -->
      <!-- ==================================================== -->
      <section class="guatemala-visual-gallery section-padding bg-light">
          <div class="container">
              <h2 class="section-title text-center">Nuestra Logística hacia <span class="highlight">Guatemala</span></h2>
              <p class="section-subtitle text-center">Así aseguramos que tus paquetes lleguen seguros.</p>
              <div class="gallery-grid">
                  <!-- ***** IMAGEN PLACEHOLDER (Galería GT 1) ***** -->
                  <div class="gallery-item animate__animated animate__zoomIn">
                      <img src="/images/recepcion.png" alt="Recepción de paquetes en USA para Guatemala">
                      <div class="gallery-caption">Recepción en USA</div>
                  </div>
                   <!-- ***** IMAGEN PLACEHOLDER (Galería GT 2) ***** -->
                  <div class="gallery-item animate__animated animate__zoomIn" data-wow-delay="0.1s">
                      <img src="/images/embalaje.png" alt="Embalaje y envío">
                       <div class="gallery-caption">Transporte Eficiente</div>
                  </div>
                   <!-- ***** IMAGEN PLACEHOLDER (Galería GT 4) ***** -->
                   <div class="gallery-item animate__animated animate__zoomIn" data-wow-delay="0.3s">
                      <img src="/images/entrega.png" alt="Entrega final de paquete en Guatemala">
                       <div class="gallery-caption">Entrega Puerta a Puerta</div>
                  </div>
              </div>
          </div>
      </section>
  
      <!-- ==================================================== -->
      <!-- ==    4. Cobertura Detallada (Mapa Guatemala)     == -->
      <!-- ==================================================== -->
      <section class="guatemala-coverage section-padding">
        <div class="container">
           <h2 class="section-title text-center">Cobertura en <span class="highlight">Guatemala</span></h2>
           <div class="coverage-content">
             <div class="coverage-text animate__animated animate__fadeInLeft">
               <p>Nuestra red cubre los principales departamentos y ciudades, incluyendo:</p>
               <ul>
                 <li><i class="fas fa-city"></i> Ciudad de Guatemala</li>
                 <li><i class="fas fa-city"></i> Mixco</li>
                 <li><i class="fas fa-city"></i> Villa Nueva</li>
                 <li><i class="fas fa-city"></i> Quetzaltenango (Xela)</li>
                 <li><i class="fas fa-city"></i> Escuintla</li>
                 <li><i class="fas fa-map-marker-alt"></i> ¡Y muchas otras cabeceras y municipios!</li>
               </ul>
               <p><strong>Consulta por tarifas y cobertura exacta</strong> para tu destino específico en Guatemala.</p>
             </div>
             <div class="coverage-map animate__animated animate__fadeInRight">
               <!-- ***** IMAGEN PLACEHOLDER (Mapa Cobertura GT) ***** -->
               <img src="/images/mapa-guate.jpg" alt="Mapa de cobertura en Guatemala" class="map-image">
             </div>
           </div>
        </div>
      </section>
  
      <!-- ==================================================== -->
      <!-- ==      5. Deslizador de Imágenes (Guatemala)     == -->
      <!-- ==================================================== -->
      <section class="guatemala-slider section-padding bg-light">
          <div class="container">
              <h2 class="section-title text-center">Imágenes de <span class="highlight">Guatemala</span></h2>
              <p class="section-subtitle text-center">Paisajes y cultura del destino de tus envíos.</p>
              <div class="slider-container">
                  <div class="slider-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                      <!-- Slide 1 -->
                      <div class="slide">
                           <!-- ***** IMAGEN PLACEHOLDER (Slider GT 1) ***** -->
                          <img src="/images/paises/guatemala/antigua-gu.jpeg" alt="Antigua Guatemala">
                          <div class="slide-caption"><h3>Antigua Guatemala</h3><p>Ciudad colonial, destino frecuente.</p></div>
                      </div>
                      <!-- Slide 2 -->
                      <div class="slide">
                           <!-- ***** IMAGEN PLACEHOLDER (Slider GT 2) ***** -->
                          <img src="/images/paises/guatemala/lago-atitlan.jpeg" alt="Lago Atitlán">
                           <div class="slide-caption"><h3>Lago Atitlán</h3><p>Belleza natural incomparable.</p></div>
                      </div>
                      <!-- Slide 3 -->
                      <div class="slide">
                          <!-- ***** IMAGEN PLACEHOLDER (Slider GT 3) ***** -->
                          <img src="/images/paises/guatemala/textiles.jpeg" alt="Textiles guatemaltecos">
                           <div class="slide-caption"><h3>Artesanías y Textiles</h3><p>Enviando cultura y tradición.</p></div>
                      </div>
                       <!-- Slide 4 -->
                      <div class="slide">
                          <!-- ***** IMAGEN PLACEHOLDER (Slider GT 4) ***** -->
                          <img src="/images/paises/guatemala/tikal.jpeg" alt="Ruinas de Tikal">
                          <div class="slide-caption"><h3>Tikal</h3><p>Corazón del mundo Maya.</p></div>
                      </div>
                  </div>
                  <button @click="prevSlide" class="slider-nav prev" aria-label="Anterior">❮</button>
                  <button @click="nextSlide" class="slider-nav next" aria-label="Siguiente">❯</button>
                  <div class="slider-dots">
                      <span v-for="(slide, index) in slides" :key="index"
                            :class="{ active: index === currentSlide }"
                            @click="goToSlide(index)"></span>
                  </div>
              </div>
          </div>
      </section>
  
  
      <!-- ==================================================== -->
      <!-- ==      6. Sección de Servicios (Guatemala)       == -->
      <!-- ==================================================== -->
       <section class="guatemala-services section-padding">
         <div class="container">
           <h2 class="section-title text-center">Opciones de Envío a <span class="highlight">Guatemala</span></h2>
            <p class="section-subtitle text-center">Servicios diseñados para tus necesidades específicas hacia Guatemala.</p>
           <div class="services-container">
             <!-- Servicio 1 -->
             <div class="service-item animate__animated animate__zoomIn" data-wow-delay="0.1s">
               <i class="fas fa-box service-icon"></i> <!-- Icono sugerido: Caja -->
               <h4>Paquetería Consolidada</h4>
               <p>La opción más económica para envíos no urgentes a Guatemala.</p>
             </div>
             <!-- Servicio 2 -->
             <div class="service-item animate__animated animate__zoomIn" data-wow-delay="0.2s">
               <i class="fas fa-plane-departure service-icon"></i> <!-- Icono sugerido: Avión despegando -->
               <h4>Envío Aéreo Prioritario</h4>
               <p>Rapidez y eficiencia para tus paquetes urgentes a Guatemala.</p>
             </div>
             <!-- Servicio 3 -->
             <div class="service-item animate__animated animate__zoomIn" data-wow-delay="0.3s">
                <i class="fas fa-boxes service-icon"></i> <!-- Icono sugerido: Cajas apiladas -->
                <h4>Soluciones Comerciales</h4>
                <p>Logística para importaciones y envíos de negocio a negocio.</p>
             </div>
           </div>
         </div>
       </section>
  
      <!-- ==================================================== -->
      <!-- ==      7. Llamada a la Acción (CTA Guatemala)    == -->
      <!-- ==================================================== -->
      <section id="guatemala-cta" class="guatemala-cta section-padding">
        <div class="container text-center">
          <h2 class="cta-title animate__animated animate__fadeInUp">¿Enviar a <span class="highlight-guatemala">Guatemala</span>? ¡Fácil!</h2>
          <p class="cta-text animate__animated animate__fadeInUp animate__delay-0.5s">
            Cotiza ahora tu envío o contacta a nuestro equipo especializado en Guatemala.
          </p>
          <div class="cta-buttons animate__animated animate__fadeInUp animate__delay-1s">
             <!-- Actualiza los parámetros query -->
             <router-link to="/cotizar?destino=guatemala" class="cta-button primary">
              <i class="fas fa-calculator"></i> Cotizar Ahora
            </router-link>
            <router-link to="/contacto?asunto=EnvioGuatemala" class="cta-button secondary">
              <i class="fas fa-user-tie"></i> Contactar Asesor
            </router-link>
          </div>
        </div>
      </section>
  
    </div> <!-- Fin Guatemala Component -->
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue';
  import 'animate.css';
  
  // --- Lógica del Slider (igual que en México) ---
  const slides = ref([ { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 } ]);
  const currentSlide = ref(0);
  const totalSlides = computed(() => slides.value.length);
  const nextSlide = () => { currentSlide.value = (currentSlide.value + 1) % totalSlides.value; };
  const prevSlide = () => { currentSlide.value = (currentSlide.value - 1 + totalSlides.value) % totalSlides.value; };
  const goToSlide = (index) => { currentSlide.value = index; };
  
  // --- Ciclo de vida ---
  onMounted(() => {
    // Inicializaciones específicas de Guatemala si son necesarias
  });
  </script>
  
  <style scoped>
  /* --- Variables (Asegúrate que --header-height-shrunk coincida) --- */
  :root {
    /* ... (variables primario, secundario, dark, light, etc. como antes) ... */
    --primary-color: #e74c3c;
    --secondary-color: #3498db;
    --dark-color: #2c3e50;
    --light-color: #f8f9fa;
    --text-color: #333;
    --text-muted: #6c757d;
    --font-family: 'Poppins', sans-serif;
    --border-radius: 8px;
    --box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
    --header-height-shrunk: 75px; /* ¡Ajusta si es diferente! */
    /* Colores específicos Guatemala */
    --guatemala-blue: #4997D0; /* Azul de la bandera */
    --guatemala-white: #ffffff;
  }
  
  /* --- Estilo Base y Padding Superior --- */
  .country-content-area {
    padding-top: var(--header-height-shrunk);
    background-color: #fff;
  }
  
  /* --- Estilos Generales de Sección (pueden ser los mismos que México) --- */
  .section-padding { padding: 80px 0; }
  .text-center { text-align: center; }
  .bg-light { background-color: var(--light-color); }
  .highlight { color: var(--primary-color); font-weight: 600; }
  .highlight-guatemala { color: var(--guatemala-blue); font-weight: 700; }
  
  .section-title { /* ... (mismos estilos que en México) ... */
    font-size: clamp(2rem, 5vw, 2.8rem); margin-bottom: 20px; position: relative; padding-bottom: 15px; font-weight: 700; color: var(--dark-color); line-height: 1.3;
  }
  .section-title.text-center::after { /* ... (mismos estilos que en México) ... */
    content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 80px; height: 4px; background: var(--guatemala-blue); border-radius: 2px; /* Usar color de Guatemala */
  }
  .section-subtitle { /* ... (mismos estilos que en México) ... */
    font-size: 1.1rem; color: var(--text-muted); max-width: 700px; margin: 0 auto 50px auto; font-weight: 300;
  }
  
  
  /* --- Banner Introductorio Guatemala --- */
  /* (Usa los mismos estilos que .mexico-intro-banner, solo cambia el nombre de clase si quieres) */
  .guatemala-intro-banner { position: relative; min-height: 55vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; overflow: hidden; }
  .intro-banner-background { position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; background-color: var(--dark-color); }
  .intro-banner-img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6) contrast(1.1); }
  .intro-banner-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)); z-index: 2; }
  .intro-banner-content { position: relative; z-index: 3; max-width: 800px; }
  .intro-banner-title { font-size: clamp(2.5rem, 6vw, 3.8rem); /* Ajusta si es necesario */ font-weight: 700; margin-bottom: 15px; color: #fff; text-shadow: 2px 3px 6px rgba(0, 0, 0, 0.7); }
  .intro-banner-text { font-size: clamp(1.1rem, 3vw, 1.4rem); opacity: 0.9; font-weight: 300; }
  
  
  /* --- Beneficios Guatemala --- */
  /* (Mismos estilos que .mexico-benefits, .benefits-grid, etc.) */
  .benefits-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; }
  .benefit-card { background: white; border-radius: var(--border-radius); padding: 35px 25px; text-align: center; box-shadow: var(--box-shadow); transition: transform 0.3s ease, box-shadow 0.3s ease; border-bottom: 4px solid; }
  /* Ajusta los colores del borde si quieres */
  .benefit-card:nth-child(1) { border-color: var(--guatemala-blue); }
  .benefit-card:nth-child(2) { border-color: var(--primary-color); }
  .benefit-card:nth-child(3) { border-color: #F39C12; }
  .benefit-card:nth-child(4) { border-color: var(--secondary-color); }
  .benefit-card:hover { transform: translateY(-8px); box-shadow: 0 12px 25px rgba(0, 0, 0, 0.12); }
  .benefit-icon { width: 65px; height: 65px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px; color: white; font-size: 1.8rem; /* Tamaño base del icono */ box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  .benefit-icon i, .benefit-icon svg { font-size: inherit; /* Hereda el tamaño del contenedor */ }
  .benefit-card h3 { margin-bottom: 10px; font-size: 1.25rem; color: var(--dark-color); font-weight: 600; }
  .benefit-card p { color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; }
  
  
  /* --- Galería Visual Guatemala --- */
  /* (Mismos estilos que .mexico-visual-gallery, .gallery-grid, etc.) */
  .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px; }
  .gallery-item { position: relative; overflow: hidden; border-radius: var(--border-radius); box-shadow: var(--box-shadow); transition: transform 0.3s ease; }
  .gallery-item:hover { transform: scale(1.03); }
  .gallery-item img { display: block; width: 100%; height: 250px; object-fit: cover; }
  .gallery-caption { position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.8)); color: white; padding: 20px 15px 10px; font-size: 0.95rem; font-weight: 500; text-align: center; opacity: 0; transition: opacity 0.3s ease; }
  .gallery-item:hover .gallery-caption { opacity: 1; }
  
  
  /* --- Cobertura Guatemala --- */
  /* (Mismos estilos que .mexico-coverage, .coverage-content, etc.) */
  .coverage-content { display: flex; flex-wrap: wrap; align-items: center; gap: 40px; }
  .coverage-text { flex: 1; min-width: 300px; }
  .coverage-text p { color: var(--text-muted); margin-bottom: 15px; font-size: 1.05rem; }
  .coverage-text ul { list-style: none; padding-left: 0; margin-bottom: 15px; }
  .coverage-text li { margin-bottom: 12px; color: var(--text-color); font-size: 1rem; display: flex; align-items: center; }
  .coverage-text li i { color: var(--guatemala-blue); /* Usar color de Guatemala */ margin-right: 12px; width: 20px; text-align: center; flex-shrink: 0; }
  .coverage-text strong { color: var(--primary-color); }
  .coverage-map { flex: 1; min-width: 300px; text-align: center; }
  .map-image { max-width: 100%; height: auto; border-radius: var(--border-radius); box-shadow: 0 8px 25px rgba(0,0,0,0.15); background-color: #eee; }
  
  
  /* --- Slider Guatemala --- */
  /* (Mismos estilos que .mexico-slider, .slider-container, etc.) */
  .slider-container { position: relative; width: 100%; max-width: 1000px; margin: 0 auto; overflow: hidden; border-radius: var(--border-radius); box-shadow: var(--box-shadow); }
  .slider-wrapper { display: flex; transition: transform 0.5s ease-in-out; }
  .slide { min-width: 100%; position: relative; box-sizing: border-box; }
  .slide img { display: block; width: 100%; height: auto; max-height: 500px; object-fit: cover; }
  .slide-caption { position: absolute; bottom: 0; left: 0; width: 100%; background: linear-gradient(transparent, rgba(0,0,0,0.7) 80%); color: white; padding: 30px 20px 20px; text-align: left; }
  .slide-caption h3 { margin: 0 0 5px 0; font-size: 1.4rem; font-weight: 600; }
  .slide-caption p { margin: 0; font-size: 1rem; opacity: 0.9; }
  .slider-nav { position: absolute; top: 50%; transform: translateY(-50%); background-color: rgba(0, 0, 0, 0.5); color: white; border: none; padding: 10px 15px; font-size: 1.5rem; cursor: pointer; border-radius: 50%; z-index: 10; transition: background-color 0.2s ease; }
  .slider-nav:hover { background-color: rgba(0, 0, 0, 0.8); }
  .slider-nav.prev { left: 15px; }
  .slider-nav.next { right: 15px; }
  .slider-dots { position: absolute; bottom: 15px; left: 50%; transform: translateX(-50%); display: flex; gap: 8px; z-index: 10; }
  .slider-dots span { width: 10px; height: 10px; border-radius: 50%; background-color: rgba(255, 255, 255, 0.5); cursor: pointer; transition: background-color 0.2s ease; }
  .slider-dots span.active { background-color: white; }
  
  
  /* --- Servicios Guatemala --- */
  /* (Mismos estilos que .mexico-services, .services-container, etc.) */
  .services-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; margin-top: 30px; }
  .service-item { background-color: #fff; padding: 35px 30px; border-radius: var(--border-radius); text-align: center; box-shadow: var(--box-shadow); transition: transform 0.3s ease, background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease; border: 1px solid #eee; border-top: 4px solid var(--light-color); }
  .service-item:hover { transform: translateY(-10px); background-color: var(--guatemala-blue); /* Color Guatemala en hover */ color: white; border-top-color: var(--guatemala-blue); border-color: var(--guatemala-blue); }
  .service-icon { font-size: 3rem; margin-bottom: 20px; color: var(--guatemala-blue); /* Color Guatemala base */ transition: color 0.3s ease; }
  .service-item:hover .service-icon { color: white; }
  .service-item h4 { font-size: 1.3rem; font-weight: 600; margin-bottom: 10px; transition: color 0.3s ease; color: var(--dark-color); }
  .service-item:hover h4 { color: white; }
  .service-item p { font-size: 0.95rem; line-height: 1.6; transition: color 0.3s ease; color: var(--text-muted); }
  .service-item:hover p { color: rgba(255, 255, 255, 0.9); }
  
  
  /* --- CTA Guatemala --- */
  /* (Mismos estilos que .mexico-cta, .cta-title, etc., quizás cambiar color primario del botón) */
  .guatemala-cta { background: var(--light-color); border-top: 1px solid #eee; }
  .cta-title { font-size: clamp(2rem, 5vw, 2.8rem); margin-bottom: 15px; font-weight: 700; color: var(--dark-color); }
  .cta-text { font-size: 1.2rem; margin-bottom: 35px; color: var(--text-muted); max-width: 650px; margin-left: auto; margin-right: auto; }
  .cta-buttons { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; }
  .cta-button { padding: 14px 35px; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; border: 2px solid transparent; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
  .cta-button.primary { background-color: var(--guatemala-blue); /* Botón primario con color Guatemala */ color: white; border-color: var(--guatemala-blue); }
  .cta-button.primary:hover { background-color: #3a7db1; /* Azul más oscuro */ border-color: #3a7db1; transform: translateY(-3px); box-shadow: 0 6px 15px rgba(0,0,0,0.15); }
  .cta-button.secondary { background-color: var(--dark-color); color: white; border-color: var(--dark-color); }
  .cta-button.secondary:hover { background-color: #1e2b37; border-color: #1e2b37; transform: translateY(-3px); box-shadow: 0 6px 15px rgba(0,0,0,0.15); }
  
  
  /* --- Responsive (Adaptar si es necesario) --- */
  /* (Mantener o ajustar media queries como en México) */
  @media (max-width: 992px) {
      /* ... */
  }
  @media (max-width: 768px) {
    .country-content-area {
        padding-top: 65px; /* Ajustar si es necesario */
    }
    .section-padding { padding: 60px 0; }
    .gallery-grid { grid-template-columns: 1fr 1fr; }
    /* ... */
  }
  @media (max-width: 576px) {
    .section-padding { padding: 50px 0; }
    /* ... */
  }
  </style>