<script>
export default {

}
</script>



<template>
    <div class="footer">
        <div class="contenido mt-5">
            <div class="content">
                <div class="rw">
                    <div class="sup-4-s">
                        <img src="../../assets/img/logo-w.png" alt="" class="footer-img">
                        <p class="cont-90 footer-text">
                            Explorando la belleza de la impresión. Cada diseño cuenta una historia única.
                            Descubre tu creatividad con nosotros.
                        </p>
                        <div class="flex-f mt-2">
                            <img src="../../assets/icons/direccion.png" alt="" class="footer-icon">
                            <p class="fs-6 text-white mr-l-4">Manuel Doblado #35 Pénjamo Gto.</p>
                        </div>
                        <div class="flex-f mt-2">
                            <img src="../../assets/icons/telefono.png" alt="" class="footer-icon">
                            <p class="fs-6 text-white mr-l-4">469 692 78 25.</p>
                        </div>
                        <div class="flex-f mt-2">
                            <img src="../../assets/icons/mail.png" alt="" class="footer-icon">
                            <p class="fs-6 text-white mr-l-4">imprentaidealp@hotmail.com.</p>
                        </div>
                    </div>

                    <div class="sup-2-s">
                        <div class="content">
                            <div class="rw">
                                <div class="sup-2-s">
                                    <p class="fs-5 fw-bold text-white">ACCESO RAPIDO</p>
                                    <div class="line"></div>
                                    <div class="flex-f my-4">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">¿Quienes somos?</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="/contacto" class="fs-6  mr-l-4 footer-link">Contacto</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="/aviso-privacidad" class="fs-6  mr-l-4 footer-link">Aviso de privacidad</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Política de Cookies</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Productos</router-link>
                                    </div>
                                    <div class="min-space"></div>
                                </div>
                                <div class="sup-2-s">
                                    <p class="fs-5 fw-bold text-white">PRODUCTOS</p>
                                    <div class="line"></div>
                                    <div class="flex-f my-4">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Tarjetas</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Invitaciones</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Volantes</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Playeras</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Tazas</router-link>
                                    </div>
                                    <div class="min-space"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sup-4-s">
                        <p class="fs-5 fw-bold text-white ">NEWS LETTER</p>
                        <div class="line"></div>
                        <div class=" my-4">
                            <p class="fs-6 text-white">Suscribete y obtén las ultimas ofertas y noticias acerca de nuevos productos.</p>
                            <input type="mail" v-model="correo" class="input-news">
                            <button type="button" class="btn w-100 btn-primary mt-4 p-2" style="background:#2CA1DA;">Suscribirse</button>
                            <div class="min-space"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <p class="fs-7 mt-5 text-center text-white">Calidad impresa en cada detalle. Tu historia, nuestra pasión. Impresos Pénjamo. © 2023</p>
            </div>
        </div>
    </div>
</template>

<style>
.footer-img {
    width: 60%;
}

.footer-text {
    font-size: 1em;
    margin-top: 30px;
    color: white;
}

.footer-icon {
    width: 20px;
    height: 20px;
    margin-top: 2px;
}

.line {
    width: 80px;
    height: 2px;
    background: #2CA1DA;
}
.footer-link{
    transition: all .45s;
    color:white;
    text-decoration: none;
}
.footer-link:hover
{
    color: #2CA1DA;;
}
.input-news{
    width:100%;
    padding:10px;
    border:2px solid white;
    border-radius:12px;
    background:transparent;
    color:white;
    outline:none;
    margin-top:5px;
}
.fs-7
{
    font-size:0.8rem;
}
.min-space{
    height: 25px;
}
</style>