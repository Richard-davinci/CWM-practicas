import {supabase} from "./supabase";

export async function fetchLastGlobalChatMessages() {
  const {data, error} = await supabase
    .from('global_chat_messages')
    .select();

  if (error) {
    console.error('[global-chat.js fetchLastGlobalChatMessages] Error al traer los mensajes iniciales del chat.', error);
    throw new Error(error.message);
  }

  return data;
}

export async function sendGlobalChatMessage({email, content}) {
  const {data, error} = await supabase
    .from('global_chat_messages')
    .insert({
      email,
      content,
    });

  if (error) {
    console.error('[global-chat.js sendGlobalChatMessage] Error al enviar el nuevo mensaje.', error);
    throw new Error(error.message);
  }
}

export function subscribeToNewGlobalChatMessages(callback) {
  const chatChannel = supabase.channel('global_chat_messages');
  chatChannel.on(
    'postgres_changes',
    {
      event: 'INSERT',

      table: 'global_chat_messages',
      schema: 'public',
    },
    payload => {

      callback(payload.new);
    }
  );
  chatChannel.subscribe();
}