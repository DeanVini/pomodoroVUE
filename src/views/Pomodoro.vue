<template>
<div class="flex flex-col items-center justify-center  w-full h-full">

    <div class="flex">
        <TimerProgressBar 
            class="" 
            :minutes="minutes"
            :seconds="seconds"
            @click="decress"
            :initialTime="initialTime"
            />
        </div>
    </div>
    <div class="flex flex-row justify-center mt-3 itens-center w-full gap-6 self-center">
        <BaseButton v-if="!started" type="start" value="Iniciar" @click="play()"/>
        <BaseButton v-else type="stop" value="Parar" widthVal="300" heightVal="50" @click="stop()"/>
    </div>
</template>

<script setup>
import TimerProgressBar from '../components/TimerProgressBar.vue';
import NavBar from '../components/Global/NavBar.vue'
import { ref, watch } from 'vue';
import BaseButton from '../components/Forms/BaseButton.vue';

let isFinished = ref(false);
let started = ref(false);
let initialTime = ref(1);
let minutes = ref(initialTime.value);
let seconds = ref(0);
let intervalId = ref(null)

function decress(){
    if(minutes.value >= 0 && isFinished.value === false)
    seconds.value -= 1;
}

function play(){
    if(started.value === false){
        started.value = true;

        intervalId = setInterval(()=>{seconds.value -= 1}, 1000)
    }
}

function stop(){
    clearInterval(intervalId);
    minutes.value = initialTime.value
    seconds.value = 0
    started.value = false;
}

watch(seconds, ()=>{
    if(minutes.value === -1){
        minutes.value = 0;
        seconds.value = 0;
        isFinished.value = true;
    }

    if(seconds.value < 0){
        seconds.value = 59;
        minutes.value -= 1;
    }
})
</script>