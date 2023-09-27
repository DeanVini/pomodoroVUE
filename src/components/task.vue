<template>
    <transition name="bounce">
      <div v-show="show" :key="show">
        <div :class="edit ? 'border border-[#333333] items-center rounded-t-md' : 'shadow-lg shadow-[#333] border-[#333333] items-center border rounded-md bg-[#333]'" class="w-96 h-[70px] flex justify-between p-2 bg-[#333]">
          <div class="flex w-full h-full mt-[18px]">
            <div class="mr-1 mt-[5px]">
              <Transition name="fade">
                <div v-show="!edit" class="absolute duration-75 cursor-pointer transition mr-1">
                  <Transition name="iconBounce">
                    <Icon v-if="!finished" class="cursor-pointer" @click="changeFinished" :key="show" type="check" fill="#e7f8fd" stroke="#007AB7"/>
                    <icon v-else class="cursor-pointer" @click="changeFinished" type="check" fill="#e7f8fd" stroke="#489B6D"/>
                  </Transition>
                </div>
              </Transition>
              <Transition name="fade">
                <div v-show="edit" class="mb-10">
                  <div class="absolute duration-75 cursor-pointer transition">
                    <Icon @click="edit = !edit" class="cursor-pointer mb-" type="minus"/>
                  </div>
                </div>
                </Transition>
            </div>
            <transition>
              <div v-show="!edit" class=" mt-[9px] h-full ml-8 ">
                <p :class="finished ? 'line-through text-gray-400' : ''" class="truncate">{{ description }}</p>
              </div>
            </transition>
            <Transition name="fade">
              <EditTask @finished="confirmed=false; edit = false; console.log(edit)" v-show="edit" :description="description" :userId="userId" :id="id" :tasks="tasks" :confirmed="confirmed"/>
            </Transition>
          </div>
          <Transition name="fade">
            <div v-show="!edit" class="absolute self-center mb-10 ml-[330px]">
              <Icon @click="edit = !edit" class="cursor-pointer" type="threeDots"/>
            </div>
          </Transition>
        </div>
        <Transition name="dropdownTransition">
              <div v-show="edit" class=" w-96 shadow-lg shadow-[#333] h-[70px] flex justify-center border-[#333333] items-center p-2 border rounded-b-md bg-[#333]">
                <div class="flex gap-3">
                    <BaseButton type="default" value="Confirmar" @click="confirmed = true"/>
                    <BaseButton type="default" value="Cancelar" @click="edit = !edit; confirmed=false"/>
                    <div class="cursor-pointer">
                        <icon type="trash" @click="removeTask()"/>
                    </div>
                  </div>
              </div>
        </Transition>

      </div>
    </transition>
</template>

<script setup>
import { ref, watch } from "vue";
import Icon from "./Icon.vue"
import { injector } from "../utils/injector";
import EditTask from "./EditTask.vue";
import BaseButton from "./Forms/BaseButton.vue";

const emit = defineEmits(['restart'])
let confirmed = ref(false)

const props = defineProps({
  description: {
    type: String,
    default: "error"
  },
  finished: {
    type: Boolean
  },
  show: {
    type: Boolean
  },
  id:{
    type: Number
  },
  userId:{
    type: Number
  },
  show:{
    type: Boolean,
    default: true
  },
  tasks:{
    type: Array
  }
})

let edit = ref(false)

//this is the incorrect way to do this change, but for now is functional
//todo: Create an API to improve way to edit this information
async function changeFinished(){
  props.finished= !props.finished;
  await injector.tasks.editFinished(props.userId, props.id, props.tasks);

  emit('restart')
}

async function removeTask(){
  injector.tasks.delete(props.userId,props.id, props.tasks)
  edit.value = !edit.value
  emit('restart')
}
</script>

<style scoped>

.iconBounce-enter-active{
  animation: bounce-in-icon 0.5s;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

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

@keyframes bounce-in-icon {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>