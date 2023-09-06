<template>
    <transition name="bounce">
            <div v-if="show" class="w-96 shadow-lg shadow-[#333] h-[70px] flex just border-[#333333] items-center p-2 border rounded-md bg-[#333]">
              <img class="mr-1" src="./../assets/circle-check-svgrepo-com.svg" alt=""> 
              <p>{{ description }}</p>
            </div>
    </transition>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  description: {
    type: String,
    default: "error"
  }
})

let show = ref(true)
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