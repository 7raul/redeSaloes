<template>
    <div>
        <div class="header">
            <div class="menu-container">
                <router-link to="/">Inicio</router-link>
                <router-link to="/cabelo">Cabelo</router-link>
                <router-link to="/unhas">Unhas</router-link>
                <router-link to="/homen">Homen</router-link>
                <router-link to="/mulher">Mulher</router-link>
                <router-link to="/massagem">Massagem</router-link>
                <router-link to="/tratamentoFacial">Tratamento facial</router-link>
                <router-link to="/depilacao">Depilação</router-link>
                <router-link to="/mackup">Mackup</router-link>
            </div>

            <div class="empresa-component">
                <router-link to="/entrar">Entrar</router-link>
            </div>
        </div>

        <div class="backgound-meuNegocio"></div>

        <div class="pacotes-component">
            <h2>Escolha o seu pacote para <span class="red">associar o teu salão a nossa rede</span></h2>

            <div class="pacotes-content">
                <div class="pacote">
                    <h3>Teste</h3>
                    <div class="preco-pacote">
                        <h2>Grátis <span>/mês</span></h2>
                    </div>
                    <button>Adquira</button>
                    <div class="vantagens">
                        <p>Gestão de reservas do seu salão</p>
                        <p>Limite de 20 marcações por semana</p>
                        <p>20 SMS de lembretes por semana</p>
                        <p>20 SMS de confirmação por semana</p>
                        <p>Estatisticas de marcações</p>
                    </div>
                </div>

                <div class="pacote">
                    <h3>Pacote Normal</h3>
                    <div class="preco-pacote">
                        <h2>150.000 kz <span>/ano</span></h2>
                    </div>
                    <button>Adquira</button>
                    <div class="vantagens">
                        <p>Gestão de reservas do seu salão</p>
                        <p>50 marcações por semana</p>
                        <p>50 SMS de lembretes por semana</p>
                        <p>50 SMS de confirmação por semana</p>
                        <p>Marketing e promoção limitada</p>   
                        <p>Estatisticas de marcações</p>
                    </div>
                </div>

                <div class="pacote">
                    <h3>Pacote Premium</h3>
                    <div class="preco-pacote">
                        <h2>250.000 kz <span>/ano</span></h2>
                    </div>
                    <button>Adquira</button>
                    <div class="vantagens">
                        <p>Gestão de reservas do seu salão</p>
                        <p>100 marcações por semana</p>
                        <p>100 SMS de lembretes por semana</p>
                        <p>100 SMS de confirmação por semana</p>
                        <p>Marketing e promoção ilimitada</p> 
                        <p>Estatisticas de marcações</p>  
                    </div>
                </div>
            </div>
        </div>

        <gratisComponent />
        <normalComponent />
        <premiumComponent />
    </div>
</template>

<script>
    import gratisComponent from "@/components/meuNegocio/gratisComponent.vue"
    import normalComponent from "@/components/meuNegocio/normalComponent.vue"
    import premiumComponent from "@/components/meuNegocio/premiumComponent.vue"
    export default {
        name: 'bannerMeuNegocio',

        components: {
            gratisComponent,
            normalComponent,
            premiumComponent
        }
    }
</script>

<style scoped>
    @import '@/styles/meuNegocio/bannerMeuNegocio.sass'
</style>