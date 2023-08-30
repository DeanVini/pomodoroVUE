<template>
    <div class="border-l w-max-3/12 w-3/12 h-[1000px]">
        <div class="p-5 flex flex-col items-start">
            <h1 class="text-4xl pb-3">Tarefas</h1>
            <div class="flex flex-col gap-3">
                <task/>
                <task/>
                <task/>
                <task/>
                <task/>
                <task/>
                <task/>
            </div>
        </div>
    </div>
</template>

<script setup>
import task from './task.vue';
</script>