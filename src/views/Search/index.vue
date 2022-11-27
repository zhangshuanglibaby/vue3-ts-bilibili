<!--
 * @Date: 2022-11-21 20:30:56
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 17:17:44
 * @Description: 这是****文件
-->
<template>
  <div class="search">
    <!-- 顶部搜索 -->
    <SearchTop />
    <!-- 暂无内容图片 -->
    <ImageMain />
  </div>
</template>

<script setup lang="ts">
import SearchTop from '@/views/Search/components/SearchTop.vue'
import ImageMain from '@/views/Search/components/ImageMain.vue'
</script>

<style lang="less">
.search {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
