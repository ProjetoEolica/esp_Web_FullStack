const mongoose = require('mongoose')
const { Schema } = mongoose

const devicesSchema = new Schema({
    nome: String,
    kwh: Number,
    corrente: Number,
    voltagem: Number,
    fp: Number
})

module.exports = mongoose.model('devices', devicesSchema)