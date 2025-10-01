import {supabase} from './supabase'

let user = {
  id: null,
  email: null,
}
let observer = [];

loadCurrentUserAuthState();

async function loadCurrentUserAuthState() {
  const {data, error} = await supabase.auth.getUser();

  if (error) {
    console.warn('No hay usuario autenticado.');
  }

  setUser({
    id: data.user.id,
    email: data.user.email,
  })
}

export async function register(email, password) {
  const {data, error} = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    console.error('[auth.js register] Error al registrar al usuario.', error);
    throw new Error(error.message);
  }
  // console.log('[auth.js register] Usuario registrado correctamente.', data);

  setUser({
    id: data.user.id,
    email: data.user.email,
  })

}

export async function login(email, password) {
  const {data, error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    console.error('[auth.js login] Error al loguearse el usuario.', error);
    throw new Error(error.message);
  }
  // console.log('[auth.js login] Usuario logueado correctamente.', data);
  setUser({
    id: data.user.id,
    email: data.user.email,
  })
}

export async function logout() {
  supabase.auth.signOut();

  user = {
    id: null,
    email: null,
  }
  notifyAll();
}

export function subscribeToAuthChanges(callback) {
  observer.push(callback);
  notify(callback);
}

function notify(callback) {
  callback({
    ...user
  });
}

function notifyAll() {
  observer.forEach(notify);
}

function setUser(data) {
  user = {
    ...user,
    ...data,
  }
  notifyAll();
}
