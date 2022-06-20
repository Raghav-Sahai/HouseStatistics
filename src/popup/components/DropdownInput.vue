<template>
    <div class="input-container">
        <label class="input-label">{{ label }}</label>

        <select class="input select" v-model="selected">
            <option v-for="(option, index) in options" :id="index" :value="option.value">
                {{ option.text }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "DropdownInput",
    props: {
        id: String,
        label: String,
        options: Array,
        defaultValue: Number
    },
    computed: {
        selected: {
            get() {
                return this.defaultValue;
            },
            set(value) {
                this.$emit("dropdownInput", { id: this.id, value });
            }
        }
    }
}
</script>

<style scoped>
.select {
    width: 100%;
}
</style>