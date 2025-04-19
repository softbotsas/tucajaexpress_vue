<template>
    <!-- Header Start -->
    <div class="jumbotron2 jumbotron-fluid mb-5">
        <div class="container text-center py-5">
            <h1 class="text-primary mb-4">Puerta a puerta</h1>
            <h1 class="text-white display-3 mb-5">Paqueteria Mexico y Centroamerica</h1>
            <div class="mx-auto" style="width: 100%; max-width: 600px;">
                <div class="input-group">
                    <input v-model="numero_guia" type="text" class="form-control border-light" style="padding: 30px;" placeholder="Tu guía de Envio">
                    <div class="input-group-append">

                     <button @click="llamar_al_rastreo" class="btn btn-primary px-3" >Rastrea tu Paquete</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Header End -->
         <!-- Services Start -->
    <div class="container-fluid pt-5">
        <div class="container">
            <div class="text-center pb-2">
                <h6 class="text-primary text-uppercase font-weight-bold">Nuestros Servicios</h6>
                <h1 class="mb-4">Nuestra Logística</h1>
            </div>
            <div class="row pb-3">
                <div class="col-lg-3 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i class="fa fa-2x fa-globe text-dark pr-3"></i>
                        <h6 class="text-white font-weight-medium m-0">Cotiza via web</h6>
                    </div>
                    <p>Realiza una cotización para estimar el monto y las fechas de recogida.</p>
                    <a class="border-bottom text-decoration-none" href="">Leer mas...</a>
                </div>

                <div class="col-lg-3 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i class="fa fa-2x fa-phone-volume text-dark pr-3"></i>
                        <h6 class="text-white font-weight-medium m-0">Solicita Recogida</h6>
                    </div>
                    <p>Llama a nuestra línea de atención al cliente en nuestros horarios y solicita tu recogida.</p>
                    <a class="border-bottom text-decoration-none" href="">Leer mas...</a>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i class="fa fa-2x fa-truck text-dark pr-3"></i>
                        <h6 class="text-white font-weight-medium m-0">Transporte Terrestre</h6>
                    </div>
                    <p>Tenemos cientos de rutas semanales a lo largo de todo el territorio  de la unión americana</p>
                    <a class="border-bottom text-decoration-none" href="">Leer mas...</a>
                </div>
                <div class="col-lg-3 col-md-6 text-center mb-5">
                    <div class="d-flex align-items-center justify-content-center bg-primary mb-4 p-4">
                        <i class="fa fa-2x fa-plane text-dark pr-3"></i>
                        <h6 class="text-white font-weight-medium m-0">Envios Aereos</h6>
                    </div>
                    <p>Para mayor rapidez en nuestros envíos, contamos con múltiples envíos aéreos a la mayoría de los destinos.</p>
                    <a class="border-bottom text-decoration-none" href="">Leer mas...</a>
                </div>
                
                
               
                
            </div>
        </div>
    </div>
    <!-- Services End -->
    <MapaInteractivo/>
    
</template>

<style setup>

</style>
<script setup>
import MapaInteractivo from '@/components/MapaInteractivo.vue';
</script>