/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-07 16:21:51
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 16:30:45
 * @Description: 
 */
import hyRequset from '../request'
// 封装热门建议请求
export function getHomeHotDate() {
    return hyRequset.get({
        url:"/posts/1"
    })
}
