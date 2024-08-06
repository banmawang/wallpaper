<script setup lang="ts">
import useWallpaper from '@renderer/composable/useWallpaper'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
const { setImageSaveDirectory } = useWallpaper()
</script>

<template>
  <main class="p-3 bg-[#34495e] text-white flex flex-col justify-between">
    <section class="mt-6">
      <h2 class="flex justify-center py-5 opacity-70 text-sm">参数设置</h2>
      <div class="flex gap-1 items-center">
        <el-input
          v-model="config.saveDirectory"
          readonly
          placeholder="请选择壁纸保存目录"
          size="normal"
          clearable
        />
        <el-button type="primary" size="default" @click="setImageSaveDirectory"
          >选择图片保存目录</el-button
        >
      </div>
    </section>
    <div class="text-xs opacity-30 font-mono font-light flex justify-center mb-5">斑马兽作品</div>
  </main>
</template>

<style lang="scss"></style>
