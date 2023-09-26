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
                            <div class="pints">
                                <span>Servicios</span>
                            </div>
                            <div class="menu-dropdown">
                                <div class="dropdown-item-menu">
                                    <p>Impresión Digital</p>
                                </div>
                                <div class="dropdown-item-menu">
                                    <p>Impresión Offset</p>
                                </div>
                                <div class="dropdown-item-menu">
                                    <p>Tarjetas de presentación</p>
                                </div>
                                <div class="dropdown-item-menu">
                                    <p>Sublimación</p>
                                </div>
                                <div class="dropdown-item-menu">
                                    <p>Diseño Digital</p>
                                </div>
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