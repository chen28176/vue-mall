<!-- 成功的提示 -->
<template>
  <div id="toast" class="toast-success">
    {{  }}
  </div>
</template>

<script setup>

</script>

<style scoped lang="less">
    #toast{
        width: 200px;
        height: 40px;
        position: absolute;
        text-align: center;
        left: 50%;
        transform: translateX(-50%);
        line-height: 40px;
        border-radius: 20px;
    }
    .toast-success{
        background-color: #53ff53;
    }
    .toast-failure{
        background-color: red;
    }
</style>