<script setup>
import { onMounted, reactive, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>

<div class="m-1 grid grid-rows-[8%_auto_10%] h-dvh">
  <div class="mx-3 w-full grid grid-cols-[35px_30px_30px_auto] gap-x-2 items-center">
    <v-icon name="bi-three-dots" scale="1.6" class="">
    </v-icon>
    <v-icon name="la-angle-left-solid" scale="1.4" class="">
    </v-icon>
    <v-icon name="la-angle-right-solid" scale="1.4" class="">
    </v-icon>
    <div class="flex items-center gap-2 justify-self-center">
      <v-icon name="ri-home-4-fill" scale="1.8" class="bg-neutral-800/80 p-1 rounded-full border-2 border-neutral-900/50"></v-icon>
      <div class="flex items-center gap-2 bg-neutral-800/80 p-1 rounded-2xl pr-55 h-full border-2 border-neutral-900/50 ">
        <v-icon name="pr-search" scale="1.4" class="fill-stone-50"></v-icon>
        <p class="text-neutral-400">
          What do you want to play ?
        </p>
      </div>
    </div>
    
  </div>
  <div class="flex flex-row gap-1.5 mr-1.5">
    <div class="bg-neutral-800/50 rounded-2xl w-[70px] ">

    </div>
    <div class="bg-neutral-800/50 rounded-2xl grow-1 shrink-1">
      <RouterView/>
    </div>
    <div class="bg-neutral-800/50  rounded-2xl w-[300px] "></div>
  </div>
  <div class="w-full"></div>
</div>
  
  
  
</template>


<style scoped>

</style>
