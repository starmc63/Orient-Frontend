import { defineStore } from "pinia";
import { ref } from "vue";

export const useSilderStore=defineStore('silderStore',()=>{
    const isFold=ref(false);
    const foldSilder=()=>{
        isFold.value=!isFold.value
    }


    return {
        isFold,
        foldSilder
    }
})