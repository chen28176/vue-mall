<!-- 闪屏页 -->
<template>
  <div id="splash-screen">
    <img class="box-center" src="@/assets/img/splash-screen-title.jpg" alt="">
    <h2 class="box-center">欢迎使用</h2>
    <van-button @click="directJump" class="splash-screen-button" type="default">跳转</van-button>
  </div>
</template>

<script setup>
    import router from "@/router";
    import { onMounted, ref } from "vue";
    const time = ref(5);
    let timer = '';
    // 直接跳转
    function directJump(){
        // 清除定时器
        clearInterval(timer);
        // router.replace('/home');
        router.replace('/login');
    }
    onMounted(()=> {
        // 定时跳转
        timer = setTimeout(()=>{
            router.replace('/login');
        }, time.value * 1000);
    });
</script>

<style scoped lang="less">
    
    #splash-screen{
        width: 100vw;
        height: 100vh;
        background: var(--primary-color);
        position: relative;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            transform: translate(-50%, -100%);
        }
        h2{
            color: white;
            transform: translate(-50%, 20%);
        }
        .splash-screen-button{
            width: 100px;
            height: 50px;
            position: absolute;
            right: 0;
        }
    }
</style>