<template>
    <div>
        <div class="gratis-container">
            <h2>Introduz os teus dados para <span class="red">solicitar teste gratuito</span></h2>

            <div class="form-component">
                <form action="#">
                    <div class="name-salao">
                        <input type="text" id="nomeSalao" placeholder="Nome do salão" required>
                    </div>
                    
                    <div class="input-box">
                        <input type="text" id="nomeProprietario" placeholder="Nome do proprietário" required>
                        <input type="email" id="emailSalao" placeholder="E-mail do salão" required>
                    </div>

                    <div class="input-box">
                        <input type="number" id="telefone" placeholder="Número de telefone" required>
                        <input type="text" id="regiao" placeholder="Região ou cidade" required>
                    </div>

                    <div class="select-container">
                        <div>
                            <select name="gender" required>
                                <option value="#">Genero de clientes preferido:</option>
                                <option value="homen">Homen</option>
                                <option value="mulher">Mulher</option>
                                <option value="ambos">Ambos (Os dois generos)</option>
                            </select>
                        </div>

                        <div>
                            <select name="gender" required>
                                <option value="#">Onde você presta serviço?</option>
                                <option value="casar">Na tua casa</option>
                                <option value="salao">No teu salão</option>
                                <option value="casaDoCliente">Domicilio (Na casa do cliente)</option>
                            </select>
                        </div>
                    </div>

                    <div class="checkbox-container">
                        <h6>Escolha o serviço que presta ou o que você trata</h6>
                        <div class="input-checkbox" required>
                            <div class="checkbox-box">
                                <input type="checkbox" value="big_tires" name="optionals[]">
                                <span for="big_tires">Cabelo</span>
                            </div>
                            <div class="checkbox-box">
                                <input type="checkbox" value="turbo_engine" name="optionals[]">
                                <span for="turbo_engine">Unhas</span>
                            </div>
                            <div class="checkbox-box">
                                <input type="checkbox" value="hybrid" name="optionals[]">
                                <span for="hybrid">Massagem</span>
                            </div>
                            <div class="checkbox-box">
                                <input type="checkbox" value="hybrid" name="optionals[]">
                                <span for="hybrid">Mackup</span>
                            </div>
                            <div class="checkbox-box">
                                <input type="checkbox" value="hybrid" name="optionals[]">
                                <span for="hybrid">Tratamento facial</span>
                            </div>
                        </div>
                    </div>

                    <div class="input-file">
                        <input type="file" id="image" required>
                        <input type="file" id="image" required>
                    </div>

                    <div class="input-box">
                        <input type="number" placeholder="NIF" required>
                        <input type="password" id="password" placeholder="Senha" required>
                    </div>

                    <button type="submit">Iniciar teste grátis</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'gratisComponent'
    }
</script>

<style scoped>
    @import '@/styles/meuNegocio/gratisComponent.sass'
</style>