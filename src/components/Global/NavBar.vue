<template>
<div class="bg-[#242424] gap-2 flex w-full pl-[30px] items-center border-b">
    <div class="flex items-center">
        <img src="../../assets/time-eco-svgrepo-com.svg" class="mb-2 mt-2 w-[60px] h-[60px]" alt="">
        <h1 class="font-bold pt-4">POMODORO</h1>
    </div>
    <div class="flex font-medium text-base w-screen gap-3 pt-4 pl-[60px] h-[77px]">
        <div class="flex gap-5 w-[92%]">
            <button :class="actualRoute=='Pomodoro' ? 'border-b-4 border-[#0EABD9]'  : 'hover:border-b-4 border-[#0EABD9]'" @click="router.push('/pomodoro')">
                <h1>Pomodoro</h1>
            </button>
            <button :class="actualRoute=='Sobre' ? 'border-b-4 border-[#0EABD9]'  : 'hover:border-b-4 border-[#0EABD9]'" @click="router.push('/sobre')">
                <h1>Sobre</h1>
            </button>
            <button :class="actualRoute=='Perfil' ? 'border-b-4 border-[#0EABD9]'  : 'hover:border-b-4 border-[#0EABD9]'" @click="router.push('/perfil')">
                <h1>Perfil</h1>
            </button>
        </div>
        <BaseButton type="default" classes="w-[100px] h-[45px]" value="Logout" @click="logout()"/>
    </div>
</div>    
</template>

<script setup>
import router from "../../router";
import BaseButton from "../Forms/BaseButton.vue";


const props = defineProps({
    actualRoute: {
        type: String
    }
})

function logout(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('user');
    router.push('/login');
}

</script>