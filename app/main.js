let livros = []
const endpointdaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getbuscarlivrosdaapi()

async function getbuscarlivrosdaapi() {
    const res = await fetch(endpointdaAPI)
    livros = await res.json()
    let livroscomdesconto = aplicardesconto(livros)
    exibiroslivrosnatela(livroscomdesconto)
    
}

