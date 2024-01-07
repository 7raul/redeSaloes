<template>
    <div>
        <div class="feedback-container">
            <h1>O que os <span class="red">clientes dizem?</span></h1>

            <div class="public">
                <textarea placeholder="Escreva aqui..."></textarea>
                <button>Comentar</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'feedbackComponent'
    }
</script>

<style scoped>
    @import '@/styles/home/feedbackComponent.sass'
</style>