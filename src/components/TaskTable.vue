<template>
    <div class="max-h-0">
        <div class="border-l min-w-3/12 h-screen overflow-y-hiddenw-max-3/12 w-3/12">
            <div class="p-5 flex flex-col items-start">
                <h1 class="text-4xl pb-3">Tarefas</h1>
                <div class="flex flex-col items-center justify-center gap-6">
                    <div v-for="task in tasksForTable" :key="task.show">
                        <Transition name="bounce">
                            <Task v-if="task.show" @restart="restartTaskTable()" :tasks="tasksForTable" :userId="userId" :id="task.id" :show="task.show" :finished="task.finished" v-show="task" :description="task.description"/>
                        </Transition>
                    </div>
                    <div class="flex flex-col items-center justify-center">
                        <CreateTask @newTask="addTaskInTable" :tasks="tasks" :userId="userId" :id="id"/>
                    </div>
                </div>
            </div>
        </div> 

    </div>
</template>

<script setup>
import Task from './Task.vue';
import userInfoStore from '../store/userInfos';
import CreateTask from './CreateTask.vue'
import { onMounted, ref } from 'vue';
import { injector } from '../utils/injector';

const userId = ref();
const tasks = ref([]);
const tasksForTable = ref([])
const id = ref();

onMounted(async ()=>{
    userId.value = userInfoStore().userInfo.id;
    tasks.value = await injector.tasks.get(userId);
    tasks.value = tasks.value.data[0].taskStored;

    tasks.value = sortTasks(tasks.value);
    tasksForTable.value = tasks.value
  })
  
  function addTaskInTable(task){
    task.show = true;
    tasksForTable.value.unshift(task);
    id.value = tasks.value.length + 1;
}

function restartTaskTable(){
  tasksForTable.value = sortTasks(tasksForTable.value);
}

function sortTasks(taskArray){
  return taskArray.sort((task1) => {
      return task1.finished === false ? -1 : 1;
    });
}

</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>