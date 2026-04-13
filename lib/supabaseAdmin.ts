import { createClient } from "@supabase/supabase-js";

// Server-only admin client — uses service_role key.
// NEVER import this in client components or expose via NEXT_PUBLIC_ vars.
// Used exclusively for INSERT/UPDATE operations in server-side code.

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error("Faltan las variables de entorno de SupabaseAdmin");
}

export const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});
