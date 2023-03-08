<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-07 15:12:42
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-08 16:15:56
 * @Description: 
-->
<!-- 首页 -->
<template>
    <div class="home">
        {{ home_data.title }}
    </div>
</template>

<script setup>

import { storeToRefs } from 'pinia';
import useHomeStore from '@/stores/modules/home';
//* 发送网络请求
const homeStore = useHomeStore();
homeStore.fetchHotSuggestData()
// 进行解构获取 网络数据
const { home_data } = storeToRefs(homeStore)
</script>

<style lang="less" scoped></style>