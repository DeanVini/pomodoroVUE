<template>
    <input type="password"
            v-model="password" 
            id="password-adress" 
            class="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 h-[45px]" 
            placeholder="Senha" 
            required
            >
</template>

<script setup>
props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
    }
});


</script>