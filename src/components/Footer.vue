<template>
  <footer class="delivery-footer red-theme"> 
    <div class="footer-wave">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path class="wave-path path1" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#EF4444"></path> {/* Color rojo */}
        <path class="wave-path path2" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="#EF4444"></path> {/* Color rojo */}
        <path class="wave-path path3" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#EF4444"></path> {/* Color rojo */}
      </svg>
    </div>

    <div class="footer-content">
      <div class="footer-columns">
        <div class="footer-col anim-col-1">
          <img
            src="/images/logo-light.png"
            alt="Logo Tu Caja Express"
            class="footer-logo"
            @error="handleImageError"/>
          <h3 class="footer-title">Tu Caja Express</h3>
          <p class="footer-text">Soluciones logísticas inteligentes para tus envíos nacionales e internacionales.</p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="Facebook">
              <svg viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
            </a>
            <a href="#" class="social-link" aria-label="Github">
             <svg viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.09.682-.217.682-.48 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.577.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
          </div>
        </div>

        <div class="footer-col anim-col-2">
          <h3 class="footer-title">Navegación</h3>
          <ul class="footer-links">
             <li><RouterLink to="/">Inicio</RouterLink></li>
             <li><RouterLink to="/conocenos">Conócenos</RouterLink></li>
             <li><RouterLink to="/paises">Paises</RouterLink></li>
             <li><RouterLink to="/puerta-puerta">Puerta a Puerta</RouterLink></li>
             <li><RouterLink to="/rutas">Rutas en EEUU</RouterLink></li>
             <li><RouterLink to="/contactanos">Contáctanos</RouterLink></li>
          </ul>
        </div>

        <div class="footer-col anim-col-3">
          <h3 class="footer-title">Contacto</h3>
          <ul class="footer-contact">
            <li>
              <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              <span>info@tucajaexpress.com</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
              <span>+1 (800) TCA-EXPR</span>
            </li>
            <li>
              <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              <span>Av. Logística 456, Centro de Distribución</span>
            </li>
          </ul>
        </div>

        <div class="footer-col anim-col-4">
          <h3 class="footer-title">Horario</h3>
          <ul class="footer-hours">
            <li><span>Lunes-Viernes:</span> 7am - 9pm</li>
            <li><span>Sábado:</span> 8am - 6pm</li>
            <li><span>Domingo:</span> 9am - 2pm</li>
          </ul>
          <button class="tracking-button">
            <svg viewBox="0 0 24 24"><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>
            Rastrear Envío
          </button>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <p>© {{ new Date().getFullYear() }} Tu Caja Express. Todos los derechos reservados.</p>
        <div class="legal-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Seguridad</a>
          <a href="#">Empleo</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
// Asegúrate de tener vue-router configurado si no lo tienes ya
import { RouterLink } from 'vue-router';

export default {
  name: 'AppFooter',
  components: {
    RouterLink // Registrar RouterLink si es necesario localmente
  }
}
</script>

<style lang="scss" scoped>
// --- Variables de Color (Tema Rojo) ---
$primary-color: #EF4444; // Rojo principal (Tailwind Red-500)
$primary-darker: #DC2626; // Rojo más oscuro (Tailwind Red-600)
$primary-darkest: #B91C1C; // Rojo aún más oscuro (Tailwind Red-700)
$text-color: #e2e8f0;
$text-muted: #94a3b8;
$bg-dark1: #1e293b;
$bg-dark2: #111827;
$bg-dark3: #0f172a;
$accent-color: $primary-color; // Usaremos el rojo como acento principal

.delivery-footer.red-theme { // Estilos específicos del tema rojo
  position: relative;
  background: linear-gradient(45deg, $bg-dark2, $primary-darker, $bg-dark1, $bg-dark3);
  background-size: 400% 400%;
  animation: gradientBG 18s ease infinite; // Duración ligeramente diferente
  color: $text-color;
  padding-top: 120px; // Espacio para la ola más alta
  overflow: hidden;
  font-family: 'Segoe UI', Roboto, sans-serif;
}

@keyframes gradientBG {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.footer-wave {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 140px; // Ola un poco más alta para más impacto
  transform: translateY(-1px);
  z-index: 1;

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  // ** NUEVO: Animación para las olas **
  .wave-path {
    animation: waveBob 8s ease-in-out infinite alternate;
    transform-origin: bottom; // Para que el bobbing sea desde abajo
  }
  .path1 { animation-duration: 7s; animation-delay: 0s; }
  .path2 { animation-duration: 8s; animation-delay: -2s; } // Desfases para movimiento asíncrono
  .path3 { animation-duration: 9s; animation-delay: -4s; }
}

// ** NUEVO: Keyframes para la animación de la ola **
@keyframes waveBob {
  0% { transform: translateY(0) scaleY(1); }
  50% { transform: translateY(-8px) scaleY(1.05); } // Mover y escalar ligeramente
  100% { transform: translateY(0) scaleY(1); }
}


.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px 60px;
  position: relative;
  z-index: 2;
}

.footer-columns {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 50px;
}

// ** NUEVO: Animación de entrada para las columnas **
.footer-col {
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInSlideUp 0.6s ease-out forwards;

  // Staggered delays
  &.anim-col-1 { animation-delay: 0.1s; }
  &.anim-col-2 { animation-delay: 0.2s; }
  &.anim-col-3 { animation-delay: 0.3s; }
  &.anim-col-4 { animation-delay: 0.4s; }

  h3.footer-title {
    color: #ffffff;
    font-size: 1.5rem;
    margin-bottom: 25px;
    position: relative;
    padding-bottom: 15px;
    font-weight: 700;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 4px;
      background: $accent-color; // Color rojo
      border-radius: 2px;
      // ** NUEVO: Animación de pulso para la línea **
      animation: pulseLine 2s infinite ease-in-out;
      transform-origin: left; // Pulso desde la izquierda
    }
  }

  .footer-text {
    margin-bottom: 25px;
    line-height: 1.7;
    color: $text-muted;
    font-size: 1.05rem;
  }
}

// ** NUEVO: Keyframes para entrada de columnas **
@keyframes fadeInSlideUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// ** NUEVO: Keyframes para pulso de línea de título **
@keyframes pulseLine {
  0%, 100% { transform: scaleX(1); opacity: 0.8; }
  50% { transform: scaleX(1.2); opacity: 1; } // Escala y más opacidad
}

.social-links {
  display: flex;
  gap: 20px;

  .social-link {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #334155;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); // Transición con rebote
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);

    svg {
      width: 22px;
      height: 22px;
      fill: $text-color;
      transition: all 0.3s ease;
    }

    &:hover {
      background: $accent-color; // Color rojo
      transform: translateY(-8px) scale(1.15) rotate(10deg); // Más movimiento
      box-shadow: 0 0 20px rgba($accent-color, 0.7); // Brillo rojo más intenso

      svg {
        fill: white;
        transform: rotate(-10deg); // Contra-rotación del icono
      }
    }
  }
}

// Estilos para los RouterLink (asumen que renderizan como <a>)
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 15px;
    // ** NUEVO: Añadir un pequeño retraso al hover para efecto cascada (opcional) **
    // @for $i from 1 through 6 {
    //   &:nth-child(#{$i}) { transition-delay: #{$i * 0.05}s; }
    // }

    // Se aplica a 'a' ya que RouterLink usualmente renderiza como <a>
    a {
      color: $text-muted;
      text-decoration: none;
      transition: all 0.3s ease;
      display: inline-block;
      font-size: 1.05rem;
      position: relative;
      padding-left: 15px;

      &::before {
        content: '>'; // Cambiado a un > más clásico
        font-weight: bold;
        position: absolute;
        left: -5px;
        color: $accent-color; // Color rojo
        opacity: 0;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); // Transición con rebote
        transform: translateX(-15px) scale(0.8); // Empieza más lejos y pequeño
      }

      // Estilo para el enlace activo (si usas active-class de vue-router)
      &.router-link-exact-active {
         color: $accent-color;
         font-weight: bold;
         &::before { // Mostrar la flecha para el activo
            opacity: 1;
            left: 0px;
            transform: translateX(0px) scale(1);
         }
      }

      &:hover:not(.router-link-exact-active) { // No aplicar hover si ya está activo
        color: $accent-color; // Color rojo
        transform: translateX(8px); // Movimiento más pronunciado

        &::before {
          opacity: 1;
          left: -8px; // Ajustar posición final de la flecha
          transform: translateX(0px) scale(1.2); // Aparece y escala un poco
        }
      }
    }
  }
}

.footer-contact {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    align-items: center; // Alinear íconos verticalmente
    margin-bottom: 20px;
    color: $text-muted;
    line-height: 1.5;
    transition: color 0.3s ease;

    svg {
      width: 24px; // Iconos un poco más grandes
      height: 24px;
      fill: $accent-color; // Color rojo
      margin-right: 15px;
      flex-shrink: 0;
      transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55); // Transición con rebote
    }

    span {
      font-size: 1.05rem;
    }

    &:hover {
      color: #ffffff;
      svg {
        transform: scale(1.2) rotate(15deg) translateX(3px); // Más animación en el icono
      }
    }
  }
}

.footer-hours {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;

  li {
    margin-bottom: 15px;
    color: $text-muted;
    font-size: 1.05rem;
    display: flex;
    transition: color 0.3s ease, transform 0.3s ease; // Añadida transición de transform

    span {
      color: #ffffff;
      display: inline-block;
      min-width: 110px; // Ancho mínimo para alineación
      font-weight: 500;
      margin-right: 10px;
      transition: color 0.3s ease;
    }

    &:hover {
       color: $accent-color; // Color rojo
       transform: translateX(5px); // Ligero desplazamiento
       span {
         color: lighten($accent-color, 15%); // Rojo más claro para el span
       }
    }
  }
}

.tracking-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: linear-gradient(to right, $primary-color, $primary-darker); // Gradiente rojo
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 50px; // Botón más redondeado
  font-weight: 600;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.4s ease; // Transición más suave
  width: 100%;
  box-shadow: 0 5px 18px rgba($accent-color, 0.4); // Sombra roja más difusa
  text-transform: uppercase;
  letter-spacing: 1px; // Más espaciado

  svg {
    width: 22px; // Icono ligeramente más grande
    height: 22px;
    fill: white;
    transition: transform 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6); // Transición con rebote exagerado
  }

  &:hover {
    background: linear-gradient(to right, $primary-darker, $primary-darkest); // Gradiente más oscuro
    transform: translateY(-5px) scale(1.05); // Más elevación y escala
    box-shadow: 0 8px 25px rgba($accent-color, 0.6); // Sombra más pronunciada

    svg {
      transform: rotate(720deg) scale(1.1); // Doble giro y escala del icono
    }
  }
}

.footer-bottom {
  background: $bg-dark3;
  padding: 25px 0;
  text-align: center;
  color: $text-muted;
  font-size: 0.95rem;
  border-top: 1px solid rgba(255,255,255,0.05);
  position: relative;
  z-index: 3;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  p { margin: 0; }
}

.legal-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px 20px;

  a {
    color: $text-muted;
    text-decoration: none;
    transition: color 0.3s ease;
    font-size: 0.9rem;
    position: relative;

    &:not(:last-child)::after {
      content: '|';
      position: absolute;
      right: -11px;
      color: #475569;
      font-weight: lighter;
      display: inline-block;
      transform: translateY(-1px);
    }

    &:hover {
      color: $accent-color; // Color rojo
    }
  }
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .footer-content {
    padding-top: 30px;
  }
   .footer-wave {
     height: 120px; // Ajustar altura de ola si es necesario
   }
   .delivery-footer.red-theme {
     padding-top: 100px; // Ajustar padding si la ola cambia
   }
}

@media (max-width: 768px) {
  .footer-columns { gap: 40px; }
  .footer-content { padding-bottom: 40px; }
  .footer-bottom .container { flex-direction: column; gap: 20px; }
  .legal-links { gap: 10px 15px; }
  // Ocultar animación de columnas en móvil si causa problemas de rendimiento
  // .footer-col { animation: none; opacity: 1; transform: none; }
}

@media (max-width: 480px) {
  .footer-col h3.footer-title { font-size: 1.3rem; margin-bottom: 20px; }
  .footer-text, .footer-links li a, .footer-contact li span, .footer-hours li { font-size: 1rem; }
  .tracking-button { padding: 12px 20px; font-size: 1rem; letter-spacing: 0.5px;}
  .footer-wave { height: 80px; }
  .delivery-footer.red-theme { padding-top: 80px; }
  .legal-links a:not(:last-child)::after { content: ''; } // Ocultar separador
}
.footer-logo {
    display: block; // Ocupa su propia línea
    max-width: 180px; // Ajusta el tamaño máximo según tu logo
    height: auto; // Mantiene la proporción
    margin-bottom: 20px; // Espacio debajo del logo
    // Si tu logo es oscuro y necesitas que sea blanco:
    // filter: brightness(0) invert(1);
  }
</style>