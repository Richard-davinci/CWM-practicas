<script>
import AppH1 from '../components/AppH1.vue';
import {login} from '../services/auth.js';

export default {
  name: 'Login',
  components: {AppH1,},
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
      loading: false,
    }
  },
  methods: {
    async handleSubmit() {
      try {
        this.loading = true;
        await login(this.user.email, this.user.password)
        this.$router.push('/mi-perfil')
      } catch (error) {
        //TODO:
      }
      this.loading = false;
    }
  }
}
</script>

<template>
  <div class="container mx-auto px-4 py-6 bg-gray-900 text-gray-200">
    <AppH1 class="text-indigo-300 font-bold text-center">Ingresar a mi cuenta</AppH1>

    <section class="max-w-md mx-auto bg-gray-800 p-6 shadow-lg rounded-lg border border-gray-700">
      <form action="#" @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block mb-2 text-indigo-200 font-medium" for="email">Email</label>
          <input
            id="email"
            v-model="user.email"
            class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            type="email"
          />
        </div>
        <div class="mb-4">
          <label class="block mb-2 text-indigo-200 font-medium" for="password">Contraseña</label>
          <input
            id="password"
            v-model="user.password"
            class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            required
            type="password"
          />
        </div>
        <button
          class="w-full px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-500 active:bg-indigo-700 text-white font-medium transition-colors duration-200 shadow-sm"
          type="submit"
        >
          Ingresar a mi cuenta
        </button>
      </form>
    </section>
  </div>
</template>