<template>
    <div class="flex justify-center items-center w-screen h-screen" @keyup.enter="registerUser()">
        <div class="w-[500px] lg:h-[800px] bg-[#0EABD9] border-[#ffffff36] border-y  border-l-0 rounded-l-lg">
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
                <p v-if="msgError.length > 0" class="animate-shake-l ease-in-out duration-300 text-center mb-4 text-red-500">{{ msgError }}</p>
                <div class="flex gap-5">
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="name">Nome:</label>
                        <BaseInput @input="isFilled" @update="(event)=>userForReq.name = event" id="name" placeholder="Seu nome..."/>
                    </div>
                    <div>
                        <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="name">Sobrenome:</label>
                        <BaseInput @input="isFilled" @update="(event)=>userForReq.surname = event" id="surname" placeholder="Seu sobrenome..."/>
                    </div>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="username">Usuário:</label>
                    <BaseInput @input="isFilled" @update="(event)=>userForReq.username = event" id="username" placeholder="Seu nome de usuário..." :error="sameUsername"/>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="email">Email:</label>
                    <BaseInput @input="isFilled" @update="(event)=>userForReq.email = event" id="email" type="email" placeholder="name@email.com" :error="sameEmail"/>
                </div>
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 pl-1 dark:text-white" for="password-adress">Senha:</label>
                    <BaseInput @input="isFilled" @update="(event)=>userForReq.password = event" id="password-adress" type="password" placeholder="Sua senha..." v-model="test"/>
                </div>
                <div class="flex justify-start gap-7 pt-3 ">
                    <BaseButton type="default" value="Registrar-se" @click="registerUser()"/>
                </div>
                <div class="flex gap-1">
                    <p>Já possui uma conta?</p>
                    <router-link to="/login"><a class="text-gray-400 underline hover:text-blue-300">É só clicar aqui.</a></router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '../components/Forms/BaseInput.vue';
import BaseButton from '../components/Forms/BaseButton.vue';
import { injector } from '../utils/injector';
import Swal from 'sweetalert2'
import router from '../router';

let userForReq = {
    name: null,
    surname: null,
    username: null,
    email: null,
    password: null
}

let msgError = ref("")
let sameEmail = ref(false);
let sameUsername = ref(false)

async function registerUser(){
   
    sameUsername = false;
    sameEmail = false;
    await injector.register.post(userForReq)
    .then(async response => {
        const id = response.data.id;
        await injector.profiles.create(id)
        await injector.tasks.create(id)
    })
    .then(()=>{
        Swal.fire({
            icon: 'success',
            title: 'Registrado com sucesso!',
            confirmButtonColor: '#007AB7',
            confirmButtonText: 'Ir para o Login',
            color: '#F4FCFD',
            background: '#353535',
            text: '',
            allowOutsideClick: 'false',
        }).then((result) => {
            if(result.isConfirmed){
                router.push("/login");
            }
        })
    })
    .catch((error) => { msgError.value = error;});
    // await injector.profiles.create()
}

function isFilled(event){
    if(event.length > 0){
        msgError.value = ""
    }
}



</script>


<style scoped>
.swal2-confirm{
  border: 1px dashed #333;
}
</style>