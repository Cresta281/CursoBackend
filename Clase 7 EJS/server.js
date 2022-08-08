const express = require('express')
const app = express()
const productos = 'clase4Arr.json'
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Server esta corriendo en el puerto ${PORT}`)
})
app.set('view engine', 'ejs')
app.get('/productos', (req,res) => {
    res.render('index', {productos})
})