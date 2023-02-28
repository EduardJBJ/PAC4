<script setup>

import {  RouterView } from 'vue-router'

</script>


<template>
  <main class="temacolor">
    <RouterView/>
  </main>
</template>

<style scoped>

.temacolor {
background-color: var(--bg-color);
}

.temacolor.dark {
--bg-color: rgb(40, 55, 71);
}

.temacolor.light {
--bg-color: rgb(188, 238, 205);
}

</style>
