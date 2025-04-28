<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isVisible" 
        class="modal-overlay" 
        @click.self="closeModal"
      >
        <div class="modal-content">
          <button class="close-button" @click="closeModal">
            <i class="fas fa-times"></i>
          </button>
          
          <h2 class="modal-title">Información de Rastreo</h2>
          
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
                  {{ country.flag }} {{ country.name }} (+{{ country.code }})
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
          
          <div class="modal-actions">
            <button @click="closeModal" class="cancel-button">
              Cancelar
            </button>
            <button @click="submitTracking" class="track-button">
              <i class="fas fa-search"></i> Rastrear
            </button>
          </div>
        </div>
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
  { name: 'México', code: '52', flag: '🇲🇽' },
  { name: 'Estados Unidos', code: '1', flag: '🇺🇸' },
  { name: 'Guatemala', code: '502', flag: '🇬🇹' },
  { name: 'El Salvador', code: '503', flag: '🇸🇻' },
  { name: 'Honduras', code: '504', flag: '🇭🇳' },
  { name: 'Nicaragua', code: '505', flag: '🇳🇮' }
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
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

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
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  transition: color 0.2s;
}

.close-button:hover {
  color: #333;
}

.modal-title {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #2c3e50;
}

.form-input, .phone-input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.form-input:focus, .phone-input:focus {
  border-color: #3a7bd5;
  outline: none;
}

.phone-input-group {
  display: flex;
  gap: 10px;
}

.country-select {
  flex: 1;
  max-width: 200px;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: white;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 2rem;
}

.cancel-button {
  padding: 12px 24px;
  background: #f1f1f1;
  color: #333;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
}

.cancel-button:hover {
  background: #e0e0e0;
}

.track-button {
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 50px;
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
}
</style>