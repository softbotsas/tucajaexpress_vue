<template>
  <div>
    <!-- Botón flotante -->
    <div class="preguia-widget-container">
      <div 
        class="preguia-floating-btn"
        :class="{ 'active': showPopup }"
        @click="togglePopup"
        title="Iniciar Preguía"
      >
        <div class="pulse-effect"></div>
        <i :class="showPopup ? 'fas fa-times' : 'fas fa-qrcode'"></i>
      </div>

      <transition name="hint-slide">
        <div class="preguia-text-hint" v-if="showTextHint">
          Inicia tu Preguía aquí
        </div>
      </transition>
    </div>

    <!-- Overlay semi-transparente -->
    <transition name="fade">
      <div 
        class="preguia-overlay" 
        v-if="showPopup"
        @click="togglePopup"
      ></div>
    </transition>

    <!-- Contenedor del popup estilo app -->
    <transition name="slide-up">
      <div class="preguia-app-container" v-if="showPopup">
        <!-- Header tipo app -->
        <div class="app-header">
          <button class="close-btn" @click="togglePopup">
            <i class="fas fa-chevron-down"></i>
          </button>
          <h3>Iniciar Preguía</h3>
        </div>

        <!-- Contenido principal -->
        <div class="app-content">
          <div class="logo-container">
            <img
              src="/images/logo-light.png"
              alt="Logo"
              class="preguia-logo"
            >
          </div>

          <p class="app-subtitle">Escanea el código QR para comenzar</p>

          <div class="qr-container">
            <img
              src="/images/qr.jpg"
              alt="Código QR para iniciar preguía"
              class="qr-image"
            >
            <div class="qr-border-animation"></div>
          </div>

          <div class="link-section">
            <p class="link-label">O copia este enlace:</p>
            <div class="link-input-group">
              <input 
                type="text" 
                :value="truncateLink(preguiaLink)" 
                readonly
                class="link-input"
              >
              <button 
                class="copy-btn"
                @click="copyLink"
              >
                <i class="fas fa-copy"></i>
              </button>
            </div>
          </div>

          <button class="action-btn" @click="openLink">
            Abrir en navegador <i class="fas fa-external-link-alt"></i>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const showPopup = ref(false);
const showTextHint = ref(false);
const preguiaLink = ref('https://sistematce.com/tuagencia/675992913f74b5e4ba3479a6/Agencia%20Prueba%20Yorman(No%20Usar)');
let hintInterval = null;
let hintTimeout = null;

const togglePopup = () => {
  showPopup.value = !showPopup.value;
  if (showPopup.value) {
    showTextHint.value = false;
    clearInterval(hintInterval);
    clearTimeout(hintTimeout);
    document.body.style.overflow = 'hidden';
  } else {
    startHintAnimation();
    document.body.style.overflow = '';
  }
};

const copyLink = async () => {
  try {
    await navigator.clipboard.writeText(preguiaLink.value);
    showToast('¡Enlace copiado!');
  } catch (err) {
    console.error('Error al copiar: ', err);
    showToast('Error al copiar', 'error');
  }
};

const openLink = () => {
  window.open(preguiaLink.value, '_blank');
};

const truncateLink = (link) => {
  const maxLength = 30;
  if (link.length <= maxLength) return link;
  
  try {
    const url = new URL(link);
    return `${url.hostname}...`;
  } catch {
    return `${link.substring(0, maxLength)}...`;
  }
};

const showToast = (message, type = 'success') => {
  // Implementar un sistema de notificaciones toast
  alert(message); // Temporal
};

const startHintAnimation = () => {
  clearInterval(hintInterval);
  clearTimeout(hintTimeout);
  
  hintTimeout = setTimeout(() => {
    showTextHint.value = true;
    hintInterval = setInterval(() => {
      showTextHint.value = !showTextHint.value;
    }, 5000);
  }, 3000);
};

onMounted(startHintAnimation);
onUnmounted(() => {
  clearInterval(hintInterval);
  clearTimeout(hintTimeout);
  document.body.style.overflow = '';
});
</script>

<style scoped lang="scss">
/* Variables de diseño */
$primary-color: #e74c3c;
$primary-dark: #c0392b;
$text-color: #2c3e50;
$light-gray: #f5f7fa;
$border-radius: 12px;
$box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

/* Contenedor principal - Posición base (escritorio) */
.preguia-widget-container {
  position: fixed;
  bottom: 30px;
  left: 30px;
  display: flex;
  align-items: center;
  z-index: 999;
  
  /* Posición en móvil (más arriba) */
  @media (max-width: 767px) {
    bottom: 80px;
    left: 5px;
  }
  
  /* Ajuste extra para móviles pequeños */
  @media (max-width: 360px) {
    bottom: 70px;
    left: 15px;
  }
}

.preguia-floating-btn {
  position: relative;
  background: $primary-color;
  color: white;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba($primary-color, 0.3);
  transition: all 0.3s ease;
  z-index: 1000;
  
  i {
    font-size: 1.4rem;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    background: $primary-dark;
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba($primary-color, 0.4);
  }
  
  &.active {
    transform: rotate(135deg);
    background: $primary-dark;
  }
}

.pulse-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba($primary-color, 0.4);
  border-radius: 50%;
  animation: pulse 2s infinite ease-out;
  z-index: -1;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 0.7; }
  70% { transform: scale(1.3); opacity: 0; }
  100% { transform: scale(0.95); opacity: 0; }
}

.preguia-text-hint {
  background: white;
  color: $text-color;
  padding: 8px 15px;
  border-radius: 20px;
  margin-left: 15px;
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  white-space: nowrap;
  
  /* Ajuste para móviles */
  @media (max-width: 767px) {
    margin-left: 10px;
    font-size: 0.85rem;
    padding: 6px 12px;
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
  backdrop-filter: blur(5px);
  z-index: 1000;
}

/* Contenedor estilo app */
.preguia-app-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 500px;
  max-height: 80vh;
  margin: 0 auto;
  background: white;
  border-radius: $border-radius $border-radius 0 0;
  box-shadow: $box-shadow;
  z-index: 1001;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  
  /* Para pantallas altas */
  @media (min-height: 700px) {
    bottom: 10vh;
    border-radius: $border-radius;
  }
}

/* Animaciones */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.3s ease;
}
.slide-up-enter-from, .slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Animación del hint de izquierda a derecha */
.hint-slide-enter-active, .hint-slide-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.hint-slide-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.hint-slide-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
.hint-slide-enter-to, .hint-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Resto de estilos (app-header, app-content, etc.) se mantienen igual que en la versión anterior */
.app-header {
  padding: 15px 20px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  .close-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    color: #7f8c8d;
    cursor: pointer;
    margin-right: 15px;
    padding: 5px;
  }
  
  h3 {
    margin: 0;
    font-size: 1.2rem;
    color: $text-color;
    font-weight: 600;
  }
}

.app-content {
  padding: 20px;
  overflow-y: auto;
  flex-grow: 1;
  text-align: center;
}

.logo-container {
  margin-bottom: 20px;
  
  .preguia-logo {
    max-width: 150px;
    height: auto;
  }
}

.app-subtitle {
  color: #7f8c8d;
  margin-bottom: 25px;
  font-size: 1rem;
}

.qr-container {
  position: relative;
  margin: 0 auto 25px;
  width: 200px;
  height: 200px;
  padding: 15px;
  background: white;
  border-radius: $border-radius;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  .qr-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  .qr-border-animation {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 3px solid transparent;
    border-radius: $border-radius;
    animation: border-pulse 2s infinite;
    pointer-events: none;
  }
}

@keyframes border-pulse {
  0% { border-color: rgba($primary-color, 0.1); }
  50% { border-color: rgba($primary-color, 0.4); }
  100% { border-color: rgba($primary-color, 0.1); }
}

.link-section {
  margin: 25px 0;
  
  .link-label {
    color: #7f8c8d;
    margin-bottom: 10px;
    font-size: 0.9rem;
  }
  
  .link-input-group {
    display: flex;
    align-items: center;
    background: $light-gray;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .link-input {
    flex-grow: 1;
    padding: 12px 15px;
    border: none;
    background: transparent;
    font-size: 0.9rem;
    color: $text-color;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .copy-btn {
    background: $primary-color;
    color: white;
    border: none;
    padding: 12px 15px;
    cursor: pointer;
    transition: background 0.3s ease;
    
    &:hover {
      background: $primary-dark;
    }
  }
}

.action-btn {
  width: 100%;
  padding: 15px;
  background: $primary-color;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    margin-left: 8px;
  }
  
  &:hover {
    background: $primary-dark;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba($primary-color, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
}
</style>