// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://qbgvwbdmejgkmqqmuldn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiZ3Z3YmRtZWpna21xcW11bGRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMjA4NDcsImV4cCI6MjA2Njc5Njg0N30.ssFSxxeAzBjdp6z89EOEAxza5eaY1lNAds_7YychvIM";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);