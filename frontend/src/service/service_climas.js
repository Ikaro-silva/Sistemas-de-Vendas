import API from"./connect_Api"

export default{
    //responsavel por mandar nome da cidade e restornar dados climaticos 
    async consult_dados_climas(cidade){
        const response=await API().post("/cidade_dados",cidade)
        return response.data
    }
}