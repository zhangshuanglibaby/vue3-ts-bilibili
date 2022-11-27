<!--
 * @Date: 2022-11-27 21:39:04
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 22:44:38
 * @Description: 这是****文件
-->
<template>
  <div class="comment" v-for="item in commentList" :key="item.id">
    <div class="comment-head">
      <img class="avatar" :src="item.avatar" alt="">
    </div>
    <div class="comment-body">
      <p class="username">{{ item.username}}</p>
      <p class="date">{{ item.date }}</p>
      <p class="content">{{ item.content }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { IComemnt } from '@/views/Video/types'

const commentList = ref<IComemnt[]>([])

// 获取评论列表
const getCommentList = async () => {
  const res = await axios.get('/commentsList')
  const { result = [] } = res.data
  commentList.value = result
  console.log(res, 'getCommentList')
}
onMounted(() => {
  getCommentList()
})

</script>
<style lang="less" scoped>
.comment {
  display: flex;
  font-size: 26px;
  padding: 30px;
  line-height: 1.5;
  .comment-head {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 30px;
  }
  .comment-body {
    flex: 1;
  }
  .username {
    color: #757575;
  }
  .date {
    font-size: 12px;
    color: #999;
  }
  .content {
    color: #212121;
    margin-top: 22px;
  }
}
</style>
