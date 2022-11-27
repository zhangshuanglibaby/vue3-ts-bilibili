<!--
 * @Date: 2022-11-21 20:30:56
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 21:52:52
 * @Description: 这是****文件
-->
<template>
  <!-- 头部 -->
  <AppHeader />
  <!-- 视频播放 -->
  <VideoPlay :videoInfo="videoInfo" />
  <!-- 视频详情 -->
  <VideoInfo :videoInfo="videoInfo" />
  <!-- 相关评论/推荐  -->
  <VideoChannel />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import AppHeader from '@/components/AppHeader.vue'
import VideoPlay from '@/views/Video/components/VideoPlay.vue'
import VideoInfo from '@/views/Video/components/VideoInfo.vue'
import VideoChannel from '@/views/Video/components/VideoChannel.vue'
import { IVideoInfo } from '@/views/Video/types'

const videoInfo = ref<IVideoInfo>({})
// 获取路由信息
const route = useRoute()
// console.log(route.params, 'route')
// 获取视频信息
const getVideoInfo = async () => {
  const res = await axios({ url: '/videoDetailList', method: 'get', params: { id: route.params.id } })
  console.log(res, 'res')
  const { result = {} } = res.data
  videoInfo.value = result
}
onMounted(() => {
  getVideoInfo()
})
</script>

<style lang="less"></style>
