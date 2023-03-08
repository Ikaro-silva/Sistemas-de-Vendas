import API from './connect_Api'

export default{
    async refisterDados(dados){
        const response=await API().post("/createDados",dados)
        return response.data
    },
    async consultCidade(cidade){
        const response=await API().post('/listCidade',cidade)
        return response.data
    },
    async consultTemperatura(temperatura){
        const response=await API().post('/listTemp',temperatura)
        return response.data
    }
}
