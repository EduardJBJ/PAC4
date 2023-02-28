<script setup>

const infopok = defineProps(['dadespok'])

</script>

<template>
    <div class="cartaPok">
        <h2> {{ infopok.dadespok.name }}</h2>
        <img :src="infopok.dadespok.sprites.front_shiny" alt="">
    </div>
  </template>







<style scoped>

.cartaPok {
display: flex;
flex-direction: column;
align-items: center;
width: 250px;
min-height: 250px;
padding-top: 15px;
border: none;
border-radius: 15px;
margin: 10px;
box-shadow: var(--bxShadow);
cursor: pointer;
}

h2{
font: bold 20px segoe print, Arial, Helvetica, sans-serif;
}

img{
width: 100px;
height: 100px;
}

</style>