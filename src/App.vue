<script setup>
import { onMounted, reactive, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

let openMenu = ref(false);
</script>

<template>
  <slot>
    <RouterView/>
  </slot>
  <!-- music bar -->
  <div>

  </div>
  <!-- footer -->
  <div class=" w-full block fixed -bottom-[5px] text-stone-200 bg-stone-950/80 pt-1 pb-2">
    <div class="flex justify-around">
      <div class="flex flex-col gap-y-0 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        <p class="text-[10px] text-center justify-self-center p-0">
          Home
        </p>
      </div>
      
      <div class="flex flex-col gap-y-0 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        <p class="text-[10px] text-center justify-align-center p-0">
          Search
        </p>
      </div>
      <div class="flex flex-col gap-y-0 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library-icon lucide-library"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
        <p class="text-[10px] text-center justify-align-center p-0">
          Your Library
        </p>
      </div>
      <div class="flex flex-col gap-y-0 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-library-icon lucide-library"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
        <p class="text-[10px] text-center justify-align-center p-0">
          Premium
        </p>
      
      </div>
      <div class="flex flex-col gap-y-0 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <p class="text-[10px] text-center justify-align-center p-0">
          Create
        </p>
      </div>
      
    </div>
  </div>
</template>

<style scoped>

</style>
