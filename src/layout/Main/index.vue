<template>
    <div class="main">
        <div class="main-grid">
            <router-view></router-view>
        </div>
        <div class="main-footer">
            <Footer></Footer>
        </div>
    </div>
</template>
<script lang="ts" setup>
import Footer from './Footer/index.vue';
</script>
<style lang="scss" scoped>
.main {
    position: relative;
    overflow-y: auto;
    display: flex;
    min-height: calc(100vh - $header-height);

    .main-grid {
        flex: 1;
    }

    .main-footer {
        flex: 0 0 0;
    }
}
</style>