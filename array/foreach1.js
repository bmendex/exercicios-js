const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log('- ' +nome))

aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

aprovados.forEach(function(nome, indice, array){
    console.log(`${indice + 1}) ${nome}`)
})