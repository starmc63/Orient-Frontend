<template>
    <div class="container-login">
        <div class="login-form">
            <el-card class="box-card" size="large">
                <!-- <template #header>
                    <div class="card-header">
                        <span>Card name</span>
                        <el-button class="button" text>Operation button</el-button>
                    </div>
                </template> -->
                <!-- <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div> -->
                <!-- <template #footer>Footer content</template> -->
                <el-row>
                    <el-col align="center" style="font-size: xx-large;height: 15vh;">
                        登录
                    </el-col>
                </el-row>
                <el-row>
                    <el-col align="center" style="height: 10vh;">
                        <el-input placeholder="用户名"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col align="center" style="height: 10vh;">
                        <el-input placeholder="密码" type="password" v-model="password"></el-input>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="12" align="start">
                        <el-button type="primary" style="width: 90%;">
                            登录
                        </el-button>
                    </el-col>
                    <el-col :span="12" align="end">
                        <el-button type="primary" style="width: 90%;">
                            注册
                        </el-button>
                    </el-col>
                </el-row>
            </el-card>
        </div>
    </div>
</template>



<script setup lang="ts">
import { ref } from 'vue';
const password = ref('');
</script>



<style scoped lang="scss">
.container-login {
    display: flex;
    width: 100%;
    height: 100vh;
    align-items: center;
    background-image: url('@/assets/imgs/background.jpeg');
    background-size: cover;
    background-position: center;

    .login-form {
        width: 20vw;
        height: 55%;
        flex: 1;
        display: flex;
        justify-content: center;

        // background-color: antiquewhite;
        .el-card {
            width: 20vw;
        }
    }
}
</style>