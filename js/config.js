// ==============================================
// 🔌 CONFIGURAÇÃO DO BANCO DE DADOS - SUPABASE
// ==============================================

const SUPABASE_URL = "https://gsbjoxmlrqrautupieeh.supabase.co";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzYmpveG1scXJsYXV0dXB5aWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2Mzc1MzEsImV4cCI6MjA5NjIxMzUzMX0.rJ6bTmQGNWm0aMFqSHFo-jYTRCSc4w_cL0rAgW_DtJI";

// Inicializa a conexão
const { createClient } = supabase;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
