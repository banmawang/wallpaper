<script setup lang="ts">
import { ElLoading } from 'element-plus'
import { ref } from 'vue'

const img = ref<HTMLImageElement>()
const load = () => {
  const loading = ElLoading.service({ background: 'rgba(255,255,255,.2)' })
  img.value!.src = `http://localhost:3000?k${Math.random()}`
  img.value!.addEventListener('load', () => {
    loading.close()
  })
}
</script>

<template>
  <main class="">
    <img
      ref="img"
      src="http://localhost:3000/wallpaper/fiona-PEJHMgx_ilo-unsplash.jpg"
      class="aspect-video no-drag cursor-pointer"
      draggable="false"
      @click="load"
    />
    <div
      class="cursor-pointer bg-gray-200 text-center py-3 m-3 rounded-lg hover:bg-gray-300 duration-500 opacity-80 shadow-sm no-drag"
    >
      设为壁纸
    </div>
    <div class="mx-3 text-xs text-gray-700 flex justify-between items-center">
      <div class="">作者：何俊</div>
      <div class="hover:font-bold cursor-pointer text-sm no-drag">下载壁纸</div>
    </div>
  </main>
</template>

<style lang="scss"></style>
