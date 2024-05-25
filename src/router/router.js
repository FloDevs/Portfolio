import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/myHome.vue';
import Creations from '../pages/myCreations.vue';
import Error from '../pages/myError.vue';
import Contacts from '../pages/myContacts.vue';

const routes = [
    {
      path: '/creations',
      name: 'Creations',
      component: Creations
    },
    {
      path: '/',
      name:'Home',
      component: Home
    },
    {
      path: '/error',
      name:'Error',
      component: Error
    },
    {
      path: '/contacts',
      name:'Contact',
      component: Contacts
    }
  ];


const router = createRouter({
  history: createWebHistory(),
  routes,strict: false
});

export default router;