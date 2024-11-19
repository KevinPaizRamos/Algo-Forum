import { createClient } from "@supabase/supabase-js";

const URL = "https://aviceshpjoxljmujrukl.supabase.co";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2aWNlc2hwam94bGptdWpydWtsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5ODc5NzQsImV4cCI6MjA0NzU2Mzk3NH0.uCzMUoNgHi3mew5uNc4yL9z1MdJNjwbgAM49LGBBJlI";

export const supabase = createClient(URL, API_KEY);
