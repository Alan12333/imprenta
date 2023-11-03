import { createRouter, createWebHistory } from 'vue-router';

import InicioComponent from "./components/Inicio/InicioComponent.vue";
import contactoVue from './components/contacto/ContactoComponent.vue';
import AvisoComponentVue from './components/politicas/AvisoComponent.vue';

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
    },
    {
        path:'/aviso-privacidad',
        component:AvisoComponentVue,
        name:'aviso'
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