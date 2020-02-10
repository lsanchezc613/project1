'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const dataCtrl = require('./controles/sensor')

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/api/sensor', dataCtrl.getDatos)

app.get('/api/sensor/:sensorId', dataCtrl.getDato)

app.post('/api/sensor', dataCtrl.saveData)

module.exports = app