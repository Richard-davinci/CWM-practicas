<template>
  <textarea
    :id="id"
    :name="name"
    :rows="rows"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  ></textarea>
</template>

<script>
export default {
  name: "TextAreaField",
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rows: {
      type: Number,
      default: 4,
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>

<style scoped>
/* Tus estilos custom del desafío 3 pueden ir acá si no usás Tailwind */
</style>

