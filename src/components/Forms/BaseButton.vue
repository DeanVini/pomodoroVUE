<template>
    <div v-if="type == 'default'">
        <button :class='classes' class="bg-[#007AB7] border-[#007AB7] rounded-lg transition-colors duration-300 hover:bg-[#007ab7d5] active:bg-[#018fd6]"><h1 :class="''">{{ value }}</h1></button>    
    </div>
    <div v-else-if="type == 'start'">
        <button :class='Button() + "" + " rounded-lg w-[250px] h-[60px] transition-colors duration-400 hover:bg-opacity-[120%] active:brightness-125 active:scale-105"'><h1 class="text-3xl text-center">{{ value }}</h1></button>    
    </div>
    <div v-else-if="type == 'stop'">
        <button :class='Button() + "" + " rounded-lg w-[250px] h-[60px] transition-colors duration-400 active:scale-105"'><h1 class="text-3xl text-center">{{ value }}</h1></button>    
    </div>
    <div v-else-if="type == 'pomodoro'">
        <button :class="selected ? 'bg-[#2b2a2a] font-bold w-[140px] text-center p-1 rounded-md' :'bg-[#333333] w-[125px] text-center p-1 rounded-md'">{{ value }}</button>
    </div>
</template>
<script setup>
import { ref } from "vue"

const props = defineProps({
    type: {
        type: String,
        default: 'default'
    },
    value:{
        type: String,
        default: ''
    },
    widthVal:{
        type: Number,
        default: 100
    },
    heightVal:{
        type: Number,
        default: 40
    },
    classes:{
        type: String,
        default: 'w-[100px] h-[40px]'
    },
    bold:{
        type: Boolean,
        default: false
    },
    selected:{
        type: Boolean,
        default: false
    },
    color:{
        type: String,
        default: "#0EABD9"
    }
})


function Button() {
  const colorVariants = {
    blue: props.type == "start" ? 'font-bold bg-[#007AB7] border-[#007AB7]' : 'font-bold bg-[#e7f8fd] text-[#007AB7] border-[#007AB7] border-[3px]',
    green: props.type == "start" ? 'font-bold bg-[#489B6D] border-[#489B6D]' : 'font-bold bg-[#e7f8fd] text-[#489B6D] border-[#489B6D] border-[3px]',
    gold: props.type == "start" ? 'font-bold bg-[#F2BA57] border-[#F2BA57]' : 'font-bold bg-[#e7f8fd] text-[#F2BA57] border-[#F2BA57] border-[3px]',
  }
  return(colorVariants[props.color])
}
</script>