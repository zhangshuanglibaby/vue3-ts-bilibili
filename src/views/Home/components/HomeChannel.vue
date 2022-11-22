<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import navList from '@/mock/data/navList'

const active = ref(0)
// TS 的接口
interface INavItem {
  id: number,
  text: string
}
// 定义list的格式
const list = ref<INavItem[]>([])
list.value = navList
</script>

<style lang="less" scoped></style>
