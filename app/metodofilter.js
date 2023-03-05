const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarlivros))


function filtrarlivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosfiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0 ) : livros.filter(livros => livros.categoria == categoria)
    exibiroslivrosnatela(livrosfiltrados)
    if (categoria == 'disponivel') {
        const valorTotal = calcularvalortotaldelivrosdisponiveis(livrosfiltrados)
        exibirvalortotaldoslivrosdisponiveisnatela(valorTotal)
    }
}

function exibirvalortotaldoslivrosdisponiveisnatela(valorTotal) {
    elementocomvalortotaldelivrosdisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}

