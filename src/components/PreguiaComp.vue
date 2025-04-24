<template>
  <div>
    <!-- Contenedor del Widget Completo (Botón + Texto Hint) -->
    <div class="preguia-widget-container">
      <!-- Texto Hint (Aparece periódicamente) -->
      <transition name="hint-slide">
        <div class="preguia-text-hint" v-if="showTextHint">
          Inicia tu Preguía aquí
        </div>
      </transition>

      <!-- Botón Flotante -->
      <div
        class="preguia-floating-btn"
        :class="{ 'active': showPopup }"
        @click="togglePopup"
        title="Iniciar Preguía"
      >
        <div class="pulse-effect"></div>
        <!-- Cambia el icono si el popup está abierto -->
        <i :class="showPopup ? 'fas fa-times' : 'fas fa-qrcode'"></i>
      </div>
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
              :href="preguiaLink"
              target="_blank"
              class="preguia-link"
            >
              <i class="fas fa-external-link-alt"></i>
              {{ truncateLink(preguiaLink) }}
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
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'PreguiaPopup',
  setup() {
    const showPopup = ref(false);
    const showTextHint = ref(false); // Estado para mostrar/ocultar el hint
    const preguiaLink = 'https://sistematce.com/tuagencia/675992913f74b5e4ba3479a6/Agencia%20Prueba%20Yorman(No%20Usar)';
    let hintInterval = null;
    let hintTimeout = null;

    const togglePopup = () => {
      showPopup.value = !showPopup.value;
      // Opcional: Ocultar el hint cuando el popup está abierto
      if (showPopup.value) {
        showTextHint.value = false;
        clearInterval(hintInterval);
        clearTimeout(hintTimeout);
      } else {
        // Reiniciar la animación del hint si se cierra el popup
        startHintAnimation();
      }
    };

    const copyLink = () => {
      navigator.clipboard.writeText(preguiaLink)
        .then(() => {
          alert('¡Enlace copiado al portapapeles!');
        })
        .catch(err => {
          console.error('Error al copiar: ', err);
          // Fallback por si falla navigator.clipboard (poco común en https)
          try {
            const textArea = document.createElement("textarea");
            textArea.value = preguiaLink;
            textArea.style.position = "fixed"; // Evita scroll
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand('copy');
            alert('¡Enlace copiado al portapapeles! (fallback)');
            document.body.removeChild(textArea);
          } catch (fallbackErr) {
            alert('Error al copiar el enlace.');
            console.error('Error al copiar (fallback): ', fallbackErr);
          }
        });
    };

    // Función para truncar el enlace visible
    const truncateLink = (link) => {
      const maxLength = 30; // Ajusta la longitud máxima como necesites
      if (link.length <= maxLength) {
        return link;
      }
      // Intenta mostrar dominio y parte final
      try {
        const url = new URL(link);
        const pathParts = url.pathname.split('/').filter(Boolean);
        if (pathParts.length > 1) {
           return `${url.hostname}/${pathParts[0]}/.../${pathParts[pathParts.length - 1]}`;
        }
        return `${url.hostname}/...`;
      } catch(e) {
         // Si no es una URL válida o algo falla, solo corta
         return link.substring(0, maxLength - 3) + '...';
      }
    };

    // Lógica para mostrar el hint periódicamente
    const startHintAnimation = () => {
       // Limpiar intervalos/timeouts previos si existen
       clearInterval(hintInterval);
       clearTimeout(hintTimeout);

       // Espera 3 segundos antes de mostrar el hint por primera vez
       hintTimeout = setTimeout(() => {
         showTextHint.value = true;

         // Luego, cada 15 segundos: muestra el hint por 5 segundos
         hintInterval = setInterval(() => {
           showTextHint.value = true; // Muestra
           setTimeout(() => {
             showTextHint.value = false; // Oculta después de 5 seg
           }, 5000); // Duración visible del hint
         }, 15000); // Intervalo total (10s oculto + 5s visible)

       }, 3000); // Delay inicial
    }

    onMounted(() => {
      startHintAnimation();
    });

    onUnmounted(() => {
      // Limpiar intervalo y timeout al desmontar el componente para evitar fugas de memoria
      clearInterval(hintInterval);
      clearTimeout(hintTimeout);
    });

    return {
      showPopup,
      showTextHint, // Exponer para el template
      togglePopup,
      copyLink,
      preguiaLink,
      truncateLink
    };
  }
}
</script>

<style scoped>
/* Contenedor principal del widget */
.preguia-widget-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  z-index: 999; /* Asegura que esté sobre otros elementos */
}

/* Texto Hint */
.preguia-text-hint {
  background-color: #34495e; /* Un color diferente para destacar */
  color: white;
  padding: 8px 15px;
  border-radius: 15px;
  margin-right: 15px; /* Espacio entre el texto y el botón */
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  /* Asegura que no bloquee clics si algo estuviera debajo */
  pointer-events: none;
}

/* Animación para el Texto Hint */
.hint-slide-enter-active,
.hint-slide-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.hint-slide-enter-from,
.hint-slide-leave-to {
  opacity: 0;
  transform: translateX(10px); /* Desliza desde la derecha */
}
.hint-slide-enter-to,
.hint-slide-leave-from {
    opacity: 1;
    transform: translateX(0);
}


/* Estilos del botón flotante (ajustados) */
.preguia-floating-btn {
  position: relative; /* Cambiado de fixed a relative */
  /* bottom y right ahora son controlados por el container */
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
  /* z-index es manejado por el container */
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  /* overflow: hidden; -> Eliminado para que el pulso no se corte si es más grande */
}

.preguia-floating-btn i {
  font-size: 1.6rem; /* Ligeramente más grande */
  transition: transform 0.3s ease;
}

/* Ya no necesitamos el span .btn-text dentro */

/* Efecto hover sutil en el botón */
.preguia-floating-btn:hover {
  background-color: #c0392b; /* Oscurecer al hacer hover */
  box-shadow: 0 8px 25px rgba(231, 76, 60, 0.5);
  transform: scale(1.05); /* Ligeramente más grande */
}

/* Estilo cuando el popup está activo (opcional: cambio de icono en lugar de rotar) */
.preguia-floating-btn.active {
  /* transform: rotate(180deg); -> Eliminado o cambiado si prefieres */
  background-color: #c0392b; /* Mantener color oscuro */
}
.preguia-floating-btn.active:hover {
    transform: scale(1.0); /* Evitar scale cuando está activo */
}


/* Efecto de pulso (sin cambios) */
.pulse-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(231, 76, 60, 0.5); /* Color del botón con alpha */
  border-radius: 50%;
  animation: pulse 2s infinite ease-out;
  z-index: -1; /* Detrás del icono */
  pointer-events: none; /* No interferir con el click */
}

@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: 0.7;
  }
  70% {
    transform: scale(1.4); /* Más grande para ser más visible */
    opacity: 0;
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}

/* Overlay (sin cambios) */
.preguia-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); /* Ligeramente más oscuro */
  z-index: 1000; /* Debe estar sobre el widget pero debajo del popup */
}

/* Popup (ajuste de z-index) */
.preguia-popup {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100vh;
  background: white;
  z-index: 1001; /* El más alto */
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  display: flex; /* Usar flex para centrar contenido si es poco */
  flex-direction: column; /* Alinear contenido verticalmente */
}

.close-btn {
  position: absolute;
  top: 15px; /* Un poco más arriba */
  right: 15px;
  background: none;
  border: none;
  font-size: 1.5rem; /* Más grande */
  color: #95a5a6; /* Un gris más suave */
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 5px; /* Área de click más grande */
  line-height: 1;
}

.close-btn:hover {
  color: #e74c3c;
  transform: rotate(90deg);
}

.preguia-content {
  padding: 60px 30px 40px 30px; /* Más padding arriba por el botón de cerrar */
  text-align: center;
  flex-grow: 1; /* Ocupa el espacio disponible */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra el contenido verticalmente */
}

.preguia-content h3 {
  color: #2c3e50;
  margin-bottom: 10px; /* Menos espacio */
  font-size: 1.6rem;
}

.preguia-content p {
  color: #7f8c8d;
  margin-bottom: 25px;
  font-size: 1rem;
}

.qr-container {
  margin: 15px auto; /* Centrado y con margen reducido */
  padding: 15px;
  background: #f9f9f9;
  border-radius: 10px;
  display: inline-block;
  border: 1px solid #eee;
}

.qr-image {
  display: block; /* Evita espacio extra debajo */
  width: 180px; /* Tamaño ajustado */
  height: 180px;
  object-fit: contain;
}

.link-container {
  margin-top: 25px;
  background: #f0f2f5; /* Fondo ligeramente diferente */
  padding: 15px 20px;
  border-radius: 8px;
}

.preguia-link {
  display: block; /* Ocupa todo el ancho */
  color: #3498db; /* Azul para el enlace */
  text-decoration: none;
  margin-bottom: 15px;
  word-break: break-all;
  transition: color 0.3s ease;
  font-weight: 500;
}

.preguia-link:hover {
  color: #2980b9; /* Azul más oscuro */
  text-decoration: underline;
}

.preguia-link i {
  margin-right: 8px;
  color: #7f8c8d; /* Icono en gris */
}

.copy-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 12px 25px; /* Más padding */
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  font-size: 0.95rem;
  font-weight: 500;
  width: 100%; /* Botón ocupa todo el ancho */
  margin-top: 10px; /* Espacio desde el enlace */
}

.copy-btn:hover {
  background: #c0392b;
  transform: translateY(-2px); /* Efecto hover */
}
.copy-btn:active {
    transform: translateY(0px); /* Efecto click */
}


.copy-btn i {
  margin-right: 8px;
}

/* Transiciones (sin cambios) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); /* Transición más suave */
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

/* Responsive */
@media (max-width: 576px) {
  /* Ajustar posición del widget en móvil */
  .preguia-widget-container {
      bottom: 20px;
      right: 20px;
  }

  /* Botón un poco más pequeño */
  .preguia-floating-btn {
      width: 55px;
      height: 55px;
  }
   .preguia-floating-btn i {
      font-size: 1.4rem;
  }

  /* Ocultar hint en pantallas muy pequeñas si molesta mucho */
  /*
  .preguia-text-hint {
      display: none;
  }
  */
   /* O hacer el hint más pequeño */
   .preguia-text-hint {
       padding: 6px 10px;
       font-size: 0.8rem;
       margin-right: 10px;
   }


  /* Popup ocupa toda la pantalla */
  .preguia-popup {
    max-width: 100%;
    height: 100%; /* Asegurar altura completa */
  }

  .preguia-content {
    padding: 50px 20px 30px 20px; /* Ajustar padding */
    justify-content: flex-start; /* Alinear arriba en móvil */
  }

  .qr-image {
    width: 160px;
    height: 160px;
  }

  .preguia-content h3 {
      font-size: 1.4rem;
  }
   .preguia-content p {
      font-size: 0.9rem;
      margin-bottom: 20px;
  }
}
</style>