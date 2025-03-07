<template>
    <div class="common-layout">
        <el-container>
            <el-aside :class="isFold ? 'hidden' : ''">
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
import { useSilderStore } from '@/stores/silder';
import { storeToRefs } from 'pinia';
const { isFold } = storeToRefs(useSilderStore());
</script>
<style lang="scss">
.common-layout {
    // overflow: hidden;
    overflow-y: hidden;
    overflow-x: auto;
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
        // width: 100%;
        // overflow-x: auto;
        // display: block;

    }

    aside {
        width: 200px;
        // width: 50px;
        transition: width 0.1s ease;

    }

    .hidden {
        width: 50px;
    }
}
</style>