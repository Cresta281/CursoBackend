const fs = require("fs")


class Productos {
    constructor (nombre, precio, id) {
        this.nombre = nombre
        this.precio = precio
        this.id = id
    }
    async Save(producto) {
   
        await fs.readFileSync("clase4Arr.json","utf-8",(data))
        const array = JSON.parse(data)
        array.bebidas.push(producto)
        fs.writeFileSync('clase4Arr.json',JSON.stringify(array, null, 2))
        
    }
    async getById(number) {
        await fs.readFileSync("clase4Arr.json","utf-8",(data))
        const information = JSON.parse(data)
        const itemId = information.find(information.id == number)
        return itemId
    }
    async getAll() {
        fs.readFileSync("clase4Arr.json","utf-8",(data))
        const information = JSON.parse(data)
        return information 
    }
    async deleteById(number) {
        await fs.readFileSync("clase4Arr.json","utf-8",(data))
        const information = JSON.parse(data)
        const findId = information.find(information.id == number)
        const deleteId = information.splice(...findId)
        return deleteId
    }
    async deleteAll() {
        await fs.readFileSync("clase4Arr.json","utf-8",(data))
        let information = JSON.parse(data)
        information = []
        fs.writeFileSync('clase4Arr.json',JSON.stringify(information, null, 2))
    }
    
}
const Fernet = new Productos('Fernet',1200,1)
Save(Fernet)
getById(1)
getAll()
deleteById(1)
deleteAll()