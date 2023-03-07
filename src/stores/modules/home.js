/*
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-02-23 22:10:10
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 17:24:37
 * @Description: 
 */
import { getHomeHotDate } from "@/services"
import { defineStore } from 'pinia'

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