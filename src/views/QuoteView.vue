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
                      <input 
                        type="text" 
                        id="origin" 
                        class="form-input" 
                        value="Estados Unidos" 
                        disabled>
                    </div>
                    <div class="form-group">
                      <label for="destination">País destino</label>
                      <select 
                        v-model="quoteData.destination" 
                        id="destination" 
                        @change="updateAvailableBoxes" 
                        class="form-select"
                        required>
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
                    Tipo de paquete
                  </h3>
                  
                  <div class="form-group">
                    <label>Tipo de envío</label>
                    <div class="radio-group">
                      <label class="radio-option">
                        <input 
                          type="radio" 
                          v-model="quoteData.boxType" 
                          value="standard"
                          @change="quoteData.selectedStandardBox = null">
                        Caja estándar
                      </label>
                      <label class="radio-option">
                        <input 
                          type="radio" 
                          v-model="quoteData.boxType" 
                          value="custom"
                          @change="quoteData.customDimensions = { height: null, length: null, width: null }">
                        Caja personalizada
                      </label>
                    </div>
                  </div>
                  
                  <div v-if="quoteData.boxType === 'custom'" class="custom-box-form">
                    <label>Ingresa las dimensiones personalizadas (cm)</label>
                    <div class="form-row">
                      <div class="form-group">
                        <input 
                          v-model.number="quoteData.customDimensions.height" 
                          type="number" 
                          placeholder="Alto"
                          min="1"
                          @input="calculatePrice">
                      </div>
                      <div class="form-group">
                        <input 
                          v-model.number="quoteData.customDimensions.length" 
                          type="number" 
                          placeholder="Largo"
                          min="1"
                          @input="calculatePrice">
                      </div>
                      <div class="form-group">
                        <input 
                          v-model.number="quoteData.customDimensions.width" 
                          type="number" 
                          placeholder="Ancho"
                          min="1"
                          @input="calculatePrice">
                      </div>
                    </div>
                    <div v-if="!validateCustomBox() && quoteData.boxType === 'custom'" class="warning-message">
                      Por favor ingresa todas las dimensiones válidas
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
                  <label for="declaredValue">Valor declarado (USD)</label>
                  <input 
                    v-model.number="quoteData.declaredValue" 
                    type="number" 
                    id="declaredValue" 
                    class="form-input" 
                    placeholder="Ej: 100"
                    min="0"
                    max="500"
                    @input="validateDeclaredValue">
                  <p class="input-hint">Máximo $500. El seguro será calculado como 5% de este valor (mínimo $10, máximo $25)</p>
                  <p v-if="declaredValueError" class="error-message">{{ declaredValueError }}</p>
                </div>
                
                <div class="form-group" v-if="quoteData.declaredValue && quoteData.declaredValue > 0 && !declaredValueError">
                  <label class="checkbox-option">
                    <input 
                      type="checkbox" 
                      v-model="quoteData.includeInsurance">
                    <span class="checkmark"></span>
                    Añadir seguro por {{ calculateInsuranceCost() }} (Cubre ${{ Math.min(quoteData.declaredValue, 500).toFixed(2) }})
                  </label>
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
                    <textarea 
                      v-model="quoteData.address" 
                      id="address" 
                      class="form-textarea" 
                      rows="3" 
                      placeholder="Ej: Calle Principal #123, Ciudad, Estado"
                      required></textarea>
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

              <div v-if="!quoteData.destination" class="empty-state">
                <div class="empty-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 class="empty-title">Selecciona un país destino</h3>
                <p class="empty-text">Elige el país de destino para ver las opciones disponibles</p>
              </div>

              <div v-else-if="quoteData.boxType === 'standard'" class="box-options">
                <div v-for="(box, index) in availableBoxes" :key="index" 
                     class="box-option" 
                     :class="{ 'selected': quoteData.selectedStandardBox === box.id }"
                     @click="quoteData.selectedStandardBox = box.id">
                  <div class="box-image-container">
                    <img :src="box.image" :alt="box.dimensions" class="box-image">
                    <div class="box-dimensions">{{ box.dimensions }}</div>
                  </div>
                  <div class="box-details">
                    <div class="box-price">{{ calculatePrice(box) }}</div>
                    <div class="box-features">
                      <div class="feature">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        Seguro disponible: {{ calculateInsuranceCost() }}
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

              <div v-else-if="quoteData.boxType === 'custom' && !validateCustomBox()" class="empty-state">
                <div class="empty-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                    <line x1="12" y1="9" x2="12" y2="13"></line>
                    <line x1="12" y1="17" x2="12.01" y2="17"></line>
                  </svg>
                </div>
                <h3 class="empty-title">Ingresa las dimensiones</h3>
                <p class="empty-text">Por favor completa todas las medidas de tu paquete personalizado</p>
              </div>

              <div v-else-if="quoteData.boxType === 'custom'" class="box-options">
                <div class="box-option selected">
                  <div class="box-image-container">
                    <div class="custom-box-image">
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      </svg>
                    </div>
                    <div class="box-dimensions">{{ getSelectedBox().dimensions }}</div>
                  </div>
                  <div class="box-details">
                    <div class="box-price">{{ calculatePrice(getSelectedBox()) }}</div>
                    <div class="box-features">
                      <div class="feature">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        Seguro disponible: {{ calculateInsuranceCost() }}
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
                <div v-if="quoteData.destination" class="detail-row">
                  <span class="detail-label">Ruta:</span>
                  <span class="detail-value">Estados Unidos → {{ quoteData.destination }}</span>
                </div>
                <div v-if="(quoteData.boxType === 'standard' && quoteData.selectedStandardBox) || (quoteData.boxType === 'custom' && validateCustomBox())" class="detail-row">
                  <span class="detail-label">Tamaño de caja:</span>
                  <span class="detail-value">{{ getSelectedBox().dimensions }}</span>
                </div>
                <div v-if="quoteData.declaredValue" class="detail-row">
                  <span class="detail-label">Valor declarado:</span>
                  <span class="detail-value">${{ quoteData.declaredValue.toFixed(2) }}</span>
                </div>
                <div v-if="(quoteData.boxType === 'standard' && quoteData.selectedStandardBox) || (quoteData.boxType === 'custom' && validateCustomBox())" class="detail-row">
                  <span class="detail-label">Precio envío:</span>
                  <span class="detail-value">{{ calculatePrice(getSelectedBox()) }}</span>
                </div>
                <div v-if="quoteData.includeInsurance && quoteData.declaredValue && quoteData.declaredValue > 0" class="detail-row">
                  <span class="detail-label">Seguro:</span>
                  <span class="detail-value">{{ calculateInsuranceCost() }} (Cubre ${{
                    quoteData.declaredValue >= 500 ? '500' : 
                    quoteData.declaredValue >= 200 ? quoteData.declaredValue.toFixed(2) : '200'
                  }})</span>
                </div>
                <div v-if="(quoteData.boxType === 'standard' && quoteData.selectedStandardBox) || (quoteData.boxType === 'custom' && validateCustomBox())" class="detail-row total-row">
                  <span class="detail-label">Total estimado:</span>
                  <span class="detail-value total-price">{{ calculateTotalPrice() }}</span>
                </div>
              </div>
              <button 
                @click="requestPickup" 
                class="request-button" 
                :disabled="!isFormValid">
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
import { useRoute } from 'vue-router';

const BOX_SIZES = [
  { id: '16x16x16', dimensions: '16x16x16 cm', basePrice: 25, image: '/images/16x16x16.png' },
  { id: '18x18x18', dimensions: '18x18x18 cm', basePrice: 30, image: '/images/18x18x18.png' },
  { id: '20x20x20', dimensions: '20x20x20 cm', basePrice: 35, image: '/images/20x20x20.png' },
  { id: '20x20x28', dimensions: '20x20x28 cm', basePrice: 40, image: '/images/20x20x28.png' },
  { id: '26x24x24', dimensions: '26x24x24 cm', basePrice: 45, image: '/images/26x24x24.png' },
  { id: '30x26x24', dimensions: '30x26x24 cm', basePrice: 50, image: '/images/30x26x24.png' },
  { id: '34x26x28', dimensions: '34x26x28 cm', basePrice: 55, image: '/images/34x26x28.png' }
];

export default {
  name: 'QuoteSimulator',
  setup() {
    const route = useRoute();
    let customerData = {};

    if (route.query.customer) {
      try {
        customerData = JSON.parse(decodeURIComponent(route.query.customer));
      } catch (e) {
        console.error("Error parsing customer data:", e);
      }
    }

    return {
      customerData
    };
  },
  data() {
    return {
      quoteData: {
        origin: 'Estados Unidos',
        destination: '',
        boxType: 'standard',
        selectedStandardBox: null,
        customDimensions: {
          height: null,
          length: null,
          width: null
        },
        weight: null,
        declaredValue: null,
        includeInsurance: false,
        address: '',
        location: null,
        lat: null,
        lng: null
      },
      declaredValueError: null,
      countries: ['México', 'Colombia', 'España', 'China', 'República Dominicana', 'Perú', 'Chile', 'Argentina'],
      availableBoxes: [],
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
    },
    isFormValid() {
      if (!this.quoteData.destination || !this.quoteData.address) return false;
      
      if (this.quoteData.boxType === 'standard') {
        return !!this.quoteData.selectedStandardBox;
      } else {
        return this.validateCustomBox();
      }
    }
  },
  methods: {
    validateDeclaredValue() {
      if (this.quoteData.declaredValue === null || this.quoteData.declaredValue === '') {
        this.declaredValueError = null;
        return;
      }
      
      const value = parseFloat(this.quoteData.declaredValue);
      
      if (isNaN(value)) {
        this.declaredValueError = 'Por favor ingresa un valor numérico válido';
        return;
      }
      
      if (value < 0) {
        this.declaredValueError = 'El valor no puede ser negativo';
        return;
      }
      
      if (value > 500) {
        this.quoteData.declaredValue = 500;
        this.declaredValueError = 'El valor máximo permitido es $500';
        return;
      }
      
      this.declaredValueError = null;
    },

    updateAvailableBoxes() {
      if (this.quoteData.destination) {
        this.availableBoxes = BOX_SIZES;
        this.quoteData.selectedStandardBox = null;
      }
    },
    
    validateCustomBox() {
      const { height, length, width } = this.quoteData.customDimensions;
      return height > 0 && length > 0 && width > 0;
    },
    
    getSelectedBox() {
      if (this.quoteData.boxType === 'standard') {
        return BOX_SIZES.find(box => box.id === this.quoteData.selectedStandardBox);
      } else {
        return {
          id: 'custom',
          dimensions: `${this.quoteData.customDimensions.height}x${this.quoteData.customDimensions.length}x${this.quoteData.customDimensions.width} cm`,
          basePrice: 60,
          image: null
        };
      }
    },
    
    calculatePrice(box) {
      if (!box) return '$0.00';
      
      let price = box.basePrice;
      
      // Aumento por peso (ejemplo: $1.5 por libra después de 5 libras)
      if (this.quoteData.weight > 5) {
        price += (this.quoteData.weight - 5) * 1.5;
      }
      
      // Aumento por distancia (ejemplo basado en países)
      if (this.quoteData.destination) {
        // Países con mayor costo
        const premiumDestinations = ['China', 'España'];
        if (premiumDestinations.includes(this.quoteData.destination)) {
          price += 20;
        } else {
          price += 10;
        }
      }
      
      // Aumento adicional para cajas personalizadas
      if (this.quoteData.boxType === 'custom') {
        price += 15;
      }
      
      return `$${price.toFixed(2)}`;
    },

    calculateInsuranceCost() {
      if (!this.quoteData.declaredValue || this.quoteData.declaredValue <= 0) {
        return '$0.00';
      }

      // Calculamos el 5% del valor declarado
      let insuranceCost = this.quoteData.declaredValue * 0.05;

      // Aplicamos mínimo y máximo
      insuranceCost = Math.max(insuranceCost, 10); // Mínimo $10
      insuranceCost = Math.min(insuranceCost, 25); // Máximo $25

      return `$${insuranceCost.toFixed(2)}`;
    },

    calculateTotalPrice() {
      if (!this.quoteData.selectedStandardBox && this.quoteData.boxType === 'standard') {
        return '$0.00';
      }

      if (this.quoteData.boxType === 'custom' && !this.validateCustomBox()) {
        return '$0.00';
      }

      const box = this.getSelectedBox();
      const basePrice = parseFloat(this.calculatePrice(box).replace('$', ''));
      let insuranceCost = 0;

      if (this.quoteData.includeInsurance && this.quoteData.declaredValue && this.quoteData.declaredValue > 0) {
        insuranceCost = this.quoteData.declaredValue * 0.05;
        insuranceCost = Math.max(insuranceCost, 10);
        insuranceCost = Math.min(insuranceCost, 25);
      }

      const total = parseFloat(basePrice) + parseFloat(insuranceCost);
      return `$${total.toFixed(2)}`;
    },
    
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
            this.location = `Ubicación: ${this.lat.toFixed(4)}, ${this.lng.toFixed(4)}`;
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
      if (!this.isFormValid) {
        alert("Por favor completa todos los campos requeridos.");
        return;
      }
      
      const selectedBoxData = this.getSelectedBox();
      const insuranceInfo = this.quoteData.includeInsurance ? this.calculateInsuranceCost() : 'No incluido';
      const totalPrice = this.calculateTotalPrice();
      
      const pickupRequest = {
        customer: this.customerData,
        quote: this.quoteData,
        selectedBox: selectedBoxData,
        insurance: insuranceInfo,
        price: totalPrice,
        location: this.location,
        coordinates: { lat: this.lat, lng: this.lng },
        timestamp: new Date().toISOString()
      };
      
      console.log("Solicitud de recogida:", pickupRequest);
      
      this.$swal.fire({
        title: '¡Recogida solicitada!',
        html: `
          <p>Hemos recibido tu solicitud para ${selectedBoxData.dimensions}.</p>
          <p><strong>Precio envío:</strong> ${this.calculatePrice(selectedBoxData)}</p>
          ${this.quoteData.includeInsurance ? `<p><strong>Seguro:</strong> ${insuranceInfo}</p>` : ''}
          <p><strong>Total:</strong> ${totalPrice}</p>
          <p>Nos pondremos en contacto contigo pronto.</p>
        `,
        icon: 'success',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#3a7bd5'
      });
      
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

.input-hint {
  font-size: 0.75rem;
  color: #7f8c8d;
  margin-top: 0.25rem;
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

.checkbox-option {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 0.9375rem;
  user-select: none;
  margin-top: 0.5rem;
}

.checkbox-option input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
}

.checkbox-option:hover input ~ .checkmark {
  background-color: #e9ecef;
}

.checkbox-option input:checked ~ .checkmark {
  background-color: #3a7bd5;
  border-color: #3a7bd5;
}

.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.checkbox-option input:checked ~ .checkmark:after {
  display: block;
}

.checkbox-option .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
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

.error-message {
  color: #e74c3c;
  font-size: 0.75rem;
  margin-top: 0.25rem;
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

.feature svg {
  color: #3a7bd5;
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
  font-size: 0.9375rem;
}

.detail-label {
  color: #7f8c8d;
}

.detail-value {
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