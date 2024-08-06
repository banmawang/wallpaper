<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Suspense>
    <main class="flex flex-col h-screen">
      <Navbar />
      <RouterView v-slot="{ Component }">
        <component :is="Component" class="flex-1"></component>
      </RouterView>
    </main>
  </Suspense>
</template>

<style lang="scss"></style>
