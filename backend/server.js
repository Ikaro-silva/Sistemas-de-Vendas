const APP= require ('./src/app')


const PORTA= process.env.PORTA||3000
APP.listen(PORTA,()=>{
    console.log(" servidor rodando na porta",PORTA)
})