<template>
    <!-- Header Start -->
    <div class="jumbotron2 jumbotron-fluid mb-5">
        <div class="container text-center py-5">
            <h1 class="text-primary mb-4">Puerta a puerta</h1>
            <h1 class="text-white display-3 mb-5">Paqueteria Mexico y Centroamerica</h1>
            <div class="mx-auto" style="width: 100%; max-width: 600px;">
                <div class="input-group">
                    <input v-model="numero_guia" type="text" class="form-control border-light" style="padding: 30px;" placeholder="Tu guía de Envio">
                    <div class="input-group-append">

                     <button @click="llamar_al_rastreo" class="btn btn-primary px-3" >Rastrea tu Paquete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
  <!-- Sección de Servicios Renovada -->
  <section class="services-section section-padding bg-light-alt">
    <div class="container">

      <!-- Títulos de Sección -->
      <div class="section-header text-center mb-5">
         <!-- Subtítulo opcional -->
        <span class="subheading animate__animated animate__fadeInDown">Nuestras Capacidades</span>
         <!-- Título Principal -->
        <h2 class="section-title animate__animated animate__fadeInDown animate__delay-0.1s">Logística Integral a tu Alcance</h2>
         <!-- Breve Descripción -->
        <p class="section-intro animate__animated animate__fadeInUp animate__delay-0.2s">
            Desde la cotización hasta la entrega final, te ofrecemos soluciones eficientes para conectar USA con México y Centroamérica.
        </p>
      </div>

      <!-- Grid de Tarjetas de Servicio -->
      <div class="services-grid">

        <!-- Tarjeta 1: Cotiza via web -->
        <div class="service-card animate__animated animate__zoomIn">
          <div class="service-icon-wrapper icon-style-1">
             <!-- Usa el icono correcto de FontAwesome -->
             <i class="fas fa-calculator"></i> <!-- Icono más representativo? -->
          </div>
          <h3 class="service-title">Cotización Web Instantánea</h3>
          <p class="service-description">
            Obtén una estimación clara de costos y tiempos de recogida directamente en nuestra plataforma.
          </p>
           <!-- Ya no hay enlace "Leer más" -->
        </div>

        <!-- Tarjeta 2: Solicita Recogida -->
        <div class="service-card animate__animated animate__zoomIn" data-wow-delay="0.1s">
          <div class="service-icon-wrapper icon-style-2">
            <i class="fas fa-headset"></i> <!-- O fas fa-calendar-check -->
          </div>
          <h3 class="service-title">Solicitud de Recogida</h3>
          <p class="service-description">
             Contacta con nuestro equipo de atención al cliente para agendar tu recogida fácilmente.
          </p>
        </div>

        <!-- Tarjeta 3: Transporte Terrestre -->
        <div class="service-card animate__animated animate__zoomIn" data-wow-delay="0.2s">
          <div class="service-icon-wrapper icon-style-3">
            <i class="fas fa-truck-moving"></i>
          </div>
          <h3 class="service-title">Transporte Terrestre USA</h3>
          <p class="service-description">
            Extensa red de rutas semanales para la recolección eficiente en todo Estados Unidos.
          </p>
        </div>
      </div> <!-- Fin services-grid -->
    </div> <!-- Fin container -->
  </section>
    <!-- Services End -->
    <MapaInteractivo/>
      <!-- Sección "Sé Agente Autorizado" -->
  <section id="agent-program" class="agent-section section-padding">
    <div class="container">
      <div class="agent-content-wrapper">

        <!-- Columna de Imagen (Ahora a la izquierda) -->
        <div class="agent-image-content animate__animated animate__fadeInLeft">
          <!-- ***** IMAGEN PLACEHOLDER (Agente Autorizado) ***** -->
          <!-- Reemplaza con una imagen profesional: Almacén organizado, personal con uniforme, -->
          <!-- mapa logístico digital, camión de tu marca, cajas listas para enviar. -->
          <!-- Evita fotos genéricas de apretones de manos si es posible. -->
          <!-- Ejemplo: /images/agents/logistics-hub.jpg -->
          <img src="/images/PLAN2.jpg"
               alt="Conviértete en Agente Autorizado para envíos a México y Centroamérica"
               class="agent-image">
           <div class="image-overlay-shape agent-shape-primary"></div> <!-- Elemento decorativo -->
        </div>

        <!-- Columna de Texto (Ahora a la derecha) -->
        <div class="agent-text-content animate__animated animate__fadeInRight">
          <span class="agent-tagline">Expande tu Negocio</span>
          <h2 class="section-title agent-title">
            Conviértete en <span class="highlight">Agente Autorizado</span><br>de Nuestra Red
          </h2>
          <p class="agent-description">
            ¿Tienes una agencia de envíos en USA? Únete a nuestra red como punto oficial
            de recepción y despacho para México y Centroamérica. Atrae más clientes,
            incrementa tus ingresos y benefíciate de nuestra infraestructura y marca.
          </p>
          <ul class="agent-benefits">
            <li><i class="fas fa-warehouse benefit-icon"></i> Incrementa el flujo de clientes a tu local</li>
            <li><i class="fas fa-hand-holding-usd benefit-icon"></i> Comisiones competitivas por manejo y envío</li>
            <li><i class="fas fa-cogs benefit-icon"></i> Acceso a nuestro sistema y tecnología logística</li>
            <li><i class="fas fa-bullhorn benefit-icon"></i> Material de marketing y soporte de marca</li>
            <li><i class="fas fa-headset benefit-icon"></i> Capacitación y soporte operativo continuo</li>
          </ul>
          <router-link to="/aplicar-agente" class="cta-button agent-cta">
            <i class="fas fa-file-alt"></i> Aplicar Ahora
            <!-- Alternativa: Solicitar Información -->
          </router-link>
        </div>

      </div>
    </div>
  </section>
</template>

<style setup>
/* --- Variables (Asegúrate que coincidan o define localmente) --- */
:root {
  --primary-color: #e74c3c;
  --secondary-color: #3498db;
  --dark-color: #2c3e50;
  --light-color: #f8f9fa;
  --text-color: #333;
  --text-muted: #6c757d;
  --font-family: 'Poppins', sans-serif;
  --border-radius: 10px;
  --box-shadow: 0 5px 20px rgba(0, 0, 0, 0.07);
  --box-shadow-hover: 0 10px 30px rgba(0, 0, 0, 0.12);
  /* Colores alternativos para iconos */
  --accent-blue: #3b82f6;
  --accent-green: #10b981;
  --accent-orange: #f59e0b;
}

/* --- Estilos Generales de Sección --- */
.services-section {
  /* Un gris ligeramente diferente para variar */
  background-color: #f9fafb;
}
.section-padding {
  padding: 15px 0;
}
.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
}
.text-center { text-align: center; }
.mb-5 { margin-bottom: 3rem !important; }

/* --- Cabecera de la Sección --- */
.section-header {
  margin-bottom: 50px;
}
.subheading {
  display: inline-block;
  background-color: rgba(var(--rgb-primary-color, 231, 76, 60), 0.1); /* Fondo con opacidad */
  color: var(--primary-color);
  padding: 6px 18px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 15px;
}
/* Necesitarías definir --rgb-primary-color en tus :root globales o aquí si no existe */
/* Por ejemplo: */
:root {
   --rgb-primary-color: 231, 76, 60;
}


.section-title {
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 15px;
}
.section-intro {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
}

/* --- Grid de Tarjetas de Servicio --- */
.services-grid {
  display: grid;
  /* 4 columnas en escritorio, 2 en tablet, 1 en móvil */
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px; /* Espacio entre tarjetas */
}

/* --- Tarjeta de Servicio Individual --- */
.service-card {
  background-color: #ffffff;
  border-radius: var(--border-radius);
  padding: 40px 30px; /* Más padding */
  text-align: center;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid #e5e7eb; /* Borde muy sutil */
  display: flex;
  flex-direction: column; /* Alinear contenido */
  height: 100%; /* Asegurar altura consistente si varían textos */
}
.service-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--box-shadow-hover);
}

/* --- Contenedor del Icono --- */
.service-icon-wrapper {
  width: 80px;  /* Tamaño del círculo */
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 25px auto; /* Centrado y con margen inferior */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}
.service-icon-wrapper i {
  font-size: 2.5rem; /* Tamaño del icono */
  color: white;
}

/* Estilos de color diferentes para cada icono */
.icon-style-1 { background-color: var(--primary-color); } /* Rojo */
.icon-style-2 { background-color: var(--accent-blue); }    /* Azul */
.icon-style-3 { background-color: var(--accent-green); }  /* Verde */
.icon-style-4 { background-color: var(--accent-orange); } /* Naranja */

.service-card:hover .service-icon-wrapper {
    /* Opcional: Cambiar color del icono al hover? */
    /* background-color: var(--dark-color); */
}


/* --- Título del Servicio --- */
.service-title {
  font-size: 1.3rem; /* Más grande */
  font-weight: 600;
  color: var(--dark-color);
  margin-bottom: 15px;
}

/* --- Descripción del Servicio --- */
.service-description {
  color: var(--text-muted);
  font-size: 0.95rem;
  line-height: 1.7;
  flex-grow: 1; /* Para empujar hacia abajo si hay diferente altura */
  margin-bottom: 0; /* Sin margen extra al final */
}

/* --- Responsive --- */
@media (max-width: 992px) {
  .services-grid {
     /* Ajustar el tamaño mínimo si se ven muy apretadas */
     grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
}

@media (max-width: 768px) {
  .section-padding { padding: 60px 0; }
  .services-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* Forzar casi ancho completo */
  }
}

@media (max-width: 576px) {
    .section-padding { padding: 50px 0; }
    .section-title { font-size: 1.8rem; }
    .section-intro { font-size: 1rem; }
    .services-grid { grid-template-columns: 1fr; } /* Una columna */
    .service-card { padding: 30px 25px; }
    .service-icon-wrapper { width: 70px; height: 70px; }
    .service-icon-wrapper i { font-size: 2rem; }
    .service-title { font-size: 1.2rem; }
}
/*ESTILOS DE "GANA DINERO CON NOSOTROS" */
/* --- Variables (Asegúrate que coincidan o define localmente) --- */
:root {
  --primary-color: #e74c3c; /* Rojo */
  --secondary-color: #3498db; /* Azul */
  --dark-color: #2c3e50;     /* Azul oscuro/gris */
  --light-color: #f8f9fa;
  --text-color: #333;
  --text-muted: #6c757d;
  --font-family: 'Poppins', sans-serif;
  --border-radius: 10px;
  --box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  --success-color: #2ecc71; /* Verde éxito */
  --info-color: #3498db; /* Azul para información/tecnología */
}

/* --- Estilos de la Sección --- */
.agent-section {
  background-color: #ffebef; /* Fondo claro pero no blanco puro */
  overflow: hidden;
  border-radius:10px;
}

.agent-content-wrapper {
  display: flex;
  align-items: center;
  gap: 60px;
  flex-wrap: wrap;
}

/* --- Columna de Imagen (Izquierda) --- */
.agent-image-content {
  flex: 1;
  min-width: 320px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  order: 1; /* Imagen a la izquierda en desktop */
}

.agent-image {
  display: block;
  max-width: 100%;
  height: auto;
  border-radius: var(--border-radius);
  box-shadow: 0 15px 40px rgba(44, 62, 80, 0.2); /* Sombra más marcada */
  z-index: 1;
  position: relative; /* Para estar sobre la forma */
}

/* Forma decorativa */
.image-overlay-shape.agent-shape-primary {
  position: absolute;
  top: -30px; /* Arriba */
  left: -30px; /* Izquierda */
  width: 65%;
  height: 65%;
  background: var(--primary-color); /* Color primario */
  opacity: 0.1; /* Muy sutil */
  border-radius: var(--border-radius);
  transform: rotate(10deg);
  z-index: 0;
}

/* --- Columna de Texto (Derecha) --- */
.agent-text-content {
  flex: 1.2; /* Ligeramente más ancho que la imagen */
  min-width: 320px;
  order: 2; /* Texto a la derecha en desktop */
  z-index: 2;
}

.agent-tagline {
  display: inline-block;
  background-color: var(--secondary-color); /* Azul */
  color: white;
  padding: 6px 18px; /* Más padding */
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.8px; /* Más espaciado */
  margin-bottom: 20px;
}

.agent-title {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  font-weight: 700;
  color: var(--dark-color);
  margin-bottom: 25px;
  line-height: 1.25;
}
.agent-title .highlight {
  color: var(--primary-color); /* Rojo para resaltar */
}
/* Ocultar línea inferior por defecto */
.agent-title::after { display: none; }

.agent-description {
  font-size: 1.1rem;
  color: var(--text-muted);
  line-height: 1.8;
  margin-bottom: 35px;
}

.agent-benefits {
  list-style: none;
  padding: 0;
  margin: 0 0 45px 0;
}

.agent-benefits li {
  display: flex;
  align-items: flex-start; /* Alinear arriba si el texto ocupa varias líneas */
  margin-bottom: 18px; /* Más espacio */
  font-size: 1rem;
  color: var(--text-color);
}

.benefit-icon {
  color: var(--primary-color); /* Iconos en rojo */
  font-size: 1.4rem; /* Iconos más grandes */
  margin-right: 15px;
  width: 30px;
  text-align: center;
  flex-shrink: 0; /* Evitar que se encoja */
  margin-top: 2px; /* Pequeño ajuste vertical */
}
/* Puedes variar colores de iconos si quieres */
.agent-benefits li:nth-child(odd) .benefit-icon {
    /* color: var(--secondary-color); */ /* Ejemplo: Alternar color */
}


.agent-cta {
  /* Estilos base del botón */
  padding: 15px 40px; /* Botón grande */
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 8px; /* Menos redondeado, más corporativo */
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent; /* Preparado para borde */

  /* Colores específicos */
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 4px 12px rgba(var(--primary-color), 0.3);
}

.agent-cta i {
  font-size: 1.2em;
}

.agent-cta:hover {
  background-color: transparent;
  color: var(--primary-color);
  border-color: var(--primary-color);
  transform: translateY(-3px);
  box-shadow: none; /* Quitar sombra al hacer hover con borde */
}


/* --- Responsive --- */
@media (max-width: 992px) {
  .agent-content-wrapper {
    gap: 40px;
    /* Mantener orden por defecto (imagen arriba, texto abajo) */
    flex-direction: column;
  }
   .agent-text-content, .agent-image-content {
      flex-basis: auto; /* Resetear base */
      width: 100%; /* Ocupar todo el ancho */
      text-align: center; /* Centrar texto */
      order: 0; /* Resetear orden */
   }
   .agent-image-content {
      max-width: 500px; /* Limitar ancho de imagen en tablet */
      margin: 0 auto; /* Centrar imagen */
   }
   .agent-benefits li {
     justify-content: center;
     text-align: left; /* Mantener texto del beneficio alineado a la izquierda */
     max-width: 450px; /* Limitar ancho del beneficio */
     margin-left: auto;
     margin-right: auto;
   }
   .agent-title {
     text-align: center;
   }
   .image-overlay-shape {
      display: none; /* Ocultar forma en móvil/tablet */
   }
}

@media (max-width: 576px) {
  .section-padding { padding: 60px 0; }
  .agent-title { font-size: 1.8rem; }
  .agent-description { font-size: 1rem; }
  .agent-benefits li { font-size: 0.9rem; }
  .benefit-icon { font-size: 1.2rem; width: 25px; margin-right: 10px;}
  .agent-cta { width: 100%; justify-content: center; padding: 12px 25px; font-size: 1rem;}
}
</style>
<script setup>
import MapaInteractivo from '@/components/MapaInteractivo.vue';
</script>