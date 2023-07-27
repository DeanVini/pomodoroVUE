<template>
    <div class="flex justify-center items-center w-screen h-screen">
        <div class=" w-[500px] lg:h-[800px] bg-[#0EABD9] border-[#ffffff36] border-y  border-l-0 rounded-l-lg">
                <div class="">
                    <img src="../../public/vectorstock_24286813.png" alt="" class="  lg:w-[500px] lg:h-[800px] w-[500px]  object-cover">
                </div>
        </div>
        <div class="flex flex-col r w-[500px] h-[800px] bg-[#ffffff0c] border-[#ffffff36] border-y  border-r-0 rounded-r-lg">
            <div class="pr-10 flex mb-10  mt-10 self-center">
                <img src="../assets/time-eco-svgrepo-com.svg" class="mb-2 mt-2 w-[60px] h-[60px]" alt="">
                <h1 class="font-bold pt-9">POMODORO</h1>
            </div>
            <div class="flex items-center mb-10">
                <div class="w-1/3 h-[1px] border-[2px] rounded-full"></div>
                <div class="w-1/3">
                    <h1 class="text-center font-bold">Crie sua conta</h1>
                </div>
                <div class="w-1/3 h-[1px] border-[2px] rounded-full"></div>
            </div>
            <div class="mr-10 ml-10 gap-3 flex flex-col">
                <div class="flex">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="name">Seu Nome:</label>
                        <BaseInput id="name" placeholder="Seu nome..."/>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="name">Sobrenome:</label>
                        <BaseInput id="surname" placeholder="Seu sobrenome..."/>
                    </div>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="name">Usuário:</label>
                    <BaseInput id="surname" placeholder="Seu nome de usuário..."/>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="email">Email:</label>
                    <BaseInput id="email" type="email" placeholder="name@email.com" v-model="test"/>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="password-adress">Senha:</label>
                    <BaseInput id="password-adress" type="password" placeholder="Sua senha..." v-model="test"/>
                </div>
                <div class="flex justify-start gap-7 pt-3 ">
                    <BaseButton type="login" value="Registrar-se"/>
                </div>
                <div class="flex gap-1">
                    <p>Já possui uma conta?</p>
                    <router-link to="/login"><a class="text-gray-400 underline">É só clicar aqui.</a></router-link>
                </div>
            </div>
        </div>
    </div>

    <router-link to="/login">Voltar</router-link>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '../components/Forms/BaseInput.vue';
import BaseButton from '../components/Forms/BaseButton.vue';

let test = ref();


</script>