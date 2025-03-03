<template>
    <div class="header">
        <el-row>
            <el-col :span="10">
                <Breadthumb />
            </el-col>
            <el-col :span="8">
                <Search />
            </el-col>
            <el-col :span="6">
                <Info />
            </el-col>
        </el-row>
    </div>
</template>
<script lang="ts" setup>
import Info from './Info/index.vue';
import Breadthumb from './breadthumb/index.vue';
import Search from './search/index.vue';
</script>
<style lang="scss">
.header {
    width: 100%;
    height: 100%;
    // background-color: aquamarine;
    border-bottom: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: var(--el-box-shadow-lighter);
    // box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);


}
</style>
