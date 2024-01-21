<template>
    <div>
        <div class="searchCabelo-component">
            <h2>Salões para tratamento facial <span class="red">perto de mim</span></h2>

            <form action="#">
                <input type="text" placeholder="Pesquisar por cidade...">
                <button>Pesquisar</button>
            </form>

            <div class="saloes-visualizer">
                <div class="card-saloes">
                    <div class="publicite-img">
                        <img :src="publiciteImg" :alt="publiciteAlt">
                    </div>
                    <div class="profile">
                        <div class="profile-content">
                            <img :src="profileImg" :alt="profileAlt">
                            <router-link to="/">Falta Mais</router-link>
                        </div>

                        <div class="follow-icon">
                            <i class="ri-add-line"></i>
                        </div>
                    </div>
                    <div class="day-time-salao">
                        <div class="days">
                            <i class="ri-calendar-2-line"></i>
                            <p>Segunda - Sabado</p>
                        </div>

                        <div class="time">
                            <i class="ri-time-line"></i>
                            <p>07h - 22h</p>
                        </div>
                    </div>

                    <button>Reservar</button>
                </div>

                <div class="card-saloes">
                    <div class="publicite-img">
                        <img :src="publiciteImg" :alt="publiciteAlt">
                    </div>
                    <div class="profile">
                        <div class="profile-content">
                            <img :src="profileImg" :alt="profileAlt">
                            <router-link to="/">Falta Mais</router-link>
                        </div>

                        <div class="follow-icon">
                            <i class="ri-add-line"></i>
                        </div>
                    </div>
                    <div class="day-time-salao">
                        <div class="days">
                            <i class="ri-calendar-2-line"></i>
                            <p>Segunda - Sabado</p>
                        </div>

                        <div class="time">
                            <i class="ri-time-line"></i>
                            <p>07h - 22h</p>
                        </div>
                    </div>

                    <button>Reservar</button>
                </div>

                <div class="card-saloes">
                    <div class="publicite-img">
                        <img :src="publiciteImg" :alt="publiciteAlt">
                    </div>
                    <div class="profile">
                        <div class="profile-content">
                            <img :src="profileImg" :alt="profileAlt">
                            <router-link to="/">Falta Mais</router-link>
                        </div>

                        <div class="follow-icon">
                            <i class="ri-add-line"></i>
                        </div>
                    </div>
                    <div class="day-time-salao">
                        <div class="days">
                            <i class="ri-calendar-2-line"></i>
                            <p>Segunda - Sabado</p>
                        </div>

                        <div class="time">
                            <i class="ri-time-line"></i>
                            <p>07h - 22h</p>
                        </div>
                    </div>

                    <button>Reservar</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'searchTratamentoFacial',

        data() {
            return {
               publiciteImg: require("@/assets/salao.jpg"),
               publiciteAlt: 'Imagem publicitária',
               profileImg: require("@/assets/perfil.jpg"),
               profileAlt: 'Imagem de perfil'
            }
        }
    }
</script>

<style scoped>
    @import '@/styles/cabelo/searchCabelo.sass';
</style>