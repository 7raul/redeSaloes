<template>
    <div>
        <div class="header-container">
            <div class="header-1">
                <div id="logo">
                    <h1>Rede<span id="red">@</span>Salões</h1>
                </div>

                <div id="login-logut">
                    <router-link to="/entrar"><span id="border-entrar">Entrear</span></router-link> 
                    <router-link to="/">Meu negocio</router-link>
                </div>
            </div>

            <div class="header-2">
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
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'headerComponent'
    }
</script>

<style scoped>
    @import '@/styles/home/headerComponent.sass'
</style>