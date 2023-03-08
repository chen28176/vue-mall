<!--
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-07 15:35:45
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-08 16:40:23
 * @Description: 
-->
    <!-- 管理页 -->
<template>
    <div class="manage">
        <van-nav-bar title="联系人" left-text="返回" @click-left="onClickLeft" left-arrow>
            <template #right>
                <van-icon name="search" size="18" @click="onClickSearch" />
            </template>
        </van-nav-bar>
        <br>
        <template v-for="(item, index) in Manage" :key="index">
            <van-contact-card type="edit" :tel="item.phone" :name="item.username" />
        </template>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import router from '@/router';
import useManageStore from '@/stores/modules/manage';

// 发送网络请求获取数据
const ManageStore = useManageStore()
ManageStore.getManage()
//路由跳转
const onClickLeft = () => router.go(-1)
const onClickSearch = () => router.push('/search')

const { Manage } = storeToRefs(ManageStore)
</script>   

<style lang="less" scoped>

</style>