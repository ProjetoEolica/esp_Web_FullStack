const router = require('express').Router()
const Device = require('../model/Devices')

router.get('/', (req, res)=>{
    const novoDevice = [
        {
            id: 123,
            nome: "Geladeira",
            kwh: 23,
            corrente: 2.1,
            voltagem: 127,
            fp: 1
        },
        {
            id: 666,
            nome: "NUKE",
            kwh: 1000000,
            corrente: 1000,
            voltagem: 100000,
            fp: 10
        }
    ]
    res.json({
        success: true,
        devices: devices
    })
})

router.post('/', (req, res)=>{
    const novoDevice = new Device({
        nome: req.body.nome,
        kwh: req.body.kwh,
        corrente: req.body.corrente,
        voltagem: req.body.voltagem,
        fp: req.body.fp
    })
    //
    device.save()
        .then((dados)=>{
           res.json({
            success: true,
            message: dados
           }) 
        })
        .catch((err)=>{
            res.json({
                success: false,
                message: err
            })
        })
})

module.exports = router