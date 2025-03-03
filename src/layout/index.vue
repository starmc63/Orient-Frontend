<template>
    <div class="common-layout">
        <el-container>
            <el-aside width="200px">
                <Silder></Silder>
            </el-aside>
            <el-container>
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main>
                    <Main></Main>
                </el-main>
                <!-- <el-footer>
                    <Footer></Footer>
                </el-footer> -->
            </el-container>
        </el-container>
    </div>
</template>
<script lang="ts" setup>
import Silder from './Silder/index.vue';
import Header from './Header/index.vue';
import Main from './Main/index.vue';
</script>
<style lang="scss">
.common-layout {
    // overflow: hidden;
    overflow-y: hidden;
    width: 100%;
    height: 100vh;

    header {
        padding: 0;
    }

    footer {
        padding: 0;
    }

    main {
        padding: 0;
        overflow-y: auto;
        // display: block;

    }
}
</style>