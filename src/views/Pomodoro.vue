<template>
<div class="w-full flex flex-row-reverse">
    <taskTable/>
    <div class="flex flex-col h-[600px] items-center justify-center w-full">
        <div :class="started ? 'transition-colors border-[#0EABD9] border-2' : ' transition-colors border-2 border-transparent'" class="bg-[#333333] min-w-[550px] rounded-lg w-4/12 h-[485px]">
            <div class="p-2 flex justify-center gap-4">
                <h1 class="bg-[#2b2a2a] font-bold p-1 rounded-md w-[125px] text-center">Pomodoro</h1>
                <h1 class="bg-[#333333] w-[125px] text-center p-1 rounded-md">Descanso</h1>
                <h1 class="bg-[#333333] w-[125px] text-center p-1 rounded-md">Descanso Longo</h1>
            </div>
            <div class="flex justify-center">
                <TimerProgressBar 
                    class="" 
                    :minutes="minutes"
                    :seconds="seconds"
                    @click="decress"
                    :initialTime="initialTime"
                    />
                </div>
                <div class="flex flex-row justify-center mt-3 itens-center w-full gap-6 self-center">
                    <BaseButton v-if="!started" class="delay-150 transition" type="start" value="Iniciar" @click="play()"/>
                    <BaseButton v-else type="stop" class="delay-150 transition" value="Parar" widthVal="300" heightVal="50" @click="stop()"/>
                </div>
            </div>
        </div>
</div>
</template>

<script setup>
import TimerProgressBar from '../components/TimerProgressBar.vue';
import { ref, watch } from 'vue';
import BaseButton from '../components/Forms/BaseButton.vue';
import taskTable from '../components/taskTable.vue';

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