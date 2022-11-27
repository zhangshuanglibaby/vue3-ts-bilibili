<!--
 * @Date: 2022-11-27 21:39:56
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 22:20:46
 * @Description: 这是****文件
-->
<template>
  <div class="recommendList">
		<AppVideoItem v-for="item in list" :key="item.id" :video="item" />
  </div>
</template>
<script lang="ts" setup>
import axios from 'axios';
import { ref, onMounted } from 'vue'
import { IVideoItem } from '@/views/Video/types'
import AppVideoItem from '@/components/AppVideoItem.vue'

// 定义数据
const list = ref<IVideoItem[]>([])
// 获取推荐视频列表
const getRecommendLsit = async () => {
  const res = await axios.get('/recommendList')
  const { result = [] } = res.data
  list.value = result
  console.log(res, 'getRecommendLsit')
}
onMounted(() => {
  getRecommendLsit()
})
</script>
<style lang="less" scoped>
.recommendList {
  display: flex;
  flex-wrap: wrap;
	padding: 0 6px;
}
</style>
