const fs = require("fs")

class Productos {
    constructor (nombre =  '', precio = '', id = '') {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
    Save = async(nuevoProducto) => {
        
        const data = await fs.promises.readFile('clase4Arr.json','utf-8')
        let arrayProductos = JSON.parse(data)
        let infoNuevoProducto = [...arrayProductos,nuevoProducto]
        const nuevaData = await fs.promises.writeFile('clase4Arr.json',JSON.stringify(infoNuevoProducto,null,2))
            
        return nuevaData
           
        
    }
    getById = async(idProducto) => {
        const data = await fs.promises.readFile('clase4Arr.json', 'utf-8')
            let arrayProductos = JSON.parse(data);
            let itemId = arrayProductos.filter(x => x.id == idProducto);

            if (itemId.length == 0) {
                return null;
            } else {
                return (JSON.stringify(itemId))
            }
        
    }
    getAll = async() => {
        const data = await fs.promises.readFile( 'clase4Arr.json', 'utf-8')
        return data
    }
    deleteById = async(idProducto) => {
        const data = await fs.promises.readFile('clase4Arr.json', 'utf-8')
        let arrayProductos = JSON.parse(data);
        let arrayProductosFiltrados = arrayProductos.filter(x => x.id != idProducto);
        const dataNueva = await fs.promises.writeFile('clase4Arr.json', JSON.stringify(arrayProductosFiltrados))
        return dataNueva
        
    }
    deleteAll = async() => {
        let arrayVacio = {};

        const data = await fs.promises.writeFile('clase4Arr.json', JSON.stringify(arrayVacio))
        return data
    }
    getRandom = async() => {
        try{
                const data = await fs.promises.readFile('clase4Arr.json', 'utf-8')
                const productos = JSON.parse(data)
                const id = await (Math.floor(Math.random() * (productos.length)) + 1)
                if (id <= productos.length) {
                    return this.getById(id);
                }
            
    
        }catch(err){
        console.error({code: 'Error', message: err})                
        }
       
    }
    update = async(numero, nuevaData) => {
        await this.deleteById(numero)

        await this.Save(nuevaData)

        return {message: `El objeto con el id: ${numero} fue actualizado correctamente`}
    }
}
module.exports = Productos
//let Fernet = new Productos ('Lucia', 9999, 3)
//Fernet.Save()
//Fernet.getById(4);
//Fernet.deleteById(4)
//Fernet.deleteAll();
//Fernet.getRandom().then((a) => console.log(a))
//Fernet.update(1)
//Fernet.update(3)
