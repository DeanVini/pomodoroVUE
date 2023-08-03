<template>
    <div v-if="type == 'password'">
        <div class="relative" :class="error ? 'animate-shake-l' :  '' ">
            <div class=" absolute top-[7.4px] pt-[1px] h-[30px]  pr-[5px] border-gray-500 left-0 flex self-center items-center pl-3.5 pointer-events-none border-r-[2px]">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 4 20 16">
                    <path d="M17,9V7c0-2.8-2.2-5-5-5S7,4.2,7,7v2c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M9,7c0-1.7,1.3-3,3-3s3,1.3,3,3v2H9V7z M13.1,15.5c0,0-0.1,0.1-0.1,0.1V17c0,0.6-0.4,1-1,1s-1-0.4-1-1v-1.4c-0.6-0.6-0.7-1.5-0.1-2.1c0.6-0.6,1.5-0.7,2.1-0.1C13.6,13.9,13.7,14.9,13.1,15.5z"/>
                </svg>
            </div>
            <input type="password"
                   @input="updateValue"
                   :value="startValue"
                   id="password-adress" 
                   :class="error ? 'transition duration-700 border border-red-500' :  'transition focus:ring-[#0EABD9] focus:border-[#0EABD9]  ' " 
                   class="focus:outline-none border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white h-[45px]" 
                   :placeholder="placeholder" 
                   required>
        </div>
    </div>
    <div v-if="type == 'email'">
        <div class="relative" :class="error ? 'animate-shake-r' :  '' ">
            <div class=" absolute top-[7.4px] pt-[2px] h-[30px]  pr-[5px] border-gray-500 left-0 flex self-center items-center pl-3.5 pointer-events-none border-r-[2px]">
                 <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                </svg>
            </div>
            <input type="text"
                   :value="startValue"
                   @input="updateValue"
                   id="pemail-address-icon" 
                   :class="error ? 'transition duration-700 border border-red-500' :  'transition focus:ring-[#0EABD9] focus:border-[#0EABD9] ' " 
                   class="focus:outline-none border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white h-[45px]" 
                   :placeholder="placeholder" 
                   required>
        </div>
    </div>
    <div v-if="type == 'text'">
        <div>
            <input type="text"
                   :value="startValue"
                   @input="updateValue" 
                   :class="error ? 'transition duration-700 border border-red-500' :  'transition focus:ring-[#0EABD9] focus:border-[#0EABD9]' " 
                   class="focus:outline-none border bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-sm rounded-lg block w-full pl-3 pr-10 p-2.5 h-[45px]" 
                   :placeholder="placeholder" 
                   >
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch } from "vue";

const emit = defineEmits(['update:startValue'])

const props = defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String
    },
    error: {
        type: Boolean,
        default: false
    },
    isRequired:{
        type: Boolean,
        default: false
    },

});

let startValue = ref()

function updateValue(event){
    let newValue = event.target.value;

    startValue.value = newValue;

    emit('update', newValue)
    emit('input', newValue)
}

</script>