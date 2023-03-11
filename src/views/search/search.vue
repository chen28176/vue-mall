<!--
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-08 12:07:02
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-12 00:23:09
 * @Description: 
-->
<template>
    <div class="search">
        <div class="top">
            <van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" />
        </div>
        <div class="end">
            <div class="column" v-for="index in 10">
                <h5>李一 chen</h5>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
//数据
const value = ref()
const onSearch = (value) => {
    console.log(value.value);
}
//搜索

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