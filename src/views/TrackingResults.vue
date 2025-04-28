<template>
    <div class="tracking-results-view">
      <div class="header-section">
        <h1 class="title">Resultados de Rastreo</h1>
        <div class="tracking-info" v-if="trackingData.guide">
          <div class="info-item">
            <span class="label">Guía:</span>
            <span class="value">{{ trackingData.guide }}</span>
          </div>
          <div class="info-item">
            <span class="label">Teléfono:</span>
            <span class="value">
              <img
                :src="`/images/flags/${currentCountry.flag}`"
                :alt="currentCountry.name"
                class="flag-icon"
                v-if="currentCountry.flag"
              />
              {{ route.query.phone || 'N/A' }}
            </span>
          </div>
        </div>
        <div v-else class="tracking-info">
          <p>Cargando datos de búsqueda...</p>
        </div>
      </div>
  
      <div class="content-section">
        <div v-if="loading" class="loading-state">
          <div class="spinner"></div>
          <p>Buscando información de tu paquete...</p>
        </div>
  
        <div v-else-if="error" class="error-state">
          <i class="fas fa-exclamation-triangle"></i>
          <h3>Ocurrió un error</h3>
          <p>{{ error }}</p>
          <button @click="retrySearch" class="retry-button">
            Reintentar Búsqueda
          </button>
          <button @click="goBack" class="back-button" style="margin-left: 10px;">
            <i class="fas fa-arrow-left"></i> Volver
          </button>
        </div>
  
        <div v-else-if="trackingInfo" class="results-container">
          <div class="status-card" :class="statusClass">
            <div class="status-header">
              <h3>Estado Actual</h3>
              <span class="status-badge">{{ trackingInfo.status }}</span>
            </div>
            <div class="status-details">
              <div class="detail-item">
                <i class="fas fa-info-circle"></i> <span>{{ trackingInfo.location }}</span>
              </div>
              <div class="detail-item">
                <i class="fas fa-calendar-alt"></i>
                <span>Última Actualización: {{ formatDateTime(trackingInfo.lastUpdate) }}</span>
              </div>
              </div>
          </div>
  
          <div class="timeline-section">
            <h3>Historial de Eventos</h3>
            <div class="timeline" v-if="trackingInfo.history && trackingInfo.history.length > 0">
              <div v-for="(event, index) in trackingInfo.history" :key="index" class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                  <div class="timeline-date">{{ formatDateTime(event.date) }}</div>
                  <div class="timeline-event">{{ event.description }}</div>
                  </div>
              </div>
            </div>
            <div v-else>
              <p>No hay historial de movimientos disponible.</p>
            </div>
          </div>
          <div class="text-center" style="margin-top: 20px;">
             <button @click="goBack" class="back-button">
                <i class="fas fa-arrow-left"></i> Volver
              </button>
          </div>
        </div>
  
        <div v-else class="no-results">
          <i class="fas fa-box-open"></i>
          <h3>No se encontraron resultados</h3>
          <p>No hay información disponible para la guía <strong v-if="trackingData.guide">{{ trackingData.guide }}</strong> y el teléfono proporcionado.</p>
          <p>Verifica los datos e intenta nuevamente.</p>
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
  import axios from 'axios'; 
  
  const route = useRoute();
  const router = useRouter();
  
  // Estados
  const loading = ref(true);
  const error = ref(null);
  const trackingInfo = ref(null); // Aquí guardaremos la info procesada de la API
  
  // Datos de rastreo extraídos de la URL
  const trackingData = ref({
    guide: '',
    phone: '', // Número sin código de país
    countryCode: ''
  });
  
  // Mapeo de países (igual que antes)
  const countries = {
    '52': { name: 'México', flag: 'mexico.png' },
    '1': { name: 'Estados Unidos', flag: 'usa.png' },
    '502': { name: 'Guatemala', flag: 'guatemala.png' },
    '503': { name: 'El Salvador', flag: 'el-salvador.png' }, // Asegúrate que el nombre del flag sea correcto
    '504': { name: 'Honduras', flag: 'honduras.png' },
    '505': { name: 'Nicaragua', flag: 'nicaragua.png' }
    // Agrega más si es necesario
  };
  
  // --- Computados ---
  const currentCountry = computed(() => {
    return countries[trackingData.value.countryCode] || {};
  });
  
  // Clase CSS basada en el estado (última descripción)
  const statusClass = computed(() => {
    if (!trackingInfo.value || !trackingInfo.value.status) return 'desconocido';
    // Convertimos el estado a un formato usable como clase CSS
    return trackingInfo.value.status.toLowerCase()
             .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Quitar acentos
             .replace(/[^a-z0-9]+/g, '-') // Reemplazar caracteres no alfanuméricos con -
             .replace(/^-+|-+$/g, ''); // Quitar guiones al inicio/fin
  });
  
  // --- Métodos ---
  const formatDate = (dateString) => {
      if (!dateString) return 'N/A';
      try {
          // Formato esperado: YYYY-MM-DDTHH:mm:ss.sssZ
          const date = new Date(dateString);
          //toLocaleDateString podría dar formatos diferentes según el navegador/OS
          // Forzamos un formato YYYY-MM-DD
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const day = date.getDate().toString().padStart(2, '0');
          return `${year}-${month}-${day}`;
      } catch (e) {
          console.error("Error formatting date:", dateString, e);
          return 'Fecha inválida';
      }
  };
  
  const formatDateTime = (dateString) => {
      if (!dateString) return 'N/A';
       try {
          const date = new Date(dateString);
          // Formato deseado: DD/MM/YYYY HH:mm (ej. 28/04/2025 13:58)
          const day = date.getDate().toString().padStart(2, '0');
          const month = (date.getMonth() + 1).toString().padStart(2, '0');
          const year = date.getFullYear();
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          return `${day}/${month}/${year} ${hours}:${minutes}`;
       } catch (e) {
          console.error("Error formatting datetime:", dateString, e);
          return 'Fecha/hora inválida';
       }
  };
  
  // Extrae guía y teléfono de la URL, y determina código de país
  const extractTrackingData = () => {
    const { guide, phone: fullPhone } = route.query; // Renombramos 'phone' a 'fullPhone' para claridad
  
    if (!guide || !fullPhone) {
      error.value = 'Faltan parámetros de búsqueda (guía o teléfono) en la URL.';
      loading.value = false; // Detener carga si faltan datos
      return false; // Indica que no se pudo extraer
    }
  
    trackingData.value.guide = guide;
  
    // Extraer código de país (los primeros 1-3 dígitos)
    const possibleCodes = Object.keys(countries).sort((a, b) => b.length - a.length);
    let foundCode = false;
    for (const code of possibleCodes) {
      if (fullPhone.startsWith(code)) {
        trackingData.value.phone = fullPhone.substring(code.length); // Guarda el número sin código
        trackingData.value.countryCode = code; // Guarda el código
        foundCode = true;
        break;
      }
    }
  
    if (!foundCode) {
        // Si no se encuentra un código de país conocido, asumimos que no tiene prefijo o es desconocido
        console.warn(`No se encontró código de país conocido para ${fullPhone}. Se usará el número completo.`);
        trackingData.value.phone = fullPhone; // Guardamos el número completo como 'phone'
        trackingData.value.countryCode = ''; // Sin código de país
    }
  
    return true; // Datos extraídos (o intentado)
  };
  
  // *** NUEVA FUNCIÓN: Llama a la API real ***
  const fetchTrackingInfo = async (guideToFetch, phoneToFetch) => {
    // Validar que tenemos guía y teléfono
    if (!guideToFetch || !phoneToFetch) {
        error.value = "No se proporcionó número de guía o teléfono para la búsqueda.";
        loading.value = false;
        return;
    }
  
    loading.value = true;
    error.value = null;
    trackingInfo.value = null; // Limpiar resultados anteriores
  
    // Construir la URL de la API
    // Usamos el número de teléfono COMPLETO (con código de país) como 'celular'
    const apiUrl = `https://sistematce.com/api/obtener_info_guia_web?nroGuia=${encodeURIComponent(guideToFetch)}&celular=${encodeURIComponent(phoneToFetch)}`;
    console.log("Consultando API:", apiUrl); // Para depuración
  
    try {
      const response = await axios.post(apiUrl);
      console.log("Respuesta API:", response.data); // Para depuración
  
      // Verificar si la API respondió correctamente y si success es true
      if (response.data && response.data.success) {
        const apiData = response.data;
  
        // Procesar movimientos para crear el historial
        const history = [];
        if (apiData.movimientos && typeof apiData.movimientos === 'object') {
          // Convertir el objeto movimientos en un array
          const movementsArray = Object.entries(apiData.movimientos).map(([key, value]) => ({
              type: key, // Guardamos el tipo de movimiento si es útil
              ...value // Copiamos el resto de propiedades (fecha, observacion, nro_guia)
          }));
  
          // Ordenar los movimientos por fecha (más reciente primero)
          movementsArray.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
  
          // Mapear al formato de historial que espera el componente
          history.push(...movementsArray.map(mov => ({
            date: mov.fecha,
            description: mov.observacion || `Movimiento: ${mov.type}`, // Usar observacion o el tipo
            // location: mov.location || 'N/A' // Descomentar si la API devuelve ubicación por evento
          })));
        }
  
        // Determinar estado actual, ubicación (descripción) y última actualización
        const latestMovement = history.length > 0 ? history[0] : null; // El primero después de ordenar desc
  
        trackingInfo.value = {
          // Usamos la descripción del último movimiento como estado principal
          status: latestMovement ? latestMovement.description : 'Información Recibida',
          // También usamos la descripción como 'location' ya que no hay un campo específico
          location: latestMovement ? latestMovement.description : 'No hay detalles de ubicación',
          // Usamos la fecha del último movimiento o la fecha general de la guía
          lastUpdate: latestMovement ? latestMovement.date : apiData.fecha,
          estimatedDelivery: null, // Tu API no lo provee
          history: history // El historial ordenado
        };
  
      } else {
        // La API respondió pero success no es true o no hay data
        console.warn("La API no devolvió resultados exitosos:", response.data);
        trackingInfo.value = null; // Para mostrar el estado "No se encontraron resultados"
      }
  
    } catch (err) {
      console.error('Error al obtener Guia:', err);
      if (err.response) {
          // Error desde el servidor (ej. 404, 500)
          error.value = `Error del servidor (${err.response.status}). Intenta más tarde.`;
      } else if (err.request) {
          // No hubo respuesta del servidor
          error.value = 'No se pudo conectar con el servidor de rastreo. Verifica tu conexión.';
      } else {
          // Otro tipo de error
          error.value = 'Ocurrió un error inesperado al procesar la solicitud.';
      }
      trackingInfo.value = null;
    } finally {
      loading.value = false; // Finaliza la carga independientemente del resultado
    }
  };
  
  // --- Acciones ---
  const retrySearch = () => {
    // Reintentar la búsqueda usando los datos ya extraídos
    const guide = trackingData.value.guide;
    const fullPhone = route.query.phone; // Necesitamos el teléfono completo original
    if(guide && fullPhone) {
        fetchTrackingInfo(guide, fullPhone);
    } else {
        error.value = "No hay datos válidos para reintentar la búsqueda.";
    }
  };
  
  const goBack = () => {
    // Ir a la página anterior (probablemente el formulario de rastreo)
    if (window.history.length > 1) {
      router.go(-1);
    } else {
      // Si no hay historial, ir a la raíz o a una página definida
      router.push('/');
    }
  };
  
  // --- Ciclo de vida ---
  onMounted(() => {
    // 1. Extraer datos de la URL
    const dataExtracted = extractTrackingData();
  
    // 2. Si se extrajeron datos y no hubo error inicial, llamar a la API
    if (dataExtracted && !error.value) {
      // Usamos la guía extraída y el teléfono COMPLETO original de la URL
      fetchTrackingInfo(trackingData.value.guide, route.query.phone);
    }
    // Si hubo error en extractTrackingData, loading ya se puso en false allí
  });
  </script>
  
  <style scoped>
    .tracking-results-view {
      max-width: 800px;
      margin: 20px auto; /* Añadido margen superior/inferior */
      padding: 20px;
      font-family: 'Poppins', sans-serif; /* Asegura consistencia fuente */
      color: #333;
      background-color: #f4f7f6; /* Fondo general suave */
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
    }
  
    .header-section {
      background: linear-gradient(to right, #ffffff, #e9f0f3); /* Gradiente suave */
      border-radius: 10px;
      padding: 25px;
      margin-bottom: 30px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      border-bottom: 3px solid var(--elsalvador-blue, #0047AB); /* Usa variable si está disponible */
    }
  
    .title {
      color: var(--dark-color, #2c3e50);
      margin-bottom: 25px;
      font-size: 2rem; /* Más grande */
      font-weight: 700;
      text-align: center;
    }
  
    .tracking-info {
      display: flex;
      flex-wrap: wrap;
      gap: 15px; /* Espacio reducido */
      justify-content: center;
      align-items: center; /* Alineación vertical */
    }
  
    .info-item {
      background: white;
      padding: 10px 18px; /* Ajuste padding */
      border-radius: 20px; /* Más redondeado */
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
      display: flex;
      align-items: center;
      gap: 10px;
      border: 1px solid #e0e0e0;
      font-size: 0.95rem; /* Ligeramente más pequeño */
    }
  
    .label {
      font-weight: 600;
      color: #555;
    }
  
    .value {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #333; /* Color de valor */
    }
  
    .flag-icon {
      width: 22px; /* Ajuste tamaño */
      height: 15px;
      border-radius: 3px; /* Más redondeado */
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
      object-fit: cover; /* Asegura que la bandera se vea bien */
    }
  
    .content-section {
        padding: 10px; /* Añade padding interno */
    }
  
    /* Estados */
    .loading-state {
      text-align: center;
      padding: 50px 20px;
      color: #666;
    }
  
    .spinner {
      width: 45px; /* Más pequeño */
      height: 45px;
      border: 4px solid #e0e0e0; /* Borde más claro */
      border-top: 4px solid var(--elsalvador-blue, #0047AB); /* Color primario */
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
      padding: 35px 25px;
      background: #fff2f2; /* Fondo error más suave */
      border-radius: 10px;
      border: 1px solid #ffcccc; /* Borde error */
      border-left: 5px solid #e74c3c; /* Barra lateral error */
      color: #5c2c2c; /* Texto oscuro para contraste */
    }
  
    .error-state i {
      color: #e74c3c;
      font-size: 2.5rem; /* Icono más grande */
      margin-bottom: 15px;
    }
  
    .error-state h3 {
      color: #c0392b; /* Título error más oscuro */
      margin-bottom: 10px;
      font-size: 1.3rem;
    }
  
    .error-state p {
        margin-bottom: 20px;
        line-height: 1.6;
    }
  
    .retry-button, .back-button {
      margin-top: 15px;
      padding: 12px 25px; /* Botones más grandes */
      color: white;
      border: none;
      border-radius: 25px; /* Botones redondeados */
      cursor: pointer;
      font-weight: 600;
      font-size: 0.95rem;
      transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
      display: inline-flex; /* Para alinear icono */
      align-items: center;
      gap: 8px; /* Espacio icono-texto */
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
    }
    .retry-button {
        background-color: var(--elsalvador-blue, #0047AB);
    }
    .retry-button:hover {
      background-color: #003a8c; /* Azul más oscuro */
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
    }
    .back-button {
        background-color: #6c757d; /* Gris secundario */
    }
     .back-button:hover {
      background-color: #5a6268;
      transform: translateY(-2px);
      box-shadow: 0 5px 12px rgba(0, 0, 0, 0.15);
    }
  
    /* Resultados */
    .results-container {
      /* No necesita fondo propio si .tracking-results-view ya tiene uno */
    }
  
    .status-card {
      background: #ffffff;
      border-radius: 10px;
      padding: 25px;
      margin-bottom: 30px;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
      border: 1px solid #e5e5e5;
      border-left-width: 6px; /* Borde izquierdo más grueso */
      /* Colores por defecto (si no coincide clase) */
      border-left-color: #6c757d;
    }
  
    /* Clases dinámicas para el borde */
    .status-card.en-transito,
    .status-card.asignada-guia-a-chofer /* Ejemplo de clase generada */
    {
      border-left-color: #f39c12; /* Naranja para tránsito */
    }
    .status-card.entregado {
      border-left-color: #2ecc71; /* Verde para entregado */
    }
    .status-card.recibido,
    .status-card.paquete-recibido-en-centro-de-distribucion /* Ejemplo */
     {
       border-left-color: #3498db; /* Azul para recibido/inicio */
     }
    .status-card.problema, .status-card.error {
      border-left-color: #e74c3c; /* Rojo para problemas */
    }
     /* Añade más clases según los estados que genere tu API */
    .status-card.en-proceso-de-clasificacion {
         border-left-color: #9b59b6; /* Morado para clasificación */
     }
     .status-card.en-ruta-hacia-destino-final {
         border-left-color: #1abc9c; /* Turquesa para en ruta */
     }
  
  
    .status-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px; /* Más espacio */
      border-bottom: 1px solid #eee;
      padding-bottom: 15px;
    }
  
     .status-header h3 {
         margin: 0;
         font-size: 1.4rem;
         color: var(--dark-color, #2c3e50);
     }
  
    .status-badge {
      padding: 6px 18px; /* Padding ajustado */
      border-radius: 20px;
      font-size: 0.85rem; /* Ligeramente más pequeño */
      font-weight: 700; /* Más bold */
      text-transform: uppercase; /* Mayúsculas */
      letter-spacing: 0.5px;
      background: #6c757d; /* Gris por defecto */
      color: white;
      white-space: nowrap; /* Evita que se parta */
    }
  
    /* Colores dinámicos para el badge */
    .status-card.en-transito .status-badge,
    .status-card.asignada-guia-a-chofer .status-badge
     { background: #f39c12; }
    .status-card.entregado .status-badge { background: #2ecc71; }
     .status-card.recibido .status-badge,
     .status-card.paquete-recibido-en-centro-de-distribucion .status-badge
      { background: #3498db; }
    .status-card.problema .status-badge, .status-card.error .status-badge { background: #e74c3c; }
     .status-card.en-proceso-de-clasificacion .status-badge { background: #9b59b6; }
     .status-card.en-ruta-hacia-destino-final .status-badge { background: #1abc9c; }
  
  
    .status-details {
      display: grid;
      gap: 15px;
      font-size: 1rem; /* Tamaño base */
    }
  
    .detail-item {
      display: flex;
      align-items: center;
      gap: 12px; /* Más espacio */
      color: #555;
    }
  
    .detail-item i {
      color: var(--elsalvador-blue, #0047AB); /* Color primario icono */
      width: 20px;
      text-align: center;
      font-size: 1.1rem; /* Icono más grande */
    }
  
    /* Timeline */
    .timeline-section {
      background: #ffffff;
      border-radius: 10px;
      padding: 25px;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
      border: 1px solid #e5e5e5;
    }
  
    .timeline-section h3 {
        margin-top: 0;
        margin-bottom: 25px;
        font-size: 1.4rem;
        color: var(--dark-color, #2c3e50);
        text-align: left; /* Alinear a la izquierda */
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
    }
  
    .timeline {
      position: relative;
      padding-left: 35px; /* Más espacio para el marcador */
      margin-top: 10px;
    }
  
    .timeline::before {
      content: '';
      position: absolute;
      left: 10px; /* Posición de la línea */
      top: 10px; /* Inicio de la línea */
      bottom: 10px; /* Fin de la línea */
      width: 3px; /* Línea más gruesa */
      background: #e0e0e0; /* Color línea */
      border-radius: 2px;
    }
  
    .timeline-item {
      position: relative;
      margin-bottom: 30px; /* Más separación */
    }
    /* Quitar margen inferior al último item */
    .timeline-item:last-child {
        margin-bottom: 0;
    }
  
    .timeline-marker {
      position: absolute;
      left: -35px; /* Ajustar a padding-left */
      top: 5px; /* Alineación vertical */
      width: 24px; /* Marcador más grande */
      height: 24px;
      border-radius: 50%;
      background: white; /* Fondo blanco */
      border: 3px solid var(--elsalvador-blue, #0047AB); /* Borde color primario */
      z-index: 1; /* Sobre la línea */
       box-shadow: 0 0 0 4px white; /* Efecto para separar de la línea */
    }
      /* Marcador diferente para el primer item (último evento) */
    .timeline-item:first-child .timeline-marker {
        background-color: var(--elsalvador-blue, #0047AB);
         border-color: white;
         box-shadow: 0 0 5px rgba(0, 71, 171, 0.5);
     }
  
    .timeline-content {
      background: #f8f9fa; /* Fondo contenido suave */
      padding: 18px 20px; /* Más padding */
      border-radius: 8px;
      border: 1px solid #eee;
      position: relative; /* Para posible flecha */
    }
      /* Flecha apuntando al marcador (opcional) */
     /* .timeline-content::before {
         content: "";
         position: absolute;
         left: -10px;
         top: 10px;
         border-style: solid;
         border-width: 8px 10px 8px 0;
         border-color: transparent #f8f9fa transparent transparent;
     } */
  
    .timeline-date {
      font-size: 0.8rem; /* Más pequeño */
      color: #777; /* Más gris */
      margin-bottom: 8px;
      font-weight: 600; /* Más bold */
      letter-spacing: 0.5px;
    }
  
    .timeline-event {
      font-weight: 500;
      margin-bottom: 5px;
      color: #333; /* Texto principal oscuro */
      line-height: 1.5; /* Mejor lectura */
    }
  
    /* .timeline-location {  (Si tu API lo incluyera)
      font-size: 0.85rem;
      color: #666;
    } */
  
    /* Sin resultados */
    .no-results {
      text-align: center;
      padding: 50px 20px;
      color: #777;
    }
  
    .no-results i {
      font-size: 3.5rem; /* Icono más grande */
      color: #bdc3c7; /* Color icono gris claro */
      margin-bottom: 25px;
    }
  
    .no-results h3 {
      color: #555;
      margin-bottom: 15px;
      font-size: 1.4rem;
    }
  
    .no-results p {
      margin-bottom: 25px;
      line-height: 1.6;
    }
     .no-results strong {
         color: #333; /* Destacar la guía buscada */
     }
  
    /* Responsive */
    @media (max-width: 768px) {
      .tracking-results-view {
          margin: 15px;
          padding: 15px;
      }
      .tracking-info {
        flex-direction: column;
        gap: 12px;
        align-items: stretch; /* Ocupar ancho */
      }
      .info-item {
        justify-content: space-between; /* Alinear texto e icono */
      }
      .title {
        font-size: 1.6rem;
      }
       .status-header h3, .timeline-section h3 {
            font-size: 1.2rem;
        }
         .status-badge {
             font-size: 0.8rem;
             padding: 5px 12px;
         }
    }
  
    @media (max-width: 480px) {
       .tracking-results-view {
          margin: 10px;
          padding: 10px;
        }
        .header-section, .status-card, .timeline-section {
            padding: 15px;
        }
         .title { font-size: 1.4rem; }
         .info-item { font-size: 0.9rem; }
         .flag-icon { width: 20px; height: 13px; }
  
      .status-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
      .status-badge {
          align-self: flex-start; /* Alinear a la izquierda */
      }
      .detail-item { font-size: 0.9rem; gap: 8px; }
       .detail-item i { font-size: 1rem; }
  
       .timeline { padding-left: 25px; }
       .timeline-marker { left: -25px; width: 20px; height: 20px; border-width: 2px; box-shadow: 0 0 0 3px white; }
       .timeline-item:first-child .timeline-marker { box-shadow: 0 0 4px rgba(0, 71, 171, 0.4); }
      .timeline-content { padding: 12px 15px; }
       .timeline-date { font-size: 0.75rem; }
       .timeline-event { font-size: 0.9rem; }
  
       .no-results i { font-size: 3rem; }
       .no-results h3 { font-size: 1.2rem; }
       .no-results p { font-size: 0.9rem; }
       .retry-button, .back-button { width: 100%; justify-content: center; padding: 12px; } /* Botones ancho completo */
       .error-state { padding: 20px 15px; }
       .error-state i { font-size: 2rem; }
       .error-state h3 { font-size: 1.1rem; }
    }
    .text-center {
        text-align: center;
    }
  </style>