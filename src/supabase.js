import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wlrfddkmtmezijcpeaew.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndscmZkZGttdG1lemlqY3BlYWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk3NTEwNjYsImV4cCI6MTk5NTMyNzA2Nn0.buSpGGQr2oJ3J4FLbBHMSkAWq_XpSK3aebGZQWKOfQM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
