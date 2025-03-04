<template>
    <div class="right">
        <el-button type="primary" color="red">发布任务</el-button>
        <a class="home" href="#" @click.prevent="tohome" style="margin: 0 10px;">首页</a>
        <a class="login" href="#" @click.prevent="tologin">登录/注册</a>
    </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router=useRouter();
const tohome = () => {
    console.log('home')
}
const tologin = () => {
    router.push({path:'/login'});
}
</script>
<style lang="scss" scoped>
.right {
    height: $header-height;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 10px;

    a {
        text-decoration: none;
    }

    .home {
        // height: $header-height;
    }

    .login {
        // height: $header-height;
    }
}
</style>