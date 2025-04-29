
<template>
  <div class="whatsapp-widget-area"> <transition name="fade">
      <div
        class="whatsapp-overlay"
        v-if="isChatOpen"
        @click="closeChat"
      ></div>
    </transition>

    <transition name="chat-slide"> <div class="chat-window" v-if="isChatOpen"> <div class="chat-header">
          <img :src="profilePicture" alt="avatar" class="chat-avatar" /> <div class="chat-info">
            <div class="chat-name">{{ supportName }}</div> <div class="chat-status">En línea</div> </div>
          <button class="close-button" @click="closeChat">&times;</button>
        </div>
        <div class="chat-body">
          <textarea v-model="message" placeholder="Escribe tu mensaje..." rows="3"></textarea>
          <button class="send-button" @click="sendMessage">
            <span>Enviar</span> <i class="fa fa-paper-plane" style="margin-left: 6px;"></i>
          </button>
        </div>
      </div>
    </transition>

    <button
      class="whatsapp-fab animate-fab-load"
      @click="toggleChat"
      aria-label="Abrir chat de WhatsApp"
    >
      <span class="pulse"></span>
      <i class="fab fa-whatsapp"></i> </button>

  </div>
</template>

<script setup>
import { ref } from 'vue';

// --- Estado y Toggle (del primer componente) ---
const isChatOpen = ref(false); // Renombrado de 'open' a 'isChatOpen'
const toggleChat = () => { isChatOpen.value = !isChatOpen.value; };
const closeChat = () => { isChatOpen.value = false; };
// --------------------------------------------

// --- Datos y Lógica de Envío (del segundo componente) ---
const message = ref("");
const phoneNumber = '573015537673'; // Teléfono del segundo componente
// Se añaden constantes para el header que usa el segundo componente
const profilePicture = '/images/logo.jpg'; // <-- ASEGÚRATE QUE ESTA RUTA SEA VÁLIDA
const supportName = 'Tu Caja Express'; // <-- NOMBRE DEL SEGUNDO COMPONENTE

function sendMessage() {
  const text = message.value.trim();
  // Mantenemos la URL base aquí
  let url = `https://wa.me/${phoneNumber}`;
  if (text) {
    // Mantenemos el prefijo del segundo componente
    const formattedText = `Buenas! vengo de la página web y tengo la siguiente duda: ${text}`;
    url += `?text=${encodeURIComponent(formattedText)}`;
  } else {
      // Si no hay texto, podríamos decidir no añadir el parámetro text
      // o enviar un saludo genérico si la URL base sola no funciona bien.
      // Por ahora, si no hay texto, solo abre el chat sin mensaje prellenado.
  }
  window.open(url, '_blank', 'noopener,noreferrer'); // Abre en nueva pestaña
  message.value = ""; // Limpia el textarea
  isChatOpen.value = false; // Cierra la ventana después de enviar
}
// ---------------------------------------------------

// --- Funciones no usadas del primer componente ---
// const initialMessage = ...;
// const predefinedMessage = ...;
// const getCurrentTime = ...;
// const openWhatsApp = ...; // Reemplazada por sendMessage
// ------------------------------------------------

</script>

<style scoped>

:root {
  --whatsapp-green: #25D366;
  --whatsapp-green-dark: #128C7E;
  --whatsapp-green-hover: #1EB15A;
   /* Colores del header del segundo componente */
  --whatsapp-header-bg: #075E54;
  --whatsapp-text-light: #FFFFFF;
  --whatsapp-status-text: #cfcfcf;
  /* Colores del body/footer del segundo componente */
   --chat-window-bg: #f0f0f0;
   --chat-body-bg: white;
   --chat-border-color: #ccc;
}

/* ================================= */
/* == ESTILOS DEL PRIMER COMPONENTE PARA FAB Y OVERLAY == */
/* ================================= */

.whatsapp-widget-area {
  position: relative; /* Contenedor para posicionamiento absoluto del chat */
}

/* Botón Flotante (FAB) - Llamativo */
.whatsapp-fab {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 65px;
  height: 65px;
  background-color: var(--whatsapp-green);
  color: #25D366;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
  cursor: pointer;
  z-index: 1010; /* Sobre el contenido normal */
  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease, box-shadow 0.3s ease;
}
.whatsapp-fab:hover {
  transform: scale(1.1);
  background-color: var(--whatsapp-green-hover);
  box-shadow: 0 8px 25px rgba(37, 211, 102, 0.6);
}
.whatsapp-fab:active { transform: scale(1.0); }
.whatsapp-fab i { position: relative; z-index: 1; }

/* Animación de Carga para el FAB */
.animate-fab-load {
    animation: fabLoadAnimation 0.5s 0.2s ease-out backwards;
}
@keyframes fabLoadAnimation {
    0% { transform: scale(0.5); opacity: 0; }
    70% { transform: scale(1.05); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
}

/* Animación de Pulso */
.whatsapp-fab .pulse {
  position: absolute; top: -5px; left: -5px; width: calc(100% + 10px); height: calc(100% + 10px);
  background-color: var(--whatsapp-green); border-radius: 50%; opacity: 0.5;
  animation: whatsappPulseStrong 1.8s infinite ease-out; z-index: 0;
}
@keyframes whatsappPulseStrong {
  0% { transform: scale(0.8); opacity: 0.5; }
  70% { transform: scale(1.5); opacity: 0; }
  100% { transform: scale(0.8); opacity: 0; }
}

/* Overlay */
.whatsapp-overlay {
  position: fixed; top: 0; left: 0; width: 100%; height: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  z-index: 1000; /* Debajo del chat y del FAB */
}

/* ============================================= */
/* == ESTILOS DEL SEGUNDO COMPONENTE PARA CHAT WINDOW == */
/* ============================================= */

.chat-window {
  position: fixed; /* Cambiado a fixed para mejor control */
  bottom: 105px;   /* Posición sobre el FAB (ajusta si cambias tamaño FAB) */
  right: 30px;    /* Alineado con el FAB */
  width: 300px;
  max-width: 90vw;
  background: #075E54; /* #f0f0f0 */
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-family: 'Segoe UI', sans-serif;
  overflow: hidden;
  display: flex; /* Añadido para estructura interna */
  flex-direction: column; /* Añadido */
  z-index: 1010; /* Encima del overlay y FAB */
}

.chat-header {
  background-color: var(--whatsapp-header-bg); /* #075E54 */
  color: #FFFFFF; /* white */
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0; /* Añadido */
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover; /* Añadido */
}

.chat-info { flex-grow: 1; } /* Añadido */
.chat-info .chat-name {
  font-weight: bold;
  font-size: 16px;
}
.chat-info .chat-status {
  font-size: 12px;
  color: var(--whatsapp-status-text); /* #cfcfcf */
}

.close-button {
  margin-left: auto; background: none; border: none;
  color: var(--whatsapp-text-light); /* white */
  font-size: 20px; cursor: pointer;
  padding: 0 5px; line-height: 1;
}
.close-button:hover { color: rgba(255, 255, 255, 0.8); } /* Añadido hover */

.chat-body {
  padding: 10px;
  background-color: var(--chat-body-bg); /* white */
  flex-grow: 1; /* Añadido para que ocupe espacio */
  /* Permitir scroll si el textarea crece mucho, aunque rows=3 limita */
  overflow-y: auto;
}

.chat-body textarea {
  width: 100%;
  border-radius: 5px;
  border: 1px solid var(--chat-border-color); /* #ccc */
  padding: 8px;
  resize: none;
  font: inherit;
  margin-bottom: 8px;
  box-sizing: border-box; /* Asegura que padding no aumente tamaño total */
  min-height: calc(1.4em * 3 + 18px); /* Altura inicial basada en rows y padding */
}
.chat-body textarea:focus {
    outline: none;
    border-color: var(--whatsapp-green);
    box-shadow: 0 0 0 2px rgba(37, 211, 102, 0.3);
}


.send-button {
  width: 100%;
  background-color: var(--whatsapp-green); /* #25D366 */
  border: none;
  color: white;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  transition: background-color 0.2s ease; /* Añadir transición */
}

.send-button:hover {
    background-color: var(--whatsapp-green-dark); /* #128C7E */
}

/* ================================= */
/* == TRANSICIONES (Combinadas)   == */
/* ================================= */

/* Transición para el Overlay (Fade) */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

/* Transición para la ventana de chat (Slide del segundo componente) */
.chat-slide-enter-active, .chat-slide-leave-active {
  transition: all 0.3s ease;
}
.chat-slide-enter-from, .chat-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* === Responsivo === */
@media (max-width: 768px) {
  /* Ajustes para el FAB */
  .whatsapp-fab { bottom: 20px; right: 20px; width: 60px; height: 60px; font-size: 2rem; }
  /* Ajustes para la ventana de chat */
  .chat-window { bottom: 90px; right: 20px; width: calc(100vw - 40px); max-width: 320px; } /* Ligeramente más estrecho */
}

@media (max-width: 480px) {
    /* Ajustes para el FAB */
    .whatsapp-fab { bottom: 15px; right: 15px; width: 55px; height: 55px; font-size: 1.8rem; }
    /* Ajustes para la ventana de chat */
    .chat-window { bottom: 75px; right: 15px; width: calc(100vw - 30px); border-radius: 8px;}
    .chat-header { padding: 8px 10px; gap: 8px; }
    .chat-avatar { width: 32px; height: 32px; }
    .chat-name { font-size: 15px; }
    .chat-status { font-size: 11px; }
    .close-button { font-size: 18px; }
    .chat-body { padding: 8px; }
    .chat-body textarea { padding: 6px; margin-bottom: 6px; }
    .send-button { padding: 9px; font-size: 13px; }
}

</style>