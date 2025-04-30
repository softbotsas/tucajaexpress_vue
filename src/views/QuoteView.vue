<template>
    <div class="quote-simulator-page">
      <!-- Hero Section -->
      <div class="simulator-hero">
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">Simula tu envío internacional</h1>
            <p class="hero-subtitle">Compara opciones y encuentra la mejor solución para tus necesidades</p>
            <div class="breadcrumbs">
              <router-link to="/" class="breadcrumb-link">Inicio</router-link>
              <span class="breadcrumb-separator">/</span>
              <span class="breadcrumb-current">Cotización</span>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Main Content -->
      <div class="simulator-container">
        <div class="container">
          <div class="simulator-grid">
            <!-- Form Column -->
            <div class="form-column">
              <div class="form-card">
                <div class="form-header">
                  <h2 class="form-title">Detalles del envío</h2>
                  <p class="form-subtitle">Completa la información para obtener tu cotización</p>
                </div>
  
                <div class="form-body">
                  <div class="form-section">
                    <h3 class="section-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                        <line x1="12" y1="22.08" x2="12" y2="12"></line>
                      </svg>
                      Origen y destino
                    </h3>
                    <div class="form-row">
                      <div class="form-group">
                        <label for="origin">País de origen</label>
                        <select v-model="quoteData.origin" id="origin" class="form-select">
                          <option disabled value="">Selecciona un país</option>
                          <option v-for="(country, index) in countries" :key="index" :value="country">
                            {{ country }}
                          </option>
                        </select>
                      </div>
                      <div class="form-group">
                        <label for="destination">País destino</label>
                        <select v-model="quoteData.destination" id="destination" @change="updateAvailableBoxes" class="form-select">
                          <option disabled value="">Selecciona un país</option>
                          <option v-for="(country, index) in countries" :key="index" :value="country">
                            {{ country }}
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
  
                  <div class="form-section">
                    <h3 class="section-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"></path>
                        <path d="M16 10H8v4h8v-4z"></path>
                        <path d="M12 6h0"></path>
                      </svg>
                      Dimensiones y peso
                    </h3>
                    <div class="form-row">
                      <div class="form-group">
                        <label for="height">Alto (cm)</label>
                        <input v-model.number="quoteData.height" @input="calculateDimensions" type="number" id="height" class="form-input" placeholder="Ej: 20">
                      </div>
                      <div class="form-group">
                        <label for="length">Largo (cm)</label>
                        <input v-model.number="quoteData.length" @input="calculateDimensions" type="number" id="length" class="form-input" placeholder="Ej: 30">
                      </div>
                    </div>
                    <div class="form-row">
                      <div class="form-group">
                        <label for="width">Ancho (cm)</label>
                        <input v-model.number="quoteData.width" @input="calculateDimensions" type="number" id="width" class="form-input" placeholder="Ej: 15">
                      </div>
                      <div class="form-group">
                        <label for="weight">Peso (lb)</label>
                        <input v-model.number="quoteData.weight" @input="calculateDimensions" type="number" id="weight" class="form-input" placeholder="Ej: 5">
                      </div>
                    </div>
                  </div>
  
                  <div class="form-section">
                    <h3 class="section-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23"></line>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                      </svg>
                      Valor declarado
                    </h3>
                    <div class="form-group">
                      <label for="declaredValue">Valor mínimo declarado (USD)</label>
                      <input v-model.number="quoteData.declaredValue" type="number" id="declaredValue" class="form-input" placeholder="Ej: 100">
                    </div>
                  </div>
  
                  <div class="form-section">
                    <h3 class="section-title">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Dirección de recogida
                    </h3>
                    <div class="form-group">
                      <label for="address">Dirección completa</label>
                      <textarea v-model="quoteData.address" id="address" class="form-textarea" rows="3" placeholder="Ej: Calle Principal #123, Ciudad, Estado"></textarea>
                    </div>
                    <div class="location-actions">
                      <button type="button" @click="getLocation" class="location-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Usar mi ubicación actual
                      </button>
                      <div v-if="location" class="location-link">
                        <a :href="googleMapsLink" target="_blank" class="map-link">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                          Ver en mapa
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- Results Column -->
            <div class="results-column">
              <div class="customer-card">
                <div class="customer-header">
                  <div class="customer-avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div class="customer-info">
                    <h3 class="customer-name">{{ customerData.name }}</h3>
                    <p class="customer-contact">{{ customerData.email }} • {{ customerData.phone }}</p>
                  </div>
                </div>
              </div>
  
              <div class="results-card">
                <h2 class="results-title">Tu cotización</h2>
                <p class="results-subtitle">Selecciona la opción que mejor se adapte a tus necesidades</p>
  
                <div v-if="availableBoxes.length === 0" class="empty-state">
                  <div class="empty-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <h3 class="empty-title">Completa los datos del envío</h3>
                  <p class="empty-text">Ingresa las dimensiones y peso de tu paquete para ver las opciones disponibles</p>
                </div>
  
                <div v-else class="box-options">
                  <div v-for="(box, index) in availableBoxes" :key="index" 
                       class="box-option" 
                       :class="{ 'selected': selectedBox === box.id }"
                       @click="selectBox(box.id)">
                    <div class="box-image-container">
                      <img :src="box.image" :alt="`Caja ${box.dimensions}`" class="box-image">
                      <div class="box-dimensions">{{ box.dimensions }}</div>
                    </div>
                    <div class="box-details">
                      <div class="box-price">{{ calculatePrice(box) }}</div>
                      <div class="box-features">
                        <div class="feature">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                            <line x1="9" y1="9" x2="9.01" y2="9"></line>
                            <line x1="15" y1="9" x2="15.01" y2="9"></line>
                          </svg>
                          Seguro incluido
                        </div>
                        <div class="feature">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                          Soporte 24/7
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div class="summary-card">
                <h3 class="summary-title">Resumen de cotización</h3>
                <div class="summary-details">
                  <div class="detail-row">
                    <span class="detail-label">Cliente:</span>
                    <span class="detail-value">{{ customerData.name }}</span>
                  </div>
                  <div v-if="selectedBox" class="detail-row">
                    <span class="detail-label">Tamaño de caja:</span>
                    <span class="detail-value">{{ getSelectedBoxDimensions() }}</span>
                  </div>
                  <div v-if="quoteData.origin && quoteData.destination" class="detail-row">
                    <span class="detail-label">Ruta:</span>
                    <span class="detail-value">{{ quoteData.origin }} → {{ quoteData.destination }}</span>
                  </div>
                  <div v-if="selectedBox" class="detail-row total-row">
                    <span class="detail-label">Total estimado:</span>
                    <span class="detail-value total-price">{{ calculatePrice(getSelectedBox()) }}</span>
                  </div>
                </div>
                <button @click="requestPickup" class="request-button" :disabled="!selectedBox">
                  Solicitar recogida
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="10" cy="20.5" r="1"></circle>
                    <circle cx="18" cy="20.5" r="1"></circle>
                    <path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  const BOX_SIZES = [
    { id: '16x16x16', dimensions: '16x16x16 cm', basePrice: 25, image: '/img/boxes/16x16x16.png' },
    { id: '18x18x18', dimensions: '18x18x18 cm', basePrice: 30, image: '/img/boxes/18x18x18.png' },
    { id: '20x20x20', dimensions: '20x20x20 cm', basePrice: 35, image: '/img/boxes/20x20x20.png' },
    { id: '20x20x28', dimensions: '20x20x28 cm', basePrice: 40, image: '/img/boxes/20x20x28.png' },
    { id: '26x24x24', dimensions: '26x24x24 cm', basePrice: 45, image: '/img/boxes/26x24x24.png' },
    { id: '30x26x24', dimensions: '30x26x24 cm', basePrice: 50, image: '/img/boxes/30x26x24.png' },
    { id: '34x26x28', dimensions: '34x26x28 cm', basePrice: 55, image: '/img/boxes/34x26x28.png' }
  ];
  
  export default {
    name: 'QuoteSimulator',
    data() {
      return {
        customerData: {},
        quoteData: {
          origin: '',
          destination: '',
          height: null,
          length: null,
          width: null,
          weight: null,
          declaredValue: null,
          address: '',
          location: null,
          lat: null,
          lng: null
        },
        countries: ['Estados Unidos', 'México', 'Colombia', 'España', 'China', 'República Dominicana'],
        availableBoxes: [],
        selectedBox: null,
        location: null,
        lat: null,
        lng: null
      };
    },
    computed: {
      googleMapsLink() {
        if (this.lat && this.lng) {
          return `https://www.google.com/maps?q=${this.lat},${this.lng}`;
        }
        return '#';
      }
    },
    created() {
      const savedData = localStorage.getItem('quoteCustomerData');
      if (savedData) {
        this.customerData = JSON.parse(savedData);
      } else {
        this.$router.push('/');
      }
    },
    methods: {
      updateAvailableBoxes() {
        // Lógica para filtrar cajas disponibles según destino
        this.availableBoxes = BOX_SIZES;
        this.selectedBox = null;
      },
      calculateDimensions() {
        if (this.quoteData.height && this.quoteData.length && this.quoteData.width) {
          // Lógica para filtrar cajas según dimensiones
          this.updateAvailableBoxes();
        }
      },
      selectBox(boxId) {
        this.selectedBox = boxId;
      },
      getSelectedBox() {
        return BOX_SIZES.find(box => box.id === this.selectedBox);
      },
      getSelectedBoxDimensions() {
        const box = this.getSelectedBox();
        return box ? box.dimensions : '';
      },
      calculatePrice(box) {
        if (!box) return '$0.00';
        
        let price = box.basePrice;
        
        // Aumento por peso (ejemplo: $1.5 por libra después de 5 libras)
        if (this.quoteData.weight > 5) {
          price += (this.quoteData.weight - 5) * 1.5;
        }
        
        // Aumento por valor declarado (ejemplo: 3% del valor declarado)
        if (this.quoteData.declaredValue) {
          price += this.quoteData.declaredValue * 0.03;
        }
        
        // Aumento por distancia (ejemplo basado en países)
        if (this.quoteData.origin && this.quoteData.destination) {
          if (this.quoteData.origin !== this.quoteData.destination) {
            price += 15; // Costo adicional por envío internacional
          }
        }
        
        return `$${price.toFixed(2)}`;
      },
      getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              this.lat = position.coords.latitude;
              this.lng = position.coords.longitude;
              this.location = `Ubicación: ${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`;
              
              // Opcional: Usar API de geocodificación inversa para obtener dirección
              // this.reverseGeocode(position.coords.latitude, position.coords.longitude);
            },
            (error) => {
              console.error("Error getting location:", error);
              alert("No se pudo obtener la ubicación. Asegúrate de haber permitido el acceso.");
            }
          );
        } else {
          alert("La geolocalización no es soportada por este navegador.");
        }
      },
      requestPickup() {
        if (!this.selectedBox) {
          alert("Por favor selecciona un tamaño de caja.");
          return;
        }
        
        const selectedBoxData = this.getSelectedBox();
        
        const pickupRequest = {
          customer: this.customerData,
          quote: this.quoteData,
          selectedBox: selectedBoxData,
          price: this.calculatePrice(selectedBoxData),
          location: this.location,
          coordinates: { lat: this.lat, lng: this.lng },
          timestamp: new Date().toISOString()
        };
        
        // Aquí puedes enviar los datos al backend
        console.log("Solicitud de recogida:", pickupRequest);
        
        // Mostrar confirmación
        this.$swal.fire({
          title: '¡Recogida solicitada!',
          text: `Hemos recibido tu solicitud para ${selectedBoxData.dimensions}. Nos pondremos en contacto contigo pronto.`,
          icon: 'success',
          confirmButtonText: 'Entendido',
          confirmButtonColor: '#3a7bd5'
        });
        
        // Limpiar y redirigir
        localStorage.removeItem('quoteCustomerData');
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .quote-simulator-page {
    background-color: #f8f9fa;
    min-height: 100vh;
  }
  
  .simulator-hero {
    background: linear-gradient(135deg, #7a0800 0%, #960500 100%);
    color: white;
    padding: 5rem 0 3rem;
    position: relative;
    overflow: hidden;
  }
  
  .simulator-hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('/img/wave-pattern.png') repeat;
    opacity: 0.1;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
    position: relative;
  }
  
  .hero-content {
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  
  .hero-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 2rem;
  }
  
  .breadcrumbs {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9375rem;
  }
  
  .breadcrumb-link {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .breadcrumb-link:hover {
    color: white;
    text-decoration: underline;
  }
  
  .breadcrumb-separator {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .breadcrumb-current {
    color: white;
    font-weight: 500;
  }
  
  .simulator-container {
    padding: 3rem 0;
  }
  
  .simulator-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 2rem;
  }
  
  .form-column {
    position: relative;
  }
  
  .form-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    position: sticky;
    top: 2rem;
  }
  
  .form-header {
    padding: 1.5rem;
    border-bottom: 1px solid #f1f3f5;
  }
  
  .form-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .form-subtitle {
    font-size: 0.9375rem;
    color: #7f8c8d;
    margin-bottom: 0;
  }
  
  .form-body {
    padding: 1.5rem;
  }
  
  .form-section {
    margin-bottom: 2rem;
  }
  
  .section-title {
    font-size: 1.125rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 1rem;
  }
  
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .form-input, .form-select, .form-textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    background-color: #f8f9fa;
  }
  
  .form-input:focus, .form-select:focus, .form-textarea:focus {
    border-color: #3a7bd5;
    box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.1);
    outline: none;
    background-color: white;
  }
  
  .form-textarea {
    min-height: 100px;
    resize: vertical;
  }
  
  .location-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1rem;
  }
  
  .location-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #f1f3f5;
    border: none;
    border-radius: 8px;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    color: #2c3e50;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .location-button:hover {
    background: #e9ecef;
  }
  
  .map-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #3a7bd5;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .map-link:hover {
    text-decoration: underline;
  }
  
  .results-column {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  
  .customer-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
  }
  
  .customer-header {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .customer-avatar {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
  }
  
  .customer-info {
    flex: 1;
  }
  
  .customer-name {
    font-size: 1.125rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.25rem;
  }
  
  .customer-contact {
    font-size: 0.875rem;
    color: #7f8c8d;
    margin-bottom: 0;
  }
  
  .results-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
    flex: 1;
  }
  
  .results-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .results-subtitle {
    font-size: 0.9375rem;
    color: #7f8c8d;
    margin-bottom: 1.5rem;
  }
  
  .empty-state {
    text-align: center;
    padding: 2rem 0;
  }
  
  .empty-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1rem;
    background: #f1f3f5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3a7bd5;
  }
  
  .empty-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 0.5rem;
  }
  
  .empty-text {
    font-size: 0.9375rem;
    color: #7f8c8d;
    margin-bottom: 0;
  }
  
  .box-options {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .box-option {
    display: flex;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  
  .box-option:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .box-option.selected {
    border-color: #3a7bd5;
    box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.2);
  }
  
  .box-image-container {
    width: 120px;
    background: #f8f9fa;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    position: relative;
  }
  
  .box-image {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
  
  .box-dimensions {
    position: absolute;
    bottom: 0.5rem;
    left: 0;
    right: 0;
    text-align: center;
    font-size: 0.75rem;
    font-weight: 600;
    color: #7f8c8d;
  }
  
  .box-details {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
  }
  
  .box-price {
    font-size: 1.5rem;
    font-weight: 700;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  .box-features {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: auto;
  }
  
  .feature {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    color: #7f8c8d;
  }
  
  .summary-card {
    background: white;
    border-radius: 16px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
    padding: 1.5rem;
  }
  
  .summary-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #f1f3f5;
  }
  
  .summary-details {
    margin-bottom: 1.5rem;
  }
  
  .detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
  }
  
  .detail-label {
    font-size: 0.9375rem;
    color: #7f8c8d;
  }
  
  .detail-value {
    font-size: 0.9375rem;
    font-weight: 500;
    color: #2c3e50;
  }
  
  .total-row {
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid #f1f3f5;
  }
  
  .total-row .detail-label {
    font-weight: 600;
  }
  
  .total-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: #3a7bd5;
  }
  
  .request-button {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #3a7bd5 0%, #00d2ff 100%);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .request-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(58, 123, 213, 0.3);
  }
  
  .request-button:disabled {
    background: #95a5a6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  @media (max-width: 992px) {
    .simulator-grid {
      grid-template-columns: 1fr;
    }
    
    .form-card {
      position: static;
    }
    
    .form-row {
      grid-template-columns: 1fr;
    }
  }
  
  @media (max-width: 576px) {
    .hero-title {
      font-size: 2rem;
    }
    
    .hero-subtitle {
      font-size: 1rem;
    }
    
    .box-option {
      flex-direction: column;
    }
    
    .box-image-container {
      width: 100%;
      padding: 1.5rem;
    }
  }
  </style>