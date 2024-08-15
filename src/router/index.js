import { createRouter, createWebHistory } from 'vue-router';
import Home from '../page/Home.vue';  // Your newly created Home component
import ComingSoon from '../page/ComingSoon.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/comingsoon', component: ComingSoon },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
