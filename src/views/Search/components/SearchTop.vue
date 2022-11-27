<!--
 * @Date: 2022-11-27 16:40:59
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 17:11:20
 * @Description: 这是****文件
-->
<template>
  <form action="/">
    <van-search
      v-model="value"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
    />
  </form>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Toast } from 'vant'

const value = ref<string>()
// 搜索
const onSearch = (val:string|undefined) => Toast(val)
// 取消
const onCancel = () => Toast('取消')
</script>
<style lang="less" scoped>
/deep/.van-search__action {
  color: #fb7299;;
}
</style>
