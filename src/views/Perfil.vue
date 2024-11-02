<template>
  <div class="w-full h-full p-4">
    <div class="bg-[#333333] p-2 rounded-lg shadow-lg">
      <div class="flex flex-col lg:flex-row">
        <div class="flex flex-row items-center">
          <div class="w-20 h-20 sm:w-24 sm:h-24 flex-none lg:w-32 lg:h-32 image-fit relative">
            <img
                alt="Andre's exemple photo"
                class="rounded-full"
                src="../../public/mestre.jpeg"
            />
            <div class="absolute mb-1 mr-1 flex items-center justify-center bottom-0 right-0 bg-blue-500 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-camera"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
            </div>
          </div>
          <div class="flex flex-col ml-2">
            <span class="font-bold text-[#E2E8F0]">{{ userInfo.name }} {{ userInfo.surname }}</span>
            <span class="text-[#8D9CB1]">{{ userInfo.username }}</span>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import userInfoStore from "../store/userInfos.js";

let userInfo = ref({})


onMounted(()=>{
  userInfo.value = userInfoStore().userInfo
})
</script>