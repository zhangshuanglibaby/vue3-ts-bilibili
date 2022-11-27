/*
 * @Date: 2022-11-22 21:41:57
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 20:21:41
 * @Description: 这是****文件
 */
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

Mock.mock('/navList', 'get', { code: 0, result: navList })

Mock.mock('/swiperList', 'get', { code: 0, result: swiperList })

Mock.mock('/videosList', 'get', { code: 0, result: videosList })

Mock.mock('/recommendList', 'get', { code: 0, result: recommendList })

Mock.mock('/commentsList', 'get', { code: 0, result: commentsList })

interface IMockConfig {
  body: string | null
  type: string
  url: string
}
Mock.mock(/\/videoDetail/, 'get', ({ url }: IMockConfig) => {
  console.log(url, 'rurl')
  const queryStr = url.split('?')[1]
  // new URLSearchParams 可以巧妙的处理url的参数
  const queryObj = new URLSearchParams(queryStr)
  const id = queryObj.get('id')
  return Mock.mock({
    code: 0,
    result: () => videoDetailList.find((item) => item.id === id)
  })
})
