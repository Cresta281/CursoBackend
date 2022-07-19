// Este es el desafío anterior que debería quedar de esta forma
// En este caso, yo lo resolví para poder ayudarlos de mejor forma, obviamente, hay muchas formas de resolverlo y no tiene que quedar
// exactamente así, pero es la forma que encontré más óptima. Examinalo, fijate qué cosas te pueden servir y si tenés consultas de algo que no 
// entendés podes mandarme captura y te mando la explicación

const fs = require('fs');

class contenedor {
        constructor(products) {
            this.products = products;
        }

        getAll = async() => {
            try{
               return await fs.promises.readFile(this.products, 'utf-8')                 
            }catch(e){
                console.error({title: 'Error', message: e})
            }           
        }
        
        save = async(object) => {
            try {
                const data = await fs.promises.readFile(this.products, 'utf-8')
                const emptyArr = [];
                if (data.length === 0) {
                    const id = 1;
                    const newproduct = { title: object.title, price: object.price, thumbnail: object.thumbnail, id: id }
                    emptyArr.push(newproduct)
                    await fs.promises.writeFile(this.products, JSON.stringify(emptyArr))


                } else {
                    const oldArr = JSON.parse(data)
                    const id = oldArr.length + 1;
                    const newproduct = { title: object.title, price: object.price, thumbnail: object.thumbnail, id: id }
                    oldArr.push(newproduct)
                    await fs.promises.writeFile(this.products, JSON.stringify(oldArr))

                }
            } catch (e) {
                console.log(`Error al querer leer el archivo ${e}`)
            }
        }
        deleteAll() {
            const newArray = [];
            fs.writeFileSync(this.products, newArray)
        }
        getById = async(number) => {
            try {
                const data = await fs.promises.readFile(this.products, 'utf-8')
                const products = JSON.parse(data);
                // products.filter((id) =>  )
                const findId = products.findIndex(element => element.id === number)
                if (findId != -1)
                    return (JSON.stringify(products[findId]))
                else {
                    console.error({message:`No se encontro el producto`})
                }

            } catch (e) {
                console.error({code: 'Error', message: e})
            }
        }
        deleteById = async(number) => {
            try {
                const data = await fs.promises.readFile(this.products, 'utf-8')
                const products = JSON.parse(data);

                if (number > products.length) {
                    console.error({code: `Could not find id: ${number}`})

                } else {
                    const findId = products.filter(element => element.id !== number)
                    await fs.writeFile(this.products, JSON.stringify(findId))
                    console.log(JSON.stringify(findId))
                }
            } catch (e) {
                console.error({code: 'Error', message: e})
            }
        }
        getRandom = async() => {
            try{
                const data = await fs.promises.readFile(this.products, 'utf-8')
                const products = JSON.parse(data)
                const id = await (Math.floor(Math.random() * (products.length)) + 1)
                if (id <= products.length) {
                    return this.getById(id);
                }
            }catch(e){
            console.error({code: 'Error', message: e})                
            }
           

        }
    }
module.exports = contenedor