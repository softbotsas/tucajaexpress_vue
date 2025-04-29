<template>
  <div class="mexico-component country-content-area animate__animated animate__fadeIn">

    <!-- ============================================= -->
    <!-- ==    1. HERO INMERSIVO - BIENVENIDA       == -->
    <!-- ============================================= -->
    <section class="mexico-hero-local">
      <div class="hero-background">
        <!-- ***** IMAGEN PLACEHOLDER (Hero México - Principal) ***** -->
        <!-- Reemplaza con una imagen ESPECTACULAR y de alta calidad de México -->
        <!-- (Ej: Zócalo CDMX al atardecer, Chichén Itzá, paisaje de agave) -->
        <!-- Ruta ejemplo: /images/backgrounds/mexico-hero-main.jpg -->
        <img src="/images/backgrounds/mexico-intro.jpeg" alt="Bienvenida a envíos a México" class="hero-bg-img">
        <div class="hero-overlay-pattern"></div> <!-- Overlay con patrón sutil -->
      </div>
      <div class="container hero-content">
        <div class="flag-colors-bar">
          <div class="color-stripe green"></div>
          <div class="color-stripe white"></div>
          <div class="color-stripe red"></div>
        </div>
        <h1 class="hero-title-local">
          <span class="line1">Tu Conexión Directa</span><br>
          <span class="line2">con el Corazón de <span class="highlight-mexico-red">México</span></span>
        </h1>
        <p class="hero-subtitle-local">Envíos desde USA con la eficiencia y calidez que nos caracteriza.</p>
        <router-link to="/cotizar?destino=mexico" class="cta-button hero-cta">
          ¡Cotiza tu Envío Ahora!
        </router-link>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- ==    2. VENTAJAS CON SABOR LOCAL         == -->
    <!-- ============================================= -->
    <section class="mexico-advantages section-padding">
      <div class="container">
        <h2 class="section-title text-center">¿Por Qué Confiar en Nosotros para <span class="highlight-mexico-green">México</span>?</h2>
        <p class="section-subtitle text-center">Más que envíos, creamos puentes. Descubre nuestras ventajas únicas.</p>
        <div class="advantages-grid">
          <!-- Ventaja 1: Cobertura -->
          <div class="advantage-card animate__animated animate__fadeInUp">
            <div class="advantage-icon-wrapper icon-green">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>Cobertura Extensa</h3>
            <p>Desde Tijuana hasta Cancún, cubrimos las rutas clave y destinos remotos.</p>
            <!-- Miniatura Opcional -->
          </div>
          <!-- Ventaja 2: Aduanas -->
          <div class="advantage-card animate__animated animate__fadeInUp" data-wow-delay="0.1s">
            <div class="advantage-icon-wrapper icon-red">
              <i class="fas fa-file-signature"></i>
            </div>
            <h3>Aduana sin Estrés</h3>
            <p>Expertos en trámites aduanales mexicanos para una importación fluida.</p>
          </div>
          <!-- Ventaja 3: Rapidez -->
          <div class="advantage-card animate__animated animate__fadeInUp" data-wow-delay="0.2s">
            <div class="advantage-icon-wrapper icon-gold">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            <h3>Rapidez y Eficiencia</h3>
            <p>Opciones de envío adaptadas a tu tiempo y presupuesto.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- ==    3. EL VIAJE DE TU PAQUETE (Visual)   == -->
    <!-- ============================================= -->
    <section class="mexico-journey section-padding bg-light">
      <div class="container">
        <h2 class="section-title text-center">El Viaje de tu Envío a <span class="highlight-mexico-red">México</span></h2>
        <p class="section-subtitle text-center">Seguimos cada paso para garantizar la entrega segura.</p>
        <!-- Paso 1: Recepción USA -->
        <div class="journey-step animate__animated animate__fadeInLeft">
          <div class="journey-image">
            <!-- ***** IMAGEN PLACEHOLDER (Viaje - Recepción USA) ***** -->
            <img src="/images/imagen1.jpg" alt="Recepción de paquete en USA">
          </div>
          <div class="journey-text">
            <span class="step-number">01</span>
            <h3>Recepción y Consolidación</h3>
            <p>Recibimos o recogemos tu paquete en nuestras bodegas de USA, lo revisamos y preparamos para el viaje internacional.</p>
          </div>
        </div>
        <!-- Paso 2: Transporte -->
        <div class="journey-step reverse animate__animated animate__fadeInRight">
          <div class="journey-image">
            <!-- ***** IMAGEN PLACEHOLDER (Viaje - Transporte) ***** -->
            <img src="/images/12.jpg" alt="Transporte terrestre o aéreo a México">
          </div>
          <div class="journey-text">
             <span class="step-number">02</span>
            <h3>Transporte Estratégico</h3>
            <p>Seleccionamos la ruta más eficiente (terrestre o aérea) y segura para cruzar la frontera.</p>
          </div>
        </div>
        <!-- Paso 3: Aduana México -->
         <div class="journey-step animate__animated animate__fadeInLeft">
          <div class="journey-image">
            <!-- ***** IMAGEN PLACEHOLDER (Viaje - Aduana MX) ***** -->
            <img src="/images/aduanamx.jpeg" alt="Proceso aduanal en México">
          </div>
          <div class="journey-text">
             <span class="step-number">03</span>
            <h3>Liberación Aduanal</h3>
            <p>Gestionamos la documentación necesaria ante las autoridades mexicanas para una rápida liberación.</p>
          </div>
        </div>
         <!-- Paso 4: Entrega Final -->
        <div class="journey-step reverse animate__animated animate__fadeInRight">
          <div class="journey-image">
            <!-- ***** IMAGEN PLACEHOLDER (Viaje - Entrega MX) ***** -->
            <img src="/images/entrega.jpeg" alt="Entrega de paquete en domicilio mexicano">
          </div>
          <div class="journey-text">
            <span class="step-number">04</span>
            <h3>Entrega en Destino</h3>
            <p>Nuestra red local se encarga de llevar tu paquete hasta la puerta de tu destinatario en México.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============================================= -->
    <!-- ==    4. GALERIA DE DESTINOS POPULARES     == -->
    <!-- ============================================= -->
    <section class="mexico-destinations section-padding">
        <div class="container">
            <h2 class="section-title text-center">Explora los Destinos que <span class="highlight-mexico-green">Conectamos</span></h2>
            <p class="section-subtitle text-center">Algunos de los lugares fascinantes a los que llegan tus envíos.</p>
            <div class="destinations-grid">
                <!-- Destino 1 -->
                <div class="destination-card animate__animated animate__zoomIn">
                    <!-- ***** IMAGEN PLACEHOLDER (Destino 1 - CDMX) ***** -->
                    <img src="/images/8095.jpg" alt="Ciudad de México">
                    <div class="destination-overlay">
                        <h3>Ciudad de México</h3>
                        <p>El vibrante corazón del país.</p>
                    </div>
                </div>
                 <!-- Destino 2 -->
                <div class="destination-card animate__animated animate__zoomIn" data-wow-delay="0.1s">
                    <!-- ***** IMAGEN PLACEHOLDER (Destino 2 - Cancún/Playa) ***** -->
                    <img src="/images/6355.jpg" alt="Cancún">
                    <div class="destination-overlay">
                        <h3>Riviera Maya</h3>
                        <p>Playas paradisíacas y cultura.</p>
                    </div>
                </div>
                 <!-- Destino 3 -->
                 <div class="destination-card animate__animated animate__zoomIn" data-wow-delay="0.2s">
                    <!-- ***** IMAGEN PLACEHOLDER (Destino 3 - Guadalajara/Tequila) ***** -->
                    <img src="/images/guadalajara.jpg" alt="Guadalajara">
                    <div class="destination-overlay">
                        <h3>Guadalajara</h3>
                        <p>Tequila, mariachi y tradición.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ============================================= -->
    <!-- ==      6. LLAMADA A LA ACCIÓN (CTA)       == -->
    <!-- ============================================= -->
    <section id="mexico-cta-local" class="mexico-cta-local section-padding">
      <div class="cta-background-pattern"></div> <!-- Patrón decorativo -->
      <div class="container cta-content">
        <h2 class="cta-title-local">¡Inicia tu Envío a <span class="highlight-mexico-green">México</span> Hoy!</h2>
        <p class="cta-text-local">
          Es fácil, rápido y seguro. Obtén tu cotización o habla con un experto ahora.
        </p>
        <div class="cta-buttons">
           <router-link to="/cotizar?destino=mexico" class="cta-button primary mexico-green-btn">
             <i class="fas fa-calculator"></i> Calcular Envío
           </router-link>
           <router-link to="/contacto?asunto=EnvioMexico" class="cta-button secondary mexico-red-btn">
             <i class="fas fa-comments"></i> Contactar Asesor
           </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import 'animate.css';

// No se necesita lógica específica aquí para este rediseño,
// pero puedes añadirla si es necesario (ej. para sliders complejos, etc.)

onMounted(() => {
  // Inicializaciones si fueran necesarias
});
</script>

<style scoped>
/* --- Variables Locales y Colores Mexicanos --- */
:root {
  --primary-color: #e74c3c; /* Mantener un primario general si se usa */
  --secondary-color: #3498db;
  --dark-color: #2c3e50;
  --light-color: #f8f9fa;
  --text-color: #333;
  --text-muted: #6c757d;
  --font-family: 'Poppins', sans-serif;
  --border-radius: 12px; /* Bordes más redondeados */
  --box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1); /* Sombra más pronunciada */
  --header-height-shrunk: 75px; /* Debe coincidir con PaisesView */

  /* Colores Mexicanos */
  --mexico-green: #006847;
  --mexico-red: #CE1126;
  --mexico-white: #FFFFFF;
  --mexico-gold: #AB8F5A; /* Un dorado/café sutil */
  --mexico-terracotta: #E2725B; /* Terracota cálido */
}

/* --- Estilo Base y Padding --- */
.country-content-area {
  padding-top: var(--header-height-shrunk);
  background-color: var(--mexico-white);
}
.section-padding { padding: 90px 0; }
.bg-light { background-color: #f7f7f7; } /* Un gris muy claro */
.text-center { text-align: center; }
.highlight { color: var(--primary-color); font-weight: 600; }
.highlight-mexico-green { color: var(--mexico-green); font-weight: 700; }
.highlight-mexico-red { color: var(--mexico-red); font-weight: 700; }

.section-title {
  font-size: clamp(2.2rem, 5.5vw, 3rem);
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 20px;
  font-weight: 700;
  color: var(--dark-color);
  line-height: 1.3;
}
.section-title.text-center::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 5px;
  background: linear-gradient(90deg, var(--mexico-green), var(--mexico-red)); /* Degradado bandera */
  border-radius: 3px;
}
.section-subtitle {
  font-size: 1.15rem;
  color: var(--text-muted);
  max-width: 750px;
  margin: 0 auto 60px auto;
  font-weight: 300;
  line-height: 1.7;
}

/* ============================================= */
/* ==    1. HERO INMERSIVO - BIENVENIDA       == */
/* ============================================= */
.mexico-hero-local {
    position: relative;
    min-height: 75vh; /* Más alto */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: var(--mexico-white);
    overflow: hidden;
}
.hero-background {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;
    background-color: var(--mexico-green);
}
.hero-bg-img {
    width: 100%; height: 100%; object-fit: cover;
    opacity: 0.8; /* Imagen ligeramente transparente */
}
.hero-overlay-pattern {
    position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 2;
    background: linear-gradient(rgba(0, 104, 71, 0.5), rgba(0, 0, 0, 0.7)); /* Degradado con verde */
    /* Opcional: Patrón sutil */
    /* background-image: url('/images/patterns/mexican-pattern-subtle.png'); */
    /* background-repeat: repeat; */
}
.hero-content { position: relative; z-index: 3; }

.flag-colors-bar {
    display: flex;
    height: 8px; /* Grosor de la barra */
    width: 150px; /* Ancho de la barra */
    margin: 0 auto 25px auto; /* Centrada y con espacio */
    border-radius: 4px;
    overflow: hidden;
}
.color-stripe { flex: 1; }
.color-stripe.green { background-color: var(--mexico-green); }
.color-stripe.white { background-color: var(--mexico-white); }
.color-stripe.red { background-color: var(--mexico-red); }

.hero-title-local {
    font-size: clamp(2.8rem, 7vw, 4.5rem);
    font-weight: 800; /* Más peso */
    line-height: 1.15;
    margin-bottom: 20px;
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
    color: #ffffff;
}
.hero-title-local .line1 { display: block; }
.hero-title-local .line2 { display: block; }

.hero-subtitle-local {
    font-size: clamp(1.2rem, 3.5vw, 1.5rem);
    opacity: 0.95;
    font-weight: 300;
    margin-bottom: 40px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}
.hero-cta { /* Estilos base del botón CTA heredados o definidos aquí */
    padding: 15px 40px;
    font-size: 1.1rem;
    font-weight: 600;
    background: var(--mexico-red);
    color: var(--mexico-white);
    border: none;
    border-radius: 50px;
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
}
.hero-cta:hover {
    background: var(--mexico-green);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
}

/* ============================================= */
/* ==    2. VENTAJAS CON SABOR LOCAL         == */
/* ============================================= */
.advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 35px;
}
.advantage-card {
    background-color: var(--mexico-white);
    border-radius: var(--border-radius);
    padding: 30px;
    text-align: center;
    box-shadow: var(--box-shadow);
    border: 1px solid #eee;
    display: flex;
    flex-direction: column; /* Para alinear imagen abajo */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 6px solid; /* Borde lateral con color */
}
.advantage-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
}
/* Asignar colores de borde */
.advantage-card:nth-child(1) { border-left-color: var(--mexico-green); }
.advantage-card:nth-child(2) { border-left-color: var(--mexico-red); }
.advantage-card:nth-child(3) { border-left-color: var(--mexico-gold); }

.advantage-icon-wrapper {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin: 0 auto 25px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--mexico-white);
    font-size: 2rem;
    box-shadow: 0 5px 10px rgba(0,0,0,0.15);
}
.icon-green { background-color: var(--mexico-green); }
.icon-red { background-color: var(--mexico-red); }
.icon-gold { background-color: var(--mexico-gold); }

.advantage-card h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--dark-color);
    margin-bottom: 15px;
}
.advantage-card p {
    color: var(--text-muted);
    font-size: 0.95rem;
    line-height: 1.6;
    flex-grow: 1; /* Empuja la imagen hacia abajo */
    margin-bottom: 25px;
}
.advantage-image {
    margin-top: auto; /* Asegura que esté al final */
    border-radius: calc(var(--border-radius) - 6px); /* Ajustar radio */
    overflow: hidden;
}
.advantage-image img {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
}


/* ============================================= */
/* ==    3. EL VIAJE DE TU PAQUETE (Visual)   == */
/* ============================================= */
.journey-step {
    display: flex;
    align-items: center;
    gap: 40px;
    margin-bottom: 60px;
    background-color: var(--mexico-white);
    padding: 30px;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    overflow: hidden;
}
.journey-step.reverse {
    flex-direction: row-reverse;
}
.journey-image {
    flex: 0 0 45%; /* Ancho fijo para la imagen */
    max-width: 45%;
    border-radius: var(--border-radius);
    overflow: hidden;
}
.journey-image img {
    display: block;
    width: 100%;
    height: auto;
}
.journey-text {
    flex: 1;
    position: relative;
    padding-left: 20px;
}
.step-number {
    position: absolute;
    top: -15px;
    left: -25px;
    font-size: 4rem;
    font-weight: 800;
    color: var(--light-color); /* Número semi-transparente */
    z-index: 1;
    line-height: 1;
}
.journey-step:nth-child(1) .step-number { color: rgba(0, 104, 71, 0.15); } /* Verde */
.journey-step:nth-child(2) .step-number { color: rgba(206, 17, 38, 0.15); } /* Rojo */
.journey-step:nth-child(3) .step-number { color: rgba(171, 143, 90, 0.15); } /* Oro */
.journey-step:nth-child(4) .step-number { color: rgba(46, 204, 113, 0.15); } /* Verde claro */

.journey-text h3 {
    font-size: 1.6rem;
    font-weight: 600;
    color: var(--dark-color);
    margin-bottom: 15px;
    position: relative; z-index: 2;
}
.journey-text p {
    color: var(--text-muted);
    font-size: 1rem;
    line-height: 1.7;
     position: relative; z-index: 2;
}

/* ============================================= */
/* ==    4. GALERIA DE DESTINOS POPULARES     == */
/* ============================================= */
.destinations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}
.destination-card {
    position: relative;
    border-radius: var(--border-radius);
    overflow: hidden;
    box-shadow: var(--box-shadow);
    aspect-ratio: 3 / 4; /* Proporción más vertical */
    transition: transform 0.4s ease;
}
.destination-card:hover {
    transform: scale(1.05);
}
.destination-card img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: filter 0.3s ease;
}
.destination-card:hover img {
    filter: brightness(0.7);
}
.destination-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 40px 20px 20px;
    background: linear-gradient(transparent, rgba(0,0,0,0.85));
    color: var(--mexico-white);
    text-align: left;
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
}
.destination-card:hover .destination-overlay {
    opacity: 1;
    transform: translateY(0);
}
.destination-overlay h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 5px 0;
}
.destination-overlay p {
    font-size: 0.95rem;
    margin: 0;
    opacity: 0.9;
}

/* ============================================= */
/* ==    5. SERVICIOS CON IDENTIDAD           == */
/* ============================================= */
.services-visual-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 35px;
}
.service-visual-card {
    background-color: var(--mexico-white);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-visual-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}
.service-visual-image {
    position: relative;
}
.service-visual-image img {
    display: block;
    width: 100%;
    height: 220px; /* Altura imagen servicio */
    object-fit: cover;
}
.service-visual-icon {
    position: absolute;
    bottom: -25px; /* Mitad dentro, mitad fuera */
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: var(--primary-color); /* Color base icono */
    color: var(--mexico-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
/* Colores específicos iconos */
.service-visual-card:nth-child(1) .service-visual-icon { background-color: var(--mexico-green); }
.service-visual-card:nth-child(2) .service-visual-icon { background-color: var(--mexico-red); }
.service-visual-card:nth-child(3) .service-visual-icon { background-color: var(--mexico-gold); }

.service-visual-content {
    padding: 40px 25px 25px; /* Más padding superior por el icono */
}
.service-visual-content h3 {
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--dark-color);
    margin: 0 0 10px 0;
}
.service-visual-content p {
    font-size: 0.95rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 20px;
}
.service-tag {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
.service-tag { background-color: #e0e0e0; color: #757575; }
.service-tag.urgent { background-color: var(--mexico-red); color: var(--mexico-white); }
.service-tag.business { background-color: var(--mexico-gold); color: var(--mexico-white); }

/* ============================================= */
/* ==      6. LLAMADA A LA ACCIÓN (CTA)       == */
/* ============================================= */
.mexico-cta-local {
    position: relative;
    background-color: var(--dark-color);
    color: var(--mexico-white);
    overflow: hidden;
}
.cta-background-pattern {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    /* Opcional: Patrón muy sutil */
    /* background-image: url('/images/patterns/aztec-pattern-dark.png'); */
    opacity: 0.05;
    z-index: 1;
}
.cta-content {
    position: relative;
    z-index: 2;
    text-align: center;
}
.cta-title-local {
    font-size: clamp(2.2rem, 5.5vw, 3rem);
    font-weight: 700;
    margin-bottom: 15px;
}
.cta-text-local {
    font-size: 1.2rem;
    margin-bottom: 40px;
    opacity: 0.9;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
}
.cta-buttons { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; }

.cta-button.mexico-green-btn {
    background-color: var(--mexico-green);
    color: var(--mexico-white);
    border-color: var(--mexico-green);
}
.cta-button.mexico-green-btn:hover {
    background-color: #004c33; /* Verde más oscuro */
    border-color: #004c33;
    transform: translateY(-3px);
}
.cta-button.mexico-red-btn {
    background-color: var(--mexico-red);
    color: var(--mexico-white);
    border-color: var(--mexico-red);
}
.cta-button.mexico-red-btn:hover {
    background-color: #a70f1f; /* Rojo más oscuro */
    border-color: #a70f1f;
    transform: translateY(-3px);
}
/* Heredar estilos base de .cta-button si están definidos globalmente */
.cta-button { padding: 14px 35px; border-radius: 50px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; text-decoration: none; display: inline-flex; align-items: center; gap: 10px; border: 2px solid transparent; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }


/* --- Responsive --- */
@media (max-width: 992px) {
    .journey-step { flex-direction: column !important; text-align: center; }
    .journey-step.reverse { flex-direction: column !important; }
    .journey-image { max-width: 80%; margin-bottom: 20px; }
    .journey-text { padding-left: 0; }
    .step-number { top: 5px; left: 50%; transform: translateX(-50%); font-size: 3rem; }
    .destinations-grid { grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); }
}
@media (max-width: 768px) {
  .country-content-area { padding-top: 65px; }
  .section-padding { padding: 60px 0; }
  .advantages-grid { grid-template-columns: 1fr; }
  .destinations-grid { grid-template-columns: 1fr 1fr; }
  .services-visual-container { grid-template-columns: 1fr; }
}
@media (max-width: 576px) {
  .section-padding { padding: 50px 0; }
  .mexico-hero-local { min-height: 65vh; }
  .hero-title-local { font-size: 2.2rem; }
  .hero-subtitle-local { font-size: 1.1rem; }
  .flag-colors-bar { width: 100px; height: 6px; }
  .destinations-grid { grid-template-columns: 1fr; }
  .cta-buttons { flex-direction: column; align-items: center; }
  .cta-button { width: 85%; justify-content: center; }
}

</style>