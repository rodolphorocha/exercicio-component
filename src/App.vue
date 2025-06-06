<script setup>
import footerComponent from './components/footerComponent.vue'
import headerComponent from './components/headerComponent.vue'

</script>

<template>

  <headerComponent @show-cart="showCart = !showCart"></headerComponent>
    <main>
    <RouterView></RouterView>
    </main>
  <footerComponent></footerComponent>
</template>



