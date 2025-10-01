<script>
import AppH1 from '../components/AppH1.vue';
import {createNews, fetchNews, subscribeToNews} from "../services/news.js";

export default {
  name: 'NewsFeed',
  components: {AppH1,},
  data() {
    return {
      noticias: [],
      newNoticias: {
        title: '',
        synopsis: '',
        body: '',
      }
    }
  },
  methods: {
    async handleSubmit() {
      try {
        await createNews({
          title: this.newNoticias.title,
          synopsis: this.newNoticias.synopsis,
          body: this.newNoticias.body,
        });
      } catch (error) {
        console.error('Hubo un error al crear la noticia', error.message);
      }
      this.newNoticias.title = '';
      this.newNoticias.synopsis = '';
      this.newNoticias.body = '';
    }
  },
  async mounted() {
    subscribeToNews(async newNoticias => {
      this.noticias.push(newNoticias);
    });
    this.noticias = await fetchNews()
  }
}

</script>
<template>
  <div class="p-6">
    <AppH1 class="text-indigo-300 font-bold">Noticias</AppH1>
    <!-- Formulario -->
    <form class="mb-6 space-y-4 text-gray-200 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700"
          @submit.prevent="handleSubmit">
      <div class="space-y-2">
        <label for="title" class="block text-indigo-200 font-medium">Título</label>
        <input id="title" v-model="newNoticias.title"
               class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
               placeholder="Título"
               required type="text"/>
      </div>
      <div class="space-y-2">
        <label for="synopsis" class="block text-indigo-200 font-medium">Sinopsis</label>
        <input id="synopsis" v-model="newNoticias.synopsis"
               class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
               placeholder="Sinopsis"
               required type="text"/>
      </div>
      <div class="space-y-2">
        <label for="body" class="block text-indigo-200 font-medium">Texto completo</label>
        <textarea id="body" v-model="newNoticias.body"
                  class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Texto completo" required rows="4"></textarea>
      </div>
      <button
        class="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors duration-200"
        type="submit">
        Publicar
      </button>
    </form>

    <!-- Listado -->
    <div class="grid grid-cols-3 gap-4">
      <div v-for="noticia in noticias" :key="noticia.id"
           class="border rounded-lg shadow p-4 bg-white">
        <h2 class="text-xl font-bold">{{ noticia.title }}</h2>
        <p class="text-xs text-gray-500 mb-2">{{ new Date(noticia.created_at).toLocaleString() }}</p>
        <p class="text-gray-600 italic">{{ noticia.synopsis }}</p>
        <p class="mt-2">{{ noticia.body }}</p>  
        

      </div>
    </div>
  </div>
</template>
