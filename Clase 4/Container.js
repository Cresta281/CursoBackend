const fs = require("fs")

class Productos {
    constructor (nombre =  '', precio = '', id = '') {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
    Save = async() => {
        try {
            await fs.promises.readFile('clase4Arr.json', 'utf-8', (err, data) => {
                if (err) {
                    console.log('Se produjo un error al recuperar la info del archivo');
                }

                let arrayProductos = JSON.parse(data);
                
                let infoNuevoProducto = {"nombre": this.nombre, "precio": this.precio, "id": this.id};
                arrayProductos.push(infoNuevoProducto);
                console.log(arrayProductos);

               
            });
            return await fs.writeFile('clase4Arr.json', JSON.stringify(arrayProductos, null, 2), () => {
                console.log("Se guardo correctamente el producto con ID: " + this.id);
            })
            
           
        }
        catch(err){
            return console.log(err)
        }
    }
    getById = async(idProducto) => {
        const data = await fs.promises.readFile('clase4Arr.json', 'utf-8')
            let arrayProductos = JSON.parse(data);
            let itemId = arrayProductos.filter(x => x.id == idProducto);
            console.log(itemId)

            if (itemId.length == 0) {
                return null;
            } else {
                console.log(itemId)
                return (JSON.stringify(itemId))
            }
        
    }
    getAll = async() => {
        return await fs.promises.readFile( 'clase4Arr.json', 'utf-8')
    }
    deleteById = async(idProducto) => {
        const data = await fs.promises.readFile('clase4Arr.json', 'utf-8')
        let arrayProductos = JSON.parse(data);
        let arrayProductosFiltrados = async(arrayProductos.filter(x => x.id != idProducto));
        return await fs.writeFile('clase4Arr.json', JSON.stringify(arrayProductosFiltrados), () => {
                console.log('Se borro correctamente el producto con ID: ' + idProducto)
            })
        
    }
    deleteAll = async() => {
        await fs.promises.readFile('clase4Arr.json', 'utf-8')
        let arrayVacio = {};

        return await fs.writeFile('clase4Arr.json', JSON.stringify(arrayVacio), () => {
                
        })
    }
    getRandom = async() => {
        try{
                const data = await fs.promises.readFile('clase4Arr.json', 'utf-8')
                const productos = JSON.parse(data)
                const id = await (Math.floor(Math.random() * (productos.length)) + 1)
                console.log(id)
                if (id <= productos.length) {
                    return this.getById(id);
                }
            
    
        }catch(err){
        console.error({code: 'Error', message: err})                
        }
       
    }

}
module.exports = Productos
//let Fernet = new Productos ('Lucia', 9999, 4)
//Fernet.Save();
//Fernet.getById(4);
//Fernet.deleteById(1);
//Fernet.deleteAll();
//Fernet.getRandom().then((a) => console.log(a))


