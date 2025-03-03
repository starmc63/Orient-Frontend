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
            <el-form-item label="时间类型">
                <el-select style="width: 150px;">
                    <el-option>1</el-option>
                    <el-option>2</el-option>
                    <el-option>3</el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="时间区间">
                <el-col :span="11">
                    <el-date-picker type="date" label="Pick a date" placeholder="开始时间" style="width: 100%" />
                </el-col>
                <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
                <el-col :span="11">
                    <!-- <el-time-picker label="Pick a time" placeholder="结束时间" style="width: 100%" /> -->
                    <el-date-picker type="date" label="Pick a date" placeholder="结束时间" style="width: 100%" />
                </el-col>
            </el-form-item>
            <el-form-item label="等级区间">
                <el-col :span="11">
                    <el-input placeholder="最低等级"> </el-input>
                </el-col>
                <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
                <el-col :span="11">
                    <el-input placeholder="最高等级"> </el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="排序优先级">
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
    height: 20vh;
    border-bottom: 1px;
    border-style: solid;
    border-color: rgba(0, 0, 0, 0.1);
    box-shadow: var(--el-box-shadow-lighter);
}
</style>