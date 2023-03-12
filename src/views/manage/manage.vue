<!--
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-07 15:35:45
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-12 20:41:37
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
            <van-swipe-cell>
                <van-cell :border="false" :value="item.tel ? item.tel : item.phone"  :title="item.name" icon="label-o" />
                <br>
                <template #right>
                    <van-button square type="primary" text="编辑" @click="handleEdit(item)" />
                    <van-button square type="danger" text="删除" @click="handleRoWDel(item.id)" />
                </template>
            </van-swipe-cell>
        </template>
        <!-- 新增 -->
        <van-contact-card type="add" @click="onAdd" />
        <van-dialog v-model:show="showToast" :title="tit">
            <van-contact-edit  show-set-default :contact-info="editingContact" @save="onSave" />
        </van-dialog>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import router from '@/router';
import useManageStore from '@/stores/modules/manage';
let tit = ref('add') 
let showToast = ref(false);
let editingContact = ref({
    name:'', 
    tel:'',
    phone:''
});
// 发送网络请求获取数据
const ManageStore = useManageStore()
ManageStore.getManage()
const { Manage } = storeToRefs(ManageStore)
//路由跳转
const onClickLeft = () => router.go(-1)
const onClickSearch = () => router.push('/search')
// 新增
const onAdd = () => {
    showToast.value = !showToast.value
    tit = 'add'
}
// 编辑功能
const handleEdit = (item) => {
    showToast.value = !showToast.value
    tit = 'edit'
    editingContact = {...item}
}
// 点击判断是编辑还是新增
const onSave = (editingContact) => {
    showToast.value = !showToast.value
    if(tit == 'add'){
        Manage.value.push({
        // 新增id索引
        id: (Manage.value.length + 1).toString(),
        ...editingContact,
    })
    }else{
        // 获取到当前的索引 并替换
        let index = Manage.value.findIndex(item => item.id === editingContact.id)
        Manage.value[index]= editingContact
    }
}


// 删除功能
const handleRoWDel = (id) =>{
    // 通过id获取到对应的木条索引值
    let index = Manage.value.findIndex(item => item.id === id)
    // 通过索引值进行删除对应目条
    Manage.value.splice(index,1)
}
</script>   

<style lang="less" scoped>
/deep/ .van-nav-bar__title {
    color: #17c0eb !important;
}

.manage {
    overflow-y: auto;
}
</style>