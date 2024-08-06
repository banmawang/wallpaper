<script setup lang="ts">
import { Pic, SettingTwo } from '@icon-park/vue-next'
</script>

<template>
  <main class="px-3 py-2 text-sm opacity-80 flex justify-between items-center drag">
    <section class="text-xs opacity-80">斑马兽桌面壁纸</section>
    <section class="flex items-center justify-center gap-2">
      <pic
        theme="outline"
        size="20"
        class="cursor-pointer no-drag text-gray-500"
        :class="{ iconColor: $route.name == 'home' }"
        @click="$router.push({ name: 'home' })"
      />
      <setting-two
        theme="outline"
        size="20"
        class="cursor-pointer no-drag text-gray-500"
        :class="{ iconColor: $route.name == 'setting' }"
        @click="$router.push({ name: 'setting' })"
      />
    </section>
  </main>
</template>

<style lang="scss">
.iconColor {
  color: #d35400 !important;
}
</style>
