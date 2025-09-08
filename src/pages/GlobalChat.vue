<script>
import AppH1 from "../components/AppH1.vue";
import { supabase } from '../services/supabase';
export default {
  name: "GlobalChat",
  components: {AppH1},
  data() {
    return {
      messages: [],
      newMessage: {
        email: "",
        content: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.messages.push({
          id: this.messages.length,
          email: this.newMessage.email,
          content: this.newMessage.content,
          created_at: new Date(),
        },
      )
      this.newMessage.content = '';
    },
  },
  async mounted() {
    const {data, error} = await supabase
      .from('global_chat_messages')
      .select();
    if (error) {
      throw new Error(error);
    }

    this.messages = data;
  }
};
</script>

<template>
  <div class="container mx-auto px-4 py-6 bg-gray-900 text-gray-200">
    <AppH1 class="text-indigo-300 font-bold">Chat general</AppH1>

    <div class="flex flex-col md:flex-row gap-6">
      <section class="overflow-y-auto w-9/12 h-100 p-6 bg-gray-800 shadow-lg rounded-lg border border-gray-700">
        <h2 class="sr-only">Lista de mensajes</h2>
        <ol class="flex flex-col items-start gap-4">
          <li
            v-for="message in messages"
            :key="message.id"
            class="p-4 rounded-lg bg-gray-700 border border-gray-600"
          >
            <div class="mb-2 text-indigo-200">
              <span class="font-bold">{{ message.email }}</span> dijo:
            </div>
            <div class="mb-2 text-gray-200">{{ message.content }}</div>
            <div class="text-sm text-gray-400">{{ message.created_at }}</div>
          </li>
        </ol>
      </section>

      <section class="w-full md:w-3/12 bg-gray-800 p-6 shadow-lg rounded-lg border border-gray-700">
        <h2 class="mb-4 text-xl font-semibold text-indigo-300"> Enviar un mensaje </h2>
        <form action="#" @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label class="block mb-2 text-indigo-200 font-medium" for="email"> Email </label>
            <input
              id="email"
              v-model="newMessage.content"
              class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              type="email"
            />
          </div>
          <div class="mb-4">
            <label class="block mb-2 text-indigo-200 font-medium" for="content">Mensaje</label>
            <textarea
              id="content"
              class="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
            ></textarea>
          </div>
          <button
            class="w-full md:w-auto px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-500 focus:bg-indigo-500 active:bg-indigo-700 text-white font-medium transition-colors duration-200 shadow-sm"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </section>
    </div>
  </div>
</template>
