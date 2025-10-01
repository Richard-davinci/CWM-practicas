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
    <!-- Formulario -->
    <form class="mb-6 space-y-4 text-gray-200" @submit.prevent="handleSubmit">
      <input v-model="newNoticias.title" class="border p-2 w-full rounded" placeholder="Título"
             required type="text"/>
      <input v-model="newNoticias.synopsis" class="border p-2 w-full rounded" placeholder="Sinopsis"
             required type="text"/>
      <textarea v-model="newNoticias.body" class="border p-2 w-full rounded"
                placeholder="Texto completo" required></textarea>
      <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
