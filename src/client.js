
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ztkdaygtvbumkqvxsvow.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp0a2RheWd0dmJ1bWtxdnhzdm93Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk2Njc0NDcsImV4cCI6MjA0NTI0MzQ0N30.-dS2rfsrfKhtXGXNj_Uwdr9QItyIZkSJ0Xwz4nA_hjw'
export const supabase = createClient(supabaseUrl, supabaseKey)