const nome = 'Rebeca'
const concatencao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatencao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
