<template>
    <div>
        <div class="worksComponent">
            <h1>Por que Usar <span class="red">o Nosso app</span></h1>
            <div class="works">
                <div class="work">
                    <img :src="imgWorks" :alt="altWorks">
                    <p>Podes agendar no nosso aplicativo, não importa o ligar nem a hora</p>
                </div>

                <div class="work">
                    <img :src="imgWorks" :alt="altWorks">
                    <p>Escolhas os salões mais próximos de si.</p>
                </div>

                <div class="work">
                    <img :src="imgWorks" :alt="altWorks">
                    <p>Podes agendar no nosso aplicativo, não importa o ligar nem a hora</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'worksComponent',

        data() {
            return {
                imgWorks: require("@/assets/smartphone.png"),
                altWorks: "Smartphone"
            }
        }
    }
</script>

<style scoped>
    @import "@/styles/home/worksComponent.sass"
</style>