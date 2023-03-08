const express= require('express')
const router = express.Router()

router.get('/api/climas',(req,res)=>{
    res.status(200).json({
        mesage:"Seja Ben vindo a minha api climatica",
        version :"1.0.0"
    })
})

module.exports=router