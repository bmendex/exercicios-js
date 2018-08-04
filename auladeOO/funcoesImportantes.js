const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

// Obtem todas as chaves do objeto
console.log(Object.keys(pessoa))
// Obtem todos os valores do objeto
console.log(Object.values(pessoa))
// Obtem o array que contém as chaves e os valores do objeto
console.log(Object.entries(pessoa))

// primeira maneira
Object.entries(pessoa).forEach(element => {
    console.log(`${element[0]}: ${element[1]}`)
});

// segunda maneira
Object.entries(pessoa).forEach(([chave, valor]) => {    
    console.log(`${chave}: ${valor}`)
});

// Define a propriedade de um objeto
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '28/02/1997'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a:4}
const obj = Object.assign(dest,o1,o2)
console.log(obj)