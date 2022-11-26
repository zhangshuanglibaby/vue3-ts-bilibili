<!--
 * @Date: 2022-11-25 22:00:51
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-26 19:14:44
 * @Description: 这是****文件
-->
<template>
  <van-swipe
    ref="swipeRef"
    class="my-swipe"
    :autoplay="autoplay"
    indicator-color="white"
    lazy-render
    @change="onSwiperChange"
    @click="onSwiperClick">
    <van-swipe-item v-for="item in list" :key="item.imgSrc">
      <img :src="item.imgSrc" alt="biliblibi">
    </van-swipe-item>
    <template #indicator="{ active }">
      <div class="indicator-wrap">
        <!-- eslint-disable -->
        <div
          class="indicator-item"
          :class="{ acitveClass: item === (active + 1)}"
          v-for="item in list.length"
          :key="item"
          @click.stop="onIndicatorClick(item)"></div>
      </div>
    </template>
  </van-swipe>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { SwipeInstance } from 'vant'
import axios from 'axios'
import { swiperAutoPlay } from './constant'
// ts定义接口
interface IsSwiper {
  link: string,
  imgSrc: string
}

const list = ref<IsSwiper[]>([])

const getSwiperList = async () => {
  const res = await axios.get('/swiperList')
  const { result = [] } = res.data
  list.value = result
}
onMounted(() => {
  getSwiperList()
})
// 获取轮播组件实例
const swipeRef = ref<SwipeInstance>()
// 定义自动轮播时常
const autoplay = ref<number>(swiperAutoPlay.PALY)
// 监听轮播图的切换事件
const onSwiperChange = (index: number) => {
  // console.log(index, 'value')
  // 切换轮播图重新开启自动轮播
  autoplay.value = swiperAutoPlay.PALY
}
// 轮播图的点击事件
const onSwiperClick = (event: any) => {
  console.log(event, 'event')
}
// 指示器的点击事件
const onIndicatorClick = (index: number) => {
  swipeRef.value?.swipeTo(index - 1)
  // 暂停自动轮播
  autoplay.value = swiperAutoPlay.STOP
  // console.log(swipeRef.value?.swipeTo, 'swipeRef')
}

</script>
<style lang="less">
.indicator-wrap {
  display: flex;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: aqua;
  .indicator-item {
    width: 20px;
    height: 6px;
    background: white;
    margin: 0 10px;
    border-radius: 3px;
  }
  .acitveClass {
    background-color: rgba(0, 0, 0, .4);
  }
}
</style>
