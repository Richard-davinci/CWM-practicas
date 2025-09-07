<script>
import AppH1 from '../components/AppH1.vue';

export default {
    name: 'GlobalChat',
    components: { AppH1, },
}
</script>

<template>
  <div class="container mx-auto px-4 py-6 bg-gray-900 text-gray-200">
    <AppH1 class="text-indigo-300 font-bold">Chat general</AppH1>

    <div class="flex flex-col md:flex-row gap-6">
      <section class="w-full md:w-9/12 p-6 bg-gray-800 shadow-lg rounded-lg border border-gray-700">
        <h2 class="sr-only">Lista de mensajes</h2>
        <!-- Acá va la lista de mensajes -->
        <div class="h-96 flex items-center justify-center text-gray-500">
          <p class="text-lg italic">No hay mensajes aún...</p>
        </div>
      </section>
      
      <section class="w-full md:w-3/12 bg-gray-800 p-6 shadow-lg rounded-lg border border-gray-700">
        <h2 class="mb-4 text-xl font-semibold text-indigo-300">Enviar un mensaje</h2>
        <form action="#">
          <div class="mb-4">
            <label for="email" class="block mb-2 text-indigo-200 font-medium">Email</label>
            <input type="email" id="email" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          </div>
          <div class="mb-4">
            <label for="content" class="block mb-2 text-indigo-200 font-medium">Mensaje</label>
            <textarea id="content" rows="4" class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"></textarea>
          </div>
          <button type="submit" class="w-full md:w-auto px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-500 active:bg-indigo-700 text-white font-medium transition-colors duration-200 shadow-sm">Enviar</button>
        </form>
      </section>
    </div>
  </div>
</template>