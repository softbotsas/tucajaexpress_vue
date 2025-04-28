<template>
    <div class="tracking-results-view">
      <!-- Encabezado -->
      <div class="header-section">
        <h1 class="title">Resultados de Rastreo</h1>
        <div class="tracking-info">
          <div class="info-item">
            <span class="label">Guía:</span>
            <span class="value">{{ trackingData.guide || 'N/A' }}</span>
          </div>
          <div class="info-item">
            <span class="label">Teléfono:</span>
            <span class="value">
              <img 
                :src="`/images/flags/${currentCountry.flag}`" 
                :alt="currentCountry.name"
                class="flag-icon"
                v-if="currentCountry.flag"
              >
              +{{ trackingData.countryCode }} {{ trackingData.phone }}
            </span>
          </div>
        </div>
      </div>
  
      <!-- Contenido principal -->
      <div class="content-section">
        <!-- Estado de carga -->
        <div v-if="loading" class="loading-state">
          <div class="spinner"></div>
          <p>Buscando información de tu paquete...</p>
        </div>
  
        <!-- Estado de error -->
        <div v-else-if="error" class="error-state">
          <i class="fas fa-exclamation-triangle"></i>
          <h3>Ocurrió un error</h3>
          <p>{{ error }}</p>
          <button @click="retrySearch" class="retry-button">
            Reintentar
          </button>
        </div>
  
        <!-- Resultados -->
        <div v-else-if="trackingInfo" class="results-container">
          <!-- Tarjeta de estado -->
          <div class="status-card" :class="statusClass">
            <div class="status-header">
              <h3>Estado Actual</h3>
              <span class="status-badge">{{ trackingInfo.status }}</span>
            </div>
            <div class="status-details">
              <div class="detail-item">
                <i class="fas fa-map-marker-alt"></i>
                <span>{{ trackingInfo.location }}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-calendar-alt"></i>
                <span>{{ formatDate(trackingInfo.lastUpdate) }}</span>
              </div>
              <div v-if="trackingInfo.estimatedDelivery" class="detail-item">
                <i class="fas fa-truck"></i>
                <span>Entrega estimada: {{ formatDate(trackingInfo.estimatedDelivery) }}</span>
              </div>
            </div>
          </div>
  
          <!-- Historial -->
          <div class="timeline-section">
            <h3>Historial de Eventos</h3>
            <div class="timeline">
              <div v-for="(event, index) in trackingInfo.history" :key="index" class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <div class="timeline-date">{{ formatDateTime(event.date) }}</div>
                  <div class="timeline-event">{{ event.description }}</div>
                  <div class="timeline-location">{{ event.location }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Sin resultados -->
        <div v-else class="no-results">
          <i class="fas fa-box-open"></i>
          <h3>No se encontraron resultados</h3>
          <p>No hay información disponible para esta guía de rastreo.</p>
          <button @click="goBack" class="back-button">
            <i class="fas fa-arrow-left"></i> Volver
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  // Estados
  const loading = ref(true);
  const error = ref(null);
  const trackingInfo = ref(null);
  
  // Datos de rastreo
  const trackingData = ref({
    guide: '',
    phone: '',
    countryCode: ''
  });
  
  // Mapeo de países
  const countries = {
    '52': { name: 'México', flag: 'mexico.png' },
    '1': { name: 'Estados Unidos', flag: 'usa.png' },
    '502': { name: 'Guatemala', flag: 'guatemala.png' },
    '503': { name: 'El Salvador', flag: 'el-salvador.png' },
    '504': { name: 'Honduras', flag: 'honduras.png' },
    '505': { name: 'Nicaragua', flag: 'nicaragua.png' }
  };
  
  // Computados
  const currentCountry = computed(() => {
    return countries[trackingData.value.countryCode] || {};
  });
  
  const statusClass = computed(() => {
    if (!trackingInfo.value) return '';
    return trackingInfo.value.status.toLowerCase().replace(/\s+/g, '-');
  });
  
  // Métodos
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-MX');
  };
  
  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('es-MX');
  };
  
  const extractTrackingData = () => {
    const { guide, phone } = route.query;
    
    if (!guide || !phone) {
      error.value = 'Faltan parámetros de búsqueda';
      return;
    }
  
    // Extraer código de país (los primeros 1-3 dígitos)
    const possibleCodes = Object.keys(countries).sort((a, b) => b.length - a.length);
    
    for (const code of possibleCodes) {
      if (phone.startsWith(code)) {
        trackingData.value = {
          guide,
          phone: phone.substring(code.length),
          countryCode: code
        };
        break;
      }
    }
  };
  
  const fetchTrackingInfo = async () => {
    try {
      loading.value = true;
      error.value = null;
      
      // Simulación de API (reemplazar con tu llamada real)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Datos de ejemplo
      trackingInfo.value = {
        status: 'En tránsito',
        location: 'Centro de distribución CDMX',
        lastUpdate: new Date().toISOString(),
        estimatedDelivery: '2023-12-15',
        history: [
          {
            date: '2023-11-20T10:30:00',
            description: 'Paquete recibido en centro de distribución',
            location: 'Guadalajara, JAL'
          },
          {
            date: '2023-11-21T14:15:00',
            description: 'En proceso de clasificación',
            location: 'Centro logístico nacional'
          },
          {
            date: '2023-11-22T09:00:00',
            description: 'En ruta hacia destino final',
            location: 'CDMX'
          }
        ]
      };
      
    } catch (err) {
      console.error('Error fetching tracking info:', err);
      error.value = 'No pudimos obtener la información de rastreo. Por favor intenta más tarde.';
    } finally {
      loading.value = false;
    }
  };
  
  const retrySearch = () => {
    extractTrackingData();
    if (!error.value) {
      fetchTrackingInfo();
    }
  };
  
  const goBack = () => {
    router.go(-1);
  };
  
  // Ciclo de vida
  onMounted(() => {
    extractTrackingData();
    if (!error.value) {
      fetchTrackingInfo();
    }
  });
  </script>
  
  <style scoped>
  .tracking-results-view {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    color: #333;
  }
  
  .header-section {
    background: #f8f9fa;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .title {
    color: #2c3e50;
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-align: center;
  }
  
  .tracking-info {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }
  
  .info-item {
    background: white;
    padding: 12px 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .label {
    font-weight: 600;
    color: #555;
  }
  
  .value {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .flag-icon {
    width: 24px;
    height: 16px;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  }
  
  /* Estados */
  .loading-state {
    text-align: center;
    padding: 40px 0;
  }
  
  .spinner {
    width: 50px;
    height: 50px;
    border: 5px solid #f3f3f3;
    border-top: 5px solid #3a7bd5;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto 20px;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .error-state {
    text-align: center;
    padding: 30px;
    background: #fff8f8;
    border-radius: 10px;
    border-left: 4px solid #e74c3c;
  }
  
  .error-state i {
    color: #e74c3c;
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  .error-state h3 {
    color: #e74c3c;
    margin-bottom: 10px;
  }
  
  .retry-button {
    margin-top: 15px;
    padding: 10px 20px;
    background: #3a7bd5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .retry-button:hover {
    background: #2c5fb3;
  }
  
  /* Resultados */
  .status-card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
    border-left: 5px solid #3a7bd5;
  }
  
  .status-card.en-tránsito {
    border-left-color: #f39c12;
  }
  
  .status-card.entregado {
    border-left-color: #2ecc71;
  }
  
  .status-card.problema {
    border-left-color: #e74c3c;
  }
  
  .status-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  
  .status-badge {
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    background: #3a7bd5;
    color: white;
  }
  
  .status-card.en-tránsito .status-badge {
    background: #f39c12;
  }
  
  .status-card.entregado .status-badge {
    background: #2ecc71;
  }
  
  .status-card.problema .status-badge {
    background: #e74c3c;
  }
  
  .status-details {
    display: grid;
    gap: 15px;
  }
  
  .detail-item {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .detail-item i {
    color: #3a7bd5;
    width: 20px;
    text-align: center;
  }
  
  /* Timeline */
  .timeline-section {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);
  }
  
  .timeline {
    position: relative;
    padding-left: 30px;
    margin-top: 20px;
  }
  
  .timeline::before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    height: 100%;
    width: 2px;
    background: #ddd;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 25px;
  }
  
  .timeline-marker {
    position: absolute;
    left: -30px;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #3a7bd5;
    border: 4px solid white;
    box-shadow: 0 0 0 2px #3a7bd5;
  }
  
  .timeline-content {
    background: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
  }
  
  .timeline-date {
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 5px;
  }
  
  .timeline-event {
    font-weight: 500;
    margin-bottom: 5px;
  }
  
  .timeline-location {
    font-size: 0.85rem;
    color: #666;
  }
  
  /* Sin resultados */
  .no-results {
    text-align: center;
    padding: 40px 20px;
  }
  
  .no-results i {
    font-size: 3rem;
    color: #ccc;
    margin-bottom: 20px;
  }
  
  .no-results h3 {
    color: #555;
    margin-bottom: 10px;
  }
  
  .no-results p {
    color: #777;
    margin-bottom: 20px;
  }
  
  .back-button {
    padding: 10px 25px;
    background: #3a7bd5;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .back-button:hover {
    background: #2c5fb3;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .tracking-info {
      flex-direction: column;
      gap: 10px;
    }
    
    .info-item {
      width: 100%;
    }
    
    .title {
      font-size: 1.5rem;
    }
  }
  
  @media (max-width: 480px) {
    .status-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
    
    .timeline-content {
      padding: 12px;
    }
  }
  </style>