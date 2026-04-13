import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://qckgrpvlexondirgfrwy.supabase.co'
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_9DE3B1jZZ7ssKm8Ug1tWag_yuSRNhx9'

export const supabase = createClient(supabaseUrl, supabaseKey);
