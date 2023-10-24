<script>
import MenuComponent from "../Menu/MenuComponent.vue";
import { Navigation, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import "./Inicio.css";


export default {
    name: "InicioComponent",
    components: {
        MenuComponent,
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        return {
            onSwiper,
            modules: [Navigation, A11y],
        };
    },
}
</script>

<template>
    <MenuComponent />
    <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation @swiper="onSwiper"
        @slideChange="onSlideChange" :loop="true">
        <swiper-slide>
            <div class="banner">
                <div class="fondo">
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="banner">

            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="banner">

            </div>
        </swiper-slide>
    </swiper>

    <div class="inicio-section-2">
        <div class="contenido">
            <div class="text-margin"></div>
            <div class="w-100 m-auto">
                <h1 class="text-trans">MAS SOLICITADO</h1>
                <h3 class="fs-1 text-bold text-center blueblack">MÁS SOLICITADO</h3>
            </div><br>
            <div class="content mt-5">
                <div class="rw">
                    <div class="card-service sup-4-s">
                        <div class="cont-90 mr-auto flex mt-3 mb-3">
                            <div class="cont-30 mr-auto">
                                <img src="../../assets/icons/ofset.png" alt="">
                            </div>
                            <div class="cont-65 mr-auto">
                                <p class="article-text fw-bold mt-3">IMPRESIÓN OFFSET</p>
                            </div>
                        </div>
                        <br>
                        <div class="cont-85 m-auto">
                            <p class="fs-6 text-justify">
                                La impresión offset es ideal para grandes cantidades
                                de materiales de alta calidad, como revistas y catálogos.
                                La tinta se transfiere de cilindro a papel,
                                logrando colores vibrantes y detalles precisos.
                            </p>

                        </div>
                    </div>
                    <div class="card-service sup-4-s card-down">
                        <div class="cont-90 mr-auto flex mt-3 mb-3">
                            <div class="cont-30 mr-auto">
                                <img src="../../assets/icons/design.png" alt="">
                            </div>
                            <div class="cont-65 mr-auto">
                                <p class="article-text fw-bold mt-3">DISEÑO GRÁFICO</p>
                            </div>
                        </div><br>
                        <div class="cont-85 m-auto">
                            <p class="fs-6 text-justify">
                                El diseño gráfico es esencial para la identidad de tu empresa. Creamos logotipos, materiales
                                de
                                marketing y visuales cohesivos que comunican tu marca y atraen a tu audiencia.
                            </p>
                        </div>
                    </div>
                    <div class="card-service sup-4-s">
                        <div class="cont-90 mr-auto flex mt-3 mb-3">
                            <div class="cont-30 mr-auto">
                                <img src="../../assets/icons/playera.png" alt="">
                            </div>
                            <div class="cont-65 mr-auto">
                                <p class="article-text fw-bold mt-3">PERSONALIZACIÓN</p>
                            </div>
                        </div><br>
                        <div class="cont-85 m-auto">
                            <p class="fs-6 text-justify">
                                La personalización es esencial para tu empresa. Ofrecemos productos personalizados,
                                como tazas, llaveros, plumas, playeras y más, que resaltan tu marca y satisfacen las
                                necesidades de tu audiencia.
                            </p>
                        </div>
                    </div>
                    <div class="card-service card-down sup-4-s">
                        <div class="cont-90 mr-auto flex mt-3 mb-3">
                            <div class="cont-30 mr-auto">
                                <img src="../../assets/icons/trazador.png" alt="">
                            </div>
                            <div class="cont-65 mr-auto">
                                <p class="article-text fw-bold mt-3">IMPRESIÓN DIGITAL</p>
                            </div>
                        </div><br>
                        <div class="cont-85 m-auto">
                            <p class="fs-6 text-justify">
                                La impresión digital destaca por su versatilidad. Ofrecemos servicios de impresión digital
                                de alta calidad para brindar resultados nítidos y rápidos,
                                resaltando tu marca con eficacia.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="separator"></div>
            </div>
        </div>

    </div>

    <div class="Inicio-section-2">
        <div class="contenido">
            <div class="separator"></div>
            <div class="content">
                <div class="row">
                    <div class=" sup-2-s mr-auto position-relative">
                        <img src="../../assets/img/imagen.jpg" alt="" class="about-img">
                        <div class="quad-back"></div>
                    </div>
                    <div class=" sup-2-s mr-auto"><br><br>
                        <h3 class="fs-5 cblu fw-bold">ACERCA DE NOSOTROS</h3><br>
                        <h1 class=" ts-900 arch">Siempre listos para plasmar tus ideas</h1>
                        <br>
                        <p class="text-justify">
                            En <b>Impresos Pénjamo</b>, nos apasiona dar vida a tus ideas y proyectos a través de una amplia
                            gama de servicios de diseño gráfico e impresión. Somos tu ventanilla única para todas tus
                            necesidades de diseño y personalización, desde la creación de logotipos y diseños únicos hasta
                            la impresión de alta calidad y la sublimación de productos personalizados.
                        </p><br>
                        <div class="w-100">
                            <div class="w-100 flex-f">
                                <img src="../../assets/icons/check.png" alt="" class="icon-check">
                                <p class="">Diseño Gráfico Creativo</p>
                            </div>
                            <div class="w-100 flex-f">
                                <img src="../../assets/icons/check.png" alt="" class="icon-check">
                                <p class="">Impresión Digital de Calidad</p>
                            </div>
                            <div class="w-100 flex-f">
                                <img src="../../assets/icons/check.png" alt="" class="icon-check">
                                <p class="">Personalización Única</p>
                            </div>
                            <div class="w-100 flex-f">
                                <img src="../../assets/icons/check.png" alt="" class="icon-check">
                                <p class="">Impresión Offset de Calidad Profesional</p>
                            </div>
                            <div class="w-100 flex-f">
                                <img src="../../assets/icons/check.png" alt="" class="icon-check">
                                <p class="">Sublimación para Productos Personalizados</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator"></div>
        </div>
    </div>

    <div class="Inicio-section-2">
        <div class="w-100 m-auto">
            <h1 class="text-trans">SERVICIOS</h1>
            <h3 class="fs-1 text-bold text-center blueblack">NUESTROS SERVICIOS</h3>
        </div><br>
        <div class="content">
            <div class="rw">
                <div class="sup-4-s">
                    <div class="card-service">
                        
                    </div>
                </div>
                <div class="sup-4-s">
                    <div class="card-service">
                        
                    </div>
                </div>
                <div class="sup-4-s">
                    <div class="card-service">
                        
                    </div>
                </div>
                <div class="sup-4-s">
                    <div class="card-service">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

