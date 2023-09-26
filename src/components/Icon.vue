<template>
    <div v-if="type == 'check'">
        <svg width="33px" height="33px" viewBox="0 0 24 24" :fill="fill" xmlns="http://www.w3.org/2000/svg">
            <g id="Warning / Circle_Check">
            <path id="Vector" d="M15 10L11 14L9 12M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" :stroke="stroke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    </div>
    <div v-else-if="type=='threeDots'">
        <svg fill="#242424" height="33px" width="33px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            	 viewBox="0 0 32.055 32.055" xml:space="preserve">
            <g>
            	<path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
            		C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
            		s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
            		c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
            </g>
        </svg>
    </div>
    <div v-else-if="type == 'minus'"> 
        <svg width="33px" height="33px" viewBox="0 0 24 24" fill="#e7f8fd" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#007AB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    type:{
        type: String
    },
    fill:{
        type: String
    },
    stroke:{
        type: String
    }
})
</script>