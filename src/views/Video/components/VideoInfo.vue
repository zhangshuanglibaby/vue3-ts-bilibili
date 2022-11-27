<!--
 * @Date: 2022-11-27 21:01:23
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 21:33:56
 * @Description: 这是****文件
-->
<template>
  <div class="video-info">
    <div class="title">{{ videoInfo.videoTitle }}</div>
    <div class="author-info">
      <div class="author">
        <img class="author-avator" :src="videoInfo.authorIconSrc" alt="">
        <span class="author-name">{{ videoInfo.author}}</span>
      </div>
      <span>{{ videoInfo.playCount }}观看</span>
      <span>
        <i class="iconfont icon-dianzan_kuai"></i>
        <span>{{ videoInfo.likeCount }}</span>
      </span>
      <span>
        <i class="iconfont icon-shoucangxuanzhong"></i>
        <span>{{ videoInfo.favCount }}</span>
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { IVideoInfo } from '@/views/Video/types'
// 接收父组件传来的props
const propsData = defineProps({
  videoInfo: {
    type: Object as PropType<IVideoInfo>,
    required: true
  }
})
console.log(propsData, 'propsData')
</script>
<style lang="less" scoped>
.video-info {
  padding: 24px 30px;
  border: 1px solid #ddd;
  .title {
    font-size: 30px;
    line-height: 30px;
    margin: 24px 0;
  }
  .author-info {
    display: flex;
    align-items: center;
    font-size: 24px;
    color: #999;
    .author {
      flex: 1;
      .author-avator {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        object-fit: cover;
        margin: 0 6px;
        background: url('~@/assets/images/default.png') center no-repeat #e7e7e7;
      }
      .author-name {
        color: #212121;
        line-height: 36px;
      }
    }
    >span {
      margin: 0 15px;
    }
    .iconfont {
      color: #757575;
      margin-right: 6px;
    }
  }
}
</style>
