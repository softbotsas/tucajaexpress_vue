<template>
  <div>
    <!-- Botón Flotante -->
    <div 
      class="preguia-floating-btn"
      :class="{ 'active': showPopup }"
      @click="togglePopup"
    >
      <div class="pulse-effect"></div>
      <i class="fas fa-qrcode"></i>
      <span class="btn-text">Inicia tu Preguía aquí</span>
    </div>

    <!-- Overlay -->
    <transition name="fade">
      <div 
        class="preguia-overlay" 
        v-if="showPopup"
        @click="togglePopup"
      ></div>
    </transition>

    <!-- Popup -->
    <transition name="slide">
      <div class="preguia-popup" v-if="showPopup">
        <button class="close-btn" @click="togglePopup">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="preguia-content">
          <h3>¡Inicia tu Preguía ahora!</h3>
          <p>Escanea el código QR o haz clic en el enlace</p>
          
          <div class="qr-container">
            <img 
              src="/images/qr.jpg" 
              alt="Código QR para iniciar preguía"
              class="qr-image"
            >
          </div>
          
          <div class="link-container">
            <a 
              href="https://sistematce.com/tuagencia/675992913f74b5e4ba3479a6/Agencia%20Prueba%20Yorman(No%20Usar)" 
              target="_blank"
              class="preguia-link"
            >
              <i class="fas fa-external-link-alt"></i>
              sistematce.com/tuagencia/...
            </a>
            <button 
              class="copy-btn"
              @click="copyLink"
            >
              <i class="fas fa-copy"></i> Copiar
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'PreguiaPopup',
  setup() {
    const showPopup = ref(false);
    const togglePopup = () => {
      showPopup.value = !showPopup.value;
    };

    const copyLink = () => {
      const link = 'https://sistematce.com/tuagencia/675992913f74b5e4ba3479a6/Agencia%20Prueba%20Yorman(No%20Usar)';
      navigator.clipboard.writeText(link)
        .then(() => {
          alert('¡Enlace copiado al portapapeles!');
        })
        .catch(err => {
          console.error('Error al copiar: ', err);
        });
    };

    return {
      showPopup,
      togglePopup,
      copyLink
    };
  }
}
</script>

<style scoped>
/* Estilos del botón flotante */
.preguia-floating-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #e74c3c;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 20px rgba(231, 76, 60, 0.4);
  z-index: 999;
  transition: all 0.3s ease;
  overflow: hidden;
}

.preguia-floating-btn i {
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.preguia-floating-btn .btn-text {
  position: absolute;
  white-space: nowrap;
  right: 70px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  font-weight: 500;
}

.preguia-floating-btn:hover {
  width: auto;
  padding: 0 25px;
  border-radius: 30px;
}

.preguia-floating-btn:hover .btn-text {
  opacity: 1;
  right: 25px;
}

.preguia-floating-btn.active {
  transform: rotate(180deg);
}

/* Efecto de pulso */
.pulse-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  animation: pulse 2s infinite;
  z-index: -1;
}

@keyframes pulse {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.3);
    opacity: 0;
  }
  100% {
    transform: scale(0.95);
    opacity: 0;
  }
}

/* Overlay */
.preguia-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

/* Popup */
.preguia-popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: white;
  z-index: 999;
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 1.2rem;
  color: #7f8c8d;
  cursor: pointer;
  transition: color 0.3s ease;
}

.close-btn:hover {
  color: #e74c3c;
}

.preguia-content {
  padding: 40px;
  text-align: center;
}

.preguia-content h3 {
  color: #2c3e50;
  margin-bottom: 15px;
}

.preguia-content p {
  color: #7f8c8d;
  margin-bottom: 30px;
}

.qr-container {
  margin: 20px 0;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  display: inline-block;
}

.qr-image {
  width: 200px;
  height: 200px;
  object-fit: contain;
  border: 1px solid #eee;
}

.link-container {
  margin-top: 30px;
  background: #f5f7fa;
  padding: 20px;
  border-radius: 10px;
}

.preguia-link {
  display: block;
  color: #2c3e50;
  text-decoration: none;
  margin-bottom: 15px;
  word-break: break-all;
  transition: color 0.3s ease;
}

.preguia-link:hover {
  color: #e74c3c;
}

.preguia-link i {
  margin-right: 8px;
}

.copy-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
  font-size: 0.9rem;
}

.copy-btn:hover {
  background: #c0392b;
}

.copy-btn i {
  margin-right: 8px;
}

/* Transiciones */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Responsive */
@media (max-width: 576px) {
  .preguia-floating-btn {
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
  }
  
  .preguia-popup {
    max-width: 100%;
  }
  
  .preguia-content {
    padding: 30px 20px;
  }
  
  .qr-image {
    width: 180px;
    height: 180px;
  }
}
</style>