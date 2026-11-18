
import { createClient } from
"https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";

const SUPABASE_URL = "https://jpnsgzhqbygtiamqclnw.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_m0DOId6cC9tQ5RiMRi3PUA_7LugbwaB";

export const supabase = createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true
        }
    }
);
