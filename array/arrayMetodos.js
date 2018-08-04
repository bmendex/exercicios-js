const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

// remove último da lista
pilotos.pop() // Massa quebrou o carro
console.log(pilotos)

// inclui na última posição
pilotos.push('Verstappen')
console.log(pilotos)

// retira da primeira posição
pilotos.shift()
console.log(pilotos)

// inclui na primeira posição
pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0,'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3, 1) // massa quebrou
console.log(pilotos)

const algunsPilotos1 = pilotos.splice(3, 1) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)