<template>
  <div class="map-container">
    <!-- Encabezado mejorado -->
    <div class="map-header">
      <h1 class="map-title">¡Más cerca de ti!</h1>
      <h2 class="map-subtitle">Nuestros Destinos</h2>
      <p class="map-instruction">
        <i class="fas fa-hand-pointer"></i> Selecciona un país para ver detalles
      </p>
    </div>

    <!-- Contenedor interactivo con avión -->
    <div class="svg-interactive-container">     
      <svg
        id="mapa"
        viewBox="620 433 100 350"
        preserveAspectRatio="xMidYMid meet"
        class="map-svg"
        @mousemove="handleMouseMove"
      >
        <!-- México -->
        <path 
          class="country mex"
          d="M248.25,196.479c0.891-0.467,1.166-0.818,1.166-0.818l-0.137-2.103c0,0-0.617-0.643-1.577-0.643s-3.565,0.292-3.565,0.292l-1.782,1.052l-2.948,0.467c0,0-0.686,0.175-0.686,0.467c0,0.292-0.069,0.643,0,0.818c0.068,0.175,0.137,0.818,0.137,0.818l-0.96,2.687v1.285l-0.48,0.993l-0.96,0.409l-0.686,0.234l0.206,1.285l-0.069,0.701c0,0-0.343,0.234-1.371,0.526c-1.028,0.292-2.057,0.467-2.057,0.467l-0.137-0.526l-0.48-0.701l-1.44-0.058l-0.96,0.292l-3.565,0.701c0,0-0.548,0.292-1.165,0.117c-0.617-0.175-1.028-0.351-1.028-0.351l-0.548-0.175l-2.194-0.643l-2.194-1.285c0,0-0.411-0.234-0.891-0.993c-0.48-0.759-1.303-1.46-1.303-2.278c0-0.818,0.617-0.643,0-1.402c-0.617-0.759-1.508-1.227-1.714-1.344c-0.206-0.117-0.823-0.467-0.823-0.467s0.411-0.993,0.823-1.402c0.411-0.409,0.548-0.818,0.548-0.818l-0.137-1.052l-0.48-1.402l-0.754-1.636c0,0-0.891-2.337-0.754-2.746c0.137-0.409,0.686-1.402,0.686-1.577c0-0.175-0.823-1.694-0.823-1.694l-0.274-1.636l0.274-1.461l0.891,0.409c0,0,0.891,0.409,1.097,0.234c0.205-0.175,0.48-0.643,0.48-0.643s0.617-0.701,0.617-1.051c0-0.141-0.046-0.35-0.117-0.601l-0.112-0.042l-1.737-1.402l-2.651-1.013l-1.371-3.038l-4.662-7.478l-1.28-1.636l-3.108-0.39l-1.554,0.467l-1.188,1.324l-1.28,0.857l-1.188,0.156l-1.737-0.545l-1.097-1.792l-1.554-2.648l-4.205-4.051l-4.479,0.078l-1.28,1.091l-8.409-0.39l-11.334-3.661l-0.274-0.701h-6.886c0.007,0.149,0.008,0.314,0.008,0.526c0,0.759,0,2.103,0,2.103l0.411,2.571c0,0,0.343,3.739,1.028,4.265c0.686,0.526,1.988,1.168,2.125,1.343c0.137,0.175,2.125,1.402,2.468,2.103c0.343,0.701,0.754,1.344,0.823,1.636c0.068,0.292-0.069,1.928-0.069,1.928s0.343,0.058-0.343,0c-0.686-0.058-1.44-0.175-1.44-0.175l-1.645,0.058c0,0-0.754,0.059-0.411,0.584c0.343,0.526,0.754,1.052,1.097,1.227c0.343,0.175,1.508,1.11,1.508,1.11s1.097,0.935,1.508,0.935c0.411,0,1.234-0.058,1.234-0.058s0.069-0.584,0.823-0.175c0.754,0.409,0.617,0.467,1.165,0.818c0.548,0.35,1.234,0.701,1.508,0.935c0.274,0.234,0.754,0.584,0.823,1.227c0.069,0.643,0.137,1.811,0.137,1.811s-0.617-0.292-0.617,1.344s-0.137,1.694,1.303,2.57c1.44,0.876,3.702,3.622,4.113,4.031c0.411,0.409,0.754,1.402,1.371,1.11c0.617-0.292,1.577-1.402,1.577-1.402s-1.097-1.636-1.234-1.811c-0.137-0.175-2.331-1.811-2.331-1.811s-0.617,0-0.617-0.643c0-0.643,0-1.344,0-1.344s-0.137-0.584-0.274-1.052c-0.137-0.467-0.48-1.402-0.48-1.402s-0.068-0.818-0.137-1.986c-0.068-1.168-0.548-2.278-0.548-2.278l-1.783-0.993c0,0-0.48-0.292-1.028-1.636c-0.548-1.343-0.891-1.519-0.96-2.045c-0.068-0.526,0.068-1.285-0.274-1.869s-0.48-0.584-1.371-1.694c-0.891-1.11-1.371-1.811-1.988-2.57c-0.617-0.759-1.165-0.117-1.165-1.577c0-1.461-0.068-1.344,0-2.337c0.069-0.993,0.891-2.804,0.891-2.804s0.549,0.701,1.028,0.876c0.48,0.175,1.783,0.292,1.988,0.234c0.206-0.059,0.891,0.292,1.028,0.876c0.137,0.584,0.206,1.402,0.206,1.402s-1.097-0.993-0.069,0.935c1.028,1.928,1.714,3.271,1.714,3.271s1.166,3.505,1.919,4.031c0.754,0.526,0.96,0.701,1.988,1.577c1.028,0.876,2.194,0.759,1.303,1.227c-0.891,0.467-0.754,0.117-0.891,0.467c-0.137,0.351,0.343,1.285,0.686,1.461c0.343,0.175,0.96,0.292,1.714,0.526c0.754,0.234,0.48-0.058,0.754,0.234c0.274,0.292-0.274,0.643,0.823,0.935c1.097,0.292,1.097,0.292,1.097,0.292c0.069,0.701,0.343,0.467-0.068,0.935c-0.411,0.467-1.234,1.051-1.371,1.285c-0.137,0.234-0.068,1.344-0.068,1.344s0.48,0.234,1.234,0.175c0.754-0.058,2.057-0.175,2.399,0.234c0.343,0.409,1.44,1.636,1.44,1.811c0,0.175,0.48,1.519,0.823,1.928c0.343,0.409,1.234,0.935,1.302,1.11c0.069,0.175,0.823,1.753,1.028,2.045s1.234,1.986,1.577,2.278c0.343,0.292,2.811,2.103,2.879,2.395c0.069,0.292,0.274,1.577,0,2.22c-0.274,0.643-0.754,1.986-1.028,2.22c-0.274,0.234-1.097,1.402-1.097,1.402s0.274,1.694,0.274,1.869c0,0.176,0.206,1.169,0.548,1.461c0.343,0.292,3.839,2.98,3.839,2.98s1.577,0,1.851,0.35c0.274,0.351,1.165,1.519,1.165,1.519l2.399,1.052l1.851,0.292l3.016,1.519c0,0,3.77,1.168,3.77,1.344c0,0.175-0.48,0.993,2.262,1.986c2.742,0.993,5.279,1.811,5.621,2.162c0.343,0.35-1.097,0.935,1.508,0.993c2.605,0.058,3.222,0.526,4.525,0.234c1.302-0.292,1.919-0.175,2.674-0.76c0.754-0.584,1.508-0.935,1.851-0.993c0.343-0.058,4.525,1.052,4.525,1.052l2.742,2.454c0,0,0.157,0.468,0.358,1.014l0.304-0.04l0.548-1.052l1.554-1.753l0.594-0.74c0,0,2.057-0.039,2.468-0.156c0.411-0.117,1.28-0.74,1.28-0.74l-0.091-0.74l-0.868-1.09l-1.417-1.013l-0.411-0.273l-0.868-0.584l-0.046-0.467c0,0,0.046-0.234,0.594-0.312c0.548-0.078,0.64-0.273,0.64-0.273l-0.046-0.701l0.274-0.662l2.376-0.078h2.468h0.935l3.592-2.546c0.077-0.157,0.196-0.296,0.363-0.238c0.343,0.117,0.891,0.234,0.891,0.234l1.097-0.117l0.617-0.935l0.548-1.928l-1.097-0.876c0,0-0.343,0.175-0.137-0.234c0.206-0.409,0.617-0.701,0.617-0.701s0.137-0.584,0.068-1.344C247.839,197.121,247.358,196.946,248.25,196.479z"
          @click="selectCountry(countries[0])"
          @mouseenter="hoverCountry = 'mex'"
          @mouseleave="hoverCountry = null"
          :style="getCountryStyle('mex')"
        />

        <!-- Guatemala -->
        <path 
          class="country gua"
          d="M241.28,220.08v-1.246l1.325-0.351l-0.091-0.818l0.137-1.051l2.011-0.857l2.005-2.225l-0.2-0.171l-1.371,0.643l-1.782,0.292l-0.754-0.584c0,0,0.136-0.212,0.368-0.48l-0.688-0.201l-0.457-5.764l-0.32-0.701h-1.051h-2.468l-2.376,0.078l-0.274,0.662l0.046,0.701c0,0-0.091,0.195-0.64,0.273c-0.548,0.078-0.594,0.312-0.594,0.312l0.046,0.467l0.868,0.584l0.411,0.273l1.417,1.013l0.868,1.09l0.091,0.74c0,0-0.868,0.623-1.28,0.74c-0.411,0.117-2.468,0.156-2.468,0.156l-0.594,0.74l-1.554,1.753l-0.548,1.052l-0.304,0.04c0.219,0.595,0.491,1.283,0.67,1.557c0.343,0.526,0.48,1.11,1.851,2.045c1.371,0.935,2.399,1.402,2.879,1.285c0.48-0.117,1.097-0.409,1.851-0.234c0.055,0.013,0.115,0.03,0.177,0.048l0.554-0.652L241.28,220.08z"
          @click="selectCountry(countries[1])"
          @mouseenter="hoverCountry = 'gua'"
          @mouseleave="hoverCountry = null"
          :style="getCountryStyle('gua')"
        />

        <!-- El Salvador -->
        <path 
          class="country sal"
          d="M247.587,221.366l-0.868-0.623l-1.097,0.117l-0.503,0.234l-1.051-0.584l-0.091-0.662l-2.696,0.048v0.185l-2.239,1.207l-0.554,0.652c0.781,0.235,2.017,0.886,2.017,0.886l1.028,0.993l3.565,0.351c0,0,0.617-0.175,1.508-0.409c0.262-0.069,0.553-0.106,0.836-0.12l-0.082-1.184L247.587,221.366z"
          @click="selectCountry(countries[2])"
          @mouseenter="hoverCountry = 'sal'"
          @mouseleave="hoverCountry = null"
          :style="getCountryStyle('sal')"
        />

        <!-- Honduras -->
        <path 
          class="country hon"
          d="M250.283,224.287l0.32-1.285l0.046-0.935l0.868-0.506l2.559-0.117c0,0,0.686-0.156,1.188-0.273c0.503-0.117,0.96-0.35,0.96-0.35l1.051-0.974l0.96-1.09l2.56-0.467l1.968-1.577l-0.186-0.488l-1.44-0.35l-0.823-0.876l-1.645-0.935l-1.851-0.117l-1.577,0.059l-1.508-0.643l-1.234,0.409l-2.194,0.058h-3.29l-0.348-0.297l-2.005,2.225l-2.011,0.857l-0.137,1.051l0.091,0.818l-1.325,0.351v1.061l2.696-0.048l0.091,0.662l1.051,0.584l0.503-0.234l1.097-0.117l0.868,0.623l-0.229,1.09l0.082,1.184c0.679-0.034,1.309,0.072,1.358,0.237c0.044,0.15,0.229,0.685,0.356,1.111l0.215-0.039L250.283,224.287z"
          @click="selectCountry(countries[3])"
          @mouseenter="hoverCountry = 'hon'"
          @mouseleave="hoverCountry = null"
          :style="getCountryStyle('hon')"
        />

        <!-- Nicaragua -->
        <path 
          class="country nic"
          d="M255.345,232.32c0.069,0.088,0.651,0.555,1.131,0.526c0.48-0.029,1.097,0,1.371-0.117c0.274-0.117,0.651-0.643,0.651-0.643l1.2-0.029l1.561,0.629c-0.037-0.325-0.052-0.57-0.052-0.57l1.028-1.11c0,0,0.411-0.584,0-1.402c-0.411-0.818-1.645-2.454-1.645-2.454l0.48-0.234c0,0,0.96,0.117,1.234-0.059c0.274-0.175,0.343,0.059,0.48-0.292c0.137-0.35,0.069-1.285,0.069-1.285l-0.548-1.051l-0.617-1.227c0,0-0.411-1.052,0.411-1.577c0.823-0.526,1.302-1.051,1.302-1.051l0.069-1.811l-0.705-1.849l-1.968,1.577l-2.56,0.467l-0.96,1.09l-1.051,0.974c0,0-0.457,0.234-0.96,0.35c-0.503,0.117-1.188,0.273-1.188,0.273l-2.559,0.117l-0.868,0.506l-0.046,0.935l-0.32,1.285l-0.914,0.662l-0.215,0.039c0.071,0.238,0.124,0.442,0.124,0.525c0,0.234,0.343,2.045,0.343,2.045l1.234,1.285c0,0,0.823,0.993,1.645,2.161c0.382,0.542,0.674,1.108,0.878,1.56l0.595-0.305C253.974,232.261,255.277,232.232,255.345,232.32z"
          @click="selectCountry(countries[4])"
          @mouseenter="hoverCountry = 'nic'"
          @mouseleave="hoverCountry = null"
          :style="getCountryStyle('nic')"
        />
      </svg>

      <!-- Tooltip flotante -->
      <div 
        v-if="hoverCountry"
        class="map-tooltip"
        :style="tooltipPosition"
      >
        {{ getCountryName(hoverCountry) }}
      </div>
    </div>

    <!-- Modal mejorado con transición -->
    <transition name="modal">
      <div v-if="selectedCountry" class="country-modal">
        <div class="modal-backdrop" @click="selectedCountry = null"></div>
        
        <div class="modal-content">
          <button class="modal-close" @click="selectedCountry = null">
            <i class="fas fa-times"></i>
          </button>
          
          <div class="modal-header">
            <h3>{{ selectedCountry.name }}</h3>
            <div class="country-flag">
              <img :src="selectedCountry.flag" :alt="`Bandera de ${selectedCountry.name}`" class="flag-image">
            </div>
          </div>

          <div class="modal-body">
            <div class="country-preview">
              <img :src="selectedCountry.preview" :alt="`Vista de ${selectedCountry.name}`" class="preview-image">
            </div>
            
            <div class="country-info">
              <p>Operamos en todo {{ selectedCountry.name }} con cobertura completa.</p>
              <ul class="country-features">
                <li v-for="(feature, index) in features" :key="index">
                  <i class="fas fa-check"></i> {{ feature }}
                </li>
              </ul>
            </div>
          </div>
          
          <div class="modal-footer">
            <router-link 
              :to="selectedCountry.route" 
              class="btn-primary"
            >
              Ver detalles completos
            </router-link>
            <button @click="selectedCountry = null" class="btn-secondary">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'InteractiveMap',
  setup() {
    const router = useRouter();
    const hoverCountry = ref(null);
    const selectedCountry = ref(null);
    const mousePosition = ref({ x: 0, y: 0 });

    const features = [
      'Cobertura en principales ciudades',
      'Tiempos de entrega competitivos',
      'Soporte personalizado',
      'Seguimiento en tiempo real'
    ];

    const countries = [
      { 
        id: 'mex', 
        name: 'México', 
        route: '/paises/mexico',
        path: 'M248.25,196.479c0.891-0.467,1.166-0.818...',
        flag: '/images/flags/mexico.png', // Ruta a la bandera
        preview: '/images/previews/mexico.jpeg' // Ruta a la imagen preview
      },
      { 
        id: 'gua', 
        name: 'Guatemala', 
        route: '/paises/guatemala',
        path: 'M241.28,220.08v-1.246l1.325-0.351...',
        flag: '/images/flags/guatemala.png',
        preview: '/images/previews/guatemala.jpeg' // Ruta a la imagen preview
      },
      { 
        id: 'sal', 
        name: 'El Salvador', 
        route: '/paises/salvador',
        path: 'M247.587,221.366l-0.868-0.623...',
        flag: '/images/flags/salvador.png',
        preview: '/images/previews/salvador.jpeg' // Ru
      },
      { 
        id: 'hon', 
        name: 'Honduras', 
        route: '/paises/honduras',
        path: 'M250.283,224.287l0.32-1.285...',
        flag: '/images/flags/honduras.png',
        preview: '/images/previews/honduras.jpeg' // Ru
      },
      { 
        id: 'nic', 
        name: 'Nicaragua', 
        route: '/paises/nicaragua',
        path: 'M255.345,232.32c0.069,0.088...',
        flag: '/images/flags/nicaragua.png',
        preview: '/images/previews/nicaragua.jpeg' // Ru
      }
    ];

    const handleMouseMove = (e) => {
      const rect = e.target.getBoundingClientRect();
      mousePosition.value = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const selectCountry = (country) => {
      selectedCountry.value = country;
    };

    const getCountryName = (id) => {
      return countries.find(c => c.id === id)?.name || '';
    };

    const getCountryStyle = (id) => {
      const isHovered = hoverCountry.value === id;
      const isSelected = selectedCountry.value?.id === id;
      
      return {
        fill: isSelected ? '#e74c3c' : isHovered ? '#3498db' : '#515551',
        stroke: '#ffffff',
        strokeWidth: '0.75',
        cursor: 'pointer',
        transition: 'fill 0.3s ease, transform 0.2s ease',
        transform: isHovered ? 'scale(3.205)' : 'scale(3.2)'
      };
    };

    const tooltipPosition = computed(() => ({
      left: `${mousePosition.value.x + 10}px`,
      top: `${mousePosition.value.y - 20}px`
    }));

    const planePosition = computed(() => {
      if (!selectedCountry.value) return {};
      
      // Posiciones aproximadas para el avión (ajustar según necesidad)
      const positions = {
        mex: { top: '35%', left: '30%' },
        gua: { top: '40%', left: '35%' },
        sal: { top: '45%', left: '38%' },
        hon: { top: '50%', left: '40%' },
        nic: { top: '55%', left: '45%' }
      };
      
      return positions[selectedCountry.value.id] || {};
    });

    return {
      countries,
      hoverCountry,
      selectedCountry,
      mousePosition,
      features,
      handleMouseMove,
      selectCountry,
      getCountryName,
      getCountryStyle,
      tooltipPosition,
      planePosition
    };
  }
}
</script>

<style scoped>
.map-container {
  position: relative;
  max-width: 1200px; /* Aumentado para mejor visualización */
  margin: 2rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrado horizontal */
}

.map-header {
  text-align: center;
  margin-bottom: 1.5rem;
  width: 100%;
}

.map-title {
  color: #e74c3c;
  font-size: 2.5rem; /* Más grande */
  margin-bottom: 0.5rem;
}

.map-subtitle {
  color: #2c3e50;
  font-size: 1.8rem; /* Más grande */
  margin-bottom: 1rem;
}

.map-instruction {
  color: #7f8c8d;
  font-size: 1.2rem; /* Más grande */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.svg-interactive-container {
  position: relative;
  background: 
    /* Capa oscura semi-transparente */
    linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    /* Imagen de fondo con desenfoque */
    url('/images/background.jpeg') center/cover no-repeat;
  
  /* Efecto de desenfoque para el fondo */
  backdrop-filter: blur(2px);
  
  border-radius: 16px;
  padding: 2rem;
  overflow: visible;
  border: 2px solid rgba(255, 255, 255, 0.2); /* Borde sutil */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}
@media (max-width: 768px) {
  .svg-interactive-container::before {
    filter: blur(2px) brightness(0.6);
  }
  .map-svg {
    filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.5));
  }
}

/* Ajusta el SVG para que se vea bien sobre el fondo */
.map-svg {
  width: 100%;
  height: 600px;
  display: block;
  margin: 0 auto;
  transition: transform 0.3s ease;
  transform: scale(1.3);
  transform-origin: center;
  /* Añade sombra para mejor contraste */
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
}

/* Mejora la visibilidad de los países */
.country {
  fill: #515551;
  stroke: #ffffff;
  stroke-width: 0.75;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.9; /* Ligera transparencia */
}

.country:hover {
  fill: #3498db;
  opacity: 1;
  transform: scale(1.02);
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
}
/* Para un efecto vintage */
.svg-interactive-container::before {
  background: 
    linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('/images/old-map-texture.jpg') center/cover no-repeat;
  filter: sepia(0.3) brightness(0.8) contrast(1.2);
}

.map-svg {
  width: 100%;
  height: 600px; /* Altura fija aumentada */
  display: block;
  margin: 0 auto;
  transition: transform 0.3s ease;
  transform: scale(1.3); /* Escala aumentada */
  transform-origin: center; /* Escala desde el centro */
}


.country-preview {
  width: 100%;
  height: 200px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.preview-image:hover {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 768px) {
  .country-flag {
    width: 80px;
    height: 50px;
  }
  
  .country-preview {
    height: 150px;
  }
}
.floating-plane {
  position: absolute;
  width: 100px; /* Más grande */
  height: auto;
  z-index: 10;
  pointer-events: none;
  transition: all 0.5s ease-in-out;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3)); /* Sombra mejorada */
}

.map-tooltip {
  position: absolute;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 8px 15px; /* Más grande */
  border-radius: 6px;
  font-size: 1rem; /* Más grande */
  pointer-events: none;
  z-index: 100;
  transform: translateY(-100%);
  white-space: nowrap;
}

/* Efectos hover mejorados para países */
.country {
  transition: all 0.3s ease;
}

.country:hover {
  transform: scale(1.02);
  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));
}

/* Estilos del modal (se mantienen igual) */
.country-modal {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  pointer-events: none;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  z-index: 1;
  pointer-events: auto;
}

.modal-content {
  position: relative;
  background: white;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 2;
  pointer-events: auto;
}
/* Responsive adjustments */
@media (max-width: 1200px) {
  .map-svg {
    height: 500px;
    transform: scale(1.2);
  }
}

@media (max-width: 992px) {
  .map-container {
    max-width: 900px;
  }
  
  .map-svg {
    height: 450px;
    transform: scale(1.1);
  }
  
  .floating-plane {
    width: 90px;
  }
}

@media (max-width: 768px) {
  .map-container {
    padding: 0.5rem;
    max-width: 100%;
  }
  
  .svg-interactive-container {
    padding: 1rem;
  }
  
  .map-title {
    font-size: 2rem;
  }
  
  .map-subtitle {
    font-size: 1.5rem;
  }
  
  .map-svg {
    height: 400px;
    transform: scale(1);
  }
  
  .floating-plane {
    width: 70px;
  }
}

@media (max-width: 576px) {
  .map-svg {
    height: 300px;
  }
  
  .floating-plane {
    width: 60px;
  }
  
  .map-title {
    font-size: 1.8rem;
  }
  
  .map-subtitle {
    font-size: 1.3rem;
  }
  
  .map-instruction {
    font-size: 1rem;
  }
}

/* Mejoras de accesibilidad */
.country:focus {
  outline: 3px solid #3498db;
  outline-offset: 2px;
}

/* Animación para el modal */
@keyframes modalIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #7f8c8d;
  transition: color 0.3s ease;
}

.modal-close:hover {
  color: #e74c3c;
}

.modal-header {
  padding: 1.5rem;
  text-align: center;
  border-bottom: 1px solid #eee;
}

.modal-header h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.country-flag-placeholder {
  width: 80px;
  height: 50px;
  margin: 0 auto;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 0.8rem;
  border-radius: 4px;
}

.modal-body {
  padding: 1.5rem;
}

.country-preview-placeholder {
  width: 100%;
  height: 200px;
  background: #f5f5f5;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.country-info {
  margin-bottom: 1.5rem;
}

.country-info p {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.country-features {
  list-style: none;
  padding: 0;
}

.country-features li {
  padding: 0.5rem 0;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.country-features li i {
  color: #e74c3c;
}

.modal-footer {
  padding: 1rem 1.5rem;
  border-top: 1px solid #eee;
  text-align: center;
}

.btn-primary {
  display: inline-block;
  background: #e74c3c;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;
}

.btn-primary:hover {
  background: #c0392b;
}

/* Animaciones */
@keyframes modalIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .map-container {
    padding: 0.5rem;
  }
  
  .svg-interactive-container {
    padding: 1rem;
  }
  
  .map-title {
    font-size: 1.5rem;
  }
  
  .map-subtitle {
    font-size: 1.2rem;
  }
  
  .floating-plane {
    width: 60px;
  }
}

@media (max-width: 480px) {
  .modal-content {
    width: 95%;
  }
  
  .country-preview-placeholder {
    height: 150px;
  }
}
</style>