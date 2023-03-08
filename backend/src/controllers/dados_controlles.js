const dados=require("../model/model_dados")

//responsavel por registrar do dados 
exports.createDados=async(req,res)=>{
    try{
        
        const newDados= new dados(req.body)
        
        newDados.save()
        
        
        res.status(200).json({message:"registrado com sucesso",dia:newDados})

    }
    catch(err){
        res.status(400).json({message:"falha ao se cadastrar",error:err})
    }
},
//responsavel por consultar todos os dados 
exports.listartodos=async(req,res)=>{
    try {
        const todosDados=await dados.find({})
        res.status(200).send(todosDados)
    } 
    catch (err) {
        res.status(400).send("falha ao consultar",err)
    }
    
},
// responsavel por consultar por  temperatura 
exports.consultaTemp=async(req,res)=>{
    try {
        var{temperaturaMax}=req.body
       
        temperaturaMax=parseInt(temperaturaMax)
        const dadosTemperatura=await dados.find({"dadosTempo.tempMax":temperaturaMax})
        res.status(200).send(dadosTemperatura)
        
    } 
    catch (err) {
        res.status(400).json({message:"falha ao  consultar",error:err})
    }
}

// responsavel por consultar por data
exports.consultaDia=async(req,res)=>{
    try {
        const{cidade}=req.body

        const dadosCidade=await dados.find({"dadosTempo.nome":cidade})
        res.status(200).send(dadosCidade)
    } 
    catch (err) {
        res.status(400).json({message:"falha ao  consultar",error:err})
    }
}
