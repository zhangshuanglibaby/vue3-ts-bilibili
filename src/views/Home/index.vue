<!--
 * @Date: 2022-11-21 20:30:56
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-25 22:02:36
 * @Description: 这是****文件
-->
<template>
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 频道组件 -->
  <HomeChannel />
  <!-- 轮播组件 -->
  <HomeSwiper />
</template>

<script setup lang="ts">
import AppHeader from '@/components/appHeader.vue'
import HomeChannel from '@/views/Home/components/HomeChannel.vue'
import HomeSwiper from '@/views/Home/components/HomeSwiper.vue'
</script>

<style lang="less"></style>
