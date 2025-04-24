<template>
  <div ref="headerRoot">
    <!-- Topbar -->
    <div class="bg-dark text-white py-2 px-lg-5">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
            <div class="d-inline-flex align-items-center">
              <small><i class="fa fa-phone-alt mr-2"></i>+919-578-9105</small>
              <small class="px-3">|</small>
              <small><i class="fa fa-envelope mr-2"></i>contacto@tucajaexpress.com</small>
            </div>
          </div>
          <div class="col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center">
              <a class="text-white px-2" href="https://www.facebook.com/tucajaexpress/?locale=es_LA" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a class="text-white px-2" href="https://twitter.com/TUCajaExpress" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="text-white px-2" href="https://www.instagram.com/tucajaexpress/?hl=es" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
              <RouterLink to="/gana" class="btn btn-primary py-1 px-3 ml-3">
                Gana Dinero con Nosotros
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Header principal -->
    <header class="header-container">
      <div class="container-fluid d-flex align-items-center justify-content-between">
        <!-- Logo -->
        <div class="header-logo">
          <RouterLink to="/">
            <img src="/images/logo-light.png" alt="Tu Caja Express Logo" />
          </RouterLink>
        </div>

        <!-- Navegación escritorio -->
        <nav class="desktop-nav">
          <ul>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/nosotros">Conócenos</RouterLink></li>
            <li><RouterLink to="/paises">Paises</RouterLink></li>
            <li><RouterLink to="/puerta-puerta">Puerta a Puerta</RouterLink></li>
            <li><RouterLink to="/nuestras-rutas">Rutas en EEUU</RouterLink></li>
            <li><RouterLink to="/contactanos">Contáctanos</RouterLink></li>
          </ul>
        </nav>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const headerRoot = ref(null)

const handleClickOutside = (event) => {
  if (headerRoot.value && !headerRoot.value.contains(event.target)) {
    // Lógica si deseas manejar algo al hacer clic fuera
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.header-container {
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  animation: slideDown 0.6s ease forwards;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.header-logo img {
  height: 50px;
  display: block;
}

.desktop-nav {
  display: none;
}

@media (min-width: 992px) {
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .desktop-nav {
    display: flex;
    justify-content: center;
    flex: 1;
  }

  .desktop-nav ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .desktop-nav li a {
    font-size: 1.3rem;
    font-weight: 700;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    position: relative;
  }

  .desktop-nav li a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 3px;
    bottom: -6px;
    left: 0;
    background-color: #f30d0a;
    transition: width 0.3s;
  }

  .desktop-nav li a:hover::after {
    width: 100%;
  }

  .desktop-nav li a:hover {
    color: #f01f1c;
  }
}
</style>
