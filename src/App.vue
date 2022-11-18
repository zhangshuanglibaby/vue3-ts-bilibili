<template>x
  <div class="box"></div>
  <van-rate />
  <van-icon name="cart-o" color="#1989fa" />
  <van-button type="primary">主要按钮</van-button>
  <router-view />
</template>

<script lang="ts">
</script>

<style lang="less">
.box {
  width: 100px;
  height: 100px;
  background: pink;
}
</style>
