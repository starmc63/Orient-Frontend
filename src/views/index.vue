<template>
  <div>
    <Filter></Filter>
    <!-- <div style="width: 100%;height: 30vh;background-color: red;"></div> -->
    <div class="content">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.content {
  // flex: 1;
  // height: 100%;
  // width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: minmax(330px, 1fr) minmax(330px, 1fr) minmax(330px, 1fr);
  gap: 30px;
}
</style>
