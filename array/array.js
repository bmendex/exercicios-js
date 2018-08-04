console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Bruno', 'Valéria')
console.log(aprovados)

aprovados = ['Bia', 'Bruno', 'Valéria']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Michael'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Fabiano'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bruno', 'Valéria', 'Maria Eduarda']
// método utilizado para excluir / substituir itens do array
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)