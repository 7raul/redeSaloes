<template>
    <div>
        <div class="header-container">
            <div class="heade-1">
                <div id="logo">
                    <h1>Rede<span class="red">@</span>Salões</h1>
                </div>

                <div id="login-logut">
                    <router-link to="/">Entrar</router-link> 
                    <router-link to="/">Minha Empresa</router-link>
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