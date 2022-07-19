const fs = require("fs")
const express = require ('express')
const { prototype } = require("events")
const { info } = require("console")
const app = express()
const PORT = 8080

const server = app.listen (PORT, () => {
    console.log(`servidor express escuchando en el puerto ${PORT}`)
})

app.get('/productos', (req, res) => {
    let productos = new Productos();
    let arrayProductos = productos.getAll();

    console.log(arrayProductos);
    res.send(JSON.stringify({'arrayProductos': arrayProductos}));
})

app.get('/productoRandom',(req,res) => {
    let producto = new Productos();
    let arrayProductos = producto.getAll();
    function randomize(arrayProductos) {
        return Math.floor(Math.random(arrayProductos.length))
    }

    let infoProducto = arrayProductos[randomize(arrayProductos)];
    res.send(JSON.stringify({'infoProducto': infoProducto}))
})

class Productos {
    constructor (nombre =  '', precio = '', id = '') {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
    Save() {
        try {
            fs.readFile('clase4Arr.json', 'utf-8', (err, data) => {
                if (err) {
                    console.log('Se produjo un error al recuperar la info del archivo');
                }

                let arrayProductos = JSON.parse(data);
                
                let infoNuevoProducto = {"nombre": this.nombre, "precio": this.precio, "id": this.id};
                arrayProductos.productos.push(infoNuevoProducto);
                console.log(arrayProductos);

                fs.writeFile('clase4Arr.json', JSON.stringify(arrayProductos, null, 2), () => {
                    console.log("Se guardo correctamente el producto con ID: " + this.id);
                })
            });
            
            return this.id;
        }
        catch(err){
            return console.log(err)
        }
    }
    GetById(idProducto) {
        fs.readFile('clase4Arr.json', 'utf-8', (err, data) => {
            let arrayProductos = JSON.parse(data);
            let itemId = arrayProductos.productos.filter(x => x.id == idProducto);

            if (itemId.length == 0) {
                return null;
            } else {
                console.log(itemId)
                // return itemId;
            }
        })
    }
    getAll() {
        fs.readFile( 'clase4Arr.json', 'utf-8', (err, data) => {
            let arrayProductos = JSON.parse(data);
            //console.log(arrayProductos)
            return arrayProductos;
        });
    }
    deleteById(idProducto) {
        fs.readFile('clase4Arr.json', 'utf-8', (err, data) => {
            let arrayProductos = JSON.parse(data);

            let arrayProductosFiltrados = arrayProductos.productos.filter(x => x.id != idProducto);
            arrayProductos.productos = arrayProductosFiltrados
            fs.writeFile('clase4Arr.json', JSON.stringify(arrayProductos), () => {
                console.log('Se borro correctamente el producto con ID: ' + idProducto)
            })
        })
    }
    deleteAll() {
        fs.readFile('clase4Arr.json', 'utf-8', (err, data) => {
            let arrayVacio = {};
            arrayVacio.productos = [];

            fs.writeFile('clase4Arr.json', JSON.stringify(arrayVacio), () => {
                console.log('Se eliminaron todos los items');
            })
        })
    }
}
//Fernet.Save();
//Fernet.GetById(2);
//Fernet.getAll()
//Fernet.deleteById(1);
//Fernet.deleteAll();