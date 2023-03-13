/*
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-08 15:41:18
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-08 15:53:03
 * @Description: 
 */
import hyRequset from '../request'
// 封装用户列表
export function getManageDate() {
    return hyRequset.get({
        url:"/users"
    })
}
