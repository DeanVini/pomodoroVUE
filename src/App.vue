<template>
  <div class="w-full h-screen flex flex-col overflow-y-hidden">
    <NavBar :actualRoute="route.name" v-if="router.currentRoute.value.href != '/login' && router.currentRoute.value.href != '/register'"/>
    <div class="h-full">
      <router-view></router-view>

    </div>  
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import router from "./router";
import NavBar from "./components/Global/Navbar.vue";
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(()=>{
    let user = ref(localStorage.getItem('user-info'))
    if(!user.value){
      router.push({name:'Login'})        
    }
});
</script>