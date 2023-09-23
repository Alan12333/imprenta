import { createRouter, createWebHistory } from 'vue-router';

import InicioComponent from "./components/InicioComponent.vue";

const routes = [
    {
        path: '/',
        component: InicioComponent,
        name: 'inicio',
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;