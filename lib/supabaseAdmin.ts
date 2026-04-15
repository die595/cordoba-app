import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

// Buscamos el archivo .env.local de forma más agresiva
const envPath = path.resolve(process.cwd(), '.env.local');

if (fs.existsSync(envPath)) {
  dotenv.config({ path: envPath });
} else {
  // Si falla el primero, probamos un nivel arriba (por si acaso)
  dotenv.config({ path: path.join(__dirname, '../.env.local') });
}

// Usamos .trim() para limpiar cualquier espacio o salto de línea invisible
const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').trim();
const supabaseServiceKey = (process.env.SUPABASE_SERVICE_ROLE_KEY || '').trim();

console.log("--- DEBUG CONEXIÓN ---");
console.log("URL detectada:", supabaseUrl ? `SÍ (${supabaseUrl.substring(0, 20)}...)` : "NO (VACÍO)");
console.log("----------------------");

if (!supabaseUrl || !supabaseUrl.startsWith('http')) {
  throw new Error(`CRÍTICO: URL no válida. Valor: "${supabaseUrl}"`);
}

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);