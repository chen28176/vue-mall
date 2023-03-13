<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-07 16:17:39
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 16:20:43
 * @Description: 
-->
<template>
    <van-toast style="padding: 0">
        {{ showToast }}
    </van-toast>
    <div class="register">
        <div class="from-register">
            <h2>注册</h2>
            <!-- 表单 -->
            <van-form @submit="onSubmit">
                <van-cell-group inset >
                    <van-field
                    v-model="username"
                    name="用户名"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, validator: validatorUsername, message: '请填写用户名' }]"
                    />
                    <van-field
                    v-model="password1"
                    type="password"
                    name="密码"
                    label="密码"
                    placeholder="密码"
                    :rules="[{ required: true, validator: validatorPassword, message: '请填写密码' }]"
                    />
                    <van-field
                    v-model="password2"
                    type="password"
                    name="密码"
                    label="确认密码"
                    placeholder="密码"
                    :rules="[{ required: true, validator: comparePassword, message: '请再次确认密码' }]"
                    />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                    提交
                    </van-button>
                </div>
            </van-form>
            <p>返回<span @click="router.push('/login')">登录</span></p>
        </div>
    </div>
</template>

<script setup>
    import router from '@/router';
    import Cookies from 'js-cookie'
    import {onMounted, reactive, ref} from 'vue';
    import { showToast } from "vant";

    const username = ref('');
    const password1 = ref('');
    const password2 = ref('');
    let timer = ref('');
    let isAlike = ref(false);

    // 校验用户名
    function validatorUsername(username){
        // 使用正则判断一下用户名开头是否是特殊符号
        if(/^[^0-9!@#%^&*(){}[\]"'|?\\><,./:;]/.test(username)){
            if(username.length >= 4 && username.length <= 16){
                let usersData = '';
                usersData = Cookies.get('usersData') ? JSON.parse(Cookies.get('usersData')) : '';
                console.log(usersData);
                if(usersData){
                    isAlike.value = usersData.some(item => {
                        return item.username === username
                    });
                }
                return '';
            }else{
                return '用户名长度需要为4~16个字符'
            }
        }else{
            return '用户名不能以数值或特殊符号开头';
        }
    }
    // 校验密码
    function validatorPassword(password){
        if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(password)){
            return '密码必须包含字母和数字，且在6~18位之间'
        }
    }

    // 比较两次输入密码是否一致
    function comparePassword(){
        if(password1.value === password2.value){
            return ''
        }else{
            password1.value = password2.value = '';
            showToast('密码错误')
        }
    }

    // 获取n天后的时间
    function afterDate(n){
        const d = new Date();
        let day = d.getDate();
        return d.setDate(day + n);
    }
    // 由于只能向服务器进行伪造数据，再次访问的时候并没有实际添加上用户，所以使用cookie模拟注册用户
    function registerUser(){
        const obj = {username: username.value, password1: password1.value};
        let jsonStr = '';
        // 判断是否是第一次添加
        if(!Cookies.get('usersData')){
            jsonStr = JSON.stringify([obj]);
            Cookies.set('usersData', jsonStr, {expires: afterDate(3)});
            return
        }
        let arr = JSON.parse(Cookies.get('usersData'));
        arr.push(obj);
        jsonStr = JSON.stringify(arr);
        Cookies.set('usersData', jsonStr, {expires: afterDate(3)});
    }
    
    
    // 提交绑定的函数
    const onSubmit = (values) => {
        registerUser();
        if(isAlike.value){
            showToast('用户名已存在');
            return
        }else{
            showToast('注册成功');
        }
        clearInterval(timer.value);
        timer.value = setTimeout(() => {
            router.push('/login')
        }, 2000);
    };
</script>

<style lang="less" scoped>
    .register{
        // 设置背景样式及表单居中
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary-color);
        .from-register{
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