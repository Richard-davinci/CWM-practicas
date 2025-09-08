<template>
  <input
    :type="type"
    :id="id"
    :name="name"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
</template>

<script>
export default {
  name: "InputField",
  props: {
    type: {
      type: String,
      default: "text",
    },
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
};
</script>

<style scoped>
/* Si en el desafío 3 usaste tus propios estilos, los ponés acá */
</style>
