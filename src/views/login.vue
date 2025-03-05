<template>
    <div class="container-login">
        <div class="login-form" v-show="scence == 1">
            <el-card class="box-card" size="large">
                <el-row>
                    <el-col align="center" style="font-size: x-large;height: 10vh;">
                        <span>登录</span>
                    </el-col>
                </el-row>
                <el-row>
                    <el-form label-position="right">
                        <el-form-item label="用户名" label-width="55px">
                            <el-input placeholder="用户名"></el-input>
                        </el-form-item>
                        <el-form-item label="密码" label-width="55px">
                            <el-input placeholder="密码" type="password" v-model="password"></el-input>
                        </el-form-item>
                    </el-form>
                </el-row>
                <el-row style="margin-top: 3vh;">
                    <el-col :span="12" align="start">
                        <el-button type="primary" style="width: 90%;" @click="loginHandler">
                            登录
                        </el-button>
                    </el-col>
                    <el-col :span="12" align="end">
                        <el-button type="primary" style="width: 90%;" @click="registerHandler">
                            注册
                        </el-button>
                    </el-col>
                </el-row>
            </el-card>

        </div>
        <div class="register-form" v-show="scence == 2">
            <el-card class="box-card" size="large">
                <el-row>
                    <el-col align="center" style="font-size: x-large;height: 6vh;">
                        注册
                    </el-col>
                </el-row>
                <el-row>
                    <el-form label-position="top" style="width: 100%;">
                        <el-form-item label="用户名" required>
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="手机号" required>
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="密码" required>
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" required>
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="身份证号码" required>
                            <el-input></el-input>
                        </el-form-item>
                        <el-form-item label="统一社会信用代码">
                            <el-input></el-input>
                        </el-form-item>
                    </el-form>
                </el-row>
                <el-row style="margin-top: 3vh;">
                    <el-col :span="12" align="start">
                        <el-button type="primary" style="width: 90%;" @click="submitHandler">
                            提交
                        </el-button>
                    </el-col>
                    <el-col :span="12" align="end">
                        <el-button type="primary" style="width: 90%;" @click="backHandler">
                            返回
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
const scence = ref(1);
const loginHandler = () => {

}
const registerHandler = () => {
    scence.value = 2;
}
const submitHandler = () => {

}
const backHandler = () => {
    scence.value = 1
}
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
        height: 40%;
        flex: 1;
        display: flex;
        justify-content: center;

        // background-color: antiquewhite;
        .box-card {
            width: 20vw;
        }
    }

    .register-form {
        width: 20vw;
        height: 85%;
        flex: 1;
        display: flex;
        justify-content: center;

        .box-card {
            width: 30vw;


        }
    }
}
</style>