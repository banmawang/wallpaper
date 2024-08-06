<script setup lang="ts">
import useWallpaper from '@renderer/composable/useWallpaper'
import { useConfigStore } from '@renderer/store/useConfigStore'
const { config } = useConfigStore()
const { setImageSaveDirectory } = useWallpaper()
</script>

<template>
  <main class="p-10 bg-[#34495e] text-white flex flex-col justify-between">
    <section class="font-mono">
      <h2 class="flex justify-center py-5 opacity-70">软件配置</h2>
      <div class="flex gap-2 items-center">
        <el-input
          v-model="config.saveDirectory"
          readonly
          placeholder="请选择壁纸保存目录"
          size="normal"
          clearable
        />
        <el-button type="primary" size="default" @click="setImageSaveDirectory">选择目录</el-button>
      </div>
    </section>
    <div class="text-xs font-mono font-light text-center">
      <div class="text-orange-300">
        斑马兽作品
        <span class="font-bold text-yellow-500">作者：何俊</span>
      </div>
      <div class="mt-2 opacity-50">version:1.0.1</div>
    </div>
  </main>
</template>

<style lang="scss"></style>
