const express = require('express')
const app = express()
const PORT = 8080
const Productos = require('./Container.js')
const db = './clase4Arr.json'
const contenedor = new Productos(db)
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('views','./views')
app.set('view engine', 'pug')


app.get('/productos', async (req,res) =>  {
    const todosProductos = await contenedor.getAll()
    res.render('index', {productos: todosProductos})
    console.log(todosProductos)
})
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})