import Mock from 'mockjs'
// 数据
import navList from './data/navList'
import swiperList from './data/swiperList'
import videosList from './data/videosList'
import recommendList from './data/recommendList'
import commentsList from './data/commentsList'
import videoDetailList from './data/videoDetailList'

// mock的配置
Mock.setup({
  // 随机延时50-1000毫秒
  timeout: '50-1000'
})

Mock.mock('/navList', 'get', () => {
  return {
    code: 0,
    result: navList
  }
})

Mock.mock('/swiperList', 'get', () => {
  return {
    code: 0,
    result: swiperList
  }
})

Mock.mock('/videosList', 'get', () => {
  return {
    code: 0,
    result: videosList
  }
})

Mock.mock('/recommendList', 'get', () => {
  return {
    code: 0,
    result: recommendList
  }
})

Mock.mock('/commentsList', 'get', () => {
  return {
    code: 0,
    result: commentsList
  }
})

Mock.mock('/videoDetailList', 'get', () => {
  return {
    code: 0,
    result: videoDetailList
  }
})