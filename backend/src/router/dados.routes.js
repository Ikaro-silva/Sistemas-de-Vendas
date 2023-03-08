const express=require('express')
const route= express.Router()
const controller=require("../controllers/dados_controlles")

//rota responsavel por registrar dados
route.post('/createDados',controller.createDados)

// rota responsavel por lista todos dados
route.get('/listDados',controller.listartodos)

//rota responsavel por lista dados por parametro de temperatura
route.post('/listTemp',controller.consultaTemp)

//rota responsavel por listar dados por parametro de dias 
route.post('/listCidade',controller.consultaDia)

module.exports=route