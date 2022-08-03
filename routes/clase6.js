const {Router} = require('express')

const routerPersonas = new Router()
routerPersonas.get('/'),(req,res) => {
    res.send('hola')
}
module.exports = routerPersonas