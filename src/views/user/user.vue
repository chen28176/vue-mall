<!--
 * @Author: 86 10976595+chenruiho@user.noreply.gitee.com
 * @Date: 2023-03-07 15:34:14
 * @LastEditors: 86 10976595+chenruiho@user.noreply.gitee.com
 * @LastEditTime: 2023-03-08 11:49:55
 * @Description: 
-->
<!-- 用户 -->
<template>
    <div class="user">
        <div class="top">
            <div class="top-user">
                <img src="@/assets/img/user/user.jpg" alt="" srcset="">
                <h3>风与</h3>
            </div>
        </div>
        <div class="middle">
            <van-swipe-cell v-for="(item, index) in userData" :key="index">
                <template>
                    <van-button square type="primary" />
                </template>
                <van-cell :border="false" :title="item.title" :value="item.value" />
            </van-swipe-cell>
        </div>
    </div>
</template>

<script setup>
import userData from './data/user' 

</script>

<style lang="less" scoped>
.user {
    .top {
        height: 30vh;
        background: url(@/assets/img/user/user-bg.jpg);
        box-shadow: 0 6px 8px 0 #18dcff, 0 6px 10px 0 #18dcff;
        background-size: 100% 100%;
        position: relative;
        margin-bottom: 60px;

        .top-user {
            right: 20px;
            bottom: 10px;
            display: flex;
            position: absolute;
            justify-content: flex-end;
            align-items: center;
            flex-direction: row-reverse;

            h3 {
                color: #fff;
                position: .6;
                margin-right: 15px;
                border-radius: 10px;
                transition: 1s;
            }

            h3:hover {
                padding: 2px 20px;
                box-shadow: 0 10px 8px 0 rgba(20, 65, 69, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 2);
            }

            img {
                width: 60px;
                height: 60px;
                border-radius: 30px;
                box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 2);
            }
        }
    }
}
</style>