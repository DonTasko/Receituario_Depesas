// Configuração Central do Supabase
const SUPABASE_URL = 'https://ubcngppazgiminiivjpj.supabase.co';
const SUPABASE_KEY = 'sb_publishable_ySvViONXKmD82UTC7SW_2w_jyP8_5R6';
const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Função global para formatar moeda (útil para todas as páginas)
const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' }).format(valor);
};
