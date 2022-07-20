const express = require('express')
const multer = require('multer')
const app = express()
const PORT = 8080
const Productos = require('./Container.js')
const db = 'clase4Arr.json'
const contenedor = new Productos(db)
const { auth } = require('./middlewares/auth')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const server = app.listen(PORT, (req,res) => {
    console.log(`Server Listening on PORT ${PORT}`)
})

app.get('/api/productos', (req,res) => {
    const listadoProductos = contenedor.getAll()
    res.json(listadoProductos)
})

app.get('/api/productos/:id', (req,res) => {
    const id = parseInt(req.params.id)
    const productos = contenedor.getById(id)
    res.json(productos)
})

app.post('/api/productos', auth, (req, res) => {
    const producto = req.producto
    console.log(producto)
    res.json({success: true})
    producto.save().then.getById()
})

app.delete('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const productoEliminado = contenedor.deleteById(id)
    res.json(productoEliminado)
})

app.put('/api/productos/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const productos = contenedor.getById(id)
    let nuevoPrecio = productos.precio + 5000
    res.json(nuevoPrecio)
})