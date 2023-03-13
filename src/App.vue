<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-07 14:39:55
 * @LastEditors: '陈28176' 'chen28176@qq.com'
 * @LastEditTime: 2023-03-07 16:01:24
 * @Description: 
-->
<template>
  <!-- <toast v-show="router.meta.hideToast"/> -->
  <div class="app">
    <router-view/>
  </div>
  <!-- !router.meta.hideTadBar判断是否要显示标签 -->
  <tab-bar v-show="router.meta.hideTadBar"/>
</template>

<script setup>
  import { useRoute } from "vue-router";
  import toast from '@/components/toast/toast.vue'
  const router = useRoute();
</script>

<style lang="less" scoped>

</style>