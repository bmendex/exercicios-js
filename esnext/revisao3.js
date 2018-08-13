// ES8: Object.valeus/Object.entries
const obj = { a: 1, b: 2, c:3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação literal
const nome = 'Carla'
const pessoa = {
    nome,
    ola() {
        return 'Olá!'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class 
class Animal{}
class Cachorro extends Animal {
    falar() {
        return 'Au au'
    }
}

console.log(new Cachorro().falar())