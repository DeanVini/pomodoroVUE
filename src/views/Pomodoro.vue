<template>
<NavBar/>
<div class="">

    <div class="flex justify-center items-center w-full h-full">
        <TimerProgressBar 
            class="w-screen" 
            :minutes="minutes"
            :seconds="seconds"
            @click="decress"
            
        />
    </div>
    <BaseButton type="login" value="Iniciar"/>
</div>
</template>

<script setup>
import TimerProgressBar from '../components/TimerProgressBar.vue';
import NavBar from '../components/NavBar.vue'
import { ref, watch } from 'vue';
import BaseButton from '../components/Forms/BaseButton.vue';

let minutes = ref(25);
let seconds = ref(0);

function decress(){
    seconds.value -= 1;
}

function play(){
    setInterval(() => {
        seconds.value -= 1
    }, 1000);
}

watch(seconds, ()=>{
    if(seconds.value < 0){
        seconds.value = 59;
        minutes.value -= 1;
    }
})
</script>