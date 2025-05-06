<template>
  <div class="menu-mobile">
    <!-- Ícono de menú hamburguesa -->
    <button v-if="!isMenuOpen" @click="toggleMenu" class="hamburger">
      &#9776;
    </button>

    <!-- Fondo oscuro -->
    <div v-if="isMenuOpen" class="overlay" @click="toggleMenu"></div>

    <!-- Menú deslizable -->
    <nav :class="{ 'mobile-menu': true, 'open': isMenuOpen }">
      <div class="scroll-hint">
  <small>Desliza para ver más</small>
</div>

      <ul>
        <li><RouterLink to="/" @click="closeMenu"><span>🏠</span> Inicio</RouterLink></li>
        <li><RouterLink to="/nosotros" @click="closeMenu"><span>👤</span> Conócenos</RouterLink></li>
        <li><RouterLink to="/puerta-puerta" @click="closeMenu"><span>📦</span> Puerta a Puerta</RouterLink></li>
        <li><RouterLink to="/rutas" @click="closeMenu"><span>🛣️</span> Rutas en EEUU</RouterLink></li>
        <li><RouterLink to="/paises" @click="closeMenu"><span>🌎</span> Países</RouterLink></li>
        <li><RouterLink to="/cotizar-form" @click="closeMenu"><span>💰</span> Cotiza</RouterLink></li>
        <li><RouterLink to="/contactanos" @click="closeMenu"><span>📞</span> Contáctanos</RouterLink></li>
        <li class="rastrea-btn">
          <RouterLink to="/rastreo" @click="closeMenu"><span>🚚</span> Rastrea tu paquete</RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    }
  }
};
</script>

<style scoped>
.scroll-hint {
  text-align: center;
  color: #fff;
  font-size: 0.9rem;
  margin-bottom: 10px;
  animation: bounce-down 1.5s infinite;
  opacity: 0.85;
}

.arrow-down {
  font-size: 1.2rem;
  display: block;
  animation: bounce-down 1.5s infinite;
}

/* Animación de rebote vertical */
@keyframes bounce-down {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px);
  }
}

/* Bounce animation */
@keyframes bounce-click {
  0% { transform: scale(1); }
  40% { transform: scale(1.2); }
  60% { transform: scale(0.95); }
  100% { transform: scale(1); }
}

/* Estilo animado al hacer clic */
.mobile-menu a:active span {
  animation: bounce-click 0.4s ease;
  color: #ffd700; /* Amarillo dorado temporal */
}

/* Oculta en escritorio */
@media (min-width: 769px) {
  .menu-mobile {
    display: none;
  }
}

/* Botón hamburguesa */
.hamburger {
  font-size: 32px;
  cursor: pointer;
  background: #b3001b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 15px;
  left: 5px;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, background 0.3s ease;
}

.hamburger:hover {
  transform: scale(1.1);
  background: #990016;
}

/* Fondo oscuro al abrir menú */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* Menú móvil deslizable */
.mobile-menu {
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  height: 55%;
  background: linear-gradient(135deg, #b3001b, #4b0000); 
  background-image: 
    url('/images/textura-light.png'), 
    linear-gradient(135deg, #b3001b, #4b0000);
  background-blend-mode: overlay;
  background-size: cover, 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px 20px 0 0;
  padding-top: 20px;
  transition: bottom 0.4s ease-in-out;
  z-index: 1000;
  overflow-y: auto;
  box-shadow: 0 -6px 16px rgba(0, 0, 0, 0.45);
}

.mobile-menu.open {
  bottom: 0;
}

/* Scroll */
.mobile-menu::-webkit-scrollbar {
  width: 6px;
}

.mobile-menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  padding-bottom: 30px;
  text-align: center;
}

.mobile-menu li {
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.mobile-menu a {
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  display: block;
  transition: background 0.3s ease;
}

.mobile-menu a:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.mobile-menu span {
  margin-right: 10px;
}

/* Último botón: Rastrea */
.rastrea-btn {
  background: #fff;
  margin: 20px auto;
  width: 90%;
  border-radius: 10px;
}

.rastrea-btn a {
  color: #b3001b;
  font-weight: bold;
}
</style>
