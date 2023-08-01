<template>
<div class="flex">
    
    <svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg">
        <g>
            <g>
              <text fill="#e7f8fd" x="10%" y="50%" dominant-baseline="middle" text-anchor="middle" id="counterText">{{ formatTime(minutes) }}:{{ formatTime(seconds) }}</text>
            </g>

            <linearGradient 
                        id="gradient"
                        fx="0.99"
                        fy="0.99"
                        cx="0.5"
                        cy="0.5"
                        r="0.65"
                        >
                <stop offset="30%" stop-color="#0EABD9"></stop>
                <stop offset="100%" stop-color="#e7f8fd" ></stop>
            </linearGradient>
            <circle id="basePath" class="baseTimerCirclePath" cx="50" cy="50" r="45" :style="{
                'stroke-width': '3px',
                'stroke': '#333333'
            }"/>
            <circle id="basePath" class=" rotate-270" cx="-50" cy="50" r="45" stroke-linecap="round" :style="{
                'stroke': 'url(#gradient)',
                'stroke-dasharray': '283',
                'stroke-dashoffset': '283'
            }"/>
        </g>
        
    </svg>

</div>
</template>

<script setup>

const props = defineProps({
    minutes: {
        type: Number
    },
    seconds:{
      type: Number
    }
})

function formatTime(number){
    if(number < 10){
        return `0${number}`;
    }
    return number;
}
</script>

<style scoped>
circle {
  transition: all 1s linear;
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