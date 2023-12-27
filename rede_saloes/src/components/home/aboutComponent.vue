<template>
    <div>
        <div class="about-container">
            <img :src="aboutImg" :alt="aboutAlt">

            <div class="text-about">
                <h1>Sobre <span class="red">nós</span></h1>
                
                <div class="text-about">
                    <p>
                        Redes de Salões é uma aplicação onde você localiza salões de beleza e barbearia mais 
                        próximo si para fazer a reservar de qualquer serviço disponível
                    </p>
                    <p>
                        Também é uma plataforma onde os salões e barbearia fazer a postagem dos seus Serviços, 
                        aqui você cadastra o seu salão para aumentar os seus clietes
                    </p>
                    <p>
                        Use a nossa plataforma para evitar o stress e fazer tudo apartir de casa!
                    </p>
                </div>

                <button>Ver Salões</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'aboutComponent',

        data () {
            return {
                aboutImg: require("@/assets/about.jpg"),
                aboutAlt: "Sobre nós"
            }
        }
    }
</script>

<style scoped>
    @import "@/styles/home/aboutComponent.sass"
</style>