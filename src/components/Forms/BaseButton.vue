<template>
    <div v-if="type == 'login'">
        <button :class='`bg-[#007AB7] border-[#007AB7] rounded-lg w-[${props.widthVal}px] h-[${props.heightVal}px] transition-colors duration-300 hover:bg-[#007ab7d5] active:bg-[#018fd6]`'><h1 :class="''">{{ value }}</h1></button>    
    </div>
    <div v-else-if="type == 'start'">
        <button :class='`bg-[#007AB7] font-bold border-[#007AB7] rounded-lg w-[250px] h-[60px] transition-colors duration-400 hover:bg-[#007ab7d5] active:bg-[#018fd6] active:scale-105`'><h1 class="text-3xl text-center">{{ value }}</h1></button>    
    </div>
    <div v-else-if="type == 'stop'">
        <button :class='`bg-[#e7f8fd] border-[3px] font-bold text-[#007AB7] border-[#007AB7] rounded-lg w-[250px] h-[60px] transition-colors duration-400 active:scale-105`'><h1 class="text-3xl text-center">{{ value }}</h1></button>    
    </div>
</template>
<script setup>
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
    bold:{
        type: Boolean,
        default: false
    }
})

</script>