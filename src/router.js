import { createRouter, createWebHistory } from 'vue-router';

import InicioComponent from "./components/Inicio/InicioComponent.vue";
import contactoVue from './components/contacto/ContactoComponent.vue';
import AvisoComponentVue from './components/politicas/AvisoComponent.vue';
import CookiesComponentVue from './components/politicas/CookiesComponent.vue';
// import InvitacionComponent from './components/productos/InvitacionComponent.vue';
import TarjetasPresentacionComponent from './components/productos/TarjetasPresentacionComponent.vue';
import OfsetComponent from './components/productos/OfsetComponent.vue';

const routes = [
    {
        path: '/',
        component: InicioComponent,
        name: 'inicio',
    },
    {
        path: '/productos/tarjetas-de-presentacion',
        component: TarjetasPresentacionComponent,
        name: 'Tarjetas',
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
    },
    {
        path:'/cookies',
        component:CookiesComponentVue,
        name:'cookies'
    },
    {
        path:"/impresion-ofsset",
        component:OfsetComponent,
        name:"ofset"
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