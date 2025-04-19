<template>
  <div>
    <HeaderNav />
    <router-view />

        <!-- Menú móvil global -->
        
      <MenuMovil :isOpen="isOpen" :toggleMenu="toggleMenu" :closeMenu="closeMenu" />
      <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import HeaderNav from './components/HeaderNav.vue'
import MenuMovil from '@/components/MenuMovil.vue'
import Footer from './components/Footer.vue'

const isOpen = ref(false)
const toggleMenu = () => isOpen.value = !isOpen.value
const closeMenu = () => isOpen.value = false
</script>
