<template>
    <div>
        <div class="header-container">
            <div class="header-1">
                <div id="logo">
                    <h1>Rede<span id="red">@</span>Salões</h1>
                </div>

                <div id="login-logut">
                    <router-link to="/"><span id="border-entrar">Entrear</span></router-link> 
                    <router-link to="/">Meu negocio</router-link>
                </div>
            </div>

            <div class="header-2">
                
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