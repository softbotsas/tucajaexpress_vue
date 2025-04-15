<template>
    <div>
      <!-- Topbar Start -->
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
                <a class="text-white px-2" href="https://www.facebook.com/tucajaexpress/?locale=es_LA" aria-label="Facebook" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a class="text-white px-2" href="https://twitter.com/TUCajaExpress" aria-label="Twitter" target="_blank">
                  <i class="fab fa-twitter"></i>
                </a>
                <a class="text-white px-2" href="https://www.instagram.com/tucajaexpress/?hl=es" aria-label="Instagram" target="_blank">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Topbar End -->
  
      <!-- Navbar Start -->
      <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 px-lg-5">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">
            <img src="/images/logo-light.png" alt="Tu Caja Express logo" />
          </RouterLink>
  
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <ul class="navbar-nav m-auto">
              <li class="nav-item">
                <RouterLink to="/" class="nav-link" exact-active-class="active">Inicio</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink to="/nosotros" class="nav-link" exact-active-class="active">Conócenos</RouterLink>
              </li>
  
              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Servicios</a>
                <div class="dropdown-menu rounded-0">
                  <RouterLink to="/puerta-puerta" class="dropdown-item">Puerta a Puerta</RouterLink>
                </div>
              </li>
  
              <li class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Más cerca de ti</a>
                <div class="dropdown-menu rounded-0">
                  <RouterLink to="/nuestras-rutas" class="dropdown-item">Rutas en EEUU</RouterLink>
                </div>
              </li>
  
              <li class="nav-item">
                <RouterLink to="/contacto" class="nav-link">Contáctanos</RouterLink>
              </li>
            </ul>
  
            <RouterLink to="/gana" class="btn btn-primary py-2 px-4 d-none d-lg-block">
              Gana Dinero con Nosotros
            </RouterLink>
          </div>
        </div>
      </nav>
      <!-- Navbar End -->
    </div>
  </template>
  
  <script setup>
  // No se necesita lógica aún
  </script>
  
  <style scoped>
  /* Aquí puedes migrar estilos específicos más adelante si los tienes en un CSS externo */
  </style>
  