<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div 
        v-if="isVisible" 
        class="modal-overlay" 
        @click.self="closeModal"
      >
        <Transition name="modal-scale">
          <div class="modal-content">
            <button class="close-button" @click="closeModal" aria-label="Cerrar modal">
              <i class="fas fa-times"></i>
            </button>
            
            <div class="modal-header">
              <h2 class="modal-title">Información de Rastreo</h2>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="guideNumber">Número de Guía</label>
                <input 
                  id="guideNumber"
                  v-model="trackingData.guideNumber" 
                  type="text" 
                  placeholder="Ej: ABC123456789"
                  class="form-input"
                  @keyup.enter="submitTracking"
                >
              </div>
              
              <div class="form-group">
                <label for="phoneNumber">Número de Teléfono</label>
                <div class="phone-input-group">
                  <select 
                    v-model="trackingData.countryCode"
                    class="country-select"
                  >
                    <option 
                      v-for="country in countries" 
                      :key="country.code"
                      :value="country.code"
                    >
                      <img 
                        :src="`/images/flags/${country.flag}`" 
                        :alt="country.name"
                        class="flag-icon"
                      >
                      {{ country.name }} (+{{ country.code }})
                    </option>
                  </select>
                  <input 
                    id="phoneNumber"
                    v-model="trackingData.phoneNumber" 
                    type="tel" 
                    placeholder="Ej: 5512345678"
                    class="phone-input"
                    @keyup.enter="submitTracking"
                  >
                </div>
              </div>
            </div>
            
            <div class="modal-actions">
              <button @click="closeModal" class="cancel-button">
                Cancelar
              </button>
              <button @click="submitTracking" class="track-button">
                <i class="fas fa-search"></i> Rastrear
              </button>
            </div>
            
            <!-- Espacio para el logo -->
            <div class="modal-footer">
              <img 
                src="/images/logo-light.png" 
                alt="Logo de la empresa"
                class="modal-logo"
              >
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isVisible = ref(false);

const trackingData = ref({
  guideNumber: '',
  phoneNumber: '',
  countryCode: '52' // México por defecto
});

const countries = [
  { name: 'México', code: '52', flag: 'mexico.png' },
  { name: 'Estados Unidos', code: '1', flag: 'usa.png' },
  { name: 'Guatemala', code: '502', flag: 'guatemala.png' },
  { name: 'El Salvador', code: '503', flag: 'el-salvador.png' },
  { name: 'Honduras', code: '504', flag: 'honduras.png' },
  { name: 'Nicaragua', code: '505', flag: 'nicaragua.png' }
];

const showModal = () => {
  isVisible.value = true;
  // Resetear datos al abrir
  trackingData.value = {
    guideNumber: '',
    phoneNumber: '',
    countryCode: '52'
  };
};

const closeModal = () => {
  isVisible.value = false;
};

const submitTracking = () => {
  if (!trackingData.value.guideNumber) {
    alert('Por favor ingresa el número de guía');
    return;
  }
  
  if (!trackingData.value.phoneNumber) {
    alert('Por favor ingresa tu número de teléfono');
    return;
  }

  router.push({
    path: '/tracking-results',
    query: {
      guide: trackingData.value.guideNumber.trim(),
      phone: `${trackingData.value.countryCode}${trackingData.value.phoneNumber.trim()}`
    }
  });
  
  closeModal();
};

defineExpose({ showModal, closeModal });
</script>

<style scoped>
/* Transiciones */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-scale-enter-active,
.modal-scale-leave-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-scale-enter-from,
.modal-scale-leave-to {
  transform: scale(0.95);
  opacity: 0;
}

/* Estructura del modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
  padding: 20px;
}

.modal-content {
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  padding: 24px 24px 16px;
}

.modal-body {
  padding: 0 24px;
  flex-grow: 1;
  overflow-y: auto;
}

.modal-actions {
  padding: 20px 24px;
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  border-top: 1px solid #f0f0f0;
}

.modal-footer {
  padding: 16px 24px;
  text-align: center;
  border-top: 1px solid #f0f0f0;
}

.modal-logo {
  height: 40px;
  opacity: 0.8;
  transition: opacity 0.3s ease;
}

.modal-logo:hover {
  opacity: 1;
}

/* Elementos del modal */
.close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  color: #666;
  transition: all 0.3s ease;
  z-index: 10;
}

.close-button:hover {
  background: rgba(0, 0, 0, 0.1);
  color: #333;
  transform: rotate(90deg);
}

.modal-title {
  color: #2c3e50;
  margin: 0;
  font-size: 1.5rem;
  text-align: center;
  font-weight: 600;
}

/* Formulario */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #2c3e50;
  font-size: 0.95rem;
}

.form-input, .phone-input {
  width: 100%;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: #f9f9f9;
}

.form-input:focus, .phone-input:focus {
  border-color: #3a7bd5;
  outline: none;
  background: white;
  box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.1);
}

.phone-input-group {
  display: flex;
  gap: 12px;
}

.country-select {
  flex: 1;
  max-width: 180px;
  padding: 14px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background: #f9f9f9;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  cursor: pointer;
}

.flag-icon {
  width: 20px;
  height: 15px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 2px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}

/* Botones */
.cancel-button {
  padding: 12px 24px;
  background: #f5f5f5;
  color: #555;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.cancel-button:hover {
  background: #e0e0e0;
}

.track-button {
  padding: 12px 24px;
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  color: white;
  border: none;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 210, 255, 0.3);
  display: flex;
  align-items: center;
  gap: 8px;
}

.track-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 210, 255, 0.4);
  background: linear-gradient(135deg, #2e6ab8, #00c1e8);
}

/* Responsividad */
@media (max-width: 600px) {
  .modal-content {
    max-width: 100%;
    border-radius: 12px 12px 0 0;
    max-height: 85vh;
  }
  
  .modal-overlay {
    align-items: flex-end;
    padding: 0;
  }
  
  .phone-input-group {
    flex-direction: column;
  }
  
  .country-select {
    max-width: 100%;
  }
  
  .modal-actions {
    flex-direction: column-reverse;
    gap: 8px;
  }
  
  .cancel-button,
  .track-button {
    width: 100%;
  }
}

@media (max-height: 600px) {
  .modal-header,
  .modal-body,
  .modal-actions {
    padding: 16px;
  }
  
  .modal-title {
    font-size: 1.3rem;
  }
  
  .form-input, 
  .phone-input,
  .country-select {
    padding: 12px 14px;
  }
}
</style>