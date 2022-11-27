/*
 * @Date: 2022-11-26 16:23:15
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 14:39:43
 * @Description: 这是定义Home文件常量文件
 */

// 自动轮播的枚举
// eslint-disable-next-line
export const enum swiperAutoPlay {
  PALY = 3000,
  STOP = 0
}
// 定义video-item结构
export interface IVideoItem {
  id: number
  imgSrc: string
  desc: string
  playCount: string
  commentCount: string
  videoSrc: string
}
