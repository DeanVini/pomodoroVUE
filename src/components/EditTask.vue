<template>
    <Transition name="fade" mode="out-in">
        <div class="transition absolute ml-[2rem] w-[16.5%]">
            <BaseInput type="task" :value="description" @input="isFilled" @update="(event) => {newDescription = event}"/>
        </div>
    </Transition>
</template>


<script setup>
import { onMounted, reactive, ref, watch } from "vue";
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
    },
    description:{
        type: String
    },
    opened:{
        type: Boolean
    },
    confirmed:{
        type: Boolean
    },
    canceled:{
        type: Boolean
    }
 })

 const emit = defineEmits(['finished']);
 let newDescription = ref()


onMounted(()=>{
    newDescription.value = props.description;
    if(props.confirmed){
        confirmTask();
    }
})


watch(newDescription, ()=>{
    confirmTask()
})

async function confirmTask(){
    let response = await injector.tasks.editDescription(props.userId, props.id, props.tasks, props.description)

    console.log(response)
}

function isFilled(event){
    if(event.length > 0){

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