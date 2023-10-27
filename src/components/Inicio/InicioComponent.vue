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
                <h1 class="text-trans cmag">MAS SOLICITADO</h1>
                <h3 class="fs-1 text-bold text-center blueblack">MÁS SOLICITADO</h3>
            </div><br>
            <div class="content mt-5">
                <div class="rw">
                    <div class="card-service sup-4-s">
                        <div class="cont-90 mr-auto flex mt-3 mb-3">
                            <div class="cont-30 mr-auto">
                                <img src="../../assets/icons/ofset.png" alt="" class="mt-2">
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
                                <img src="../../assets/icons/design.png" alt="" class="mt-2">
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
                                <img src="../../assets/icons/playera.png" alt="" class="mt-2">
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
                                <img src="../../assets/icons/trazador.png" alt="" class="mt-2">
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

    <div class="section3">
        <div class="separator"></div>
        <h1 class="text-trans ">¿COMO LO HACEMOS?</h1>
        <h3 class="fs-1 text-bold text-center ">¿COMO LO HACEMOS?</h3>
        <div class="contenido">
            <div class="line-content">
                <div class="time-line"></div>
                <div class="content-time-line">
                    <div class=" sup-4-s m-auto">
                        <img src="../../assets/icons/idea.png" alt="" class="sup-img">
                        <div class="white-circle"></div>
                        <div class="w-100">
                            <br>
                            <h4 class="text-center fs-5 fw-bold">CONCEPTUALIZACIÓN</h4>
                            <br>
                            <div class="text-content">
                                <p class="px12 text-center">
                                    En esta etapa, se estimulan ideas, se dan forma a conceptos creativos y se inicia una
                                    conversación esencial con el cliente para comprender sus necesidades iniciales.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class=" sup-4-s m-auto">
                        <img src="../../assets/icons/diseño.png" alt="" class="sup-img">
                        <div class="white-circle"></div>
                        <div class="w-100">
                            <br>
                            <h4 class="text-center fs-5 fw-bold">DISEÑO</h4>
                            <br>
                            <div class="text-content">
                                <p class="px12 text-center">
                                    Aquí se materializan los conceptos en diseños gráficos atractivos, 
                                    se desarrolla una propuesta visual y se presenta al cliente para su aprobación.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class=" sup-4-s m-auto">
                        <img src="../../assets/icons/print.png" alt="" class="sup-img">
                        <div class="white-circle"></div>
                        <div class="w-100">
                            <br>
                            <h4 class="text-center fs-5 fw-bold">PRODUCCIÓN</h4>
                            <br>
                            <div class="text-content">
                                <p class="text-center">
                                    En esta fase, se ejecuta la producción gráfica y la creación de productos, 
                                    siempre manteniendo un riguroso control de calidad en el proceso de impresión y fabricación.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class=" sup-4-s m-auto">
                        <img src="../../assets/icons/finish.png" alt="" class="sup-img">
                        <div class="white-circle"></div>
                        <div class="w-100">
                            <br>
                            <h4 class="text-center fs-5 fw-bold">ENTREGA</h4>
                            <br>
                            <div class="text-content">
                                <p class="text-center">
                                    En la etapa final, se preparan los productos cuidadosamente, se gestionan las entregas al cliente,
                                    y se busca asegurar la satisfacción del mismo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="separator"></div>
    <div class="w-100">
        <h1 class="text-trans ">SERVICIOS</h1>
        <h3 class="fs-1 text-bold text-center ">NUESTROS SERVICIOS</h3>
        <div class="contenido mt-4">
            <div class="rw">
                <div class="sup-4-s shad-1-gray mt-4 m-auto border-rad-1 bg-white">
                    <img src="../../assets/icons/ofset.png" alt="" class="service-img">
                    <p class="fs-5 text-center fw-bold">Impresión Offset</p>
                </div>
                <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                    <img src="../../assets/icons/ofset.png" alt="" class="service-img">
                    <p class="fs-5 text-center fw-bold">Impresión Offset</p>
                </div>
                <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                    <img src="../../assets/icons/ofset.png" alt="" class="service-img">
                    <p class="fs-5 text-center fw-bold">Impresión Offset</p>
                </div>
                <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                    <img src="../../assets/icons/ofset.png" alt="" class="service-img">
                    <p class="fs-5 text-center fw-bold">Impresión Offset</p>
                </div>
                <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                    <img src="../../assets/icons/ofset.png" alt="" class="service-img">
                    <p class="fs-5 text-center fw-bold">Impresión Offset</p>
                </div>
                <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                    <img src="../../assets/icons/ofset.png" alt="" class="service-img">
                    <p class="fs-5 text-center fw-bold">Impresión Offset</p>
                </div>
                <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                    <img src="../../assets/icons/ofset.png" alt="" class="service-img">
                    <p class="fs-5 text-center fw-bold">Impresión Offset</p>
                </div>
                <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                    <img src="../../assets/icons/ofset.png" alt="" class="service-img">
                    <p class="fs-5 text-center fw-bold">Impresión Offset</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.service-img{
    display: block;
    margin: auto;
    width: 35%;
    margin-top: 35px;
    margin-bottom: 35px;
}
</style>