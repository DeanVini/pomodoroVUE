<template>
    <div class="flex justify-center items-center w-screen h-screen">
        <div class=" w-[500px] lg:h-[800px] bg-[#0EABD9] border-[#ffffff36] border-y  border-l-0 rounded-l-lg">
                <div class="">
                    <img src="../../public/vectorstock_24286813.png" alt="" class="  lg:w-[500px] lg:h-[800px] w-[500px]  object-cover">
                </div>
        </div>
        <div class="flex flex-col r w-[500px] h-[800px] bg-[#ffffff0c] border-[#ffffff36] border-y  border-r-0 rounded-r-lg">
            <BaseInput type="password" v-model="test"/>
        </div>
    </div>

    <router-link to="/login">Voltar</router-link>
</template>

<script setup>
import { ref } from 'vue';
import BaseInput from '../components/Forms/BaseInput.vue';

let test = ref();


</script>