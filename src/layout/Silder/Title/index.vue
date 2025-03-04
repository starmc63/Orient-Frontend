<template>
    <div class="silder-title">
        <!-- <el-row>
            <el-col :span="4" align="start">
                <img src="@/assets/logo.jpg" height="5%">
            </el-col>
            <el-col :span="20" align="end">Orient 启源</el-col>
        </el-row> -->
        <div class="logo"><img src="@/assets/logo.jpg" height="65%"></div>
        <div class="title"><span>Orient 启源</span></div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.silder-title {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 10%;
    color: white;
    font-size: large;
    background-color: #07172e;
    .logo{
        align-items: center;
        display: flex;
        height: 100%;
    }
    .title{
        display: flex;
        height: 100%;
        align-items: center;
    }
}
</style>