// sem promise...
const http = require('http')
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        // recebe os dados do JSON e concatena
        res.on('data', dados => {
            resultado += dados
        })

        // Converte o dado para objeto
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `Turma A: ${a.nome}`))
    console.log(nomes)
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `Turma B: ${a.nome}`))
        console.log(nomes)
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `Turma C: ${a.nome}`))
            console.log(nomes)
        })
    })
})