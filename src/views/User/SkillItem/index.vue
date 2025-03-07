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
    skillProcess: string
}>();
</script>
<style lang="scss" scoped>
.skill-item {

    display: flex;
    // flex: 0 0 230px;
    height: 80px;
    background-color: aliceblue;
    border-radius: 10px;

    .item-icon {
        height: 50%;
        align-self: center;
        aspect-ratio: 1/1;
        border-radius: 8px;
        background-color: aquamarine;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>