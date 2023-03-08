const mongoose=require("mongoose")
const DB = require('./DBConfig')

mongoose.Promise=global.Promise
mongoose.set('strictQuery',false)

mongoose.connect(DB.conectBD.URI)
.then(()=>{
    console.log("Banco de dados criando com sucesso!")
})
.catch((err)=>{
    console.log("falha no banco de dados: ",err)

})
