
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xnikryqyxjxsgxgpiixm.supabase.co'
const supabaseKey = 'sb_publishable_a3Z-rQrRH-mP5OVUrK7tXw_cFRXYEpm'
export const supabase = createClient(supabaseUrl, supabaseKey)