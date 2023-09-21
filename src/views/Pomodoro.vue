<template>
    <div class="">
        <div class="w-full flex h-screen">
            <div class="flex flex-col min-h-min mb-[78px] items-center justify-center w-full">
                <div :class="started ? `transition-colors border-[${startColor}] border-2` : ' transition-colors border-2 border-transparent'" class="bg-[#333333] min-w-[550px] rounded-lg w-4/12 h-[585px]">
                    <div class="p-2 pb-[50px] flex justify-center gap-4">
                        <BaseButton value="Pomodoro" type="pomodoro" :selected="selectedTime == 1" @click="selectedTime = 1; changePomodoroState()"/>
                        <BaseButton value="Descanso" type="pomodoro" :selected="selectedTime == 2" @click="selectedTime = 2; changePomodoroState()"/>
                        <BaseButton value="Descanso Longo" type="pomodoro" :selected="selectedTime == 3" @click="selectedTime = 3; changePomodoroState()"/>
                    </div>
                    <div class="flex justify-center">
                        <TimerProgressBar 
                        class="" 
                        :profileName="profile.name"
                        :minutes="minutes"
                        :startColor="startColor"
                        :endColor="endColor"
                        :seconds="seconds"
                        @click="decress"
                        :initialTime="initialTime"
                        :next="next"
                        />
                    </div>
                    <div class="flex pt-[50px] flex-row justify-center mt-3 itens-center w-full gap-6 self-center">
                        <BaseButton v-if="!started" :color="startColor" class="delay-150  transition" type="start" value="Iniciar" @click="play()"/>
                        <BaseButton v-else type="stop" :color="startColor" class=" delay-150 transition" value="Parar" widthVal="300" heightVal="50" @click="stop()"/>
                    </div>
                </div>
            </div>
            <TaskTable/>
        </div>

    </div>
</template>

<script setup>
import TimerProgressBar from '../components/TimerProgressBar.vue';
import { onMounted, ref, watch } from 'vue';
import BaseButton from '../components/Forms/BaseButton.vue';
import TaskTable from '../components/TaskTable.vue';
import { injector } from '../utils/injector';
import userInfoStore from '../store/userInfos';

const userId = ref();

let cycleCount = ref(0);
let profile = ref({});
let isFinished = ref(false);
let started = ref(false);
let minutes = ref(null);
let initialTime = ref(null);
let seconds = ref(0);
let intervalId = ref(null);
let selectedTime = ref(1);
let startColor = ref()
let endColor = ref()
let next = ref(false)

onMounted(async()=>{
    userId.value = userInfoStore().userInfo.id;
    console.log(userId.value)
    await injector.profiles.get(userId.value)
            .then((response)=>{
                profile.value = response.data.profileStored[response.data.lastProfile - 1];
            })
            changePomodoroState()
});

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

function changePomodoroState(){
    stop();
    if(selectedTime.value == 1){
        initialTime.value = profile.value.focusTime;
        startColor.value = "blue"
        endColor.value = "#e7f8fd" 
    }else if(selectedTime.value == 2){
        initialTime.value = profile.value.break;
        startColor.value = "green"
        endColor.value = "#e7f8fd"
    }else{
        initialTime.value = profile.value.longBreak;
        startColor.value = "gold"
        endColor.value = "#e7f8fd"
    }
    minutes.value = initialTime.value;
}

function nextCycle(){
    stop();
    next.value = !next.value
    if(cycleCount.value > 3){
        initialTime.value = profile.value.longBreak;
        startColor.value = "gold";
        endColor.value = "#e7f8fd";
        cycleCount.value = 0;
        selectedTime == 3;
    }
    else if(selectedTime.value == 1){
        initialTime.value = profile.value.break;
        startColor.value = "green"
        endColor.value = "#e7f8fd"
        selectedTime == 2;
    }else{
        initialTime.value = profile.value.focusTime;
        startColor.value = "blue"
        endColor.value = "#e7f8fd"
        cycleCount.value++;
        selectedTime == 1;
    }
    minutes.value = initialTime.value;
}

watch(seconds, ()=>{
    console.log(minutes.value)
    if(minutes.value === -1){
        nextCycle();
    }

    if(seconds.value < 0){
        seconds.value = 59;
        minutes.value -= 1;
    }
})
</script>