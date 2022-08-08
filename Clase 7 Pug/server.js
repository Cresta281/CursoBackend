const express = require('express')
const app = express()
const PORT = 8080

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

app.set('view engine', 'pug')
app.set('views','./views')

app.get('/productos')