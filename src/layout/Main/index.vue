<template>
  <div class="main">
    <div class="main-grid">
      <div class="cards">
        <router-view></router-view>
      </div>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>

    <!-- <div class="main-footer">
            
        </div> -->
  </div>
</template>
<script lang="ts" setup>
import Footer from './Footer/index.vue'
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  overflow-y: auto;
  // display: flex;
  // flex-direction: column;
  height: calc(100vh - $header-height);

  .main-grid {
    // flex-shrink: 0;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - $header-height);

    .cards {
      min-height: calc(89vh - $header-height);
      display: flex;
      flex-direction: column;
    }

    .footer {
      flex-shrink: 0;
    }
  }

  .main-footer {
    // position: relative;
    // flex: 0 0 0;
  }
}
</style>
