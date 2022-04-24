<template>
  <div class="input-container">
    <label class="input-label">{{ label }}</label>

    <input class="input" type="text" :placeholder="placeholder" v-model="text" />

    <p class="input-error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "TextInput",
  props: {
	id: String,
    label: String,
    validator: Function,
	placeholder: String | null,
  },
  data() {
    return {
      defaultText: "",
      error: "",
    };
  },
  computed: {
    text: {
      get() {
        return this.defaultText;
      },
      set(value) {
        this.$emit("input", {id: this.id, value});
      }
    }
  },
  methods: {
    resetErrors() {
      this.error = "";
    }
  }
};
</script>

<style>

.input {
	padding: 0.5em 2em;
}

</style>