<template>
  <div class="filter-container" :class="isFilterFold ? 'hidden' : ''">
    <div class="foldBtn" :class="isFold ? '' : 'hidden'">
      <el-icon @click="foldFilter" v-if="!isFilterFold">
        <ArrowUpBold />
      </el-icon>
      <el-icon @click="foldFilter" v-else>
        <ArrowDownBold />
      </el-icon>
    </div>
    <div class="filter-form" :class="isFilterFold ? 'hidden' : ''">
      <el-form inline width="100px">
        <el-form-item label="一级分类">
          <el-select style="width: 150px">
            <el-option>1</el-option>
            <el-option>2</el-option>
            <el-option>3</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类">
          <el-select style="width: 150px">
            <el-option>1</el-option>
            <el-option>2</el-option>
            <el-option>3</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="三级分类">
          <el-select style="width: 150px">
            <el-option>1</el-option>
            <el-option>2</el-option>
            <el-option>3</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="四级分类">
          <el-select style="width: 150px">
            <el-option>1</el-option>
            <el-option>2</el-option>
            <el-option>3</el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form inline>
        <el-form-item label="选择状态">
          <el-select style="width: 150px">
            <el-option>1</el-option>
            <el-option>2</el-option>
            <el-option>3</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间类型">
          <el-select style="width: 150px">
            <el-option>1</el-option>
            <el-option>2</el-option>
            <el-option>3</el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间区间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              label="Pick a date"
              placeholder="开始时间"
              style="width: 100%"
            />
          </el-col>
          <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
          <el-col :span="11">
            <!-- <el-time-picker label="Pick a time" placeholder="结束时间" style="width: 100%" /> -->
            <el-date-picker
              type="date"
              label="Pick a date"
              placeholder="结束时间"
              style="width: 100%"
            />
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
          <el-select style="width: 150px">
            <el-option>1</el-option>
            <el-option>2</el-option>
            <el-option>3</el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useSilderStore } from '@/stores/silder'
import { storeToRefs } from 'pinia'
const isFilterFold = ref(false)
const { isFold } = storeToRefs(useSilderStore())
const foldFilter = () => {
  isFilterFold.value = !isFilterFold.value
}
</script>
<style lang="scss" scoped>
.filter-container {
  // visibility: hidden;
  background-color: white;
  z-index: 999;
  position: fixed;
  top: $header-height;
  padding: 10px;
  width: 100%;
  height: 20vh;
  // height: 1vh;
  border-bottom: 1px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: var(--el-box-shadow-lighter);
  transition: height 0.2s ease;
  overflow: hidden;

  &.hidden {
    width: 100%;
    height: 1vh;
  }

  .foldBtn {
    position: absolute;
    bottom: -2px;
    left: 48%;
    transition: left 0.1s ease;
    &.hidden {
      left: 42%;
    }
  }

  .foldBtn:hover {
    cursor: pointer;
  }

  .filter-form {
    opacity: 1;
    transition: opacity 0.2s ease;
    &.hidden {
      // visibility: hidden;
      // display: none;
      opacity: 0;
    }
    // display: none;
  }
}
</style>
