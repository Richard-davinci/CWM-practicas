import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://vrujqfcsbbrnjaczwtaw.supabase.co';
const SUPABASE_KEY = 'sb_publishable_rdXKgC692AUH3qC-SomIKQ_W5Q3p3Oi';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);