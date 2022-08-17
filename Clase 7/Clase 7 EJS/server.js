const express = require('express')
const app = express()
const productos = 'clase4Arr.json'
const PORT = 8080
const Productos = require('./Container.js')
const contenedor = new Productos()
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.listen(PORT, () => {
    console.log(`Server esta corriendo en el puerto ${PORT}`)
})
app.set('view engine', 'ejs')
app.set('views','./views')
app.get('/productos', async (req,res) => {
    const todosProductos = await contenedor.getAll()
    res.render('index', {productos: todosProductos})
    console.log(todosProductos)
})