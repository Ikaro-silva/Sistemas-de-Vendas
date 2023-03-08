<template>
    <div>
       
           <div class="input-group divContainerInput">
            <Form class=" border border-primary p-5"
            @submit.prevt="submitRegister">
                <label>Cidade</label>
                <Field
                    type="text"
                    id="cidade"
                    name="cidade"
                    v-model="form.cidade"
                    :rules="validate"
                    class="form-control mb-2"
                />
                <ErrorMessage name="cidade"
                    class="form-control is-invalid text-danger"
                />

                <div class="d-grid gap-2 col-6 mx-auto"
                    style="margin-top: 20px;" @click="registerCidade">
                    <button class="btn btn-primary ">
                        Consultar
                    </button>
                </div>
            </Form>
           
           </div>
           <div id="container" class="row row-cols-3 row-cols-md-5 container" >
                <div class="card text-bg-light mb-3 card"  
                v-for="(content, index ) in Contents" :key="index">
                    <div class="card-header">Temperatura: {{content[0]}}° <br/> Clima: {{content[2]}}</div>
                    <div class="card-body">
                        <h5 class="card-title">M/V: {{content[1]}}</h5>
           
                    </div>
                </div>
            </div>
       

       
           <div class="input-group divContainerInput" >
            <Form class=" border border-primary p-5"
            @submit.prevt="submitRegister">
                <label>Temperatura</label>
                <Field
                        type="text"
                        id="temperatura"
                        name="temperatura"
                        v-model="form.temperatura"
                        :rules="validate"
                        class="form-control mb-2"
                    />
                    <ErrorMessage name="temperatura"
                        class="form-control is-invalid text-danger"
                    />
                <div class="d-grid gap-2 col-6 mx-auto "
                    style="margin-top: 20px;" @click="registerTemperatura">
                    <button class="btn btn-primary ">
                        Consultar
                    </button>
                </div>
            </Form>
           
           </div>
           <div  class="row row-cols-3 row-cols-md-2 container" >
                <div class="card text-bg-light mb-3 card"  
                v-for="(tempDado, index) in TempDados" :key="index">
                    <div class="card-header">Cidade: {{tempDado[0]}} <br/> Clima: {{tempDado[2]}}</div>
                    <div class="card-body">
                        <h5 class="card-title">M/V: {{tempDado[1]}}</h5>
                    </div>
                </div>
            </div>
       

    </div>
</template>
<script>
    
    import{Form,Field,ErrorMessage,validate} from'vee-validate'
    import dadosConsult from "../../service/service_dados"
    import tratamentoDados from "../../middleware/processandoDados"

    export default{
        name:"Consulta",
        components:{Form,Field,ErrorMessage},
        data(){
            return{
                form:{
                    cidade:null,
                    temperatura:null
                },
                Contents:[],
                TempDados:[]

            }
        },
        methods:{
            submitRegister(){},
            async registerCidade(){

                const dadosCidade={
                    cidade:this.form.cidade
                }
                
                const dados= await dadosConsult.consultCidade(dadosCidade)
                
                const arrayTemp= tratamentoDados.consulDados(this.form.cidade ,dados)
                const tempTradado=tratamentoDados.deletarDuplicatas(arrayTemp)
                
                const arrayFinal=tratamentoDados.consultaArray(tempTradado, dados)
                
                const array=tratamentoDados.vendasMedias(arrayFinal,tempTradado)
                
                this.Contents=array
                
            },
            async registerTemperatura(){
                
                const dadosTemperatura={
                    temperaturaMax:this.form.temperatura
                }
                var num =parseInt(this.form.temperatura)

                const dados=await dadosConsult.consultTemperatura(dadosTemperatura)
                const cidades= tratamentoDados.consulDados(num, dados)
                const cidadeTratado=tratamentoDados.deletarDuplicatas(cidades)
                const arrayFinal=tratamentoDados.consultaArray(cidadeTratado,dados)
                
                const array =tratamentoDados.vendasMedias(arrayFinal,cidadeTratado,num)
                this.TempDados=array
            },
            validate(value){
                if(value){
                    return true
                }
            
                return "Campo obrigatorio"
            }
        }
    }
</script>
<style scoped>
.divContainerInput{
    
    text-align: center;
    justify-content: center;
}
.container{
    margin:70px auto;
    
    justify-content: center;
}
.card{
    padding: 0;
    width:250px;
}
</style>