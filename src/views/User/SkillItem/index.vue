<template>
    <div class="skill-item">
        <el-row style="width: 100%;">
            <el-col :span="6" align="center" style="display: flex;align-items: center;justify-content: center;">
                <div class="item-icon">
                    <el-icon :size="20">
                        <svg>
                            <use :xlink:href="`#icon-${skillIcon}`"></use>
                        </svg>
                    </el-icon>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="item-content">
                    <div class="skill-name">
                        {{ skillName }}
                    </div>
                    <div class="skill-progress">
                        <el-progress :percentage="skillProcess" :show-text="false"></el-progress>
                    </div>
                    <div class="skill-level">
                        Lv.{{ skillLevel }}
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
defineProps<{
    skillName: string,
    skillIcon: string,
    skillLevel: number,
    skillProcess: number
}>();
</script>
<style lang="scss" scoped>
.skill-item {

    display: flex;
    // flex: 0 0 230px;
    height: 80px;
    background-color: rgb(190, 198, 202);
    border-radius: 10px;

    .item-icon {
        height: 50%;
        align-self: center;
        aspect-ratio: 1/1;
        border-radius: 8px;
        background-color: rgb(213, 228, 223);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .item-content {
        padding: 10px 0;
        // display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: start;

        .skill-name {
            font-size: medium;
            font-weight: bold;
        }

        .skill-progress {
            width: 50%;
            margin-top: 10px;
        }

        .skill-level {
            margin-top: 10px;
            font-size: x-small;
        }
    }
}
</style>