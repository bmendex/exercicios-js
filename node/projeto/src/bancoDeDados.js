const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {} 

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produto[produto.id] = produto
    return produto
}

// busca produto por ID
function getProduto(id) {
    return produtos[id] || {}
}

// retorna todos os produtos
function getProdutos() {
    return Object.values(produtos)
}

// Tornar funções visíveis para fora do arquivo
module.exports = { salvarProduto, getProduto, getProdutos }