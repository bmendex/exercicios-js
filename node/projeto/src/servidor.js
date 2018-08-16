const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

// essa linha significa que para qualquer requisição que faça ao middleware irá passar por aqui
app.use(bodyParser.urlencoded({ extended: true }))

// traz todos os produtos cadastrados
app.get('/produtos',(req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

// traz um produto específico
app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // essa linha gera o JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // essa linha gera o JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // essa linha gera o JSON
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})