<template>
    <div class="contacto-page py-5">
      <div class="container">
        <div class="row">
          <!-- 📍 Dirección y mapa -->
          <div class="col-lg-5 pb-4 pb-lg-0">
            <div class="text-white text-center p-4 bg-danger rounded mb-3">
              <h4 class="m-0">
                <i class="fa fa-map-marker-alt mr-2"></i>
                701 Atando Ave Suite T, Charlotte, NC 28206
              </h4>
            </div>
            <iframe
              style="width: 100%; height: 470px; border: none; border-radius: 8px;"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3257.87154988322..."
              allowfullscreen
            ></iframe>
          </div>
  
          <!-- ✉️ Formulario -->
          <div class="col-lg-7">
            <h6 class="text-danger text-uppercase fw-bold">Contáctanos</h6>
            <h1 class="mb-4">Escríbenos cualquier pregunta</h1>
  
            <form @submit.prevent="submitForm" class="bg-light p-4 rounded shadow-sm">
              <div class="mb-3">
                <input v-model="form.nombre" type="text" class="form-control" placeholder="Tu Nombre" required />
              </div>
              <div class="mb-3">
                <input v-model="form.email" type="email" class="form-control" placeholder="Tu Email" required />
              </div>
              <div class="mb-3">
                <input v-model="form.whatsapp" type="text" class="form-control" placeholder="Tu número de Whatsapp" required />
              </div>
              <div class="mb-3">
                <textarea v-model="form.mensaje" class="form-control" rows="4" placeholder="Mensaje" required></textarea>
              </div>
              <button type="submit" class="btn btn-danger w-100 py-2">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const form = ref({
    nombre: '',
    email: '',
    whatsapp: '',
    mensaje: ''
  })
  
  const submitForm = () => {
    // Aquí puedes conectar con tu backend o mostrar alerta
    console.log('Enviado:', form.value)
  
    alert(`Mensaje enviado por ${form.value.nombre} ✅`)
    // Limpieza:
    form.value = { nombre: '', email: '', whatsapp: '', mensaje: '' }
  }
  </script>
  
  <style scoped>
  .contacto-page {
    background-color: #f8f9fa;
  }
  
  form input,
  form textarea {
    border-radius: 8px;
    border: 1px solid #ccc;
  }
  
  form input:focus,
  form textarea:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
  }
  </style>
  