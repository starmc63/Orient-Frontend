<template>
    <div class="main">
        <div class="main-grid">
            <router-view></router-view>
            <Footer></Footer>
        </div>

        <!-- <div class="main-footer">
            
        </div> -->
    </div>
</template>
<script lang="ts" setup>
import Footer from './Footer/index.vue';
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
    }

    .main-footer {
        // position: relative;
        // flex: 0 0 0;
    }
}
</style>