<template>
    <transition name="bounce">
            <div v-if="show" class="w-96 shadow-lg shadow-[#333] h-[70px] flex just border-[#333333] items-center p-2 border rounded-md bg-[#333]">
              <div class="mr-1">
                <Transition name="iconBounce">
                  <Icon v-if="!finished" type="check" fill="#e7f8fd" stroke="#007AB7"/>
                  <icon v-else type="check" fill="#e7f8fd" stroke="#489B6D"/>
                </Transition>
              </div>
              <p :class="finished ? 'line-through text-gray-400' : ''" class="truncate" @click="changeFinished">{{ description }}</p>
            </div>
    </transition>
</template>

<script setup>
import { ref, watch } from "vue";
import Icon from "./Icon.vue"
import { injector } from "../utils/injector";
let show = ref(true)


const props = defineProps({
  description: {
    type: String,
    default: "error"
  },
  finished: {
    type: Boolean
  },
  id:{
    type: Number
  },
  userId:{
    type: Number
  }
})

async function changeFinished(){
  props.finished= !props.finished
  await injector.tasks.put(props.userId, props.id, props.finished)
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