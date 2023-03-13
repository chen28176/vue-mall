<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-07 15:04:28
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 15:13:07
 * @Description: 
-->
<!-- 登录页 -->
<template>
    <van-toast style="padding: 0">
        {{ showToast }}
    </van-toast>
    <div class="login">
        <div class="from-login">
            <h2>登录</h2>
            <!-- 表单 -->
            <van-form @submit="onSubmit">
                <van-cell-group inset >
                    <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                    v-model="password"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                    提交
                    </van-button>
                </div>
            </van-form>
            <p>没有账号？去<span @click="router.push('/register')">注册</span></p>
        </div>
    </div>
</template>

<script setup>
    import router from '@/router';
    import Cookies from 'js-cookie';
    import {ref} from 'vue';
    import { showToast } from "vant";

    const username = ref('');
    const password = ref('');
    let isAlike = ref(false); 
    let timer = ref('');
    function compareData(){
        let arr = JSON.parse(Cookies.get('usersData'));
        // 循环遍历是否又相同的用户名和密码
        arr.forEach(item => {
            if(item.username === username.value && item.password1 === password.value) {
                isAlike.value = true;
                return
            }
        })
        // 判断是否相同
        if(!isAlike.value){
            showToast('密码或用户名错误！');
        }
    }
    const onSubmit = (values) => {
        compareData();
        if(isAlike.value){
            showToast('登录成功');
            clearInterval(timer.value);
            timer.value = setTimeout(() => {
                router.push('/home')
            }, 2000);
        }
    };

    
</script>

<style lang="less" scoped>
    .login{
        // 设置背景样式及表单居中
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
        .from-login{
            h2{
                text-align: center;
                margin: 20px 0;
            }
            // 登录表单样式
            padding: 10px;
            width: 80%;
            background-color: white;
            border-radius: 10px;
            p{
                text-align: center;
                span{
                    cursor: pointer;
                    color: var(--primary-color);
                }
            }
        }
    }
</style>