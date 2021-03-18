import HelloWorld from '@/components/HelloWorld.vue';
import Home from '@/components/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/info',
    name: 'Info',
    component: HelloWorld
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;