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
    validator: String,
    errorText: String,
    defaultValue: Number,
    placeholder: String | null,
  },
  data() {
    return {
      error: "",
    };
  },
  computed: {
    text: {
      get() {
        return this.defaultValue;
      },
      set(value) {
        this.$emit("input", { id: this.id, value: value || 0 });
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
.input-container {
  margin: 5px 5px;
  display: block;
}

.input {
  margin-top: 5px;
  padding: 0.5em 2em;
  background-color: rgb(246, 246, 250);
  border: 1px solid rgb(209, 209, 213);
}

.input-label {
  font-weight: 650;
}
</style>