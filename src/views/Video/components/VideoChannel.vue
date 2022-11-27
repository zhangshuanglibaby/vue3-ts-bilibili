<!--
 * @Date: 2022-11-27 20:59:43
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 22:16:41
 * @Description: 这是****文件
-->
<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in navList" :key="item.value" :title="item.title">
      <component :is="item.component"></component>
    </van-tab>
  </van-tabs>
</template>
<script lang="ts" setup>
import { ComponentOptions, markRaw, ref } from 'vue'
import VideoRecommend from '@/views/Video/components/VideoRecommend.vue'
import VideoComment from '@/views/Video/components/VideoComment.vue'
// 定义标签结构
interface INavItem {
  value: number,
  title: string,
  component: ComponentOptions
}
const navList = ref<INavItem[]>([
  { value: 0, title: '推荐', component: markRaw(VideoRecommend) },
  { value: 1, title: '评论', component: markRaw(VideoComment) },
])
const active = ref<number>(0)
</script>
<style lang="less" scoped></style>
