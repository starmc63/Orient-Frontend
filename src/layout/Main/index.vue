<template>
    <div class="main">
        <Filter></Filter>
        <!-- <div style="width: 100%;height: 30vh;background-color: red;"></div> -->
        <div class="content">

        </div>

        <!-- <Footer></Footer> -->
    </div>
</template>
<script lang="ts" setup>
import Footer from './Footer/index.vue';
</script>
<style lang="scss">
.main {
    position: relative;
    width: 100%;

    height: calc(100vh - $header-height);
    // overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
    // display: flex;
    // display: flex;
    flex-direction: column;
    // min-height: calc(100vh - $header-height);

    /* 让容器至少和视口一样高 */
    .content {
        // flex: 1;
    }

}
</style>