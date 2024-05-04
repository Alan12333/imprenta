

<template>
    <div>
        <div v-if="loading === true">
            <div class="loader">
                <img src="../../assets/logo2.png" alt="GIF" class="img">
            </div>
        </div>
        <MenuComponent/>
        <div class="separator"></div>
        <h1 class="text-center fs-2">Contacto</h1>
        <div class="separator"></div>
        <div class="contenido">
            <div class="content">
                <div class="rw">
                    <div class="sup-2-s">
                        <img src="../../assets/img/contact.png" alt="" class="contact-img">
                    </div><br><br>
                    <div class="sup-2-s">
                        <h2 class="fs-1 fw-bold">PONTE EN CONTACTO</h2>
                        <p class="fs-5">¡Nos encantaría saber de ti, pongámonos en contacto!</p><br>
                        <div class="content">
                            <div class="rw">
                                <div class="sup-2-s">
                                    <div class="w-100 conts">
                                        <p class="fw-bold fs-6 p-line">Dirección</p>
                                        <p class="fs-6">Calle Manuel doblado #35, Col. Centro, Pénjamo Gto.</p>
                                    </div>
                                    
                                    <div class="w-100 mt-4 conts">
                                        <p class="fw-bold fs-6 p-line ">Correo</p>
                                        <p class="fs-6">imprentaidealp@hotmail.com</p>
                                    </div>

                                    <div class="conts w-75">
                                        <p class="fw-bold fs-6 ">Social</p>
                                        <div class="w-100 flex-f">
                                            <div class="cont-20">
                                                <img src="../../assets/icons/insta.png" alt="">
                                            </div>
                                            <div class="cont-20">
                                                <img src="../../assets/icons/face.png" alt="">
                                            </div>
                                            <div class="cont-20">
                                                <img src="../../assets/icons/out.png" alt="">
                                            </div>
                                            <div class="cont-20">
                                                <img src="../../assets/icons/wha.png" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div><br>
                                <div class="sup-2-s">
                                    <div class="w-100 conts">
                                        <p class="fw-bold fs-6 p-line">Teléfono</p>
                                        <p class="fs-6">469 692 7825</p>
                                    </div>
                                    
                                    <div class="w-100 mt-4 conts">
                                        <p class="fw-bold fs-6 p-line ">Horarios</p>
                                        <p class="fs-6">De lunes a viernes de 9:00 am a 6:00 pm. Sabados de 9:00 am a 3:00 pm</p>
                                    </div>
                                    <div class="conts"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator"></div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.5515778153886!2d-101.72719532569764!3d20.42899216822988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c13421986e1d1%3A0x1e19489214b3b5e1!2sImpresos%20P%C3%A9njamo!5e0!3m2!1ses-419!2smx!4v1698956361603!5m2!1ses-419!2smx" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <FormularioComponent/>
        <FooterComponent/>
    </div>
</template>
<script>
import MenuComponent from '../Menu/MenuComponent.vue';
import FormularioComponent from '../Inicio/FormularioComponent.vue';
import FooterComponent from '../footer/footerComponent.vue';

export default {
    data() {
        return {
            loading:true
        }
    },
    methods: {
        
    },
    components:{
        MenuComponent,
        FooterComponent,
        FormularioComponent,
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 1000);
    },
}
</script>
<style>
.contact-img{
    width: 100%;
    height: auto;
    display: block;
    margin: auto;
}
.p-line{
    margin-bottom: 0;
}
</style>