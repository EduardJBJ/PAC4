<script setup>
import {ref} from 'vue'

const gamacolors = ref("")
const canviTema = colorfinal => {
    document.body.className = colorfinal.target.value;
    document.querySelector('body').style.backgroundColor = colorfinal.target.value;
}

</script>


<template>
    <main class="temacolor" :class="gamacolors">
        <div class="general">
            <div class="opcio1">
                <div class="front1"> </div>       
                <div class="back1">
                    <p>Aquesta web et permetrà invocar 10 Pokemons a l'atzar i veure'n les principals característiques</p>
                </div>
            </div>
            <div class="opcio2">
                <div class="front2"></div>
                <div class="back2">
                    <p>Invocar 10 Pokemons</p>
                    <RouterLink to="/grupPokemons"><img class="cridarP" src="@/components/icons/bola.png" 
                        onmouseout="this.src='src/components/icons/bola.png'" onmouseover="this.src='src/components/icons/bolacolor.png'" alt="invocar pokemons"></RouterLink>
                </div>
            </div>
            <div class="opcio4">
                <div class="front4"></div>
                <div class="back4">
                    <p>Si vols tenir més informació pots visitar :
                    <br><a href="https://pokeapi.co">Pokemon API</a></p>
                </div>
            </div>
            <div class="opcio3">
                <div class="front3"></div>
                <div class="back3">
                    <p>Escollir colors de la web</p>
                    <div class="controls">
                        <label for="dark">Tema Fosc</label>
                        <input type="radio" name="tema" id="dark" value="dark" v-model="gamacolors" @change="canviTema">
                        <br>
                        <label for="light">Tema Clar</label>
                        <input type="radio" name="tema" id="light" value="light" v-model="gamacolors" @change="canviTema">
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

.temacolor.dark{
--bg-color: rgb(40, 55, 71);
--text-color: rgb(159, 252, 236);
}

.temacolor.light{
--bg-color: rgb(188, 238, 205);
--text-color: rgb(49, 47, 47);
}

.temacolor{
background-color: var(--bg-color);
color: var(--text-color);
}
    
/* també és el flip-container*/
.general{
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: center;
margin: auto;
margin-top: 200px;
max-width: 400px;
perspective: 1000px;
}

.opcio1, .opcio2, .opcio3, .opcio4 {
position: relative;
display: flex;
flex-direction: column;
width: 200px;
height: 200px;
transition: 0.6s;
transform-style: preserve-3d;
transform-origin: center;
}

.opcio1{
background-image: url('@/components/icons/front1.jpg');
border-radius: 20px 0px 0px 0px;
}

.opcio1:hover, .opcio1.flip{
transform: rotateX(180deg);
}

.opcio2{
background-image: url('@/components/icons/front2.jpg');
border-radius: 0px 20px 0px 0px;
}

.opcio2:hover, .opcio2.flip{
transform: rotateY(180deg);
}

.opcio3{
background-image: url('@/components/icons/front3.jpg');
border-radius: 0px 0px 20px 0px;
}

.opcio3:hover, .opcio3.flip{
transform: rotateX(180deg);
}

.opcio4{
background-image: url('@/components/icons/front4.jpg');
border-radius: 0px 0px 0px 20px;
}

.opcio4:hover, .opcio4.flip{
transform: rotateY(180deg);
}

.front1, .front2, .front3, .front4, .back1, .back2, .back3, .back4{
width: 100%;
height: 100%;
position: absolute;
backface-visibility: hidden;
color: black;
}

.front1, .front3{
transform: rotateX(0deg);
z-index: 2;
}

.front2, .front4{
transform: rotateY(0deg);
z-index: 2;
}

.back1, .back3{
transform: rotateX(180deg);
background-color: white;
}

.back2, .back4{
transform: rotateY(180deg);
background-color: white;
}

p, label{
font: bold 15px segoe print, Arial, Helvetica, sans-serif;
padding-top: 50px;
}

p a {
color: black;
text-decoration: none;
}
   
p a:hover {
color: red;
}

.cridarP{
width: 50px;
height: 50px;
}
</style>