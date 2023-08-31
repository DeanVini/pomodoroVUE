<template>
    <h1 @click="show = !show">CLICK-ME</h1>
    <transition name="bounce">
            <div v-if="show" class="h-12 w-96 border rounded-md bg-black">
                <div></div>
            </div>
    </transition>
</template>

<script setup>
import { ref } from "vue";

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