<!--
 * @Date: 2022-11-22 21:41:57
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-22 22:26:10
 * @Description: 这是****文件
-->
<template>
  <van-tabs v-model:active="active" @click-tab="onClickTab">
    <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import navList from '@/mock/data/navList'
import axios from 'axios'

const active = ref(0)
// TS 的接口
interface INavItem {
  id: number,
  text: string
}
// 定义list的格式
const list = ref<INavItem[]>([])
const getNavList = async () => {
  const res = await axios.get('/navList')
  const { result = [] } = res.data
  list.value = result
}
onMounted(() => {
  getNavList()
})
list.value = navList

// 切换tab
const onClickTab = (value: any) => {
  console.log(value, 'value')
}
</script>

<style lang="less" scoped></style>
