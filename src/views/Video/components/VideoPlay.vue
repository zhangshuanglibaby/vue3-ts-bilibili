<!--
 * @Date: 2022-11-27 19:47:28
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 20:37:14
 * @Description: 这是****文件
-->
<template>
  <div class="videoPlay">
    <video
      class="video"
      controls
      :src="videoInfo.videoSrc"
      :poster="videoInfo.poster">
      <track default
           kind="captions"
           srclang="en"
           src="" />
    </video>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IVideoInfo } from '@/views/Video/types'

// 接受父传过来的参数
const propsData = defineProps({
  videoInfo: {
    type: Object as PropType<IVideoInfo>,
    required: true
  }
})
console.log(propsData.videoInfo, 'propsDatapropsData')
</script>
<style lang="less" scoped>
.videoPlay {
  background: #000;
  .video {
    width: 100%;
    min-height: 420px;
  }
}
</style>
