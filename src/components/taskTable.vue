<template>
    <div class="border-l w-max-3/12 w-3/12 h-full">
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
</template>

<script setup>
import Task from './Task.vue';
</script>