let btnOdernarporpreco = document.getElementById('btnOrdenarPorPreco')
btnOdernarporpreco.addEventListener('click', ordenarlivrosporpreco)

function ordenarlivrosporpreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibiroslivrosnatela(livrosOrdenados)
}