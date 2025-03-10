<template>
  <div>
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <img src="@/assets/imgs/default.png" style="width: 100%" />
      <div class="card-content">
        <el-row>
          <el-col :span="5">
            <el-tag
              :type="isPicked ? (isFinished ? 'danger' : 'warning') : 'success'"
              size="large"
              >{{ isPicked ? (isFinished ? '已结束' : '完成中') : '未接取' }}</el-tag
            >
          </el-col>
          <el-col :span="19" style="font-size: xx-small">
            <el-row>
              <el-col :span="5"> 发起时间 </el-col>
              <el-col :span="7"> 2024.12.12 </el-col>
              <el-col :span="4"> 发起人 </el-col>
              <el-col :span="8"> 小超爱吃烤全羊 </el-col>
            </el-row>
            <el-row>
              <el-col :span="5"> 完成时间 </el-col>
              <el-col :span="7"> 2024.12.12 </el-col>
              <el-col :span="4"> 挑战者 </el-col>
              <el-col :span="8"> xxx的挑战 </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="2">
            <el-icon size="large">
              <Coin />
            </el-icon>
          </el-col>
          <el-col :span="22">190000</el-col>
        </el-row>
        <el-row>
          <el-col> 公司报餐网页前端开发 </el-col>
        </el-row>
        <el-row>
          <el-tag round>前端Lv11</el-tag>
          <el-tag round>后端Lv11</el-tag>
        </el-row>
      </div>
      <template #footer>
        <el-row>
          <el-col :span="12" align="start"
            ><el-button style="width: 80%" type="primary" size="large">提交</el-button></el-col
          >
          <el-col :span="12" align="end"
            ><el-button type="primary" style="width: 80%" size="large">修改</el-button></el-col
          >
        </el-row>
      </template>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { type Tag } from '@/types/tag'
defineProps<{
  startTime: string
  endTime: string
  pusher: string
  reciver: string
  money: number
  title: string
  isFinished: boolean
  isPicked: boolean
  tag: Tag[]
  imgUrl: string
}>()
</script>

<style scoped lang="scss">
.card-content {
  padding: 10px;

  .el-row {
    margin-bottom: 5px;
  }
}
</style>
