<script setup>
import CartaPokemon from '@/components/CartaPokemon.vue'
import { invocarPokemons } from '@/services/serveis.js'
import {ref, onMounted, computed} from 'vue'
import { getLocalStorage, setLocalStorage } from '@/services/LocalStorage';


const arrayPok = ref([])
const buscar = ref("")

const buscarPokemons = async () => {
    arrayPok.value =  await invocarPokemons()
    setLocalStorage ("luisalbertoarana", arrayPok.value)  
}

onMounted (() => {
  arrayPok.value = getLocalStorage("luisalbertoarana")
  if(!arrayPok.value) {
    setLocalStorage ("luisalbertoarana", arrayPok.value)
  }
})


const filtrarPok = computed (() => {
  return arrayPok.value.filter((unPokem) => {
    return unPokem.name.toLowerCase().includes(buscar.value.toLowerCase())
  })
})

</script>

<template>
  <div class="gPokemons">
    <nav class="navprincipal">
            <figure class="esquerra">
                <abbr title="Invocar 10 Pokemons">
                <img class="recalcul10" src="@/components/icons/bola.png" 
                    onmouseout="this.src='src/components/icons/bola.png'" onmouseover="this.src='src/components/icons/bolacolor.png'" alt="invocar pokemons"
                    @click="buscarPokemons()"/>
                </abbr>
            </figure>
            <figure class="dreta">
                <abbr title="Tornar">
                  <RouterLink to ="/"><img class="imgdreta" src="@/components/icons/icoTornar.jpg" alt="tornar enrrera"/></RouterLink>
                </abbr>
            </figure>
      </nav>
      <input v-model="buscar" type="text" placeholder="Escriu el Nom del Pokemon a Filtrar...">
    <h1>Llistat de Pokemons</h1>
    <div class="carta">
      <CartaPokemon v-for="bicho in filtrarPok" :key="bicho.id" :dadespok="bicho"
      @click="$router.push({name: 'unicPokemon', params: {bichoid:bicho.id}})"/>
    </div>
  </div>
</template>

<style scoped>

.carta{
display: flex;
flex-wrap: wrap;
gap: 5px;
justify-content: space-evenly;
border-radius: 15px;
padding: 20px 0px;
}
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

h1{
font: bold 35px segoe print, Arial, Helvetica, sans-serif;
padding-top: 50px;
}
.recalcul10{
width: 40px;
height: 40px;
cursor: pointer;
}

.imgdreta{
width: 50px;
height: 50px;
}

input[type=text] {
margin-top: 10px;
border: none;
border-bottom: 2px solid red;
width: 25%;
height: 30px;
font: 13px segoe print, Arial, Helvetica, sans-serif;
}

/* .pokemon {
display: flex;
flex-direction: column;
width: 250px;
height: 250px;
padding-top: 15px;
border-radius: 15px;
margin: 10px;
box-shadow: var(--bxShadow);
}*/

li{
cursor: pointer;
}
</style>
