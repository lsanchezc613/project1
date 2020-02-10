'use strict'

const SensorTemp = require ('../models/sensor')

function getDato(req, res){
    let sensorId = req.params.sensorId

 SensorTemp.findById(sensorId,(err,sensorT)=>{
    if (err) return res.status(500).send({message: `Error al hacer petición: ${err}`})
    if (!sensorT) return res.status(404).send({message: `Dato no existe Error ${err}`})

    res.status(200).send({sensorT})
    })

}

function getDatos(req, res){

    SensorTemp.find({},(err,datos)=>{
        if (err) return res.status(500).send({message: `Error al hacer petición: ${err}`})
        if(!datos) return res.status(404).send({message: `No existen datos`})

        res.send(200,{ datos })
    })
}

function saveData (req, res){
    console.log('POST/api/sensor')
    console.log(req.body)
    let sensorT = new SensorTemp()
    sensorT.valor = req.body.valor
    sensorT.fecha = req.body.fecha
    sensorT.save((err, DataSaved) => {
        if (err)
        res.status(500).send({message: `Error al salvar dato: ${err}`})
        res.status(200).send ({sensorT: DataSaved}) 
    })
}

module.exports = {
    getDato,
    getDatos,
    saveData
}