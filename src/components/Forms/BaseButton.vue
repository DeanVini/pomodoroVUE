<template>
    <div v-if="type == 'login'">
        <button :class='`bg-[#007AB7] border-[#007AB7] rounded-lg w-[${props.widthVal}px] h-[${props.heightVal}px] transition-colors duration-300 hover:bg-[#007ab7d5] active:bg-[#018fd6]`'><h1 :class="''">{{ value }}</h1></button>    
    </div>
    <div v-else-if="type == 'start'">
        <button :class='`bg-[#007AB7] font-bold border-[#007AB7] rounded-lg w-[${props.widthVal}px] h-[${props.heightVal}px] transition-colors duration-200 hover:bg-[#007ab7d5] active:bg-[#018fd6]`'><h1 :class="''">{{ value }}</h1></button>    
    </div>
    <div v-else-if="type == 'stop'">
        <button :class='`bg-[#e7f8fd] border font-bold text-[#007AB7] border-[#007AB7] rounded-lg w-[${props.widthVal}px] h-[${props.heightVal}px] transition-colors duration-200`'><h1 :class="''">{{ value }}</h1></button>    
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