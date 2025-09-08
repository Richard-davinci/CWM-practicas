<template>
  <button
    :type="type"
    :class="buttonClass"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    format: {
      type: String,
      default: "primary",
      validator(value) {
        return ["primary", "secondary", "success", "error"].includes(value);
      },
    },
  },
  computed: {
    buttonClass() {
      switch (this.format) {
        case "secondary":
          return "bg-gray-200 text-gray-800 hover:bg-gray-300";
        case "success":
          return "bg-green-600 text-white hover:bg-green-700";
        case "error":
          return "bg-red-600 text-white hover:bg-red-700";
        default:
          return "bg-blue-600 text-white hover:bg-blue-700"; // primary
      }
    },
  },
};
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;   /* px-4 py-2 */
  border-radius: 0.5rem;  /* rounded-lg */
  font-weight: 600;       /* font-semibold */
  transition: background-color 0.2s ease;
}
</style>
