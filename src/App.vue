<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted, ref } from "vue";
import router from "./router";


onMounted(()=>{
    let user = ref(localStorage.getItem('user-info'))
    console.log(user.value)
    if(!user.value){
      router.push({name:'Login'})        
    }
});
</script>