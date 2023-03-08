const express=require("express")
const route= express.Router()
const crontrollers=require('../controllers/cidades_controllers')

//responsaveis por pesuisa com nomes de cidades
route.post('/cidade_dados',crontrollers.CidadeApi)

//responsaveis por pesuisa com zip (cep)
route.post('/cep_dados',crontrollers.CepApi)


module.exports=route