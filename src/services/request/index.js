/*
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-07 16:21:51
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-13 19:57:30
 * @Description: 
 */

import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'
class HYRequest {
    constructor(baseURL, timeout = 10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        }),

        this.instance.interceptors.response.use(
            res =>{
            return res
        },
        // ......
        res =>{
            return err
        })
            this.instance.interceptors.response.use(res => {
                return res
            }, res => {
                return err
            })


    }
    request(config) {
        return new Promise((resolve, reject) => {
            this.instance.request(config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    }
    get(config) {
        return this.request({ ...config, method: 'get' })
    }
    post(config) {
        return this.request({ ...config, method: 'post' })
    }
}
export default new HYRequest(BASE_URL, TIMEOUT)