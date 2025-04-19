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
      <ul>
        <li><RouterLink to="/"><span>🏠</span> Inicio</RouterLink></li>
        <li><RouterLink to="/nosotros"><span>👤</span> Conócenos</RouterLink></li>
        <li><RouterLink to="/puerta-puerta"><span>📦</span> Puerta a Puerta</RouterLink></li>
        <li><RouterLink to="/nuestras-rutas"><span>🛣️</span> Rutas en EEUU</RouterLink></li>
        <li><RouterLink to="/contacto"><span>📞</span> Contáctanos</RouterLink></li>
        <li class="rastrea-btn">
          <RouterLink to="/rastreo"><span>🚚</span> Rastrea tu paquete</RouterLink>
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
    }
  }
};
</script>

<style scoped>
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
  background: linear-gradient(135deg, #b3001b, #4b0000); /* degradado rojo profundo */
  background-image: 
    url('/images/textura-light.png'), /* una textura sutil (puedes usar tu propia imagen) */
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
