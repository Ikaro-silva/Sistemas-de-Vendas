<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" to="/">Register</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link active" aria-current="page" to="/consulta_dados">Consultas</router-link>
                            </li>
                           
                            
                        </ul>
                        
                        <div class="navbar-brand  order-md-last  " >
                            PROGRAME - SE !
                        </div>
                        
                    </div>
        </nav>
    </div>
</template>
<script>
    export default{
        name:"head_component"
    }
</script>