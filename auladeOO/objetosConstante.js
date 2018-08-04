const pessoa = {nome: 'João'}
pessoa.nome = 'Bruno'
console.log(pessoa)

// Congela o objeto e não permite mais alteração apartir da linha onde está o comando
Object.freeze(pessoa)

pessoa.nome = 'Renan'
console.log(pessoa.nome)

// Já declara o objeto congelado, não permitindo alteração
const pessoaConstante = Object.freeze({nome: 'Brunão'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)

