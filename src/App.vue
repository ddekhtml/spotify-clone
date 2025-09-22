<script setup>
import { onMounted, reactive, ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <slot />
  <RouterView />
  <h1>halo</h1>
</template>


<style scoped>

</style>
