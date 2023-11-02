<script>
    export default{
        data() {
            return {
                question1: true,
                question2: false,
                question3: false,
            }
        },
        methods: {
            OpenQuestion(number) {
                if (number === 1) {
                    this.question1 = !this.question1;
                    this.question2 = false;
                    this.question3 = false;
                }
                if (number === 2) {
                    this.question1 = false;
                    this.question2 = !this.question2;
                    this.question3 = false;
                }
                if (number === 3) {
                    this.question1 = false;
                    this.question2 = false;
                    this.question3 = !this.question3;
                }
            },
        },
    }
</script>

<template>
    <div>
        <div class="w-100" style="background:rgb(241,241,241);">
            <div class="separator"></div>
            <div class="contenido">
                <h1 class="text-trans ">CONTACTANOS</h1>
                <h3 class="fs-1 text-bold text-center ">ESTAMOS AQUÍ PARA AYUDARTE</h3><br><br>
                <div class="content">
                    <div class="rw">
                        <div class="sup-2-s">
                            <form class="formulario">
                                <div class="content">
                                    <div class="rw">
                                        <div class="sup-2-s">
                                            <input type="text" placeholder="Nombre Completo" class="input-form">
                                        </div>
                                        <div class="sup-2-s">
                                            <input type="text" placeholder="Teléfono" class="input-form">
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Correo" class="input-form">
                                    <textarea cols="30" rows="8" class="input-form" placeholder="Mensaje"></textarea>
                                    <button class="button-form">Enviar</button>
                                </div>
                            </form>
                        </div>
                        <div class="sup-2-s">
                            <div class="card-question shadow-sm">
                                <div class="cont-95 m-auto d-flex position-relative">
                                    <img src="../../assets/icons/question.png" alt="" class="info-icon">
                                    <h6 class="text-question mt-2 fw-bold" :class="{ cblu: question1 === true }">Tiempo de
                                        entrega
                                    </h6>
                                    <img src="../../assets/icons/down.png" alt="" class=" icn"
                                        :class="{ rot: question1 == true }" @click="OpenQuestion(1)">
                                </div>

                                <div v-if="question1 == true" class="info" :class="{ faq: question1 == true }">
                                    <div class="line2"></div>
                                    <div class="mt-3 cont-95 m-auto">
                                        <p class="text-justify fs-6">
                                            Nuestro compromiso es ofrecer tiempos de entrega eficientes. Sin embargo, la
                                            variación puede depender del producto solicitado,
                                            procurando siempre cumplir con plazos precisos para asegurar la satisfacción de
                                            nuestros clientes.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="card-question shadow-sm">
                                <div class="cont-95 m-auto d-flex position-relative">
                                    <img src="../../assets/icons/question.png" alt="" class="info-icon">
                                    <div class="cont-70">
                                        <h6 class="text-question mt-2 fw-bold" :class="{ cblu: question2 === true }">¿Hacen
                                            envios
                                            a todo mexico?</h6>
                                    </div>
                                    <img src="../../assets/icons/down.png" alt="" class=" icn"
                                        :class="{ rot: question2 == true }" @click="OpenQuestion(2)">
                                </div>
                                <div v-if="question2 == true" class="info" :class="{ faq: question2 == true }">
                                    <div class="line2"></div>
                                    <div class="mt-3 cont-95 m-auto">
                                        <p class="text-justify fs-6">Lamentablemente, no realizamos entregas a todos los
                                            rincones de la República.
                                            No obstante, están invitados a solicitar una cotización; así podremos evaluar la
                                            factibilidad de envío
                                            a su ubicación específica. Es importante tener en cuenta que los costos de envío
                                            pueden variar.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card-question shadow-sm">
                                <div class="cont-95 m-auto d-flex position-relative">
                                    <img src="../../assets/icons/question.png" alt="" class="info-icon">
                                    <div class="cont-70">
                                        <h6 class="text-question mt-2 fw-bold" :class="{ cblu: question3 === true }">
                                            ¿Ofrecen
                                            servicios de diseño gráfico?</h6>
                                    </div>
                                    <img src="../../assets/icons/down.png" alt="" class=" icn"
                                        :class="{ rot: question3 == true }" @click="OpenQuestion(3)">
                                </div>
                                <div v-if="question3 == true" class="info" :class="{ faq: question3 == true }">
                                    <div class="line2"></div>
                                    <div class="mt-3 cont-95 m-auto">
                                        <p class="text-justify fs-6">¡Por supuesto! Nuestros servicios incluyen diseño a
                                            medida,
                                            completamente personalizado para cada cliente. Contamos con un equipo de
                                            expertos en
                                            diseño gráfico listos para transformar sus ideas en creaciones visuales únicas y
                                            ajustadas a sus preferencias.</p>
                                    </div>
                                </div>
                            </div>
                            <br><br>
                        </div>
                    </div>

                </div>
            </div>
            <div class="separator"></div>
        </div>
</div></template>