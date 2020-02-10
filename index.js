'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3000


mongoose.connect('mongodb://localhost:27017/sensorData', (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la BD: ${err}`)
    }
    console.log('conexión con BD establecida') 
    
    app.listen(port, () => {
        console.log(`API REST corriendo en http://localhost:${port}`)
    })
})


