import { createRouter, createWebHistory } from 'vue-router';

import InicioComponent from "./components/Inicio/InicioComponent.vue";
import contactoVue from './components/contacto/ContactoComponent.vue';

const routes = [
    {
        path: '/',
        component: InicioComponent,
        name: 'inicio',
    },
    {
        path:'/contacto',
        component:contactoVue,
        name:'contacto'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior (to, from, savedPosition) {
        return savedPosition || {top:0}
    }
});

export default router;