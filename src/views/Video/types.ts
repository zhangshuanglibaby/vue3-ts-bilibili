/*
 * @Date: 2022-11-27 19:50:40
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-27 22:41:19
 * @Description: 这是****文件
 */
// 定义video-info结构
// eslint-disable-next-line
export interface IVideoInfo {
  id?: string
  videoSrc?: string
  poster?: string
  videoTitle?: string
  author?: string
  authorIconSrc?: string
  playCount?: string
  likeCount?: string
  favCount?: string
  commentCount?: number
  date?: string
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

// 定义comment-item结构
export interface IComemnt {
  id: string
  avatar: string
  username: string
  content: string
  date: string
}
