const mongoose= require("mongoose")

const dadosSchemas=new mongoose.Schema({
    vendas:{
        type:String
    },
    data:{
        type:String
    },
    dadosTempo:{
        type:Array
    }

})
const Venda_dias=mongoose.model("vendas_dias",dadosSchemas)



module.exports=Venda_dias