<template>
    <div class="filter-container">
        <el-form inline width="100px">
            <el-form-item label="一级分类">
                <el-select style="width: 150px;">
                    <el-option>1</el-option>
                    <el-option>2</el-option>
                    <el-option>3</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="二级分类">
                <el-select style="width: 150px;">
                    <el-option>1</el-option>
                    <el-option>2</el-option>
                    <el-option>3</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="三级分类">
                <el-select style="width: 150px;">
                    <el-option>1</el-option>
                    <el-option>2</el-option>
                    <el-option>3</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="四级分类">
                <el-select style="width: 150px;">
                    <el-option>1</el-option>
                    <el-option>2</el-option>
                    <el-option>3</el-option>
                </el-select>
            </el-form-item>
        </el-form>
        <el-form inline>
            <el-form-item label="选择状态">
                <el-select style="width: 150px;">
                    <el-option>1</el-option>
                    <el-option>2</el-option>
                    <el-option>3</el-option>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss">
.filter-container {
    padding: 10px;
    width: 100%;
    height: 15vh;
    border-bottom: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: var(--el-box-shadow-lighter);
}
</style>