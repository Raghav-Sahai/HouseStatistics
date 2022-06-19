<template>
    <button @click="sync" class="zillow-sync">
        Sync Zillow
    </button>
</template>

<script>
export default {
    name: "ZillowSync",
    methods: {
        sync() {
            chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
                chrome.tabs.sendMessage(tabs[0].id, { type: "ZillowSync" }, response => {
                    this.$emit("zillowSync", response);
                });
            });
        }
    }
}
</script>

<style scoped>
.zillow-sync {
    background-color: rgb(0, 106, 255);
    color: white;
    padding: 3px 5px;
    font-weight: 650;
    border-radius: 10px;
}
</style>