<template>
<div class="w-[350px] h-[350px] transition">
    
    <svg viewBox="0 0 98 100" xmlns="http://www.w3.org/2000/svg" class="">
        <g>
            <g transform="scale(1.5, 1.5)">
              <text class="transition" fill="#e7f8fd" x="34%" y="25%" dominant-baseline="middle" text-anchor="middle" id="counterText">{{ formatTime(minutes) }}:{{ formatTime(seconds) }}</text>
            </g>
            <g>
              <text transform="scale(0.5, 0.5)" class="transition" fill="#e7f8fd" x="101%" y="125%" dominant-baseline="middle" text-anchor="middle" id="counterText">Perfil:</text>
              <text font-weight="bold" transform="scale(0.6, 0.6)" class="transition" fill="#e7f8fd" x="84%" y="120%" dominant-baseline="middle" text-anchor="middle" id="counterText">{{ profileName }}</text>
            </g>
            <linearGradient 
                        id="gradient"
                        fx="0.99"
                        fy="0.99"
                        cx="0.5"
                        cy="0.5"
                        r="0.65"
                        >
                <stop offset="30%" :stop-color="Color()"></stop>
                <stop offset="100%" :stop-color="endColor" ></stop>
            </linearGradient>
            <circle id="basePath" class=" baseTimerCirclePath" cx="50" cy="50" r="45" :style="{
                'stroke-width': '3px',
                'stroke': '#242424'
            }"/>
            <circle id="basePath" class=" rotate-270" cx="-50" cy="50" r="45" stroke-linecap="round" :style="{
                'stroke': 'url(#gradient)',
                'stroke-dasharray': '283',
                'stroke-dashoffset': `${dashoffset}` 
            }"/>
        </g>
        
    </svg>

</div>
</template>

<script setup>
import { ref, watch, onMounted, watchPostEffect } from "vue";


const props = defineProps({
    minutes: {
        type: Number
    },
    seconds:{
      type: Number
    },
    initialTime: {
      type: Number,
      required: true
    },
    profileName:{
      type: String,
      default: "Normal"
    },
    startColor:{
      type: String
    },
    endColor:{
      type: String
    },
    next:{
      type: Boolean,
      default: false
    }
})

let dashoffset = ref(0)

watch(() => props.seconds, async (newSeconds) => {
    if(dashoffset.value > 281 || (props.minutes === props.initialTime && props.seconds === 0)){
      console.log("passou")
      dashoffset.value = 0
    }else dashoffset.value += (283/(props.initialTime * 60));
    console.log(dashoffset.value)
  });

function formatTime(number){
    if(number < 10){
        return `0${number}`;
    }
    return number;
}

function Color() {
  const colorVariants = {
    blue: "#007AB7",
    green: "#489B6D",
    gold: "#F2BA57"
  }
  return(colorVariants[props.startColor])
}

</script>

<style scoped>
circle {
  transition: all 0.3s linear;
  fill: transparent;
  stroke-width: 3px;
}


@-webkit-keyframes heartBeat {
  0%   {
    opacity: 0;
  }
  5%   {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes heartBeat {
  0%   {
    opacity: 0;
  }
  5%   {
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>