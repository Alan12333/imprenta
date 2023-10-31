<script>
export default {

}
</script>



<template>
    <div class="footer">
        <div class="contenido mt-5">
            <div class="content">
                <div class="rw">
                    <div class="sup-3-s">
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
                    <div class="sup-3-s">
                        <div class="content">
                            <div class="rw">
                                <div class="sup-2">
                                    <p class="fs-5 fw-bold text-white">ACCESO RAPIDO</p>
                                    <div class="line"></div>
                                    <div class="flex-f my-4">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">¿Quienes somos?</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Contacto</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Aviso de privacidad</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Política de Cookies</router-link>
                                    </div>
                                    <div class="flex-f my-3">
                                        <img src="../../assets/icons/rows.png" alt="" class="footer-icon">
                                        <router-link to="" class="fs-6  mr-l-4 footer-link">Productos</router-link>
                                    </div>
                                </div>
                                <div class="sup-2">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sup-3-s">

                    </div>
                </div>
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
</style>