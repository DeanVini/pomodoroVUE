<template>
    <div class="max-h-0 border-b">
        <div class="border-l min-w-3/12 h-screen overflow-y-hiddenw-max-3/12 w-3/12">
            <div class="p-5 flex flex-col items-start">
                <h1 class="text-4xl pb-3">Tarefas</h1>
                <div class="flex flex-col items-center justify-center gap-3">
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                    <Task/>
                </div>
            </div>
        </div> 

    </div>
</template>

<script setup>
import Task from './Task.vue';
import userInfoStore from '../store/userInfos';
import { onMounted, ref } from 'vue';
import { injector } from '../utils/injector';

const userId = ref()
const tasks = ref([]);

onMounted(async ()=>{
    userId.value = userInfoStore().userInfo.id;
    tasks.value = await injector.tasks.get(userId)
    console.log(tasks.value.data)
})

console.log(userInfoStore().userInfo)
</script>