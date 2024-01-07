<template>
    <div>
        <div class="feedback-container">
            <h1>O que os <span class="red">clientes dizem?</span></h1>

            <div class="input-feedbacks">
                <div class="feedback-area">
                    <textarea placeholder="Escreva aqui..."></textarea>
                    <button>Comentar</button>
                </div>

                <div class="feedbacks-area">
                    <div class="feedback">
                        <div class="feedback-profile">
                            <img :src="profileImg" :alt="profileAlt">
                        </div>

                        <div class="feedback-content">

                        </div>
                    </div>
                </div>
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