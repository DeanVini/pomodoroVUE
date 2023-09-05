<template>
    <div class="w-96 shadow-lg shadow-[#333] h-[70px] flex just border-[#333333] items-center p-2 border rounded-md bg-[#333]">
        <Transition mode="out-in">
            <img @click="opened = false" v-if="opened" class="duration-75 cursor-pointer transition active:scale-150 mr-1" src="./../assets/circle-minus-svgrepo-com.svg" alt="">
            <img @click="opened = true" v-else class="duration-75 cursor-pointer transition active:scale-150 mr-1" src="./../assets/circle-plus-svgrepo-com.svg" alt="">
        </Transition>
        <Transition name="fade" mode="out-in">
            <h1 v-if="!opened" class="transition">Clique aqui para adicionar uma nova tarefa...</h1>
            <input v-else type="text">
        </Transition>
    </div>
</template>

<script setup>
import { ref } from "vue";

let opened = ref(false)

</script>