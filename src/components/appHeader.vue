<!--
 * @Date: 2022-11-21 20:30:56
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 17:00:45
 * @Description: 这是****文件
-->
<template>
  <header class="app-header">
    <!-- logo -->
    <div class="logo">
      <i class="iconfont icon-bilibili"></i>
    </div>
    <!-- 搜索 -->
    <!-- eslint-disable-next-line -->
    <div class="search" @click="handleJump">
      <i class="iconfont icon-sousuo"></i>
    </div>
    <!-- 头像 -->
    <div class="face">
      <img :src="require('../assets/images/login.png')" alt="">
    </div>
    <!-- 下载按钮 -->
    <div class="down-app">
      <a href="https://dl.hdslb.com/mobile/fixed/bili_win/bili_win-install.exe?t=20220722&spm_id_from=333.47.b_646f776e6c6f61642d6c696e6b.9">
        下载app
      </a>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const myRouter = useRouter()
const handleJump = () => {
  myRouter.push({ path: '/search' })
}
</script>

<style scoped lang="less">
.app-header {
  display: flex;
  align-items: center;
  background: #fff;
  padding: 16px 24px;
  .logo {
    flex: 1;
    .icon-bilibili {
      color: #fb7299;
      font-size: 56px;
    }
  }
  .search {
    .icon-sousuo {
      color: #ccc;
      font-size: 44px;
    }
  }
  .face {
    padding: 0 30px;
    img {
      width: 48px;
      height: 48px;
    }
  }
  .down-app {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #fff;
    background-color: #fb7299;
    padding: 10px 20px;
    border-radius: 10px;
  }
}
</style>
