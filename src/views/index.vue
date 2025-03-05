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
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.content {
    // flex: 1;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(3, 32%);
    gap: 30px;
}
</style>