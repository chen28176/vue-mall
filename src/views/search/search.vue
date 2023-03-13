<!--
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-08 12:07:02
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-12 21:07:43
 * @Description: 
-->
<template>
    <div class="search">
        <div class="top">
            <van-search v-model="value" placeholder="请输入搜索关键词"  @input="handleQueryName" />
        </div>
        <div class="end">
            <div class="column" v-for="(item,index) in Manage">
                <h5>{{ item.name }}</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import useManageStore from '@/stores/modules/manage';
//* 发送网络请求
const ManageStore = useManageStore();
ManageStore.getManage()
const { Manage } = storeToRefs(ManageStore)

//* 浅拷贝
let tableDateCopy = Object.assign(Manage.value)
//搜索
const handleQueryName = (val) => {
    // 比配 搜索转换小写
    if(val.data.length > 0){
        Manage.value = Manage.value.filter(item=>(item.name).toLowerCase().match(val.data.toLowerCase()))
    }else{
        Manage.value = tableDateCopy
    }
}
</script>

<style lang="less" scoped>
.search {
    .end {
        .column {
            height: 30px;
            margin: 20px 10px;
            border-bottom: 1px solid var(--primary-color);

        }
    }
}
</style>