

<template>
    <div>
        <div v-if="loading === true">
            <div class="loader">
                <img src="../../assets/logo2.png" alt="GIF" class="img">
            </div>
        </div>
        <MenuComponent /><br><br><br><br>
        <swiper :modules="modules" :slides-per-view="1" :space-between="50" navigation @swiper="onSwiper"
            @slideChange="handleSlideChange" :loop="true">
            <swiper-slide>
                <div class="banner">
                    <div class="fondo">
                        <h1 class='animate__animated white' :class="{ 'animate__slideInUp': isAnimating }">Texto animado</h1>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="banner">
                    <h1 class='animate__animated ' :class="{ 'animate__slideInUp': isAnimating }">Texto animado2</h1>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="banner">
                    <h1 class='animate__animated ' :class="{ 'animate__slideInUp': isAnimating }">Texto animado3</h1>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import MenuComponent from "../Menu/MenuComponent.vue";
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
export default {
    components: {
        MenuComponent,
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Navigation, A11y],
            isAnimating: false,
            loading: true
        }
    },
    methods: {
        handleSlideChange() {
            this.isAnimating = true;
            setTimeout(() => {
                this.isAnimating = false;
            }, 1000); 
        }
    },
    mounted(){
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    }
};
</script>

<style>
.animated {
  animation-duration: 1s;
}

.fadeIn {
  opacity: 0;
}

.fadeIn.animated {
  opacity: 1;
  animation-name: fadeIn;
}
</style>