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
        <div class="text-margin"></div>
        <div class="w-75 m-auto">
            <h3 class="fs-1 text-bold text-center blueblack">MÁS SOLICITADO</h3>
        </div><br>
        <div class="content mt-5">
            <div class="rw">
                <div class="card-service sup-4-s">
                    <div class="cont-100 flex mt-3 mb-3">
                        <div class="cont-25 mr-auto">
                            <img src="../../assets/icons/ofset.png" alt="">
                        </div>
                        <div class="cont-70 mr-auto">
                            <p class="fs-6 fw-bold mt-3">IMPRESIÓN OFFSET</p>
                        </div>
                    </div>
                </div>
                <div class="card-service sup-4-s card-down">
                    <div class="cont-100 flex mt-3 mb-3">
                        <div class="cont-25 mr-auto">
                            <img src="../../assets/icons/design.png" alt="">
                        </div>
                        <div class="cont-70 mr-auto">
                            <p class="ts-6 fw-bold mt-3">DISEÑO GRÁFICO</p>
                        </div>
                    </div>
                </div>
                <div class="card-service sup-4-s">
                    <div class="cont-100 flex mt-3 mb-3">
                        <div class="cont-25 mr-auto">
                            <img src="../../assets/icons/playera.png" alt="">
                        </div>
                        <div class="cont-70 mr-auto">
                            <p class="ts-6 fw-bold mt-3">PERSONALIZACIÓN</p>
                        </div>
                    </div>
                </div>
                <div class="card-service card-down sup-4-s">
                    <div class="cont-100 flex mt-3 mb-3">
                        <div class="cont-25 mr-auto">
                            <img src="../../assets/icons/trazador.png" alt="">
                        </div>
                        <div class="cont-70 mr-auto">
                            <p class="ts-6 fw-bold mt-3">IMPRESIÓN DIGITAL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

