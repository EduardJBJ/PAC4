<script setup>
import {ref, onMounted} from 'vue'
import { getPokemonid } from '@/services/serveis.js'

const propietat = defineProps(['bichoid'])
const unPokemon = ref({});

onMounted(() => {
   getPokemonid (propietat.bichoid).then( (resposta) => {
    unPokemon.value = resposta.data;
  })
})

</script>

<template>
  <div class="unicPok">
    <nav class="navprincipal">
      <figure class="esquerra">
          <img class="nooperatiu" src="@/components/icons/bola.png" alt="invocar pokemons"/>
      </figure>
      <figure class="dreta">
          <abbr title="Tornar">
            <RouterLink to="/grupPokemons"><img class="imgd" src="@/components/icons/icoTornar.jpg" alt="tornar enrrera"></RouterLink>
          </abbr>
      </figure>
    </nav>
    <h1>Pokemon {{ unPokemon.id }} </h1>
    <h2> {{ unPokemon.name }} </h2>
    <img class="imggran" :src="unPokemon.sprites?.front_default" alt="imatge principal">
    <p> Tipus Pokemon - {{ unPokemon.types?.at(0).type.name }} & {{ unPokemon.types?.at(1).type.name }} </p>
    <p> Atac - {{ unPokemon.stats?.at(1).base_stat }} </p>
    <p> Defensa - {{ unPokemon.stats?.at(2).base_stat }} </p>
    <img class="front" :src="unPokemon.sprites?.front_shiny" alt="imatge frontal">
    <img class="back" :src="unPokemon.sprites?.back_shiny" alt="imatge posterior">
  </div>
</template>

<style scoped>

.navprincipal{
display: grid;
grid-template-columns: 1fr 1fr;
width: 15%;
margin: auto;
margin-top: 10px;
align-items: center;
text-align: center;
padding: 5px;
background-color: white;
border-radius: 15px;
}

.nooperatiu{
width: 40px;
height: 40px;
opacity: 10%;
}
.imgd{
width: 50px;
height: 50px;
}

.imggran{
max-width: 300px;
height: 300px;
}

h1{
font: bold 35px segoe print, Arial, Helvetica, sans-serif;
padding-top: 50px;
}

h2{
font: 30px segoe print, Arial, Helvetica, sans-serif;
padding-top: 15px;
}

img{
width: 400px;
}

p{
font: 20px segoe print, Arial, Helvetica, sans-serif;
padding-top: 10px;
}

.front, .back {
width: 150px;
height: 150px;
}

</style>