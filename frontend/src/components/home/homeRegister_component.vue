<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-sm-10 offset-sm-1">
                    <Form class=" border border-primary p-5"
                    style="margin-top: 70px;height: auto;padding-top: 100px;inportant;"
                    @submit.prevt="submitRegister">
                        <!-- INICIO BLOCO NOME -->
                        <div>
                            <label for="">Cidade</label>
                            <Field
                                type="text"
                                id="cidade"
                                name="cidade"

                                class="form-control mb-2"
                                placeholder="digite a cidade e estado (Salvador, BA)"
                                :rules="validate"
                                v-model="formRegister.cidade"
                                
                                
                            />
                            <ErrorMessage name="cidade"
                            class="form-control is-invalid text-danger"
                            />
                        </div>
                        <!-- INICIO DO BLOCL EMAIL -->
                        <div>
                            <label for="">Vendas</label>
                            <Field
                                type="text"
                                id="vendas"
                                name="vendas"
                                class="form-control mb-2"
                                placeholder="digite numero de vendas"
                                :rules="validate"
                                v-model="formRegister.vendas"
                                
                            />
                            <ErrorMessage name="vendas"
                            class="form-control is-invalid text-danger"
                            />
                        </div>
                        <!-- INICIO DO BLOCO PASSWORD -->
                        <div>
                            <label for="">Data</label>
                            <Field
                                type="text"
                                id="data"
                                name="data"
                                class="form-control mb-2"
                                placeholder="Digite a data"
                                :rules="validate"
                                v-model="formRegister.data"
                            
                            />
                            <ErrorMessage name="data"
                            class="form-control is-invalid text-danger"
                            />
                        </div>
                        <!-- BLOCO BUTTON -->
                        <div class="d-grid gap-2 col-6 mx-auto"
                        style="margin-top: 20px;" @click="registerDados">
                            <button 
                            class="btn btn-primary ">
                            Cadastrar
                            </button>
                        </div>

                    
                    </Form>
                </div>

            </div>
            
        </div>
    </div>
</template>
<script>
    import swal from "sweetalert"
    import dados_clima from "../../service/service_climas"
    import dados_register from "../../service/service_dados"
    
    import{Form,Field,ErrorMessage,validate} from'vee-validate'
    export default{
        name:"HomeRegister",
        components:{Form,Field,ErrorMessage},
        data(){
            return{
                formRegister:{
                    cidade:null,
                    vendas:null,
                    data:null
                }
            }
        },
        methods:{
            submitRegister(){},
            async registerDados(){
                
                try{
                    
                    const dadosCidade={
                        cidade:this.formRegister.cidade
                    }
                    const dados=await dados_clima.consult_dados_climas(dadosCidade)
                  
                    const conjuntoDeInformaçoes={
                        nome:dados.results.city,
                        tempMax:dados.results.temp,
                        umidade:dados.results.humidity,
                        clima:dados.results.description,
                         
                    } 
                    

                    const data={
                        vendas:this.formRegister.vendas,
                        data:this.formRegister.data,
                        dadosTempo:conjuntoDeInformaçoes
                    }
                    await dados_register.refisterDados(data)

                    swal({
                        title: 'Excelente!',
                        text: 'Dados Salvos!',
                        icon: 'success',
                    }).then(()=>{
                        this.formRegister.cidade=null
                        this.formRegister.vendas=null
                        this.formRegister.data=null
                    })
                    
                }   
                catch(err){
                    swal({
                        title: 'Erro!',
                        text: 'Informe o nome CORRETO da cidade!!',
                        icon: 'error',
                    });
                }
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