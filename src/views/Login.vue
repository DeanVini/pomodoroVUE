<template>
    <div class="flex justify-center items-center w-screen h-screen">
        <div class="flex flex-col r w-[500px] h-[800px] bg-[#ffffff0c] border-[#ffffff36] border-y  border-l-0 rounded-l-lg">
            <div class="pr-10 flex  mt-10 self-center">
                <img src="../assets/time-eco-svgrepo-com.svg" class="mb-2 mt-2 w-[60px] h-[60px]" alt="">
                <h1 class="font-bold pt-9">POMODORO</h1>
            </div>
            <div class="text-center self-center text-xl pt-[30%]">
                <h1>Bem-Vindo de volta!!</h1>
                <p class="text-sm text-[#ffffff77]">por favor, insira suas informações:</p>
            </div>

            <div class="self-center pt-[50px]">
                <label for="email-address-icon" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu Email:</label>
                <div class="relative">
                  <div class=" absolute pr-[5px] border-gray-500 inset-y-2 left-0 flex self-center items-center pl-3.5 pointer-events-none border-r-[2px]">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                  </div>
                  <input type="text" id="email-address-icon" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[40px]" placeholder="name@email.com">
                </div>

                <label for="password-adress" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-[20px]">Sua Senha:</label>
                <div class="relative">
                    <div class=" absolute top-[6px] pt-[2px] h-[25px]  pr-[5px] border-gray-500 left-0 flex self-center items-center pl-3.5 pointer-events-none border-r-[2px]">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 4 20 16">
                            <path d="M17,9V7c0-2.8-2.2-5-5-5S7,4.2,7,7v2c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M9,7c0-1.7,1.3-3,3-3s3,1.3,3,3v2H9V7z M13.1,15.5c0,0-0.1,0.1-0.1,0.1V17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1.4c-0.6-0.6-0.7-1.5-0.1-2.1c0.6-0.6,1.5-0.7,2.1-0.1C13.6,13.9,13.7,14.9,13.1,15.5z"/>
                        </svg>
                      </div>
                </div>
                <input type="password" id="password-adress" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[300px] pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-[40px]" placeholder="Senha" required>
            </div>
            
            <div class="flex gap-3 self-center mt-4">
                <button class="bg-[#007AB7] border=[#007AB7] rounded-lg  w-[100px] h-[40px]">Logar</button>
                <button class="bg-[#007AB7] border-[#007AB7] rounded-lg w-[100px] h-[40px]">Registrar-se</button>

            </div>
            </div>

            


        <div class="relatvie w-[500px] h-[800px] bg-[#0EABD9] border-[#ffffff36] border-y  border-r-0 rounded-r-lg">
            <div class="">
                <img src="../../public/vectorstock_24286813.png" alt="" class="  w-[500px] h-[800px] absolute object-cover">
            </div>
        </div>


    </div>
</template>

<script setup>
import { ref } from "vue";

let email = ref();
let senha = ref();



</script>