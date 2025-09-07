<script>
import AppH1 from '../components/AppH1.vue';

export default {
    name: 'Home',
    components: { AppH1 },
};
</script>

<template>
  <div class="p-6 space-y-8 bg-gray-100 min-h-screen">

    <!-- Encabezado Principal -->
    <AppH1 class="text-4xl font-extrabold text-center text-indigo-600">Desafío 03</AppH1>

    <!-- Títulos -->
    <section>
      <h2 class="text-3xl font-bold text-amber-800 mb-4">Títulos</h2>
      <div class="space-y-2">
        <h1 class="text-4xl font-bold text-green-600">Título Principal</h1>
        <h2 class="text-3xl font-semibold text-blue-500">Título Secundario</h2>
        <h3 class="text-2xl font-medium text-orange-500">Título Terciario</h3>
        <h4 class="text-xl font-normal text-purple-500">Título Cuarto</h4>
        <h5 class="text-lg font-light text-gray-600">Título Quinto</h5>
        <h6 class="text-base font-thin text-gray-400">Título Sexto</h6>
      </div>
    </section>

    <!-- Párrafo -->
    <section>
      <h2 class="text-3xl font-bold text-amber-800 mb-4">Párrafos</h2>
      <p class="bg-gray-200 border-l-4 border-blue-500 px-4 py-2 text-gray-700">
        Este es un párrafo de ejemplo con estilos aplicados.
      </p>
    </section>

    <!-- Inputs y Selecciones -->
    <section>
      <h2 class="text-3xl font-bold text-amber-800 mb-4">Inputs y Selecciones</h2>
      <div class="space-y-4">
        <input 
          type="text" 
          placeholder="Escribe algo aquí..." 
          class="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input type="file" class="block text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-blue-500 file:text-white hover:file:bg-blue-600">

        <div class="flex items-center space-x-2">
          <input type="checkbox" id="checkbox" class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-500">
          <label for="checkbox" class="text-gray-700">Acepto los términos y condiciones</label>
        </div>

        <div class="flex items-center space-x-4">
          <label class="inline-flex items-center">
            <input type="radio" name="opcion" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500">
            <span class="ml-2 text-gray-700">Opción 1</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" name="opcion" class="w-4 h-4 text-blue-600 border-gray-300 focus:ring focus:ring-blue-500">
            <span class="ml-2 text-gray-700">Opción 2</span>
          </label>
        </div>

        <textarea 
          rows="4" 
          placeholder="Escribe tu mensaje..." 
          class="border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        ></textarea>

        <select class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-red-400">
          <option value="opcion1">Opción 1</option>
          <option value="opcion2">Opción 2</option>
          <option value="opcion3">Opción 3</option>
        </select>
      </div>
    </section>

    <!-- Botones -->
    <section>
      <h2 class="text-3xl font-bold text-amber-800 mb-4">Botones</h2>
      <div class="flex space-x-4">
        <button class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">Botón 1</button>
        <button class="px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600">Botón 2</button>
        <button class="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600">Botón 3</button>
        <button class="px-4 py-2 bg-purple-500 text-white font-semibold rounded-md hover:bg-purple-600">Botón 4</button>
      </div>
    </section>

    <!-- Tarjetas -->
    <section>
      <h2 class="text-3xl font-bold text-amber-800 mb-4">Tarjetas</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">

          <div class="p-4">
            <h4 class="text-xl font-bold text-gray-800">Título de la Tarjeta</h4>
            <p class="text-gray-600 mb-4">Descripción breve de esta tarjeta de ejemplo.</p>
            <button class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Leer más</button>
          </div>
        </div>

        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
          <div class="p-4">
            <h4 class="text-xl font-bold text-gray-800">Otra Tarjeta</h4>
            <p class="text-gray-600 mb-4">Otra descripción breve para este segundo ejemplo.</p>
            <button class="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Ver más</button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>