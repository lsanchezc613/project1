'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sensorTempSchema = Schema ({
 valor : {type: Number, default:0},
 fecha : Date
})

module.exports = mongoose.model('SensorTemp', sensorTempSchema)