<script>
import "./Menu.css";

export default {
    name: "MenuComponent",
    data() {
        return {
            isMenuOpen: false,
            expands: false
        }
    },
    methods: {
        Openmenu() {
            if (this.isMenuOpen === false) {
                this.isMenuOpen = true;
            }
            else {
                this.isMenuOpen = false;
            }
        },
        Expand() {
            if (this.expands === false) {
                this.expands = true;
            }
            else {
                this.expands = false;
            }
        }
    },
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
                    Cotizar <font-awesome-icon class="icon-button" icon="fa-solid fa-circle-arrow-right" />
                </button>
            </div>
        </div>
        <div class="menu-movil">
            <div class="menu-content">
                <div class="image-content">
                    <img src="../../assets/logo.png" alt="" class="log-show2">
                    <img src="../../assets/logo2.png" alt="" class="log-show">
                </div>
                <div class="content-menu-button">
                    <div class="menu_button" :class="{ menu_open: isMenuOpen == true }" @click="Openmenu">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
            </div>
            <div class="item-menu-movil-content" :class="{ show_menu: isMenuOpen == true }">
                <div class="item-menu-movil">
                    <router-link to="/">Inicio</router-link>
                </div>
                <div class="item-menu-movil">
                    <span @click="Expand">Servicios</span>
                    <div class="services-content-menu" :class="{ expand: expands == true }">
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
                <div class="item-menu-movil">
                    <router-link to="/acerca-de">Acerca de</router-link>
                </div>
                <div class="item-menu-movil">
                    <router-link to="/contacto">Contactanos</router-link>
                </div>
                <button class="button-coti">
                    Cotizar <font-awesome-icon class="icon-button" icon="fa-solid fa-circle-arrow-right" />
                </button>
                <div class="item-white"></div>
            </div>
        </div>
    </div>
</template>