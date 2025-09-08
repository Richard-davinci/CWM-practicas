// Este servicio ofrece la instancia de Supabase.
// En este contexto, un servicio es una biblioteca que ofrece funciones o clases
// para trabajar con alguna funcionalidad.
import { createClient } from '@supabase/supabase-js';

// Eventualmente, estos datos podrían salir de un [.env].
const SUPABASE_URL = 'https://vrujqfcsbbrnjaczwtaw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_rdXKgC692AUH3qC-SomIKQ_W5Q3p3Oi';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);