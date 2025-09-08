<template>
  <section class="p-4">
    <!-- Card con slots -->
    <BaseCard

      date="08/09/2025"
      :action-button="{ text: 'Ver más', format: 'secondary' }"
      @action-pressed="onCardAction"
    >
      <!-- Slot del título -->
      <template #title>
        <h2 class="text-xl font-bold">Formulario de contacto</h2>
      </template>

      <!-- Contenido dentro de la card -->
      <form @submit.prevent="sendForm">
        <div class="mb-4">
          <FieldLabel for="nombre">Nombre</FieldLabel>
          <InputField
            id="nombre"
            name="nombre"
            type="text"
            v-model="form.nombre"
          />
        </div>

        <div class="mb-4">
          <FieldLabel for="email">Email</FieldLabel>
          <InputField
            id="email"
            name="email"
            type="email"
            v-model="form.email"
          />
        </div>

        <div class="mb-4">
          <FieldLabel for="mensaje">Mensaje</FieldLabel>
          <TextAreaField
            id="mensaje"
            name="mensaje"
            v-model="form.mensaje"
          />
        </div>

        <BaseButton type="submit" format="primary">Enviar</BaseButton>
        <BaseButton type="reset" format="secondary">Limpiar</BaseButton>
      </form>
    </BaseCard>
  </section>
</template>

<script>
import BaseCard from "../../src/components/BaseCard.vue";
import BaseButton from "../components/BaseButton.vue";
import FieldLabel from "../components/FieldLabel.vue";
import InputField from "../components/InputField.vue";
import TextAreaField from "../components/TextAreaField.vue";

export default {
  name: "Home",
  components: {
    BaseCard,
    BaseButton,
    FieldLabel,
    InputField,
    TextAreaField,
  },
  data() {
    return {
      form: {
        nombre: "",
        email: "",
        mensaje: "",
      },
    };
  },
  methods: {
    sendForm() {
      console.log("Formulario enviado:", this.form);
    },
    onCardAction() {
      console.log("Botón de acción presionado");
    },
  },
};
</script>
