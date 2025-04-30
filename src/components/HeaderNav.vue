<template>
  <div ref="headerRoot">
    <!-- Topbar modificado -->
    <div class="bg-dark text-white py-2 px-lg-5">
      <div class="container-fluid">
        <div class="row">
          <!-- Teléfono y correo (solo desktop) -->
          <div class="col-lg-6 text-center text-lg-left mb-2 mb-lg-0 d-none d-lg-block">
            <div class="d-inline-flex align-items-center">
              <small><i class="fa fa-phone-alt mr-2"></i>+919-578-9105</small>
              <small class="px-3">|</small>
              <small><i class="fa fa-envelope mr-2"></i>contacto@tucajaexpress.com</small>
            </div>
          </div>
          
          <!-- Redes y botón (siempre visibles) -->
          <div class="col-12 col-lg-6 text-center text-lg-right">
            <div class="d-inline-flex align-items-center justify-content-center justify-content-lg-end">
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
      <div class="container-fluid">
        <div class="row align-items-center">
          <!-- Logo - centrado en móvil -->
          <div class="col-12 d-flex justify-content-center d-lg-block col-lg-auto">
            <div class="header-logo">
              <RouterLink to="/">
                <img src="/images/logo-light.png" alt="Tu Caja Express Logo" />
              </RouterLink>
            </div>
          </div>

          <!-- Navegación escritorio (derecha) -->
          <div class="col-lg-12 d-none d-lg-block">
            <nav class="desktop-nav">
              <ul>
                <li><RouterLink to="/">Inicio</RouterLink></li>
                <li><RouterLink to="/conocenos">Conócenos</RouterLink></li>
                <li><RouterLink to="/paises">Paises</RouterLink></li>
                <li><RouterLink to="/puerta-puerta">Puerta a Puerta</RouterLink></li>
                <li><RouterLink to="/rutas">Rutas en EEUU</RouterLink></li>
                <li><RouterLink to="/contactanos">Contáctanos</RouterLink></li>
              </ul>
            </nav>
          </div>
        </div>
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
/* Estilos para el top header */
.bg-dark {
  background-color: #343a40 !important;
}

/* Ajustes para el botón en móvil */
.btn-primary {
  font-size: 0.8rem;
  padding: 0.25rem 0.75rem !important;
  white-space: nowrap;
}

/* Ajustes para las redes sociales en móvil */
.text-white.px-2 {
  padding: 0 0.5rem !important;
  font-size: 0.9rem;
}

.header-container {
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
  padding: 1rem;
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
  transition: transform 0.3s ease;
}

.header-logo img:hover {
  transform: scale(1.05);
}

/* Estilos para móvil */
@media (max-width: 991.98px) {
  .header-container {
    padding: 0.5rem 1rem;
  }
  
  .header-logo {
    padding: 0.5rem 0;
  }
}

/* Estilos para desktop */
@media (min-width: 992px) {
  .header-container {
    padding: 1rem 2rem;
  }

  .btn-primary {
    font-size: 1rem;
    padding: 0.25rem 1rem !important;
  }

  .desktop-nav {
    display: flex;
    justify-content: center;
  }

  .desktop-nav ul {
    display: flex;
    gap: 2.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .desktop-nav li a {
    font-size: 1.1rem;
    font-weight: 700;
    text-decoration: none;
    color: #333;
    transition: all 0.3s ease;
    position: relative;
    padding: 0.5rem 0;
  }

  .desktop-nav li a::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 3px;
    bottom: 0;
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