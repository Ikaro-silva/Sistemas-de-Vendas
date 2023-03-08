const express= require('express')
const cors= require('cors')
const app=express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.json({type:'application/vnd.api+json'}))
app.use(cors())

//ROUTER
const index=require('./router/index')
app.use(index)

const routerCidades=require('./router/cidades.routes')
app.use("/api/climas",routerCidades)

const routerDados=require('./router/dados.routes')
app.use("/api/climas",routerDados)

//BANCO DE DADOS

const conectBD=require('./config/conectBD')
app.set("conectBD",conectBD)

module.exports= app

