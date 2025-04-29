<template>
  <div>
    <HeaderNav />
    <router-view />

        <!-- Menú móvil global -->
        <WhatsappButtom />
      <MenuMovil :isOpen="isOpen" :toggleMenu="toggleMenu" :closeMenu="closeMenu" />
      <PreguiaComp />

      <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import MenuMovil from '@/components/MenuMovil.vue'
import Footer from './components/Footer.vue'
import PreguiaComp from './components/PreguiaComp.vue'
import WhatsappButtom from './components/WhatsappButtom.vue'

const isOpen = ref(false)
const toggleMenu = () => isOpen.value = !isOpen.value
const closeMenu = () => isOpen.value = false
</script>
