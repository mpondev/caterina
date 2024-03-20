import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://qdizsvqhgxaudqcmcnih.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkaXpzdnFoZ3hhdWRxY21jbmloIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1ODM2MzksImV4cCI6MjAyNjE1OTYzOX0.2s6t5HpHFqZi9JmFLZ2ivdva6rTISX5Ok3pPNlKE6uc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
