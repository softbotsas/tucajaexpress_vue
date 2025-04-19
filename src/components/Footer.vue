<!-- src/components/FooterEnvios.vue -->
<template>
    <footer class="footer-hero">
      <!-- Escena de envío -->
      <div class="logistics-scene">
        <!-- SVG de camión -->
        <div class="truck">
          <svg viewBox="0 0 640 512" class="truck-icon" xmlns="http://www.w3.org/2000/svg">
            <path fill="#d00" d="M624 352h-16V240c0-8.84-7.16-16-16-16h-88v-48c0-8.84-7.16-16-16-16H384V80c0-17.7-14.3-32-32-32H32C14.3 48 0 62.3 0 80v272h48c0 35.3 28.7 64 64 64s64-28.7 64-64h192c0 35.3 28.7 64 64 64s64-28.7 64-64h48c8.8 0 16-7.2 16-16v-16c0-8.84-7.16-16-16-16zM112 384c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm320 0c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>
          </svg>
        </div>
  
        <!-- Cajas animadas -->
        <div class="box box1"></div>
        <div class="box box2"></div>
        <div class="box box3"></div>
      </div>
  
      <!-- Contenido principal -->
      <div class="footer-info">
        <div>
          <h3>TuCaja Express</h3>
          <p>Soluciones internacionales de logística y mensajería con enfoque en calidad, velocidad y seguridad.</p>
        </div>
        <div>
          <h3>Contáctanos</h3>
          <p>📍 Bogotá, Colombia</p>
          <p>📞 +57 320 123 4567</p>
          <p>✉️ contacto@tucaja.com</p>
        </div>
        <div>
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Rastreo</a></li>
            <li><a href="#">Soporte</a></li>
          </ul>
        </div>
      </div>
  
      <div class="footer-copy">© 2025 TuCaja. Todos los derechos reservados.</div>
    </footer>
  </template>
  
  <style scoped lang="scss">
  .footer-hero {
    background: #0d0d25;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    overflow: hidden;
    padding-top: 180px;
    position: relative;
  
    .logistics-scene {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 180px;
      background: radial-gradient(ellipse at center, #1b1b3a 0%, #0d0d25 100%);
      overflow: hidden;
  
      .truck {
        position: absolute;
        bottom: 10px;
        left: -200px;
        animation: drive 12s linear infinite;
  
        .truck-icon {
          width: 180px;
          height: auto;
          filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.4));
        }
      }
  
      .box {
        position: absolute;
        bottom: 0;
        width: 30px;
        height: 30px;
        background: red;
        border: 2px solid #fff;
        animation: moveBox 6s infinite ease-in;
        opacity: 0.9;
      }
  
      .box1 { left: 20%; animation-delay: 0s; }
      .box2 { left: 40%; animation-delay: 1s; }
      .box3 { left: 60%; animation-delay: 2s; }
    }
  
    .footer-info {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
      gap: 20px;
  
      div {
        flex: 1 1 300px;
  
        h3 {
          color: red;
          margin-bottom: 10px;
        }
  
        ul {
          list-style: none;
          padding: 0;
  
          li {
            margin: 6px 0;
  
            a {
              color: #fff;
              text-decoration: none;
  
              &:hover {
                color: red;
              }
            }
          }
        }
  
        p {
          margin: 4px 0;
        }
      }
    }
  
    .footer-copy {
      background: #111;
      text-align: center;
      padding: 16px;
      font-size: 0.9rem;
    }
  }
  
  // Animaciones
  @keyframes drive {
    0% { left: -200px; }
    100% { left: 110%; }
  }
  
  @keyframes moveBox {
    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
    100% { transform: translateY(40px) rotate(90deg); opacity: 0; }
  }
  
  // Responsive
  @media (max-width: 768px) {
    .footer-info {
      flex-direction: column;
      text-align: center;
    }
  
    .logistics-scene .truck-icon {
      width: 120px;
    }
  }
  </style>
  