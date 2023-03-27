import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jkiuvfzxvmulfjdpeqdd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpraXV2Znp4dm11bGZqZHBlcWRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk5Mjg3NjEsImV4cCI6MTk5NTUwNDc2MX0.qSt3r_XcSiNqH9A7Vw2i8xuMSxdJQXf9aZ0atfsv0sU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
