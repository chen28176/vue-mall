/*
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-08 15:40:54
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-08 16:09:32
 * @Description: 
 */
import { defineStore } from 'pinia'
import { getManageDate } from "@/services"


const useManageStore = defineStore("home", {
    state: () => ({
        Manage: [],
    }),
    actions: {
        async getManage() {
            const res = await getManageDate()
            this.Manage = res
        },
    },
})
export default useManageStore