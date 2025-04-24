<template>
  <footer class="site-footer style-constellation">

    <!-- Capas de fondo animadas (detrás del contenido) -->
    <!-- Las posicionaremos absolutamente respecto al footer -->
    <div class="animated-bg layer1"></div>
    <div class="animated-bg layer2"></div>

    <!-- Contenedor Principal (aseguramos que esté sobre el fondo) -->
    <div class="container footer-content">

      <!-- Fila Superior: Información principal -->
      <div class="footer-main-grid">

        <!-- Sección Izquierda: Marca y Descripción -->
        <div class="footer-brand-info">
          <!-- Logo Placeholder -->
          <img src="/images/logo-light.png" alt="TuCajaExpress Logo" class="footer-logo">
          <p class="footer-tagline">Conectando tus mundos, un envío a la vez. <br> USA <i class="fas fa-exchange-alt"></i> MX & Centroamérica.</p>
           <div class="footer-social-icons">
             <!-- Links Redes Sociales -->
             <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-square"></i></a>
             <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
             <a href="#" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"><i class="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <!-- Sección Central: Enlaces Rápidos -->
        <nav class="footer-nav">
          <h4 class="footer-heading">Explora</h4>
          <ul class="footer-link-list">
            <!-- Links -->
            <li><router-link to="/servicios">Servicios</router-link></li>
            <li><router-link to="/paises">Cobertura</router-link></li>
            <li><router-link to="/rastreo">Rastreo</router-link></li>
            <li><router-link to="/faq">Ayuda (FAQ)</router-link></li>
            <li><router-link to="/contacto">Contacto</router-link></li>
          </ul>
        </nav>

        <!-- Sección Derecha: Acciones y Contacto -->
        <div class="footer-actions">
          <h4 class="footer-heading">Sé parte</h4>
          <ul class="footer-link-list">
            <!-- Links Acción -->
             <li><router-link to="/aplicar-agente" class="action-link agent"><i class="fas fa-store-alt"></i> Convertirse en Agente</router-link></li>
             <li><router-link to="/cotizar" class="action-link quote"><i class="fas fa-calculator"></i> Obtener Cotización</router-link></li>
          </ul>
          <h4 class="footer-heading contact-heading">Contacto Rápido</h4>
           <!-- Contacto Rápido -->
           <a href="tel:+13051234567" class="contact-link"><i class="fas fa-phone"></i> +1 (305) 123-4567</a>
           <a href="mailto:info@tucajaexpress.com" class="contact-link"><i class="fas fa-envelope"></i> info@tucajaexpress.com</a>
        </div>

      </div> <!-- Fin footer-main-grid -->

      <!-- Fila Inferior: Copyright y Legales -->
      <div class="footer-bottom-bar">
        <p>© {{ currentYear }} TuCajaExpress. Experiencia Logística Global.</p>
        <div class="legal-links">
            <!-- Links Legales -->
            <router-link to="/politica-privacidad">Privacidad</router-link>
            <span>|</span>
            <router-link to="/terminos-condiciones">Términos</router-link>
        </div>
      </div>

    </div> <!-- Fin container -->
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import 'animate.css'; // Si usas clases animate__

const currentYear = ref(new Date().getFullYear());
// Asegúrate que FontAwesome funciona y los iconos están en main.js
</script>

<style scoped>
/* --- Variables --- */
:root {
  --footer-bg-start: #1f2937; /* Gris azulado oscuro */
  --footer-bg-end: #111827;   /* Azul noche muy oscuro */
  --text-primary-light: #f9fafb; /* Casi blanco */
  --text-secondary-light: #d1d5db; /* Gris claro más visible */
  --accent-color: #3b82f6;
  --accent-color-hover: #2563eb;
  --highlight-color: #f59e0b;
  --font-family: 'Poppins', sans-serif;
  --border-radius-md: 6px;
  --footer-top-margin: 100px; /* <<< ESPACIADO SUPERIOR >>> */
  /* Colores y opacidad fondo animado - Ajusta la opacidad aquí! */
  --animated-bg-line-color: rgba(255, 255, 255, 0.05); /* Más opaco para prueba */
  --animated-bg-opacity: 1; /* Opacidad de la capa contenedora */
}

/* --- Estructura Principal del Footer --- */
.site-footer.style-constellation {
  /* === FONDO OSCURO BASE (Importante!) === */
  background: linear-gradient(160deg, var(--footer-bg-start), var(--footer-bg-end));
  color: var(--text-secondary-light);
  padding-bottom: 40px; /* Padding inferior */
  position: relative; /* Para ::before y capas de fondo */
  overflow: hidden;
  margin-top: var(--footer-top-margin); /* <<< ESPACIADO SUPERIOR APLICADO >>> */
}

/* --- Divisor Superior (Usaremos un borde superior grueso con gradiente) --- */
.site-footer.style-constellation::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px; /* Grosor de la línea superior */
  background: linear-gradient(90deg, transparent, var(--accent-color), transparent);
  opacity: 0.5; /* Sutil */
  z-index: 3; /* Encima del fondo animado */
}

.footer-content {
  padding-top: 70px; /* Espacio inicial debajo del borde superior */
  position: relative;
  z-index: 2; /* Encima del fondo animado */
}

/* ================================================== */
/* ==      FONDO ANIMADO CONSTELACIÓN             == */
/* ================================================== */
/* Usaremos sólo una capa ::after para simplicidad y rendimiento */
.site-footer.style-constellation::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 300%; /* Ancho muy grande para asegurar repetición */
  height: 300%;
  z-index: 0; /* Detrás de TODO */
  pointer-events: none;
  background-image:
    /* Patrón principal de puntos (estrellas) */
    radial-gradient(var(--text-primary-light) 0.5px, transparent 1px),
    radial-gradient(var(--text-primary-light) 0.5px, transparent 1px);
  background-size: 100px 100px, 150px 150px; /* Diferentes tamaños para variedad */
  background-position: 0 0, 50px 50px; /* Posiciones iniciales distintas */
  opacity: var(--animated-bg-opacity); /* Opacidad controlable */
  animation: starsMove 120s linear infinite; /* Animación LENTA */
  filter: blur(0.3px); /* Un desenfoque muy leve */
}


/* Animación más simple, solo mueve la posición del fondo */
@keyframes starsMove {
    from { transform: translate(0, 0); }
    to   { transform: translate(-100px, -50px); } /* Ajusta el desplazamiento */
}


/* Ocultar divs de fondo anteriores si aún los tienes en el template */
.animated-bg { display: none; }

/* ================================================== */
/* ==      ESTILOS DEL CONTENIDO (Revisados)       == */
/* ================================================== */

.footer-main-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1.2fr;
  gap: 40px 30px; /* row-gap column-gap */
  margin-bottom: 60px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* --- Columna Izquierda: Marca --- */
.footer-brand-info {}
.footer-logo { display: block; max-width: 170px; margin-bottom: 25px; }
.footer-tagline { font-size: 1rem; line-height: 1.7; margin-bottom: 30px; color: var(--text-primary-light); opacity: 0.95; }
.footer-tagline i { color: var(--accent-color); margin: 0 6px; }
.footer-social-icons { display: flex; gap: 20px; }
.footer-social-icons a { color: var(--text-secondary-light); font-size: 1.6rem; transition: all 0.3s ease; }
.footer-social-icons a:hover { color: white; transform: translateY(-3px) scale(1.1); }

/* --- Columnas Central y Derecha --- */
.footer-heading {
  color: white;
  font-size: 1.1rem;
  font-weight: 600; /* Más Bold */
  margin-bottom: 25px;
  letter-spacing: 0.5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15); /* Línea sutil debajo */
  padding-bottom: 10px;
}
.footer-heading::after { display: none; } /* Quitar la línea de color */
.footer-heading.contact-heading { margin-top: 30px; }

.footer-link-list { list-style: none; padding: 0; margin: 0; }
.footer-link-list li { margin-bottom: 15px; }
.footer-link-list a {
  color: var(--text-secondary-light);
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.3s ease, letter-spacing 0.3s ease; /* Animar espaciado */
  display: inline-block;
}
.footer-link-list a:hover {
  color: white;
  letter-spacing: 0.5px; /* Ligero ensanchamiento */
}

/* Enlaces de Acción */
.action-link {
  display: flex; align-items: center; gap: 12px;
  padding: 6px 0; /* Más espacio vertical */
  font-weight: 500;
  transition: color 0.3s ease;
}
.action-link i { color: var(--accent-color); font-size: 1.1em; width: 22px; text-align: center;}
.action-link.agent { color: var(--highlight-color); }
.action-link.agent i { color: var(--highlight-color); }
.action-link:hover { color: white !important; /* Forzar blanco al hover */ }
.action-link.agent:hover { color: #ffda77 !important; /* Dorado más claro */ }


/* Contacto Rápido */
.contact-link {
  display: flex; align-items: center; gap: 12px;
  color: var(--text-secondary-light); text-decoration: none;
  font-size: 0.95rem; margin-bottom: 12px; transition: color 0.3s ease;
}
.contact-link:hover { color: white; }
.contact-link i { color: var(--accent-color); width: 22px; text-align: center; }

/* --- Fila Inferior --- */
.footer-bottom-bar {
  padding-top: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 0.88rem; /* Un poco más grande */
  color: var(--text-secondary-light);
  opacity: 0.8; /* Ligeramente transparente */
}
.footer-bottom-bar p { margin: 0; }
.legal-links { display: flex; gap: 10px; align-items: center; }
.legal-links a { color: inherit; text-decoration: none; transition: color 0.3s ease, text-decoration 0.3s ease; }
.legal-links a:hover { color: white; text-decoration: underline; }
.legal-links span { margin: 0 8px; opacity: 0.5; }

/* --- Responsive --- */
@media (max-width: 992px) {
  .footer-main-grid { grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
  .footer-brand-info { margin-bottom: 20px;} /* Espacio extra si se apila primero */
}
@media (max-width: 768px) {
  :root { --footer-top-margin: 80px; }
  .footer-main-grid { grid-template-columns: 1fr 1fr; gap: 45px 30px; }
  .footer-brand-info, .footer-actions { /* Marca y Acciones/Contacto ocupan ancho completo */
      grid-column: span 2;
      text-align: center;
   }
  .footer-nav { /* Los links rápidos se centran también */
       text-align: center;
   }
  .footer-logo { margin-left: auto; margin-right: auto; }
  .footer-social-icons { justify-content: center; }
  .action-link, .contact-link { justify-content: center; }
  .footer-heading { text-align: center; border-bottom: none; } /* Sin línea inferior en tablet/móvil */
  .footer-heading::after { display: none;}

}
@media (max-width: 576px) {
    :root { --footer-top-margin: 60px; }
     .footer-content { padding-top: 60px; } /* Menos padding superior */
     .footer-main-grid { grid-template-columns: 1fr; gap: 40px; text-align: center; }
     .footer-brand-info, .footer-actions { grid-column: span 1; } /* Resetear */
     .footer-bottom-bar { flex-direction: column; text-align: center; gap: 12px;}
     .site-footer::after { animation-duration: 80s; } /* Acelerar un poco la animación en móvil */
}

</style>