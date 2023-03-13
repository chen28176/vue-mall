/*
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-07 15:30:51
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-07 20:22:30
 * @Description: 
 */
// 时间插件
import dayjs from "dayjs";

export function  formatMonthDay(date,formatStr = "MM月DD日") {
    return dayjs(date).format(formatStr)
}

export function getDiffDays(startDate,endDate){
    return dayjs(endDate).diff(startDate,'day')
}