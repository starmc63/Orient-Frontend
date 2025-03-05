<template>
    <div class="user-content">
        <el-card class="card-box">
            <!-- <div style="width: 100%;height: 30vh;background-color: red;"></div> -->
            <el-row>
                <el-col :span="5" align="center">
                    <el-avatar :size="150" src=""></el-avatar>
                </el-col>
                <el-col :span="19">
                    <!-- <div style="width: 100%;height: 100%;background-color: red;"></div> -->
                    <el-row>
                        <span class="user-name">Title</span>
                    </el-row>
                    <el-row>
                        <span class="user-sign">XXXXXXX</span>
                    </el-row>
                    <el-row class="user-info">
                        <div class="info-item">
                            <el-icon>
                                <Location color="black" />
                            </el-icon>
                            上海
                        </div>
                        <div class="info-item">
                            <el-icon>
                                <Iphone />
                            </el-icon>
                            137-2001-0023
                        </div>
                        <div class="info-item">
                            <el-icon>
                                <Message />
                            </el-icon>
                            xxxxx@gmail.com
                        </div>
                        <div class="info-item">
                            qianduan
                        </div>
                        <div class="info-item">
                            qianduan
                        </div>
                    </el-row>
                </el-col>
            </el-row>
        </el-card>
    </div>
</template>
<script lang="ts" setup>
import { Iphone, Location, Message } from '@element-plus/icons-vue';


</script>
<style lang="scss" scoped>
.user-content {
    padding: 20px;

    .card-box {
        width: 100%;
        border-radius: 20px;

        .user-name {

            // font-style: bold;
            font-weight: bold;
            font-size: xx-large;
            margin-bottom: 25px;
        }

        .user-sign {
            font-size: large;
            margin-bottom: 25px;


        }

        .user-info {
            display: flex;
            align-items: center;
            justify-content: start;

            .info-item {
                flex: 0 1 20%;
                border-radius: 10px;
                background-color: aliceblue;
                height: 20%;
                padding: 15px;
                // margin: 5px 5px;
                margin-bottom: 10px;
                margin-right: 10px;
            }
        }
    }
}
</style>