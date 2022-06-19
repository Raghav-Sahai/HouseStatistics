<template>
    <div class="grid-container">
        <div v-for="(item, index) in data" class="grid-item" :id="index">
            <div class="label">{{ item.label }}</div>
            <div class="value">{{ item.value }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DataDisplay",
    props: {
        data: Object
    }
}
</script>

<style scoped>
.grid-container {
    margin: 10px 5px;
    display: grid;
    grid-template-columns: auto auto;
}

.grid-item {
    margin: 5px 0;
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 1.2em;
}

.label {
    font-weight: 650;
}
.value {
    margin-top: 5px;
}
</style>