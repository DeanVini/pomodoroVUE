<template>
    <div class="max-h-0">
        <div class="border-l min-w-3/12 h-screen overflow-y-hiddenw-max-3/12 w-3/12">
            <div class="p-5 flex flex-col items-start">
                <h1 class="text-4xl pb-3">Tarefas</h1>
                <div class="flex flex-col items-center justify-center gap-6">
                  <TransitionGroup name="list" >
                    <Task v-for="(task, index) in tasksForTable" :key="index" @restart="restartTaskTable()" :tasks="tasksForTable" :userId="userId" :id="task.id" :show="task.show" :finished="task.finished" :description="task.description"/>
                  </TransitionGroup>
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

.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>