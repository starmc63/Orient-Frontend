<template>
    <div class="user-content">
        <el-row>
            <el-col :span="2">

            </el-col>
            <el-col :span="6" style="margin-right: 15px;">
                <el-card class="card-box" style="border-radius: 10px;">
                    <!-- <div style="width: 100%;height: 30vh;background-color: red;"></div> -->
                    <el-row>
                        <el-col align="center">
                            <el-avatar :size="100"></el-avatar>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 20px;">
                        <el-col :span="14" align="end" class="user-name">
                            <span style="margin-right: 10px;">XXXX</span>
                        </el-col>
                        <el-col :span="10" align="start" class="oneline-tag">
                            <el-tag round effect="light" type="success">•在线</el-tag>
                        </el-col>
                    </el-row>
                    <el-row style="margin-top: 30px;">
                        <el-col align="center" class="user-sign">
                            <span>这个人很懒，还没有签名...</span>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row :gutter="7">
                        <el-col :span="12" class="task-finished">
                            <el-card :body-style="{ padding: '20px' }" style="border-radius: 7px;box-shadow: none;">
                                <div class="task-content">
                                    <div class="number">
                                        20
                                    </div>
                                    <span>已完成任务</span>
                                </div>
                            </el-card>
                        </el-col>
                        <el-col :span="12" class="task-working">
                            <el-card :body-style="{ padding: '20px' }" style="border-radius: 7px;box-shadow: none;">
                                <div class="task-content">
                                    <div class="number">
                                        18
                                    </div>
                                    <span>进行中任务</span>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row>
                        <el-card :body-style="{ padding: '10px' }"
                            style="border-radius: 7px;box-shadow: none;width: 100%;">
                            <el-col class="user-email">
                                <div class="email-icon">
                                    <el-icon color="#000000" class="inherit" style="color: black;">
                                        <Message />
                                    </el-icon>
                                </div>
                                <div class="email-text">
                                    <span>921036503@qq.com</span>
                                </div>
                            </el-col>
                        </el-card>
                    </el-row>
                    <el-row style="margin-top: 8px;">
                        <el-card :body-style="{ padding: '10px' }"
                            style="border-radius: 7px;box-shadow: none;width: 100%;">
                            <el-col class="user-qq">
                                <div class="qq-icon">
                                    <el-icon color="#000000" class="inherit" style="color: black;">
                                        <Paperclip />
                                    </el-icon>
                                </div>
                                <div class="qq-text">
                                    <span>921036503</span>
                                </div>
                            </el-col>
                        </el-card>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="14">
                <el-row>
                    <el-col>
                        <el-card style="width: 100%;border: 5px;border-radius: 10px;" :body-style="{ padding: '15px' }"
                            class="home-card">
                            <div class="back-home">
                                <div class="home-icon">
                                    <el-icon>
                                        <House />
                                    </el-icon>
                                </div>
                                <div class="home-text">
                                    返回主页
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row style="margin-top: 15px;">
                    <el-col>
                        <el-card style="width: 100%;border: 5px;border-radius: 10px;" :body-style="{ padding: '15px' }">
                            <el-row style="margin-top: 20px;">
                                <el-col>
                                    <span style="font-size: large;font-weight: bold;">技能等级 </span>
                                </el-col>
                            </el-row>
                            <el-row style="width: 100%;">
                                <el-col>
                                    <div class="skill-content">
                                        <SkillItem skill-name="机器学习" :skill-level="10" :skill-process="80"
                                            skill-icon="ML" />
                                        <SkillItem skill-name="前端开发" :skill-level="17" :skill-process="32"
                                            skill-icon="Fronted" />
                                        <SkillItem skill-name="跨平台开发" :skill-level="2" :skill-process="40"
                                            skill-icon="Phone" />
                                        <SkillItem skill-name="服务器开发" :skill-level="1" :skill-process="11"
                                            skill-icon="Server" />

                                    </div>
                                </el-col>
                            </el-row>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="2">

            </el-col>
        </el-row>

    </div>
</template>
<script lang="ts" setup>
import { Iphone, Location, Message } from '@element-plus/icons-vue';
import SkillItem from './SkillItem/index.vue';

</script>
<style lang="scss" scoped>
.user-content {
    padding: 20px;

    .card-box {
        width: 100%;
        // border-radius: 20px;

        .card-content {
            display: flex;
            justify-content: center;

        }

        .user-name {

            font-style: bold;
            font-size: large;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: end;
        }

        .user-sign {
            font-size: small;
            color: rgb(197, 201, 203);
        }

        .task-finished {
            .task-content {
                display: flex;
                justify-content: center;
                align-items: end;

                .number {
                    color: purple;
                    font-size: x-large;
                    margin-right: 2px;
                }

                span {
                    font-size: x-small;
                }
            }


        }

        .task-working {
            .task-content {
                display: flex;
                justify-content: center;
                align-items: end;

                .number {
                    color: purple;
                    font-size: x-large;
                    margin-right: 2px;
                }

                span {
                    font-size: x-small;
                }
            }
        }

        .user-email {
            display: flex;
            align-items: center;

            .email-icon {
                // color: black;
                margin-right: 5px;
            }

            .email-text {}
        }

        .user-qq {
            display: flex;
            align-items: center;

            .qq-icon {
                // color: black;
                margin-right: 5px;
            }

            .qq-text {}
        }



    }

    .home-card {
        .back-home {
            display: flex;
            justify-content: start;

            .home-icon {
                margin-right: 5px;
            }

            .home-text {}


        }
    }

    .home-card:hover {
        background-color: rgb(135, 134, 144);
        cursor: pointer;
    }



    .skill-content {
        display: grid;
        width: 100%;
        margin-top: 20px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 10px;


    }
}
</style>