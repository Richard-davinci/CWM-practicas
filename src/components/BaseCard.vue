<template>
  <article class="border rounded-lg shadow-md overflow-hidden bg-gray-800 text-gray-300">
    <!-- Imagen opcional -->
    <img
      v-if="img"
      :src="img.src"
      :alt="img.alt"
      class="w-full h-48 object-cover"
    />

    <div class="p-4">
      <!-- Slot del título -->
      <header v-if="$slots.title" class="mb-2">
        <slot name="title" />
      </header>

      <!-- Contenido principal -->
      <div class="mb-4">
        <slot />
      </div>

      <!-- Footer con fecha y botón -->
      <footer class="flex justify-between items-center text-sm text-gray-400">
        <span v-if="date">{{ date }}</span>
        <BaseButton
          v-if="actionButton"
          :format="actionButton.format || 'secondary'"
          @click="$emit('action-pressed')"
          class="bg-gray-700 hover:bg-gray-600 text-gray-300"
        >
          {{ actionButton.text }}
        </BaseButton>
      </footer>
    </div>
  </article>
</template>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  name: "BaseCard",
  components: { BaseButton },
  props: {
    img: {
      type: Object,
      default: null,
    },
    date: {
      type: String,
      default: "",
    },
    actionButton: {
      type: Object,
      default: null,
    },
  },
};
</script>