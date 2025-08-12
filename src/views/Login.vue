<template>
    <div class="lg:flex-row flex justify-center flex-col-reverse items-center w-screen h-screen" @keyup.enter="logar()">
        <div class="flex flex-col r w-[500px] h-[800px] bg-[#ffffff0c] border-[#ffffff36] border-y  border-l-0 rounded-l-lg">
            <div class="pr-10 flex  mt-10 self-center">
                <img src="../assets/time-eco-svgrepo-com.svg" class="mb-2 mt-2 w-[60px] h-[60px]" alt="">
                <h1 class="font-bold pt-9">POMODORO</h1>
            </div>
            <div class="text-center self-center text-xl pt-[30%]">
                <h1>Bem-Vindo de volta!!</h1>
                <p class="text-sm text-[#ffffff77]">por favor, insira suas informações:</p>
            </div>

            <div class="self-center pt-[50px]" >
                <p v-if="username.length == 0 && password.length == 0 && error" class="text-center mb-4 text-red-500">Preencha todos os campos!!</p>
                <p v-else-if="error" class="text-center mb-4 text-red-500">Username ou senha inválidos!!</p>
                <label for="username-input" :class="error ? 'animate-shake-r' :  '' " class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white">Seu Username:</label>
                <div class="w-[300px]">
                    <BaseInput type="text" @update="(event) => {username = event}" @input="isFilled" :error="error" placeholder="Seu username"/>
                </div>
                <label for="password-adress" :class="error ? 'animate-shake-l' :  '' " class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pl-1 pt-[20px]">Sua Senha:</label>
                <div>
                    <BaseInput @update="(event) => {password = event}" @input="isFilled" type="password" :error="error" placeholder="Sua senha"/>
                </div>
            </div>
            
            <div class="flex gap-5 self-center mt-4">
                <BaseButton type="default" value="Logar" @click="logar()"/>
                <BaseButton  type="default" value="Registrar-se" @click="router.push('/register')"/>
            </div>
            </div>

            


        <div class=" w-[500px] lg:h-[800px] bg-[#0EABD9] border-[#ffffff36] border-y  border-r-0 rounded-r-lg">
            <div class="">
                <img src="../../public/vectorstock_24286813.png" alt="" class="  lg:w-[500px] lg:h-[800px] w-[500px]  object-cover">
            </div>
        </div>


    </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import router from "../router";
import BaseButton from "../components/Forms/BaseButton.vue";
import BaseInput from "../components/Forms/BaseInput.vue";
import { injector } from "../utils/injector";
import userInfoStore from "../store/userInfos";

let error = ref(false)
let username = ref('');
let password = ref('');


async function logar(){
    try {
        await injector.login.post(username.value, password.value);
        error.value = true;
    } catch (err) {
        error.value = true;
        console.error('Erro no login:', err);
    }
}

function isFilled(event){
    if(event.length > 0){
        error.value = false
    }
}

</script>