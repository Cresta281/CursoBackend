import fs from "fs";

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