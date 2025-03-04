<template>
    <div class="silder">
        <Title v-show="!isFold"></Title>
         
         <img src="@/assets/logo.jpg" width="0%" alt="" v-show="isFold" :class="isFold?'show':''">
    </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import Title from './Title/index.vue';
import { useSilderStore } from '@/stores/silder';
const {isFold}=storeToRefs(useSilderStore());

</script>
<style lang="scss">
.silder {
    width: 100%;
    height: 100vh;
    background-color: aliceblue;
    // overflow: hidden;
    img{
        
        transition: width 0.1s ease;
    }
    .show{
        width: 100%;
    }
}
</style>