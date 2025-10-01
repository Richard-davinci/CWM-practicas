import {supabase} from "./supabase.js";

export async function fetchNews() {
  const {data, error} = await supabase
    .from('news')
    .select()
    .order("created_at", {ascending: false});
  if (error) {
    console.error('[news.js fetchNews] Error al traer las noticias.', error);
    throw new Error(error.message);
  }
  return data;
}

export async function createNews({title, synopsis, body}) {
  const {data, error} = await supabase
    .from('news')
    .insert({title, synopsis, body});
  if (error) {
    console.error('[news.js createNews] Error al crear una nueva noticia.', error);
  }
}

export async function subscribeToNews(callback) {
  const newsChannel = supabase.channel('news');
  newsChannel.on('postgres_changes',
    {
      event: 'INSERT',
      table: 'news',
      schema: 'public',
    },
    payload => {
      callback(payload.new);
    })
  newsChannel.subscribe();
}