<template>
    <div v-if="loading === true">
        <div class="loader">
            <img src="../../assets/logo2.png" alt="GIF" class="img">
        </div>
    </div>
    <div>
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
                                        siempre manteniendo un riguroso control de calidad en el proceso de impresión y
                                        fabricación.
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
                                        En la etapa final, se preparan los productos cuidadosamente, se gestionan las entregas
                                        al cliente,
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
                        <img src="../../assets/icons/offset.png" alt="" class="service-img">
                        <p class="fs-5 text-center fw-bold">Impresión Offset</p>
                        <div class="cont-90 m-auto">
                            <p class="fs-6 text-justify mt-3">La impresión offset es un proceso que transfiere tinta de una
                                plancha metálica a un rodillo y luego
                                al sustrato. Destaca por su alta calidad, ideal para grandes cantidades de impresión.</p>
                            <router-link to="" class="text-d fw-bold d-block m-auto text-center text-hov-black">Saber
                                más</router-link><br>
                        </div>
                    </div>
                    <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                        <img src="../../assets/icons/dise.png" alt="" class="service-img">
                        <p class="fs-5 text-center fw-bold">Diseño gráfico</p>
                        <div class="cont-90 m-auto">
                            <p class="fs-6 text-justify mt-3">El diseño gráfico es la creación visual que comunica ideas o
                                mensajes. Utiliza imágenes, tipografía y colores para transmitir información efectivamente en
                                diferentes medios, ya sean impresos o digitales.</p>
                            <router-link to="" class="text-d fw-bold d-block m-auto text-center text-hov-black">Saber
                                más</router-link><br>
                        </div>
                    </div>
                    <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                        <img src="../../assets/icons/tsh.png" alt="" class="service-img">
                        <p class="fs-5 text-center fw-bold">Sublimado textil</p>
                        <div class="cont-90 m-auto">
                            <p class="fs-6 text-justify mt-3">El sublimado textil es un proceso que imprime tintas en telas
                                mediante calor. Ideal para playeras y sudaderas, permite imágenes duraderas y de alta calidad al
                                fusionar la tinta con las fibras de la tela.</p>
                            <router-link to="" class="text-d fw-bold d-block m-auto text-center text-hov-black">Saber
                                más</router-link><br>
                        </div>
                    </div>
                    <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                        <img src="../../assets/icons/card.png" alt="" class="service-img">
                        <p class="fs-5 text-center fw-bold">Tarjetas de presentación</p>
                        <div class="cont-90 m-auto">
                            <p class="fs-6 text-justify mt-3">Las tarjetas de presentación son herramientas de negocio que
                                presentan información personal o empresarial. Utilizan papel de alta calidad y diseños creativos
                                para dejar una impresión profesional.</p>
                            <router-link to="" class="text-d fw-bold d-block m-auto text-center text-hov-black">Saber
                                más</router-link><br>
                        </div>
                    </div>
                    <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                        <img src="../../assets/icons/invitacion.png" alt="" class="service-img">
                        <p class="fs-5 text-center fw-bold">Invitaciones</p>
                        <div class="cont-90 m-auto">
                            <p class="fs-6 text-justify mt-3">Las invitaciones son mensajes que anuncian eventos. Utilizan
                                diseños atractivos y papel especial para reflejar el tono y la importancia del acontecimiento,
                                creando una experiencia memorable para los invitados.</p>
                            <router-link to="/productos/invitaciones" class="text-d fw-bold d-block m-auto text-center text-hov-black">Saber
                                más</router-link><br>
                        </div>
                    </div>
                    <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                        <img src="../../assets/icons/cup.png" alt="" class="service-img">
                        <p class="fs-5 text-center fw-bold">Sublimación en cerámica</p>
                        <div class="cont-90 m-auto">
                            <p class="fs-6 text-justify mt-3">La sublimación en cerámica y termos es un proceso de impresión que
                                transfiere imágenes o diseños a alta temperatura. Se utiliza en tazas, cerámica y termos,
                                garantizando impresiones duraderas y de alta calidad.</p>
                            <router-link to="" class="text-d fw-bold d-block m-auto text-center text-hov-black">Saber
                                más</router-link><br>
                        </div>
                    </div>
                    <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                        <img src="../../assets/icons/digit.png" alt="" class="service-img">
                        <p class="fs-5 text-center fw-bold">Impresión digital</p>
                        <div class="cont-90 m-auto">
                            <p class="fs-6 text-justify mt-3">La impresión digital es un método que imprime directamente el
                                diseño digital sobre el material. Rápida y versátil, es ideal para cantidades pequeñas a
                                medianas, ofreciendo calidad y personalización en cortos plazos.</p>
                            <router-link to="" class="text-d fw-bold d-block m-auto text-center text-hov-black">Saber
                                más</router-link><br>
                        </div>
                    </div>
                    <div class="sup-4-s shad-1-gray my-4 m-auto border-rad-1 bg-white">
                        <img src="../../assets/icons/brand.png" alt="" class="service-img">
                        <p class="fs-5 text-center fw-bold">Diseño de marca</p>
                        <div class="cont-90 m-auto">
                            <p class="fs-6 text-justify mt-3">Es la representación visual que identifica y
                                diferencia a una empresa. Incluye elementos como el logo, colores y tipografía, creando una
                                identidad distintiva que conecta con su audiencia y refleja los valores de la compañía.</p>
                            <router-link to="" class="text-d fw-bold d-block m-auto text-center text-hov-black">Saber
                                más</router-link><br>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="separator"></div>

        <div class="banner2">
            <div class="fondo2">
                <div class="contenido"><br><br><br>
                    <div class="w-100 content mt-6">
                        <div class="rw">
                            <div class="sup-2-s">
                                <img src="../../assets/img/cards.png" class="img-splot">
                            </div><br><br>
                            <div class="sup-2-s">

                                <h3 class="text-white text-center fw-bold fs-4">¡Déjanos dar vida a tus ideas impresas! </h3>
                                <br>
                                <div class="cont-80 m-auto">
                                    <p class="text-white fs-6 text-justify">
                                        En nuestro servicio de impresión, nos especializamos en plasmar tus ideas en papel. Ya
                                        sea
                                        que necesites impresiones a gran escala para promociones, materiales publicitarios o
                                        simplemente impresiones personales, estamos aquí para cumplir con tus necesidades.
                                        Ofrecemos
                                        una amplia gama de opciones de impresión, desde folletos, tarjetas de presentación,
                                        hasta
                                        pósters y más. Nos enorgullecemos de brindar calidad, puntualidad y un servicio
                                        personalizado. ¡Contáctanos y convierte tus proyectos en realidad impresa!
                                    </p>
                                    <br>
                                    <h2 class="fs-2 text-white fw-bold">LLAMA AHORA: 462 420 5146</h2>
                                    <button class="btn btn-primary d-block m-auto my-5 p-3 btn-sp"
                                        style="background: #3E4095;">Contactanos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <FormularioComponent/>
        <footerComponent />
    </div>
</template>

<script>
import MenuComponent from "../Menu/MenuComponent.vue";
import { Navigation, A11y } from 'swiper/modules';
import footerComponent from "../footer/footerComponent.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import FormularioComponent from "./FormularioComponent.vue";


import "./Inicio.css";


export default {
    name: "InicioComponent",
    components: {
        MenuComponent,
        Swiper,
        SwiperSlide,
        footerComponent,
        FormularioComponent,
    },
    data() {
        return {
            modules: [Navigation, A11y],
            loading: true
        }
    },
    methods: {
        onSwiper(swiper) {
            console.log(swiper);
        },
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    },
}
</script>
<style>
.line2 {
    margin-top: 25px;
    width: 100%;
    background: rgb(41, 160, 218);
    height: 1px;
}

.cblu {
    color: rgb(41, 160, 218);
}

.info-icon {
    width: 35px;
    height: 35px;
    display: block;
    margin-right: 12px;
    margin-top: 5px;
}

.icn {
    width: 20px;
    height: 20px;
    position: absolute;
    right: 5px;
    top: 11px;
    cursor: pointer;
    transition: all .45s;
}

.rot {
    transition: all .45s;
    transform: rotate(180deg);
}
.loader{
    position: fixed;
    z-index: 10000;
    width: 100%;
    height: 100vh;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: hideLoader 3s forwards;
}
.img {
    width: 70px;
    height: 90px;
    animation: bounceAndRotate 3s infinite;
}

@keyframes bounceAndRotate {
    0%, 100% {
        opacity: 1;
        transform: scale(1) rotate(0deg); /* Sin escala ni rotación */
    }
    25% {
        opacity: 0.5;
        transform: scale(0.5) rotate(90deg); /* Escala y rotación a 90 grados */
    }
    50% {
        opacity: 1;
        transform: scale(1) rotate(180deg); /* Escala y rotación a 180 grados */
    }
    75% {
        opacity: 0.5;
        transform: scale(0.5) rotate(270deg); /* Escala y rotación a 270 grados */
    }
    100% {
        opacity: 1;
        transform: scale(1) rotate(360deg); /* Escala y rotación a 360 grados */
    }
}
@keyframes hideLoader {
    0% {
        opacity: 1; /* Inicialmente visible */
    }
    50% {
        opacity: 1; /* Se mantiene visible durante los primeros 2 segundos */
    }
    100% {
        opacity: 0; /* Desaparece después de 2 segundos */
    }
}
</style>

