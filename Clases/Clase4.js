const fs = require("fs")




function Save(producto) {
   
    fs.readFileSync("clase4Arr.json","utf-8",(data))
    const array = JSON.parse(data)
    array.bebidas.push(producto)
    fs.writeFileSync('clase4Arr.json',JSON.stringify(array, null, 2))
    
}

Save({nombre:"Fernet",precio:1200,id: 1})

function getById(number) {
    fs.readFileSync("clase4Arr.json","utf-8",(data))
    const information = JSON.parse(data)
    const itemId = information.find(information.id == number)
    return itemId
}

getById(1)

function getAll() {
    fs.readFileSync("clase4Arr.json","utf-8",(data))
    const information = JSON.parse(data)
    return information 
}

getAll()

function deleteById(number) {
    fs.readFileSync("clase4Arr.json","utf-8",(data))
    const information = JSON.parse(data)
    const findId = information.find(information.id == number)
    const deleteId = information.splice(...findId)
    return deleteId
}

deleteById(1)

function deleteAll() {
    fs.readFileSync("clase4Arr.json","utf-8",(data))
    let information = JSON.parse(data)
    information = []
    fs.writeFileSync('clase4Arr.json',JSON.stringify(information, null, 2))
}

deleteAll()