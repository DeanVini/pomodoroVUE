<template>
    <div class="lg:flex-row flex justify-center flex-col-reverse items-center w-screen h-screen">
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
                <p v-if="email.length == 0 && password.length == 0 && error" class="text-center mb-4 text-red-500">Preencha todos os campos!!</p>
                <p v-else-if="error" class="text-center mb-4 text-red-500">Email ou senha inválidos!!</p>
                <label for="email-address-icon" :class="error ? 'animate-shake-r' :  '' " class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white">Seu Email:</label>
                <div class="relative " :class="error ? 'animate-shake-r' :  '' " >
                  <div class=" absolute pr-[5px] border-gray-500 inset-y-2 left-0 flex self-center items-center pl-3.5 pointer-events-none border-r-[2px]">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                  </div>
                  <input type="text"
                         @input="isFilled"
                         v-model="email"
                         id="email-address-icon"
                         :class="error ? 'transition duration-700 border border-red-500' :  '' " 
                         class="border text-sm rounded-lg block w-[300px] pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 h-[45px]" 
                         placeholder="name@email.com"
                         required
                         >
                </div>

                <label for="password-adress" :class="error ? 'animate-shake-l' :  '' " class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pl-1 pt-[20px]">Sua Senha:</label>
                <div class="relative" :class="error ? 'animate-shake-l' :  '' ">
                    <div class=" absolute top-[7.4px] pt-[2px] h-[30px]  pr-[5px] border-gray-500 left-0 flex self-center items-center pl-3.5 pointer-events-none border-r-[2px]">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 4 20 16">
                            <path d="M17,9V7c0-2.8-2.2-5-5-5S7,4.2,7,7v2c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M9,7c0-1.7,1.3-3,3-3s3,1.3,3,3v2H9V7z M13.1,15.5c0,0-0.1,0.1-0.1,0.1V17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1.4c-0.6-0.6-0.7-1.5-0.1-2.1c0.6-0.6,1.5-0.7,2.1-0.1C13.6,13.9,13.7,14.9,13.1,15.5z"/>
                        </svg>
                      </div>
                      <input type="password"
                             @input="isFilled"
                             v-model="password" 
                             id="password-adress" 
                             class="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 h-[45px]"
                             :class="error ? 'transition duration-700 border border-red-500' :  '' "  
                             placeholder="Senha" 
                             required
                      >
                </div>
            </div>
            
            <div class="flex gap-5 self-center mt-4">
                <BaseButton type="login" value="Logar" @click="logar()"/>
                <BaseButton type="login" value="Registrar-se" @click="router.push('/register')"/>
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
import axios from "axios";
import { ref } from "vue";
import router from "../router";
import BaseButton from "../components/Forms/BaseButton.vue";

let error = ref(false)
let filled = ref(false)
let email = ref('');
let password = ref('');
let startLength = ref()

async function logar(){
    let response = await axios.get(`http://localhost:3000/users?email=${email.value}&password=${password.value}`);

    console.log(response.data)
    
    if((response.status == 200 || response.status == 201) && response.data.length > 0){
        localStorage.setItem('user-info', response.data)
        router.push('/')
        
        return
    }
    
    error.value = true;

}

function isFilled(event){
    startLength.value = event.target.value.length
    console.log(startLength.value)
    if(event.target.value.length > 0){
        error.value = false
    }
    startLength.value = 0
}
</script>