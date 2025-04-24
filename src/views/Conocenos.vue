<template>
    <div class="about-view" style="position: relative;"> <!-- Necesario para posicionar img flotante -->
  
      <!-- ====================================== -->
      <!-- == 1. Hero Section - CON IMAGEN FONDO == -->
      <!-- ====================================== -->
      <section class="about-hero with-image-background">
        <!-- Overlay sobre la imagen de fondo -->
        <div class="hero-image-overlay"></div>
  
        <!-- Contenido del Hero (Título, Subtítulo, Breadcrumb) -->
        <div class="container hero-content">
          <nav aria-label="breadcrumb" class="hero-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/">Inicio</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">Conócenos</li>
            </ol>
          </nav>
          <h1 class="hero-title animate__animated animate__fadeInDown">Forjando Conexiones,<br> Entrega por Entrega</h1>
          <p class="hero-subtitle animate__animated animate__fadeInUp animate__delay-0.5s">Descubre la historia, pasión y compromiso detrás de Tu Caja Express.</p>
        </div>
        <!-- La forma diagonal ahora se logra con la superposición de secciones y el margen negativo de la imagen flotante -->
      </section>
  
      <!-- ====================================================== -->
      <!-- == Contenedor para la Imagen que Flota ENTRE Secciones == -->
      <!-- ====================================================== -->
      <!-- Se posiciona relativamente, pero con margen negativo para subir -->
      <div class="container">
        <div class="floating-image-wrapper animate__animated animate__zoomIn animate__delay-0.5s">
             <!-- ***** IMAGEN PLACEHOLDER (Flotante) ***** -->
             <!-- Usa una imagen horizontal o cuadrada aquí -->
             <img src="https://placehold.co/800x500/ffffff/cccccc?text=Equipo+o+Proceso+Logístico" alt="Equipo Tu Caja Express o Proceso Logístico" class="floating-image">
        </div>
      </div>
  
      <!-- ====================================== -->
      <!-- == 2. Introducción y Experiencia   == -->
      <!-- ====================================== -->
      <!-- Padding top para dejar espacio a la imagen flotante -->
      <section class="about-intro section-padding intro-after-float">
        <div class="container">
          <div class="intro-grid">
            <!-- Columna de Texto -->
            <div class="intro-text-content animate__animated animate__fadeInLeft">
              <span class="subheading">NUESTRA HISTORIA</span>
              <h2 class="section-title">Somos <span class="highlight">Tu Caja Express</span></h2>
              <p>
                Una empresa familiar con más de <span class="highlight">20 años de experiencia</span>, nacida de la necesidad de conectar a las familias y negocios entre Estados Unidos, México y Centroamérica. Entendemos el valor de cada caja, no solo como un objeto, sino como un vínculo lleno de cuidado, esfuerzo y emoción.
              </p>
              <p>
                Nuestra prioridad es tu tranquilidad. Por eso, combinamos un trato cercano y personalizado con una logística robusta y eficiente, asegurando que tus envíos lleguen seguros a su destino, puerta a puerta, superando fronteras y obstáculos.
              </p>
            </div>
            <!-- Columna Visual (Imagen + Badge) -->
            <div class="intro-visual-content animate__animated animate__fadeInRight">
              <!-- ***** IMAGEN PLACEHOLDER (Intro - Oficina/Familia/Mapa Antiguo) ***** -->
              <img src="/images/logo.jpg" alt="Historia y Orígenes de Tu Caja Express" class="intro-image">
              <div class="experience-badge">
                <div class="years">20+</div> <!-- Actualiza años -->
                <div class="label">Años<br>Conectando</div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- ====================================== -->
      <!-- == 3. Misión y Visión               == -->
      <!-- ====================================== -->
      <section class="mission-vision-section section-padding bg-dark-accent">
        <div class="container">
          <div class="mission-vision-grid">
            <div class="mission-card animate__animated animate__fadeInUp">
              <div class="mv-icon-wrapper"><i class="fas fa-people-carry"></i></div>
              <h3 class="mv-title">Misión</h3>
              <p class="mv-text">Transportar encomiendas y paquetería desde USA a MX y CA con seguridad, confiabilidad y eficacia, fortaleciendo lazos familiares y llevando alegría a cada hogar.</p>
            </div>
             <div class="vision-card animate__animated animate__fadeInUp" data-wow-delay="0.2s">
               <div class="mv-icon-wrapper"><i class="fas fa-rocket"></i></div>
              <h3 class="mv-title">Visión</h3>
              <p class="mv-text">Ser la empresa líder en envíos internacionales, superando expectativas de clientes y agentes con un servicio reconocido por su rapidez, seguridad y confianza.</p>
            </div>
          </div>
        </div>
      </section>
  
       <!-- ====================================== -->
       <!-- == 4. Nuestros Valores              == -->
       <!-- ====================================== -->
       <section class="values-section section-padding">
          <div class="container">
               <h2 class="section-title text-center">Nuestros <span class="highlight">Pilares</span></h2>
               <p class="section-intro text-center">Los principios que nos definen y guían nuestro trabajo diario.</p>
               <div class="values-grid">
                   <div class="value-card animate__animated animate__zoomIn">
                      <div class="value-icon icon-confianza"><i class="fas fa-shield-alt"></i></div>
                      <h4>Confianza y Seguridad</h4>
                      <p>Integridad en cada paso, cuidando lo que más valoras.</p>
                   </div>
                   <div class="value-card animate__animated animate__zoomIn" data-wow-delay="0.1s">
                       <div class="value-icon icon-cliente"><i class="fas fa-heart"></i></div>
                      <h4>Compromiso Cliente</h4>
                      <p>Tu satisfacción es el motor de nuestro servicio.</p>
                   </div>
                   <div class="value-card animate__animated animate__zoomIn" data-wow-delay="0.2s">
                      <div class="value-icon icon-conexion"><i class="fas fa-link"></i></div>
                      <h4>Conexión Humana</h4>
                      <p>Más que logística, unimos personas y culturas.</p>
                   </div>
                   <div class="value-card animate__animated animate__zoomIn" data-wow-delay="0.3s">
                       <div class="value-icon icon-eficiencia"><i class="fas fa-cogs"></i></div>
                      <h4>Eficiencia y Mejora</h4>
                      <p>Optimizamos procesos para ofrecerte lo mejor.</p>
                   </div>
               </div>
           </div>
       </section>
  
       <!-- ====================================== -->
       <!-- == 5. Nuestra Diferencia           == -->
       <!-- ====================================== -->
       <section class="difference-section section-padding bg-light-alt">
         <div class="container">
            <h2 class="section-title text-center">El Toque <span class="highlight">Tu Caja Express</span></h2>
            <p class="section-intro text-center">Descubre por qué somos la opción preferida para tus envíos.</p>
            <div class="difference-item animate__animated animate__fadeInLeft">
              <div class="difference-image">
                 <img src="https://placehold.co/500x400/6366f1/ffffff?text=Servicio+Bilingüe+Cercano" alt="Atención personalizada Tu Caja Express">
              </div>
              <div class="difference-text">
                <h3>Atención Personalizada</h3>
                <p>Como empresa familiar, te ofrecemos un trato cercano. Nuestro equipo bilingüe está listo para ayudarte y encontrar la solución perfecta para ti.</p>
              </div>
            </div>
             <div class="difference-item reverse animate__animated animate__fadeInRight">
               <div class="difference-image">
                  <img src="/images/camion3.jpeg" alt="Red logística Tu Caja Express">
               </div>
               <div class="difference-text">
                 <h3>Logística Inteligente</h3>
                 <p>Nuestra red optimizada y tecnología de seguimiento garantizan tiempos de entrega competitivos y visibilidad de tu paquete en cada etapa del viaje.</p>
               </div>
             </div>
             <div class="difference-item animate__animated animate__fadeInLeft">
               <div class="difference-image">
                  <img src="/images/agencia.png" alt="Apoyo a agentes autorizados Tu Caja Express">
               </div>
               <div class="difference-text">
                 <h3>Red de Agentes Sólida</h3>
                 <p>Colaboramos estrechamente con nuestra red de agentes en USA, brindándoles herramientas, soporte y una relación basada en la confianza mutua.</p>
                <router-link to="/aplicar-agente" class="btn-link">Conviértete en Agente <i class="fas fa-arrow-right"></i></router-link>
               </div>
             </div>
         </div>
       </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import 'animate.css';
  const currentYear = ref(new Date().getFullYear());
  // Asegurar configuración global de FontAwesome e iconos necesarios
  </script>
  
  <style scoped>
  /* --- Variables --- */
  :root {
    --primary-color: #e74c3c; /* Rojo */
    --secondary-color: #3498db; /* Azul */
    --dark-color: #1f2937;     /* Gris-Azul oscuro */
    --light-color: #f8f9fa;
    --light-alt-color: #f3f4f6;
    --text-color: #374151;
    --text-muted: #6b7280;
    --text-light: #ffffff;
    --font-family: 'Poppins', sans-serif;
    --border-radius: 12px;
    --box-shadow: 0 4px 15px rgba(0, 0, 0, 0.06);
    --box-shadow-lg: 0 10px 30px rgba(0, 0, 0, 0.1);
    --success-color: #10b981; /* Verde */
    --info-color: #6366f1;   /* Indigo */
    --highlight-color: var(--primary-color);
    /* Ajuste para imagen flotante */
    --floating-image-overlap: -150px; /* Cuánto sube la imagen (valor negativo) */
  }
  
  /* --- Estilos Generales --- */
  .about-view { background-color: white; position: relative; /* Necesario para img flotante absoluta */ }
  .section-padding { padding: 90px 0; }
  .bg-dark-accent { background-color: var(--dark-color); color: white; }
  .bg-light-alt { background-color: var(--light-alt-color); }
  .text-center { text-align: center; }
  .highlight { color: var(--highlight-color); font-weight: 600;}
  
  .subheading { display: inline-block; color: var(--primary-color); font-size: 0.9rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; position: relative; padding-bottom: 5px; }
  .subheading::after { content: ''; position: absolute; bottom: 0; left: 0; width: 40px; height: 2px; background-color: var(--primary-color); opacity: 0.7; }
  .section-title { font-size: clamp(2.1rem, 5vw, 3rem); font-weight: 700; color: var(--dark-color); margin-bottom: 20px; line-height: 1.3; }
  .section-intro { font-size: 1.1rem; color: var(--text-muted); max-width: 700px; margin: 0 auto 60px auto; line-height: 1.7; }
  
  /* ====================================== */
  /* == 1. Hero Section con Fondo Imagen == */
  /* ====================================== */
  .about-hero.with-image-background {
    /* --- Fondo con Imagen --- */
    background-color: var(--dark-color); /* Fallback */
    background-image: linear-gradient(rgba(31, 41, 55, 0.75) 0%, rgba(31, 41, 55, 0.9) 100%), /* Overlay más oscuro */
                      url('/images/camion1.jpg'); /* <<< ¡RUTA A TU IMAGEN DE BANNER! */
    background-size: cover;
    background-position: center 30%; /* Ajusta la posición vertical */
    background-repeat: no-repeat;
    /* --- Estilos generales del Hero --- */
    padding: 90px 0 60px 0; /* Ajustar padding */
    position: relative; /* Para z-index y pseudo elementos si fueran necesarios */
    text-align: center;
    color: var(--text-light);
    /* No necesitamos min-height ni overflow aquí */
  }
  /* Ocultar el shape si no se usa */
  /* .hero-background-shape { display: none; } */
  /* Asegurarse que el contenido esté visible sobre el fondo/overlay */
  .hero-content { position: relative; z-index: 2; padding-top: 30px; }
  /* (Estilos de .breadcrumb, .hero-title, .hero-subtitle sin cambios) */
  .hero-breadcrumb { margin-bottom: 30px; display: flex; justify-content: center; }
  .breadcrumb { background-color: transparent; padding: 0; margin: 0; display: flex; list-style: none; }
  .breadcrumb-item { font-size: 0.9rem; color: rgba(255, 255, 255, 0.8); } /* Más claro */
  .breadcrumb-item a { color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: color 0.3s ease; }
  .breadcrumb-item a:hover { color: white; }
  .breadcrumb-item + .breadcrumb-item::before { content: "/"; padding: 0 0.75rem; color: rgba(255, 255, 255, 0.5); }
  .breadcrumb-item.active { color: white; font-weight: 500; }
  .hero-title { font-size: clamp(2.6rem, 6.5vw, 4.2rem); font-weight: 800; color: var(--text-light); margin-bottom: 20px; line-height: 1.15; text-shadow: 0 4px 10px rgba(0,0,0,0.4); } /* Sombra más definida */
  .hero-subtitle { font-size: clamp(1.1rem, 3vw, 1.4rem); font-weight: 300; color: rgba(255, 255, 255, 0.95); max-width: 600px; margin: 0 auto; }
  
  /* ================================================ */
  /* == Contenedor Imagen Flotante (CSS corregido) == */
  /* ================================================ */
  /* El contenedor vacío <div class="container"> solo ayuda a centrar */
  .floating-image-wrapper {
    /* --- Posicionamiento --- */
    margin-top: var(--floating-image-overlap); /* Aplicar el margen negativo */
    position: relative; /* Para controlar el apilamiento */
    z-index: 10;        /* Debe estar encima de las secciones */
    /* --- Centrado y Tamaño --- */
    max-width: 750px;   /* Ancho máximo */
    margin-left: auto;  /* Centrar */
    margin-right: auto; /* Centrar */
    /* --- Estilo del Marco --- */
    padding: 10px;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-lg);
  }
  .floating-image {
    display: block;
    width: 100%;
    height: auto;
    border-radius: calc(var(--border-radius) - 5px);
  }
  
  
  /* ====================================== */
  /* == 2. Intro y Experiencia (CSS corregido) == */
  /* ====================================== */
  .about-intro.intro-after-float {
    /* --- Compensación por Imagen Flotante --- */
     padding-top: calc( (var(--floating-image-overlap) * -1) + 30px); /* ~150px + 30px = 180px. Ajustar 30px */
     /* El padding debe ser MAYOR que la porción de la imagen que invade esta sección */
     /* **************************************** */
     margin-top: 0; /* Resetear margen por si acaso */
  }
  /* (Resto de estilos .intro-grid, .experience-badge, etc. sin cambios) */
  .intro-grid { display: grid; grid-template-columns: 1.2fr 1fr; align-items: center; gap: 60px; }
  .intro-text-content p { font-size: 1.05rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 20px; }
  .intro-text-content .section-title { margin-top: 15px; }
  .intro-visual-content { position: relative; text-align: center; }
  .intro-image { display: block; width: 100%; height: auto; max-height: 550px; object-fit: cover; border-radius: var(--border-radius); box-shadow: var(--box-shadow-lg); }
  .experience-badge { position: absolute; bottom: 20px; right: 20px; background-color: var(--primary-color); color: white; border-radius: 50%; width: 130px; height: 125px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; line-height: 1.1; box-shadow: 0 5px 15px rgba(0,0,0,0.2); border: 4px solid white; }
  .experience-badge .years { font-size: 2.8rem; font-weight: 700; }
  .experience-badge .label { font-size: 0.75rem; font-weight: 500; text-transform: uppercase; letter-spacing: 0.5px; }
  
  
  /* ======================================================= */
  /* == Secciones 3, 4, 5 (Misión, Valores, Diferencia) == */
  /* ==          (SIN CAMBIOS EN CSS)                     == */
  /* ======================================================= */
  .mission-vision-section { background-color: var(--dark-color); color: white; }
  .mission-vision-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; color: var(--text-light); }
  .mission-card, .vision-card { background-color: rgba(255, 255, 255, 0.05); padding: 40px; border-radius: var(--border-radius); border: 1px solid rgba(255, 255, 255, 0.1); display: flex; flex-direction: column; align-items: center; text-align: center; }
  .mv-icon-wrapper { width: 70px; height: 70px; border-radius: 50%; background-color: var(--primary-color); color: white; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; margin-bottom: 25px; }
  .vision-card .mv-icon-wrapper { background-color: var(--success-color); }
  .mv-title { font-size: 1.6rem; font-weight: 600; color: white; margin-bottom: 15px; }
  .mv-text { font-size: 1rem; line-height: 1.7; color: var(--text-secondary-light); opacity: 0.9; }
  .values-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 30px; }
  .value-card { border: 1px solid #e5e7eb; padding: 30px 25px; border-radius: var(--border-radius); text-align: center; transition: box-shadow 0.3s ease, transform 0.3s ease; background-color: white; }
  .value-card:hover { box-shadow: var(--box-shadow); transform: translateY(-5px); }
  .value-icon { width: 60px; height: 60px; border-radius: 50%; margin: 0 auto 20px auto; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.6rem; }
  .icon-confianza { background-color: var(--primary-color); }
  .icon-cliente  { background-color: var(--info-color); }
  .icon-conexion { background-color: var(--success-color); }
  .icon-eficiencia{ background-color: #f59e0b; }
  .value-card h4 { font-size: 1.2rem; font-weight: 600; color: var(--text-color); margin-bottom: 10px; }
  .value-card p { font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }
  .difference-item { display: flex; align-items: center; gap: 60px; margin-bottom: 80px; }
  .difference-item:last-child { margin-bottom: 0; }
  .difference-item.reverse { flex-direction: row-reverse; }
  .difference-image { flex: 1; min-width: 0; border-radius: var(--border-radius); overflow: hidden; box-shadow: var(--box-shadow-lg); }
  .difference-image img { display: block; width: 100%; height: auto; transition: transform 0.4s ease; }
  .difference-item:hover .difference-image img { transform: scale(1.05); }
  .difference-text { flex: 1.2; }
  .difference-text h3 { font-size: 1.9rem; font-weight: 600; color: var(--dark-color); margin-bottom: 20px; }
  .difference-text p { font-size: 1.05rem; line-height: 1.8; color: var(--text-muted); margin-bottom: 30px; }
  .btn-link { color: var(--primary-color); text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 10px; transition: color 0.3s ease, gap 0.3s ease; border-bottom: 2px solid transparent; padding-bottom: 3px;}
  .btn-link i { transition: transform 0.3s ease; }
  .btn-link:hover { color: #a12c22; gap: 15px; border-bottom-color: var(--primary-color);}
  .btn-link:hover i { transform: translateX(5px); }
  
  
  /* ====================================== */
  /* ==           Responsive             == */
  /* ====================================== */
  @media (max-width: 992px) {
      .section-padding { padding: 70px 0; }
       /* Ajustar margen e intro en tablet */
      :root { --floating-image-overlap: -120px; }
      .floating-image-wrapper { max-width: 650px; margin-top: var(--floating-image-overlap); margin-bottom: 40px;}
      .about-intro.intro-after-float { padding-top: calc( (var(--floating-image-overlap) * -1) + 20px); }
  
      .intro-grid { grid-template-columns: 1fr; gap: 40px; text-align: center;}
      .intro-text-content { order: 2; }
      .intro-visual-content { order: 1; max-width: 500px; margin: 0 auto; }
      .experience-badge { width: 110px; height: 110px; }
      .mission-vision-grid { grid-template-columns: 1fr; gap: 35px;}
      .difference-item { flex-direction: column !important; gap: 35px; text-align: center;}
      .difference-image { max-width: 500px; width: 100%; }
  }
  
  @media (max-width: 768px) {
      .section-padding { padding: 60px 0; }
      .about-hero { padding: 70px 0 40px 0; }
      /* Ajustar margen e intro en tablet baja */
       :root { --floating-image-overlap: -100px; }
       .floating-image-wrapper { max-width: 85%; margin-top: var(--floating-image-overlap); margin-bottom: 30px; padding: 8px;}
      .about-intro.intro-after-float { padding-top: calc( (var(--floating-image-overlap) * -1) + 10px); }
      .values-grid { grid-template-columns: 1fr 1fr;}
  }
  
  @media (max-width: 576px) {
      .section-padding { padding: 50px 0; }
      .hero-title { font-size: 2rem; }
      .hero-subtitle { font-size: 1rem; }
      /* Ajustar margen e intro en móvil */
       :root { --floating-image-overlap: -80px; }
       .floating-image-wrapper { margin-top: var(--floating-image-overlap); margin-bottom: 25px; padding: 6px;}
      .about-intro.intro-after-float { padding-top: calc( (var(--floating-image-overlap) * -1) + 0px); }
  
      .section-title { font-size: 1.8rem; }
      .section-intro { font-size: 0.95rem; margin-bottom: 40px;}
      .intro-text-content p { font-size: 0.95rem;}
      .experience-badge { width: 90px; height: 90px; border-width: 3px; right: 15px; bottom: 15px;}
      .experience-badge .years { font-size: 1.8rem;}
      .experience-badge .label { font-size: 0.6rem; }
      .mission-card, .vision-card { padding: 30px 25px;}
      .mv-title { font-size: 1.4rem; }
      .mv-text { font-size: 0.95rem;}
      .values-grid { grid-template-columns: 1fr; }
      .difference-text h3 { font-size: 1.5rem; }
      .difference-text p { font-size: 0.95rem; }
  }
  </style>