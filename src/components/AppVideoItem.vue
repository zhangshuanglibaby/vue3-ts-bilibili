<!--
 * @Date: 2022-11-26 19:32:04
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 22:04:34
 * @Description: 这是****文件
-->
<template>
  <router-link class="v-card" :to="`/video/${video.id}`" @click="hanldeJump">
    <div class="card">
      <div class="card-img-wrap">
        <img class="card-img" :src="video.imgSrc" alt="">
      </div>
      <div class="count">
        <span>
          <i class="iconfont icon-shipinbofangliang"></i>
          {{ video.playCount }}
        </span>
        <span>
          <i class="iconfont icon-danmu"></i>
          {{ video.commentCount }}
        </span>
      </div>
    </div>
    <p class="title">{{ video.desc }}</p>
  </router-link>
</template>
<script lang="ts" setup>
import {
  defineProps, defineEmits, PropType, onMounted
} from 'vue'
import { IVideoItem } from '@/views/Video/types'
// 父传子的值需要通过defineProps接收
const propsData = defineProps({
  video: {
    // Object为VIdeoItem的接口格式
    // 需要定义这个接口类型，需要导入ProType
    type: Object as PropType<IVideoItem>,
    required: true
  }
})
onMounted(() => {
  console.log(propsData.video, 'videodiveo')
})
const emit = defineEmits(['jump'])
const hanldeJump = () => {
  emit('jump')
}
</script>
<style lang="less">
.v-card {
  width: 50%;
  padding: 10px;
  font-size: 24px;
  .card {
    position: relative;
    background: #f3f3f3 url('~@/assets/images/default.png') center no-repeat;
    background-size: 36%;
    border-radius: 4px;
    overflow: hidden;
  }
  .card-img {
    object-fit: cover;
  }
  .count {
    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(0deg, #000000d9, #0000);
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    padding: 6px;
  }
  .title {
    margin-top: 5px;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
