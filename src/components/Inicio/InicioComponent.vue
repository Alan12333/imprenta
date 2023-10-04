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
        <div class="container mt-5">
            <div class="d-flex">
                <div class="card-service ">
                    <img src="../../assets/icons/offset.png" alt="">
                </div>
                <div class="card-service card-down">das</div>
                <div class="card-service">df</div>
                <div class="card-service card-down">sd</div>
            </div>
        </div>
    </div>
</template>

