const elementoParaInserirLivros = document.getElementById('livros')
const elementocomvalortotaldelivrosdisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibiroslivrosnatela(listadelivros) {
    elementocomvalortotaldelivrosdisponiveis.innerHTML = ''
    elementoParaInserirLivros.innerHTML = ''
    listadelivros.forEach(livro => {
        let disponibilidade = verificarDisponibilidadeDolivro(livro)
        elementoParaInserirLivros.innerHTML += `<div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
        ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`
    });
}

function verificarDisponibilidadeDolivro(livro) {
    if (livro.quantidade > 0 ) {
        return 'livro__imagens'
    } else {
        return 'livros_imagens indisponivel'
    }
}