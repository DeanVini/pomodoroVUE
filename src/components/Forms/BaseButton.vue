<template>
    <div v-if="type == 'login'">
        <button class="bg-[#007AB7] border-[#007AB7] rounded-lg w-[100px] h-[40px] transition-colors duration-300 hover:bg-[#007ab7d5] active:bg-[#018fd6]">{{ value }}</button>    
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
    }
})

</script>