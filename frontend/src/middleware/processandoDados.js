const deletarDuplicatas=(array)=>{
    var valoresUnicos=[]
    for(var i=0;i<array.length;i++){
        const valor=array[i]
        if(!valoresUnicos.includes(valor)){
            valoresUnicos.push(valor)
        }
    }
    
    return valoresUnicos
}

const consultaArray=(type,arrayGeral)=>{
    
  
    var vendas=[]
    var subvalores=[]
    for(var i=0;i<arrayGeral.length;i++){
    
    subvalores.splice(0,subvalores.length)

    if(typeof(type[0])==='string'){
        subvalores.push(arrayGeral[i].vendas,arrayGeral[i].dadosTempo[0].nome,arrayGeral[i].dadosTempo[0].clima)
    }
    else{
        subvalores.push(arrayGeral[i].vendas,arrayGeral[i].dadosTempo[0].tempMax,arrayGeral[i].dadosTempo[0].clima)
    }
    
    vendas.push([...subvalores]);   
        
    }
    
   return vendas    
}
const vendasMedias=(arrayGeral,arrayTemp)=>{
    var mediaETemp=[]
    var subvalores=[]
    var somar=0
    
    var media;
   
    for(var i=0;i<arrayTemp.length;i++){
        for(var j=0;j<arrayGeral.length;j++){
            if(arrayTemp[i]==arrayGeral[j][1]){
              var num=parseInt(arrayGeral[j][0])
              
                somar=somar+num
            
            }
        }
        subvalores.splice(0,subvalores.length)

        media=somar/arrayGeral.length
        
        subvalores.push(arrayTemp[i],media,arrayGeral[0][2])
        
        mediaETemp.push([...subvalores])
    }
    return mediaETemp
    
}


const consulDados = ( type,arrayGeral) => {
    console.log(arrayGeral)
    const arrayDados= [];
    var dados;
    arrayGeral.forEach((itemGeral) => {
        
      const { dadosTempo } = itemGeral;
      if(typeof(type[0])==='string'){
         dados = dadosTempo[0].tempMax;
      }
      else{
        dados=dadosTempo[0].nome  
      }
      
        arrayDados.push(dados)

    });
    
    return arrayDados
  };



export default{
    deletarDuplicatas,
    consultaArray,
    vendasMedias,
    consulDados
}
