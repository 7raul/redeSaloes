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
                            <p>Miguel Julino</p>
                        </div>

                        <div class="feedback-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Dicta ut esse autem earum, nesciunt veniam, dolore quis reiciendis odit sed omnis 
                                unde sapiente. Consectetur nisi voluptate similique quo molestiae cumque.
                            </p>
                        </div>
                    </div>

                    <div class="feedback">
                        <div class="feedback-profile">
                            <img :src="profileImg" :alt="profileAlt">
                            <p>Miguel Julino</p>
                        </div>

                        <div class="feedback-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Dicta ut esse autem earum, nesciunt veniam, dolore quis reiciendis odit sed omnis 
                                unde sapiente. Consectetur nisi voluptate similique quo molestiae cumque.
                            </p>
                        </div>
                    </div>

                    <div class="feedback">
                        <div class="feedback-profile">
                            <img :src="profileImg" :alt="profileAlt">
                            <p>Miguel Julino</p>
                        </div>

                        <div class="feedback-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                Dicta ut esse autem earum, nesciunt veniam, dolore quis reiciendis odit sed omnis 
                                unde sapiente. Consectetur nisi voluptate similique quo molestiae cumque.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'feedbackComponent',

        data() {
            return {
                profileImg: require("@/assets/perfil.jpg")
            }
        }
    }
</script>

<style scoped>
    @import '@/styles/home/feedbackComponent.sass'
</style>