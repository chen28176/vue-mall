<!--
 * @Author: '陈28176' 'chen28176@qq.com'
 * @Date: 2023-03-07 15:12:42
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-13 17:06:12
 * @Description: 
-->
<!-- 首页 -->
<template>
    <div class="home">
        <div class="top">
            <van-nav-bar title="首页" color="#17c0eb" />
        </div>
        <div class="middle">
            <div class="maddle-introduce">
                <div class="box">
                    <h2>管理系统</h2>
                    <span>一个管理用户系统的网站。</span>
                </div>
                <div class="paragraph">
                    <p>
                        Three thousand, see light is a cloud; Troubles are many, would like to open is a sunny day.
                        <br>
                        <div class="paragraph-span"><span>繁华三千，看淡即是浮云；烦恼无数，想开就是晴天。</span></div></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

// import { storeToRefs } from 'pinia';
// import useHomeStore from '@/stores/modules/home';
// //* 发送网络请求
// const homeStore = useHomeStore();
// homeStore.fetchHotSuggestData()
// // 进行解构获取 网络数据
// const { home_data } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.home {
    height: 100vh;

    .top /deep/ .van-nav-bar__title {
        color: #17c0eb !important;
    }

    .middle {
        background: url('@/assets/img/home/bg-home.jpg') no-repeat;
        background-size: 100%;  
        background-position-y:-100px ;

        .maddle-introduce {
            height: 90vh;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            .paragraph {
                margin-top: 120px;
                color: var(--primary-color);
                padding:20px 10px 20px 30px;
                background-color: rgba(23, 193, 235, 0.336);
                border-top-left-radius: 30%;
                border-bottom-right-radius: 30%;
                p{
                    line-height: 1.5rem;
                    color: #7bc8ff;
                    .paragraph-span{
                        display: block;
                        margin-top: 10px;
                    }
                }
            }

            h2 {
                color: var(--secondary-color);
                margin: 60px 10px 20px 10px;
            }

            span {
                color: var(--primary-color);
                font-weight: bold;
                font-style: oblique;
            }
        }
    }
}
</style>