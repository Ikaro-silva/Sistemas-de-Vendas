const functionApiCidades=require('../model/model_api')

exports.CidadeApi=async(req,res)=>{
    try {
        const{cidade}=req.body
        
        const dados=await functionApiCidades.consumindoApi(cidade)
        
        
        res.send(dados)  
    } 
    catch (err) {
        res.status(400).send("falha",err)
    }
    
           
},
exports.CepApi=async(req,res)=>{
    try{
        const{cep}=req.body
        const dados =await functionApiCidades.consumindoApi(cep)
        res.send(dados)
    }
    catch(err){
        res.status(400).send("falha",err)
    }
    
}

