import {createRouter, createWebHistory} from 'vue-router';

import HomePage from '@/layout/HomePage.vue';
import FavoritesBlock from '@/components/Favorites/FavoritesBlock.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/favorites',
    component: FavoritesBlock,
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;