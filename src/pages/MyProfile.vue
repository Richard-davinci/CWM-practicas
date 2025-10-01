<script>
import AppH1 from '../components/AppH1.vue';
import {subscribeToAuthChanges} from "../services/auth.js";

export default {
  name: 'MyProfile',
  components: {AppH1,},
  data() {
    return {
      user: {
        id: null,
        email: null,
        display_name: null,
        bio: null,
        career: null,
      },
    }
  },
  mounted() {
    subscribeToAuthChanges(newUserState => this.user = newUserState)
  }
}
</script>

<template>

  <div class="container mx-auto px-4 py-6 bg-gray-900 text-gray-200">
    <AppH1 class="text-indigo-300 font-bold text-center">Mi perfil</AppH1>
    <section class="max-w-md mx-auto bg-gray-800 p-6 shadow-lg rounded-lg border border-gray-700">
      <div class="mb-4 text-indigo-200 italic">{{ user.bio ?? 'Sin especificar...' }}</div>

      <dl>
        <dt class="mb-2 text-indigo-200 font-medium">Email</dt>
        <dd class="mb-4 text-white">{{ user.email }}</dd>
        <dt class="mb-2 text-indigo-200 font-medium">Nombre</dt>
        <dd class="mb-4 text-white">{{ user.display_name ?? 'Sin especificar...' }}</dd>
        <dt class="mb-2 text-indigo-200 font-medium">Carrera</dt>
        <dd class="mb-4 text-white">{{ user.career ?? 'Sin especificar...' }}</dd>
      </dl>
    </section>
  </div>
</template>