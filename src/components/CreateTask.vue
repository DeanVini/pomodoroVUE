<template>
    <div :class="opened ? 'border border-[#333333] rounded-t-md shadow-[#333]' : 'shadow-lg shadow-[#333] border-[#333333] items-center p-2 border rounded-md bg-[#333]'" class="w-96 h-[70px] flex just items-center p-2 bg-[#333]">
        <Transition name="fade" >
            <img @click="opened = false" v-show="opened" class="absolute duration-75 cursor-pointer transition mr-1" src="./../assets/circle-minus-svgrepo-com.svg" alt="">
        </Transition>
        <Transition name="fade">
            <img @click="opened = true" v-show="!opened" class="absolute  duration-75 cursor-pointer transition mr-1" src="./../assets/circle-plus-svgrepo-com.svg" alt="">
        </Transition>
        <Transition name="fade" mode="out-in">
            <h1 @click="opened = !opened" v-if ="!opened" class="cursor-pointer ml-[2.32rem] transition">Clique aqui para adicionar uma nova tarefa...</h1>
        </Transition>
        <Transition name="fade" mode="out-in">
            <div v-if="opened" class="transition absolute ml-[2.32rem] w-[16.5%]">
                <BaseInput type="task" @input="isFilled" @update="(event) => {inputValue = event}"/>
            </div>
        </Transition>
    </div>
    <Transition name="dropdownTransition">
        <div v-show="opened" class=" w-96 shadow-lg shadow-[#333] h-[70px] flex justify-center gap-3 border-[#333333] items-center p-2 border rounded-b-md bg-[#333]">
            <BaseButton type="default" value="Confirmar" @click="confirmTask"/>
            <BaseButton type="default" value="Cancelar" @click="opened = !opened"/>
        </div>
    </Transition>
</template>

<script setup>
import { reactive, ref, watch } from "vue";
import { injector } from "../utils/injector";
import BaseButton from "./Forms/BaseButton.vue"
import BaseInput from "./Forms/BaseInput.vue"

const props = defineProps({
    tasks:{
        type: Array
    },
    id:{
        type: Number
    },
    userId:{
        type: Number
    }
})

let opened = ref(false)
let inputValue = ref()
let tasksForReq = ref([])

const emit = defineEmits(['newTask'])

let taskObject = reactive({
    description: null,
    finished: null,
    show: null,
    id: null
})

async function confirmTask(){
    tasksForReq.value = tasksForReq.value.concat(props.tasks);

    taskObject.description = inputValue.value;
    taskObject.finished = false;
    taskObject.show = true;
    taskObject.id = props.id

    tasksForReq.value.push(taskObject);

    
    await injector.tasks.put(props.userId, tasksForReq.value).then(()=>{
        opened.value = false;
        taskObject.show = false
        emit('newTask', {
            ...taskObject
        })
        clearObj();
        tasksForReq.value = []
    })
}

function isFilled(event){
    if(event.length > 0){

    }
}

function clearObj(){
    taskObject = {
        description: null,
        finished: null,
        show: null,
        id: null
    }
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  overflow: hidden;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.dropdownTransition-enter-active,
.dropdownTransition-leave-active {
  transition: max-height 2s ease-out;
  max-height: 600px;
  overflow: hidden;
}

.dropdownTransition-enter-from,
.dropdownTransition-leave-to {
  max-height: 0;
  transition: max-height 0s ease-in;
}
</style>