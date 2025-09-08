<template>
  <label
    :for="for"
    class="block mb-2 font-semibold "
  >
    <slot />
  </label>
</template>

<script>
export default {
  name: "FieldLabel",
  props: {
    for: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
/* Si en tu desafío 3 usaste estilos custom, podés reemplazar Tailwind aquí */
</style>
