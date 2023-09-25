<script>
import "./Menu.css";

export default {
    name: "MenuComponent"
}
</script>

<template>
    <div>
        <div class="menu">
            <div class="menu-content">
                <div class="image-content">
                    <img src="../../assets/logo.png" alt="">
                </div>
                <div class="menu-content-items">
                    <div class="menu-item">
                        <router-link to="/">Inicio</router-link>
                    </div>
                    <div class="menu-item">
                        <div class="dropdown">
                            <span>Servicios</span>
                            <div class="menu-dropdown">
                                <router-link to="">Tarjetas</router-link>
                                <router-link to="">Sublimación</router-link>
                                <router-link to="">Onset</router-link>
                                <router-link to="">Digital</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="menu-item">
                        <router-link to="/">Acerca de</router-link>
                    </div>
                    <div class="menu-item">
                        <router-link to="/">Contactanos</router-link>
                    </div>
                    <div class="menu-item">
                        <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    </div>
                </div>
                <button class="button-coti">
                    Cotizar <font-awesome-icon class="icon-button" icon="fa-solid fa-circle-arrow-right"/>
                </button>
            </div>
        </div>
    </div>
</template>