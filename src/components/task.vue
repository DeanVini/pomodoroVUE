<template>
    <transition name="bounce">
      <div v-show="show" :key="show">
        <div :class="edit ? 'border border-[#333333] items-center rounded-t-md shadow-[#333]' : 'shadow-lg shadow-[#333] border-[#333333] items-center border rounded-md bg-[#333]'" class="w-96 h-[70px] flex justify-between p-2 bg-[#333]">
          <div class="flex">
            <div class="mr-1">
              <Transition name="fade">
                <div v-show="!edit" class="absolute duration-75 cursor-pointer transition mr-1">
                  <Transition name="iconBounce">
                    <Icon v-if="!finished" class="cursor-pointer" @click="changeFinished" :key="show" type="check" fill="#e7f8fd" stroke="#007AB7"/>
                    <icon v-else class="cursor-pointer" @click="changeFinished" type="check" fill="#e7f8fd" stroke="#489B6D"/>
                  </Transition>
                </div>
              </Transition>

              <Transition name="fade">
                <div v-show="edit">
                  <img @click="edit = !edit" class="absolute duration-75 cursor-pointer transition mr-1" src="./../assets/circle-minus-svgrepo-com.svg" alt="">
                </div>
              </Transition>
              
            </div>
            <transition name="fade">
              <p v-show="!edit" :class="finished ? 'line-through text-gray-400' : ''" class="truncate self-center mt-[3px] ml-8">{{ description }}</p>
            </transition>
            <Transition>

            </Transition>
          </div>
          
          <Transition name="fade">
            <div v-show="!edit" class="mb-10 mr-1">
              <Icon @click="edit = !edit" class="cursor-pointer" type="threeDots"/>
            </div>
          </Transition>
          
        </div>
        <Transition name="dropdownTransition">
            <div v-show="edit" class=" w-96 shadow-lg shadow-[#333] h-[70px] flex justify-center gap-3 border-[#333333] items-center p-2 border rounded-b-md bg-[#333]">
                <BaseButton type="default" value="Confirmar" @click="confirmTask"/>
                <BaseButton type="default" value="Cancelar" @click="edit = !edit"/>
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

const emit = defineEmits(['restart'])

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