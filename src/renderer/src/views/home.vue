<script setup lang="ts">
import useWallpaper from '@renderer/composable/useWallpaper'
import { http } from '@renderer/plugins/axios'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ElLoading } from 'element-plus'
import { onMounted, ref } from 'vue'
const { setWallpaper } = useWallpaper()
const configStore = useConfigStore()
const img = ref<HTMLImageElement>()
const load = async () => {
  const res = await http.get('/')
  const loading = ElLoading.service({ background: 'rgba(255,255,255,.2)' })
  configStore.config.url = res.data
  img.value!.src = res.data
  img.value!.addEventListener('load', () => {
    loading.close()
  })
}
onMounted(() => {
  if (!configStore.config.url) load()
})
</script>

<template>
  <main class="select-none font-mono">
    <img
      ref="img"
      :src="configStore.config.url"
      class="aspect-video no-drag cursor-pointer"
      draggable="false"
      @click="load"
    />
    <div
      class="cursor-pointer bg-white opacity-100 hover:opacity-80 text-center py-3 m-3 rounded-lg hover:shadow-sm duration-500 no-drag"
      @click="setWallpaper"
    >
      设为壁纸
    </div>
    <div class="mx-3 text-xs text-orange-500 flex justify-center items-center">
      <div class="">一张漂亮的壁纸，营造美好的心情</div>
      <!-- <div class="hover:font-bold cursor-pointer text-sm no-drag" @click="downloadImage">
        下载壁纸
      </div> -->
    </div>
  </main>
</template>

<style lang="scss"></style>
