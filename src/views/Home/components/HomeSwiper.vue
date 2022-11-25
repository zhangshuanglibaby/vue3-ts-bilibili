<!--
 * @Date: 2022-11-25 22:00:51
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-25 22:12:41
 * @Description: 这是****文件
-->
<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in list" :key="item.imgSrc">
      <img :src="item.imgSrc" alt="biliblibi">
    </van-swipe-item>
  </van-swipe>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
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

</script>
<style lang="less"></style>
