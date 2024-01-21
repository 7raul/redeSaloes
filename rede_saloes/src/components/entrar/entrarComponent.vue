<template>
    <div>
        <div class="header">
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

            <div class="empresa-component">
                <router-link to="/">Minha Empresa</router-link>
            </div>
        </div>

        <div class="backgound"></div>

        <div class="login-container">
            <div class="login-content">
                <div id="logo">
                    <h1>Rede<span id="red">@</span>Salões</h1>
                </div>

                <div class="text-sci">
                    <h2>Bem-vindo! <br><span>Ao seu novo website</span></h2>
                </div>

                <div class="text-sci">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eveniet unde odio perspiciatis? Velit, itaque nam
                        repudiandae, maxime a quibusdam ipsa quo nobis reprehenderit iusto nihil! Vero eos voluptatum molestiae.
                    </p>

                    <div class="social-icon">
                        <a href="#"><i class="ri-instagram-line"></i></a>
                        <a href="#"><i class="ri-twitter-x-line"></i></a>
                        <a href="#"><i class="ri-linkedin-fill"></i></a>
                        <a href="#"><i class="ri-whatsapp-line"></i></a>
                    </div>
                </div>
            </div>

            <div class="logreg-box">
                <div class="form-box login">
                    <form action="#">
                        <h2>Entrar</h2>

                        <div class="input-box">
                            <label for="email">E-mail</label>
                            <input type="email" required>
                        </div>

                        <div class="input-box">
                            <label for="password">Senha</label>
                            <input type="password" required>
                        </div>

                        <div class="remember-forgot">
                            <label for="">
                                <input type="checkbox"> Lembre-me
                            </label>
                            <a href="#">Esqueceu a senha?</a>
                        </div>

                        <button type="submit" class="btn">Entrar</button>

                        <div class="login-register">
                            <p>Ainda não tem uma conta? <a href="#" class="register-link">Sign up</a></p>
                        </div>
                    </form>
                </div>

                <div class="form-box register">
                    <form action="#">
                        <h2>Registrar como</h2>

                        <div class="input-box">
                            <label for="name">Nome</label>
                            <input type="text" required>
                        </div>

                        <div class="input-box">
                            <label for="email">E-mail</label>
                            <input type="email" required>
                        </div>

                        <div class="input-box">
                            <label for="password">Senha</label>
                            <input type="password" required>
                        </div>

                        <div class="login-register">
                            <p>Já tem uma conta? <a href="#" class="login-link">Sign in</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'entrarComponent'
    }
</script>

<style scoped>
    @import '@/styles/entrar/entrarComponent.sass';
</style>
