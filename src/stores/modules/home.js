/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-07 18:00:59
 * @Description: 
 */
import { defineStore } from 'pinia'
import { getHomeHotDate } from "@/services"


const useHomeStore = defineStore("home", {
    state: () => ({
        home_data: {}
    }),
    actions: {
        async fetchHotSuggestData() {
            const res = await getHomeHotDate()
            this.home_data = res
        },
    },
})
export default useHomeStore