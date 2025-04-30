<template>
    <div class="routes-view">
      <!-- Hero Banner -->
      <section class="hero-banner">
        <div class="hero-overlay"></div>
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Nuestras Rutas de Recogida</h1>
            <h2 class="hero-subtitle">Estados Unidos</h2>

          </div>
        </div>
      </section>
  
      <!-- Estados Grid -->
      <section class="states-section">
        <div class="container">
          <div class="section-header">
            <h2 class="section-title">Explora nuestras rutas por estado</h2>
            <p class="section-description">Selecciona un estado para ver las ciudades donde operamos</p>
          </div>
  
          <div class="states-grid">
            <div 
              v-for="state in states" 
              :key="state.id" 
              class="state-card"
              :class="{ 'active': activeState === state.id }"
              @click="setActiveState(state.id)"
            >
              <div class="state-icon">
                <i class="fas fa-map-marked-alt"></i>
              </div>
              <h3 class="state-name">{{ state.name }}</h3>
              <div class="state-details" v-if="activeState === state.id">
                <p>{{ state.description }}</p>
                <button class="btn-view" @click.stop="viewStateMap(state.id)">
                  Ver Mapa <i class="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Map Container -->
      <section class="map-section" v-if="activeState" ref="mapSection">
        <div class="container">
          <div class="map-header">
            <h3 class="map-title">{{ getStateName(activeState) }}</h3>
            <button class="btn-close" @click="closeMap">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div :id="'map-' + activeState" class="state-map"></div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-content">
            <h3 class="cta-title">¿Necesitas recogida en otra ubicación?</h3>
            <p class="cta-text">Contáctanos para coordinar una solución personalizada</p>
            <router-link to="/contacto" class="btn-primary">
              <i class="fas fa-headset"></i> Contactar a un asesor
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import { ref, onMounted, nextTick } from 'vue'
  import L from 'leaflet'
  import 'leaflet/dist/leaflet.css'
  
  export default {
    name: 'USRoutesView',
    setup() {
      const states = ref([
        { id: 'florida', name: 'Florida', description: 'Cobertura en principales ciudades de Florida' },
        { id: 'carolinas', name: 'Carolinas', description: 'Rutas en Carolina del Norte y del Sur' },
        { id: 'virginia1', name: 'Virginia (Ruta 1)', description: 'Ruta costera de Virginia' },
        { id: 'virginia2', name: 'Virginia (Ruta 2)', description: 'Ruta interior de Virginia' },
        { id: 'georgia', name: 'Georgia', description: 'Cobertura en ciudades clave de Georgia' },
        { id: 'alabama', name: 'Alabama', description: 'Rutas principales en Alabama' },
        { id: 'tennessee', name: 'Tennessee', description: 'Conexiones en Tennessee' },
        { id: 'kentucky', name: 'Kentucky', description: 'Rutas de recogida en Kentucky' },
        { id: 'ohio', name: 'Ohio', description: 'Cobertura en Ohio' },
        { id: 'indiana', name: 'Indiana', description: 'Rutas disponibles en Indiana' }
      ])
  
      const activeState = ref(null)
      const maps = ref({})
      const mapSection = ref(null)
  
      const setActiveState = (stateId) => {
        activeState.value = activeState.value === stateId ? null : stateId
      }
  
      const getStateName = (stateId) => {
        const state = states.value.find(s => s.id === stateId)
        return state ? state.name : ''
      }
  
      const viewStateMap = (stateId) => {
        activeState.value = stateId
        nextTick(() => {
          initMap(stateId)
          scrollToMap()
        })
      }
  
      const scrollToMap = () => {
        if (mapSection.value) {
          mapSection.value.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      }
  
      const closeMap = () => {
        activeState.value = null
      }
  
      const initMap = (stateId) => {
        if (maps.value[stateId]) return
  
        const mapConfigs = {
          florida: { center: [27.994402, -81.760254], zoom: 6, cities: {
            "Miami": [25.7617, -80.1918],
            "Orlando": [28.5383, -81.3792],
            "Tampa": [27.9506, -82.4572],
            "Jacksonville": [30.3322, -81.6557]
          }},
          carolinas: { center: [34.0007, -81.0348], zoom: 6, cities: {
            "Charlotte": [35.2271, -80.8431],
            "Raleigh": [35.7796, -78.6382],
            "Columbia": [34.0007, -81.0348],
            "Charleston": [32.7765, -79.9311]
          }},
          virginia1: { center: [37.5407, -77.4360], zoom: 7, cities: {
            "Richmond": [37.5407, -77.4360],
            "Fredericksburg": [38.3032, -77.4605],
            "Virginia Beach": [36.8529, -75.9780],
            "Arlington": [38.8816, -77.0910]
          }},
          virginia2: { center: [37.4138, -79.1422], zoom: 7, cities: {
            "Lynchburg": [37.4138, -79.1422],
            "Roanoke": [37.2709, -79.9414],
            "Danville": [36.5850, -79.3950],
            "Blairs": [36.7235, -79.3842]
          }},
          georgia: { center: [32.1656, -82.9001], zoom: 7, cities: {
            "Atlanta": [33.7490, -84.3880],
            "Savannah": [32.0809, -81.0912],
            "Augusta": [33.4735, -82.0105],
            "Macon": [32.8407, -83.6324]
          }},
          alabama: { center: [32.3182, -86.9023], zoom: 7, cities: {
            "Huntsville": [34.7304, -86.5861],
            "Birmingham": [33.5186, -86.8104],
            "Gadsden": [34.0143, -86.0066],
            "Albertville": [34.2679, -86.2089]
          }},
          tennessee: { center: [35.5175, -86.5804], zoom: 6, cities: {
            "Chattanooga": [35.0456, -85.3097],
            "Knoxville": [35.9606, -83.9207],
            "Nashville": [36.1627, -86.7816],
            "Memphis": [35.1495, -90.0490]
          }},
          kentucky: { center: [37.8393, -84.2700], zoom: 7, cities: {
            "Louisville": [38.2527, -85.7585],
            "Lexington": [38.0406, -84.5037],
            "Bowling Green": [36.9685, -86.4808],
            "Covington": [39.0837, -84.5086]
          }},
          ohio: { center: [40.4173, -82.9071], zoom: 7, cities: {
            "Columbus": [39.9612, -82.9988],
            "Cleveland": [41.4993, -81.6944],
            "Cincinnati": [39.1031, -84.5120],
            "Dayton": [39.7589, -84.1916]
          }},
          indiana: { center: [39.7684, -86.1581], zoom: 7, cities: {
            "Indianapolis": [39.7684, -86.1581],
            "Fort Wayne": [41.0793, -85.1394],
            "Evansville": [37.9716, -87.5711],
            "Bloomington": [39.1653, -86.5264]
          }}
        }
  
        const config = mapConfigs[stateId]
        if (!config) return
  
        const map = L.map(`map-${stateId}`).setView(config.center, config.zoom)
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map)
  
        // Custom icon
        const customIcon = L.icon({
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34]
        })
  
        // Add markers for each city
        Object.entries(config.cities).forEach(([city, coords]) => {
          L.marker(coords, { icon: customIcon })
            .addTo(map)
            .bindPopup(`<b>${city}</b><br>Punto de recogida`)
        })
  
        // Store map reference
        maps.value[stateId] = map
      }
  
      return {
        states,
        activeState,
        mapSection,
        setActiveState,
        getStateName,
        viewStateMap,
        closeMap
      }
    }
  }
  </script>
  
  <style scoped>
  .hero-title {
    color: #fa0200;
  }
  .hero-subtitle {
    color: #ffffff;
  }
  /* Variables */
  :root {
    --primary-color: #3498db;
    --secondary-color: #2ecc71;
    --dark-color: #2c3e50;
    --light-color: #f8f9fa;
    --text-color: #333;
    --text-light: #fff;
    --shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --transition: all 0.3s ease;
  }
  
  /* Base Styles */
  .routes-view {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: var(--text-color);
    line-height: 1.6;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  /* Hero Banner */
  .hero-banner {
    position: relative;
    height: 60vh;
    min-height: 400px;
    display: flex;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    background-size: cover;
    background-position: center;
    color: var(--text-light);
    margin-bottom: 50px;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    text-align: center;
    width: 100%;
  }
  
  .hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 15px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .hero-subtitle {
    font-size: clamp(1.5rem, 3vw, 2rem);
    font-weight: 300;
    margin-bottom: 30px;
    opacity: 0.9;
  }
  
  .breadcrumb {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
  }
  
  .breadcrumb-link {
    color: var(--text-light);
    text-decoration: none;
    transition: var(--transition);
  }
  
  .breadcrumb-link:hover {
    color: var(--secondary-color);
  }
  
  .breadcrumb-separator {
    margin: 0 10px;
    opacity: 0.7;
  }
  
  .breadcrumb-current {
    opacity: 0.7;
  }
  
  /* States Section */
  .section-header {
    text-align: center;
    margin-bottom: 50px;
  }
  
  .section-title {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    color: var(--dark-color);
    margin-bottom: 15px;
  }
  
  .section-description {
    font-size: 1.1rem;
    color: var(--text-color);
    opacity: 0.8;
    max-width: 700px;
    margin: 0 auto;
  }
  
  .states-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
    margin-bottom: 50px;
  }
  
  .state-card {
    background: white;
    border-radius: 10px;
    padding: 25px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    cursor: pointer;
    border: 2px solid transparent;
  }
  
  .state-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }
  
  .state-card.active {
    border-color: var(--primary-color);
    background-color: #f5f9ff;
  }
  
  .state-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    color: white;
    font-size: 1.5rem;
  }
  
  .state-name {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 15px;
    color: var(--dark-color);
  }
  
  .state-details {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
  }
  
  .state-card.active .state-details {
    max-height: 200px;
  }
  
  .state-details p {
    font-size: 0.95rem;
    margin-bottom: 15px;
    color: var(--text-color);
    opacity: 0.8;
  }
  
  .btn-view {
    display: inline-flex;
    align-items: center;
    background: var(--primary-color);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 5px;
    font-size: 0.9rem;
    cursor: pointer;
    transition: var(--transition);
  }
  
  .btn-view:hover {
    background: #2980b9;
    transform: translateX(5px);
  }
  
  .btn-view i {
    margin-left: 5px;
    font-size: 0.8rem;
  }
  
  /* Map Section */
  .map-section {
    padding: 40px 0;
    background-color: #f5f7fa;
    margin-bottom: 50px;
  }
  
  .map-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .map-title {
    font-size: 1.5rem;
    color: var(--dark-color);
  }
  
  .btn-close {
    background: none;
    border: none;
    color: var(--text-color);
    font-size: 1.2rem;
    cursor: pointer;
    transition: var(--transition);
  }
  
  .btn-close:hover {
    color: var(--primary-color);
    transform: rotate(90deg);
  }
  
  .state-map {
    height: 500px;
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: var(--shadow);
  }
  
  /* CTA Section */
  .cta-section {
    background: linear-gradient(135deg, var(--dark-color), #4a6a8a);
    color: white;
    padding: 60px 0;
    text-align: center;
  }
  
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
  }
  
  .cta-title {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }
  
  .cta-text {
    font-size: 1.1rem;
    opacity: 0.9;
    margin-bottom: 25px;
  }
  
  .btn-primary {
    display: inline-flex;
    align-items: center;
    background: var(--secondary-color);
    color: white;
    padding: 12px 30px;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
    box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
  }
  
  .btn-primary:hover {
    background: #27ae60;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(46, 204, 113, 0.4);
  }
  
  .btn-primary i {
    margin-right: 10px;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .hero-banner {
      height: 50vh;
    }
    
    .states-grid {
      grid-template-columns: 1fr;
    }
    
    .state-map {
      height: 400px;
    }
  }
  
  @media (max-width: 480px) {
    .hero-banner {
      height: 60vh;
    }
    
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-subtitle {
      font-size: 1.2rem;
    }
  }
  </style>