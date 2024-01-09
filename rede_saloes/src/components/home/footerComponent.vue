<template>
    <div>
        <div class="footer-container">
            <div class="links">
                <router-link to="/">Cabelo</router-link>
                <router-link to="/">Unhas</router-link>
                <router-link to="/">Homen</router-link>
                <router-link to="/">Mulher</router-link>
                <router-link to="/">Massagem</router-link>
                <router-link to="/">Tratamento facial</router-link>
                <router-link to="/">Depilação</router-link>
            </div>

            <div class="terms-suport">
                <router-link to="/">Termos de uso</router-link>
                <router-link to="/">Suport</router-link>
                <router-link to="/">Privacidade</router-link>
            </div>

            <div class="sociais-links">
                <div class="link">
                    <i class="ri-instagram-line"></i>
                    <span>Instagram</span>
                </div>

                <div class="link">
                    <i class="ri-twitter-x-line"></i>
                    <span>Twitter X</span>
                </div>

                <div class="link">
                    <i class="ri-linkedin-fill"></i>
                    <span>LInkedin</span>
                </div>

                <div class="link">
                    <i class="ri-whatsapp-line"></i>
                    <span>+244 932 157 393</span>
                </div>
            </div>

            <div class="contact-adress">
                <div class="content">
                    <i class="ri-phone-line"></i>
                    <span>+244 932 157 393</span>
                </div>

                <div class="content">
                    <i class="ri-map-pin-2-line"></i>
                    <span>Luanda - Cacuaco</span>
                </div>

                <div class="content">
                    <i class="ri-mail-line"></i>
                    <span>raulmigueleb7@gmail.com</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'footerComponent'
    }
</script>

<style scoped>
    @import '@/styles/home/footerComponent.sass'
</style>