const request= require("request")
const key = require('../config/DBConfig')
const apiKey= key.keySecret.apiKey
const consumindoApi =async (local)=>{
    return new Promise((resolve,reject)=>{
        
        const url=`https://api.hgbrasil.com/weather?key=${apiKey}&city_name=${local}`
        request(url,(err,response,body)=>{
        
            if(err){
                console.log("err",err)
            }
            else{
                
                const dados=(body)
             
                resolve (dados)
                
            }
        
        })
    })
        
}

module.exports={
    consumindoApi
}