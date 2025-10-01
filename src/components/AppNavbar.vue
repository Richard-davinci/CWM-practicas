<script>
import {logout, subscribeToAuthChanges} from "../services/auth.js";

export default {
  name: 'AppNavbar',
  data() {
    return {
      user: {
        id: null,
        email: null,
      },
    }
  },
  methods: {
    handleLogout() {
      logout()
      this.$router.push('/ingresar')
    }
  },
  mounted() {
    subscribeToAuthChanges(newUserState => this.user = newUserState)
  }
}
</script>

<template>
  <nav class="flex items-center justify-between px-6 py-4 bg-gray-800 text-white shadow-lg border-b border-gray-700">
    <RouterLink
      class="text-2xl font-bold tracking-tight text-indigo-300 hover:text-indigo-200 transition-colors duration-200"
      to="/">DV Social
    </RouterLink>
    <ul class="flex items-center space-x-6">
      <li>
        <RouterLink class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                    to="/">Home
        </RouterLink>
      </li>
      <template v-if="user.id === null">
        <li>
          <RouterLink to="/ingresar">Ingresar</RouterLink>
        </li>
        <li>
          <RouterLink to="/crear-cuenta">Crear cuenta</RouterLink>
        </li>
      </template>
      <template v-else>
        <li>
          <RouterLink class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                      to="/news">Noticias
          </RouterLink>
        </li>
        <li>
          <RouterLink class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                      to="/chat">Chat general
          </RouterLink>
        </li>
        <li>
          <RouterLink class="px-3 py-2 rounded-md hover:bg-gray-700 hover:text-indigo-300 transition-colors duration-200"
                      to="/mi-perfil">Mi perfil
          </RouterLink>
        </li>
        <li>
          <form
            action="#"
            @submit.prevent="handleLogout"
          >
            <button type="submit">{{ user.email }} (Cerrar sesión)</button>
          </form>
        </li>
      </template>
    </ul>
  </nav>
</template>