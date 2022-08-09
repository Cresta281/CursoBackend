const express = require('express')
const multer = require('multer')
const app = express()
const PORT = 8080
const Productos = require('./Container.js')
const db = 'clase4Arr.json'
const contenedor = new Productos(db)
const { auth } = require('../middlewares/auth')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const fs = require("fs")


app.use(express.urlencoded({extended: true}))
app.use(express.json())

const server = app.listen(PORT, (req,res) => {
    console.log(`Server Listening on PORT ${PORT}`)
})

app.get('/api/productos', (req,res) => {
    const listadoProductos = contenedor.getAll().then((a) => res.json(a))
    return listadoProductos
})


app.get('/api/productos/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const productos = contenedor.getById(id).then((a) => res.send(a))
    return productos
})

app.post('/api/productos',(req, res) => {
    const productos = contenedor.Save(req.body).then(() =>  res.send(`Usuario con el id ${req.body.id} ha sido creado`))
   
    return productos
})

app.delete('/api/productos/:id', (req, res) => {
    let productoEliminado = contenedor.deleteById(req.params.id).then(() => res.send(`Usuario ha sido eliminado`))
    return productoEliminado
})

app.put('/api/productos/:id', (req, res) => {
    
    let newData = contenedor.update(req.params.id,req.body).then(() => res.send(`usuario ha sido actualizado`))
    
    return newData
})