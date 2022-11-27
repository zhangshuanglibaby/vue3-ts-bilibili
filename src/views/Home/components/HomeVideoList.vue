<!--
 * @Date: 2022-11-26 19:23:05
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 14:54:38
 * @Description: 这是****文件
-->
<template>
  <div class="videoList">
    <!-- 视频item -->
    <AppVideoItem v-for="item in list" :key="item.id" :video="item" @jump="handleJump" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import AppVideoItem from '@/components/AppVideoItem.vue'
import { IVideoItem } from './constant'

const list = ref<IVideoItem[]>([])
const getList = async () => {
  const res = await axios.get('/videosList')
  const { result = [] } = res.data
  list.value = result
}
onMounted(() => {
  getList()
})
const handleJump = () => {
  console.log('惦记了跳转')
}
</script>

<style lang="less">
.videoList {
  display: flex;
  flex-wrap: wrap;
}
</style>
