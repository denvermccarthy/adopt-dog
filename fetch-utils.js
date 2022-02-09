const SUPABASE_URL = 'https://lxifeplqjanpuugbzgyn.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4aWZlcGxxamFucHV1Z2J6Z3luIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0MzU0NTEsImV4cCI6MTk2MDAxMTQ1MX0.4hkIbGdYMJ7SzqMSm39JtJRvMyFal0vMXHHWB0APEJw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getDogs() {
    // from the dogs table, select all items
    const resp = await client.from('dogs').select('*');
    console.log(resp);
    // and return the response (checking for errors)
    return checkError(resp);    
}

export async function getDog(id) {
    // from the dogs table, select a single dog who has the matching id

    // and return the response (checking for errors)
    return checkError(resp);    
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}