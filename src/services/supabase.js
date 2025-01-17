import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://uvytunkbsrrkfeettfpk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV2eXR1bmtic3Jya2ZlZXR0ZnBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY5NjAyNDcsImV4cCI6MjA1MjUzNjI0N30.HiOr9Td0kce10KnD50ZMEU-kIn31ygNb2fHrC3-2Vho';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
