const fs = require("fs")
const express = require ('express')
const app = express()
const PORT = 8080

const server = app.listen (PORT, () => {
    console.log(`servidor express escuchando en el puerto ${server.adress().port}`)
})

app.get('/',(req,res) => {
    res.send("<h1>Bienvenida Lu a mi server</h1>")
})
        fs.readFileSync("clase4Arr.json","utf-8",(data)) // en esta parte no deberías realizar una lectura del archivo. De eso se encarga la clase Container del desafío anterior
        let productosArray = JSON.parse(data)



app.get('/productos',(req,res) => {
        res.send(`<h1> Nuestros Productos ${productosArray} </h1>`) // faltan las promesas pero porque esto debería renderizarse a partir de la clase Container.
})
// Te dejo un ejemplo de cómo debería ser este app.get de productos:
const contenedor = require('./container') // paso número 1: supongamos que nuestra clase viene de un archivo llamado "container.js", entonces lo importamos de esta forma...
const data = new contenedor('products.json') // paso número 2: instanciamos nuestra clase para acceder a todos los métodos (esto debería estar resuelto desde el desafío pasado)
app.get('/products', (req, res) => {   
    data.getAll().then((prod) => res.send(prod)) // paso 3: llamamos a nuesstro método "getAll" y como es asíncrono debemos resolver la promesa.
})

// En el producto random podes realizar, si te queda más cómodo, un método en tu clase que te resuelva ese tema y acá directamente llamarlo, eso sería una mejor práctica.







app.get('/productoRandom',(req,res) => {
    function randomize(productos) {
        return Math.floor(Math.random(productos))
    }
    res.send(`<h1> Nuestros productos ${randomize(productosArray)}`)
})

class Productos {
    constructor (nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
    async Save(producto) {
   
        try {
            await fs.readFile("clase4Arr.json","utf-8",(data))
            let array = JSON.parse(data)
            array.bebidas.push(producto)
            return fs.writeFile('clase4Arr.json',JSON.stringify(array, null, 2))
        }
        catch(err){
            return console.log(err)
        }
        
    }
    async getById(number) {
       try {
            await fs.readFile("clase4Arr.json","utf-8",(data))
            const information = JSON.parse(data)
            const itemId = information.find(information.id == number)
            return itemId
       } 
       catch(err) {
            console.log(err)
        }
    }
    async getAll() {
        try {
            await fs.readFile("clase4Arr.json","utf-8",(data))
            const information = JSON.parse(data)
            return information 
        }
        catch(err) {
            console.log(err)
        }
        
    }
    async deleteById(number) {
        try {
            await fs.readFile("clase4Arr.json","utf-8",(data))
            const information = JSON.parse(data)
            const findId = information.find(information.id == number)
            const deleteId = information.splice(...findId)
            return deleteId
        }
        catch(err) {
            console.log(err)
        }
    }
    async deleteAll() {
        try {
            await fs.readFileSync("clase4Arr.json","utf-8",(data))
            let information = JSON.parse(data)
            information = []
            fs.writeFileSync('clase4Arr.json',JSON.stringify(information, null, 2))
        }
        catch(err) {
            console.log(err)
        }
    }
    
}
const Fernet = new Productos('Fernet',1200,1)
Save(await Fernet)
getById(1)
getAll()
deleteById(1)
deleteAll()