<template>
    <section class="quote-request-section">
      <div class="container">
        <div class="quote-card">
          <div class="quote-content">
            <div class="quote-header">
              <span class="quote-badge">Cotiza tu envío</span>
              <h1 class="quote-title">Envíos internacionales <span class="highlight">sin complicaciones</span></h1>
              <p class="quote-subtitle">Obtén una cotización instantánea y sigue tu paquete en tiempo real</p>
            </div>
  
            <div class="quote-features">
              <div class="feature">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Rápido</h3>
                <p class="feature-text">Salidas semanales</p>
              </div>
  
              <div class="feature">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <h3 class="feature-title">Fácil</h3>
                <p class="feature-text">Seguimiento en tiempo real</p>
              </div>
  
              <div class="feature">
                <div class="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
                <h3 class="feature-title">Seguro</h3>
                <p class="feature-text">Protección incluida</p>
              </div>
            </div>
          </div>
  
          <div class="quote-form-container">
            <div class="quote-form-card">
              <h2 class="form-title">Comencemos</h2>
              <p class="form-subtitle">Ingresa tus datos para continuar</p>
  
              <div class="form-group">
                <label for="name">Nombre completo</label>
                <input v-model="customerData.name" type="text" id="name" class="form-input" placeholder="Ej: Juan Pérez">
                <div class="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
  
              <div class="form-group">
                <label for="phone">Teléfono</label>
                <input v-model="customerData.phone" type="tel" id="phone" class="form-input" placeholder="Ej: +1 234 567 8900">
                <div class="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
              </div>
  
              <div class="form-group">
                <label for="email">Correo electrónico</label>
                <input v-model="customerData.email" type="email" id="email" class="form-input" placeholder="Ej: juan@example.com">
                <div class="input-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
              </div>
  
              <div v-if="showError" class="error-message">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                Por favor completa todos los campos antes de continuar
              </div>
  
              <button class="submit-button" @click="startQuote">
                Continuar a cotización
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'QuoteRequest',
    data() {
      return {
        customerData: {
          name: '',
          phone: '',
          email: ''
        },
        showError: false
      }
    },
    methods: {
      startQuote() {
        if (this.customerData.name && this.customerData.phone && this.customerData.email) {
          localStorage.setItem('quoteCustomerData', JSON.stringify(this.customerData));
          this.$router.push('/cotizar');
        } else {
          this.showError = true;
        }
      }
    },
    mounted() {
      const savedData = localStorage.getItem('quoteCustomerData');
      if (savedData) {
        this.customerData = JSON.parse(savedData);
      }
    }
  }
  </script>
  
  <style scoped>
  .quote-request-section {
    padding: 4rem 0;
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  .quote-card {
    display: flex;
    background: white;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    overflow: hidden;
  }
  
  .quote-content {
    flex: 1;
    padding: 3rem;
    background: linear-gradient(135deg, #ff3333 0%, #8f0000 100%);
    color: white;
  }
  
  .quote-header {
    margin-bottom: 3rem;
  }
  
  .quote-badge {
    display: inline-block;
    background: rgba(255, 255, 255, 0.2);
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  .quote-title {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  .highlight {
    position: relative;
    display: inline-block;
  }
  
  .highlight::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(255, 255, 255, 0.3);
    z-index: -1;
    border-radius: 3px;
  }
  
  .quote-subtitle {
    font-size: 1.125rem;
    opacity: 0.9;
    margin-bottom: 0;
  }
  
  .quote-features {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .feature {
    background: rgba(255, 255, 255, 0.1);
    padding: 1.5rem;
    border-radius: 12px;
    backdrop-filter: blur(5px);
  }
  
  .feature-icon {
    width: 48px;
    height: 48px;
    background: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    color: #3a7bd5;
  }
  
  .feature-title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  .feature-text {
    font-size: 0.9375rem;
    opacity: 0.8;
    margin-bottom: 0;
  }
  
  .quote-form-container {
    flex: 1;
    padding: 3rem;
    display: flex;
    align-items: center;
  }
  
  .quote-form-card {
    width: 100%;
  }
  
  .form-title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
  
  .form-subtitle {
    font-size: 1rem;
    color: #7f8c8d;
    margin-bottom: 2rem;
  }
  
  .form-group {
    position: relative;
    margin-bottom: 1.5rem;
  }
  
  .form-group label {
    display: block;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #2c3e50;
  }
  
  .form-input {
    width: 100%;
    padding: 0.875rem 1rem 0.875rem 2.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
  }
  
  .form-input:focus {
    border-color: #3a7bd5;
    box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.1);
    outline: none;
  }
  
  .input-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(10%);
    color: #95a5a6;
  }
  
  .error-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #e74c3c;
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
  
  .submit-button {
    width: 100%;
    padding: 1rem;
    background: linear-gradient(135deg, #ff1f1f 0%, #a00000 100%);
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
  
  .submit-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(58, 123, 213, 0.3);
  }
  
  @media (max-width: 992px) {
    .quote-card {
      flex-direction: column;
    }
    
    .quote-content {
      padding: 2rem;
    }
    
    .quote-features {
      grid-template-columns: 1fr;
    }
    
    .quote-form-container {
      padding: 2rem;
    }
  }
  
  @media (max-width: 576px) {
    .quote-title {
      font-size: 2rem;
    }
  }
  </style>