const handlebars = require("express-handlebars")
const express = require('express')
const app = express()
const PORT = 8080
const hbs = handlebars.create({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layout",
    partialsDir: __dirname + "./views/partials/"
})
app.set("view engine", "hbs")
app.set("views", "./views")
app.engine("hbs",hbs.engine)



const server = app.listen(PORT, (req,res) => {
    console.log(`Server Listening on PORT ${PORT}`)
})

app.get("/productos",(req,res) => {
    const productos = [
        {
          "nombre": "Jose",
          "precio": 1201,
          "id": 1
        },
        {
          "nombre": "Bernardo",
          "precio": 500,
          "id": 2
        },
        {
          "nombre": "Cresta",
          "precio": 600,
          "id": 3
        },
    ]
    res.render("main",productos)

    console.log(productos)
})

app.post("/productos",(req,res) => {

})
