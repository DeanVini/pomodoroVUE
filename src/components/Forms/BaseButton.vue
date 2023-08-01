<template>
    <div v-if="type == 'login'">
        <button :class='`bg-[#007AB7] border-[#007AB7] rounded-lg w-[${props.width.toString()}px] h-[${props.height.toString()}px] transition-colors duration-300 hover:bg-[#007ab7d5] active:bg-[#018fd6]`'><h1 :class="''">{{ value }}</h1></button>    
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
    width:{
        type: Number,
        default: 100
    },
    height:{
        type: Number,
        default: 40
    },
    bold:{
        type: Boolean,
        default: false
    }
})

</script>