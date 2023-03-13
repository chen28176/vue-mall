<!--
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-08 12:07:02
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-13 21:49:45
 * @Description: 
-->
<template>
    <div class="search">
        <div class="top">
            <van-search placeholder="请输入搜索关键词" @input="handleQueryName" />
        </div>
        <div class="end" v-show="show">
            <div class="column" v-for="(item, index) in Manage">
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
let show = ref(false)
//* 浅拷贝
let tableDateCopy = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "phone": "1-770-736-8031 x56442",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "phone": "010-692-6593 x09125",

    },
    {
        "id": 3,
        "name": "Clementine Bauch",
        "phone": "1-463-123-4447",
    },
    {
        "id": 4,
        "name": "Patricia Lebsack",

        "phone": "493-170-9623 x156",
    },
    {
        "id": 5,
        "name": "Chelsey Dietrich",
        "phone": "(254)954-1289",
    },
    {
        "id": 6,
        "name": "Mrs. Dennis Schulist",
        "phone": "1-477-935-8478 x6430",
    },
    {
        "id": 7,
        "name": "Kurtis Weissnat",
        "phone": "210.067.6132",
    },
    {
        "id": 8,
        "name": "Nicholas Runolfsdottir V",
        "phone": "586.493.6943 x140",
    },
    {
        "id": 9,
        "name": "Glenna Reichert",
        "phone": "(775)976-6794 x41206",
    },
    {
        "id": 10,
        "name": "Clementina DuBuque",
        "phone": "024-648-3804",
    }
]
//搜索
const handleQueryName = (val) => {
    // 比配 搜索转换小写
    show = true
    if (val.inputType == 'insertText') {
        Manage.value = Manage.value.filter(item => (item.name).toLowerCase().match(val.data.toLowerCase()))
    } else if(val.inputType == 'deleteContentBackward')
    {
        Manage.value = tableDateCopy
        show = false
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