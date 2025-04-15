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

    
</template>

<style setup>

</style>