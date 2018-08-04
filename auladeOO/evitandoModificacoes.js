// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Maconha',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível: ', Object.isExtensible(produto))

produto.nome = 'Cocaina'
produto.descricao = 'Cocaina da boa'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'Valéria', idade: 20}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Antunes'
delete pessoa.nome
pessoa.idade = 21
console.log(pessoa)

// Object.freeze = selado + valores constantes

