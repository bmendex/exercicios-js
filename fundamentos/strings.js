const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat("!"))
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(3, 'e'))
// Comando regex /\d/ Substitui todos os digitos numéricos dentro da string

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))
// Comando regex /,/ para definir um delimitador dentro de um array