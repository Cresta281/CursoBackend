function auth (req,res,next) {
    const producto = req.body.producto
    if(!producto){
        res.send({error: "Se necesita un producto"})
        return 
    }else {
        req.producto = producto
        next()
    }
    
    next()
}

module.exports = {
    auth
}