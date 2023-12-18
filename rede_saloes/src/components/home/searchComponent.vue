<template>
    <div>
        <div class="search-component">
            <h2>Salões <span class="red">perto de mim</span></h2>

            <form action="#">
                <input type="text" placeholder="Pesquisar por cidade...">
                <button>Pesquisar</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'searchComponent'
    }
</script>

<style scoped>
    @import '@/styles/home/searchComponent.sass';
</style>