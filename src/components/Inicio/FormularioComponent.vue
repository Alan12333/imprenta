

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
                            <form class="formulario" @submit="FormValidate">
                                <div class="content">
                                    <div class="rw">
                                        <div class="sup-2-s">
                                            <input type="text" placeholder="Nombre Completo" 
                                                class="input-form" 
                                                v-model="nombre" 
                                                @keyup="validateField"
                                                :class="{field_bad:errormessage.Nombre ==='El campo Nombre es obligatorio'}">
                                            <span  class="red text-12 mr-l-2">{{ errormessage.Nombre }}</span>
                                        </div>
                                        <div class="sup-2-s">
                                            <input type="text" placeholder="Teléfono" 
                                                class="input-form" 
                                                v-model="telefono" 
                                                :maxlength="10" 
                                                @keyup="validateField"
                                                :class="{field_bad:errormessage.Telefono ==='El campo Teléfono es obligatorio' || errormessage.Telefono ==='El campo Teléfono debe tener 10 dígitos'}">
                                            <span  class="red text-12 mr-l-2">{{ errormessage.Telefono }}</span>
                                        </div>
                                    </div>
                                    <input type="text" placeholder="Correo" class="input-form" 
                                        v-model="correo" 
                                        @keyup="validateField" 
                                        :class="{field_bad:errormessage.Correo ==='El campo Correo es obligatorio'}">
                                    <span  class="red text-12 mr-l-6">{{ errormessage.Correo }}</span>
                                    <textarea cols="30" rows="8" class="input-form" 
                                        placeholder="Mensaje" 
                                        v-model="mensaje" 
                                        :class="{field_bad:errormessage.Mensaje ==='El campo Mensaje es obligatorio'}"
                                        @keyup="validateField">
                                    </textarea>
                                    <span  class="red text-12 mr-l-6">{{ errormessage.Mensaje }}</span>
                                    <button class="button-form">Enviar</button>
                                </div>
                            </form>
                        </div>
                        <div class="sup-2-s">
                            <div class="card-question shadow-sm">
                                <div class="cont-95 m-auto d-flex position-relative">
                                    <img src="../../assets/icons/question.png" alt="" class="info-icon">
                                    <h6 class="text-question mt-2 fw-bold" :class="{ cblu: question1 === true }">
                                        Tiempo deentrega
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
                                            procurando siempre cumplir con plazos precisos para asegurar la satisfacción
                                            de
                                            nuestros clientes.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="card-question shadow-sm">
                                <div class="cont-95 m-auto d-flex position-relative">
                                    <img src="../../assets/icons/question.png" alt="" class="info-icon">
                                    <div class="cont-70">
                                        <h6 class="text-question mt-2 fw-bold" :class="{ cblu: question2 === true }">
                                            ¿Hacen envíos a todo Mexico?</h6>
                                    </div>
                                    <img src="../../assets/icons/down.png" alt="" class=" icn"
                                        :class="{ rot: question2 == true }" @click="OpenQuestion(2)">
                                </div>
                                <div v-if="question2 == true" class="info" :class="{ faq: question2 == true }">
                                    <div class="line2"></div>
                                    <div class="mt-3 cont-95 m-auto">
                                        <p class="text-justify fs-6">Lamentablemente, no realizamos entregas a todos los
                                            rincones de la República.
                                            No obstante, están invitados a solicitar una cotización; así podremos
                                            evaluar la
                                            factibilidad de envío
                                            a su ubicación específica. Es importante tener en cuenta que los costos de
                                            envío
                                            pueden variar.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="card-question shadow-sm">
                                <div class="cont-95 m-auto d-flex position-relative">
                                    <img src="../../assets/icons/question.png" alt="" class="info-icon">
                                    <div class="cont-70">
                                        <h6 class="text-question mt-2 fw-bold" :class="{ cblu: question3 === true }">
                                            ¿Ofrecen servicios de diseño gráfico?</h6>
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
                                            diseño gráfico listos para transformar sus ideas en creaciones visuales
                                            únicas y
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
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
    setup() {
        const question1 = ref(true);
        const question2 = ref(false);
        const question3 = ref(false);
        const nombre = ref('');
        const telefono = ref('');
        const correo = ref('');
        const mensaje = ref('');
        const errormessage = ref([{
            Nombre: "",
            Telefono: "",
            Correo: "",
            Mensaje: ""
        }]);

        const OpenQuestion = (number) => {
            if (number === 1) {
                question1.value = !question1.value;
                question2.value = false;
                question3.value = false;
            }
            if (number === 2) {
                question1.value = false;
                question2.value = !question2.value;
                question3.value = false;
            }
            if (number === 3) {
                question1.value = false;
                question2.value = false;
                question3.value = !question3.value;
            }
        }
        const FormSend = async () => {

            let form = new FormData();
            form.append('nombre', nombre.value);
            form.append('telefono', telefono.value);
            form.append('correo', correo.value);
            form.append('mensaje', mensaje.value);
            try {
                const res = await axios.post('http://localhost:3000/api/contacto', form);
                console.log(res.data);
            }
            catch (e) {
                console.log(e);
            }

        }
        const FormValidate = (event) => {
            event.preventDefault();
            if (nombre.value === '') {
                errormessage.value.Nombre ='El campo Nombre es obligatorio';
            }
            else
            {
                errormessage.value.Nombre ='';
            }
            if (telefono.value === '') {
                errormessage.value.Telefono ='El campo Teléfono es obligatorio';
            }
            else if (telefono.value.length < 10) {
                errormessage.value.Telefono ='El campo Teléfono debe tener 10 dígitos';
            }
            else
            {
                
                errormessage.value.Telefono = '';
            }
            if (correo.value === '') {
                errormessage.value.Correo='El campo Correo es obligatorio';
            }
            else
            {
                errormessage.value.Correo='';
            }
            if (mensaje.value === '') {
                errormessage.value.Mensaje='El campo Mensaje es obligatorio';
            }
            else
            {
                errormessage.value.Mensaje='';
            }
            if(errormessage.value.Nombre !== '' || errormessage.value.Telefono !== '' || errormessage.value.Correo !== '' || errormessage.value.Mensaje !== '' || telefono.value.length < 10) {
                FormSend();
            }
        }
        const validateField = () => {
            if (nombre.value !== '') {
                errormessage.value.Nombre ='';
            }
            if (telefono.value !== '') {
                errormessage.value.Telefono ='';
            }
            if (correo.value !== '') {
                errormessage.value.Correo='';
            }
            if (mensaje.value !== '') {
                errormessage.value.Mensaje='';
            }
        }
        return {
            question1,
            question2,
            question3,
            nombre,
            telefono,
            correo,
            mensaje,
            errormessage,
            FormValidate,
            FormSend,
            OpenQuestion,
            validateField
        }
    }
}
</script>