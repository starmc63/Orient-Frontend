<template>
    <div class="left">
        <el-icon size="20px" @click="foldSilder" class="foldIcon">
            <Fold v-if="!isFold"></Fold>
            <Expand v-else></Expand>
        </el-icon>
        <div class="address">
            <el-icon>
                <Location></Location>
            </el-icon>
            <el-select placeholder="省份" clearable style="width: 100px;margin-left: 10px;">
                <el-option label="1" value="1" />
                <el-option label="2" value="2" />
            </el-select>
            <el-select placeholder="市" clearable style="width: 100px;margin-left: 10px;">
                <el-option label="1" value="1" />
                <el-option label="2" value="2" />
            </el-select>
            <el-select placeholder="县/区/镇" clearable style="width: 100px;margin-left: 10px;">
                <el-option label="1" value="1" />
                <el-option label="2" value="2" />
            </el-select>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { useSilderStore } from '@/stores/silder';
import { storeToRefs } from 'pinia';
const {isFold}=storeToRefs(useSilderStore());
const {foldSilder}=useSilderStore();
</script>
<style lang="scss" scoped>
.left {
    height: $header-height;
    padding-left: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .foldIcon:hover{
        cursor: pointer;
    }

    .address {
        display: flex;
        align-items: center;
        margin: 0 20px;
    }
}
</style>