'use strict'

'use strict'

const express = require('express')
const dataCtrl = require('../controles/sensor')
const api = express.Router()


api.get('/sensor', dataCtrl.getDatos)

api.get('/sensor/:sensorId', dataCtrl.getDato)

api.post('/sensor', dataCtrl.saveData)

module.exports = api