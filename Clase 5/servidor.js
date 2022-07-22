
const express = require ('express')
const app = express()
const PORT = 8080

const server = app.listen (PORT, () => {
    console.log(`servidor express escuchando en el puerto ${server.address().PORT}`)
})


const Productos = require('../Clase 4/Container')
const data = new Productos('productos.json')
app.get('/products', (req, res) => {
    data.getAll().then((a) => res.send(a))
})
app.get('/productos/random', (req,res) => {
    data.getRandom().then((a) => res.send(a))
})