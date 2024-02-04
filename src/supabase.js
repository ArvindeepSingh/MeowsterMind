import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jtyabnauvxotdvpynfcj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0eWFibmF1dnhvdGR2cHluZmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc4MzA3MzcsImV4cCI6MjAxMzQwNjczN30.SbQnCs5beLXfLhT7-rYUP-mN4mXkDce2CG3EPCbo7nk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
