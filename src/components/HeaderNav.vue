<template>
  <div ref="headerRoot">
    <!-- Topbar modificado -->
    <div class="bg-dark text-white py-2 px-lg-5">
      <div class="container-fluid">
        <div class="row align-items-center">
          <!-- Teléfono y correo (solo desktop) -->
          <div class="col-lg-5 text-center text-lg-left mb-2 mb-lg-0 d-none d-lg-block">
            <div class="d-inline-flex align-items-center">
              <small><i class="fa fa-phone-alt mr-2"></i>+919-578-9105</small>
              <small class="px-3">|</small>
              <small><i class="fa fa-envelope mr-2"></i>contacto@tucajaexpress.com</small>
            </div>
          </div>
          
          <!-- Redes, botón y acceso empleados -->
          <div class="col-12 col-lg-7 text-center text-lg-right">
            <div class="d-inline-flex align-items-center justify-content-center justify-content-lg-end">
              <!-- Acceso empleados -->
              <a href="https://sistematce.com" target="_blank" class="employee-access text-white px-2 mr-2 d-flex align-items-center">
                <i class="fas fa-key mr-1"></i>
                <span class="d-none d-sm-inline">Ingresar</span>
                <span class="d-inline d-sm-none">Ingresar</span>
              </a>
              
              <!-- Redes sociales -->
              <div class="d-inline-flex">
                <a class="text-white px-2" href="https://www.facebook.com/tucajaexpress/?locale=es_LA" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="text-white px-2" href="https://twitter.com/TUCajaExpress" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="text-white px-2" href="https://www.instagram.com/tucajaexpress/?hl=es" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              
              <!-- Botón Gana Dinero -->
              <RouterLink to="/gana" class="btn btn-primary py-1 px-3 ml-3">
                Gana Dinero
                <span class="d-none d-md-inline"> con Nosotros</span>
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
                <li><RouterLink to="/rutas">Zonas de Recolección</RouterLink></li>
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

/* Acceso empleados */
.employee-access {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.employee-access:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-1px);
  text-decoration: none;
}

.employee-access i {
  font-size: 0.9rem;
  color: #f8f9fa;
}

/* Botón principal */
.btn-primary {
  background-color: #f30d0a;
  border-color: #f30d0a;
  font-size: 0.85rem;
  padding: 0.35rem 1rem !important;
  white-space: nowrap;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #d40c09;
  border-color: #d40c09;
  transform: translateY(-1px);
}

/* Header container */
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

/* Navegación desktop */
.desktop-nav {
  display: flex;
  justify-content: center;
}

.desktop-nav ul {
  display: flex;
  gap: 2rem;
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

/* Estilos responsivos */
@media (max-width: 991.98px) {
  .header-container {
    padding: 0.5rem 1rem;
  }
  
  .header-logo {
    padding: 0.5rem 0;
  }

  .btn-primary {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem !important;
  }

  .employee-access {
    padding: 0.25rem 0.5rem;
    margin-right: 0.5rem;
  }
}

@media (max-width: 575.98px) {
  .employee-access {
    padding: 0.2rem 0.4rem;
    font-size: 0.8rem;
  }
  
  .employee-access i {
    font-size: 0.8rem;
    margin-right: 0.25rem;
  }

  .btn-primary {
    padding: 0.25rem 0.6rem !important;
    font-size: 0.75rem;
  }
}

/* Mejoras de alineación */
.d-inline-flex.align-items-center {
  gap: 0.5rem;
}
</style>