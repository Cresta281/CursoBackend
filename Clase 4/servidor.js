
const express = require ('express')
const app = express()
const PORT = 8080

const server = app.listen (PORT, () => {
    console.log(`servidor express escuchando en el puerto ${PORT}`)
})


const Productos = require('../Clase 4/Container')
const data = new Productos('clase4Arr.json')
app.get('/productos', (req, res) => {
    data.getAll().then((a) => res.send(a))
})
app.get('/productos/random', (req,res) => {
    data.getRandom().then((a) => res.send(a))
})