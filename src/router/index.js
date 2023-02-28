import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/grupPokemons',
      name: 'grupPokemons',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/GrupPokemonsView.vue')
    },
    {
      path: '/unicPokemon/:bichoid',
      name: 'unicPokemon',
      props: true,
      component: () => import('../views/SinglePokemonView.vue')
    }
  ]
})

export default router
