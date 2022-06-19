<template>
    <button @click="sync">
        Sync with Zillow
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