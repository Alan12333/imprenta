<template>
    <div class="  bg-light">
        <MenuComponent/>
        <div class="banner-page b-of">
            <div class="banner-cover">
                <div class="banner-title">
                    <h1 class="arch">IMPRESION OFSET</h1>
                    <p class="text-center white text-18 fw-bold"><a href="./" class="fw-bold white text-d hov-1">Inicio </a>// <a class="fw-bold bl text-d">Impresion ofset</a></p>
                </div>
            </div>
        </div>
        <br><br><br><br><br>
        <div class="contenido">
            <div class="content">
                <div class="rw">
                    <div class=" sup-2-s">
                        <div class="menu-left">
                            <div>Impresion Ofset</div>
                            <div>Impresion en Lona</div>
                        </div>
                    </div>
                    <div class=" sup-2-s"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MenuComponent from "../Menu/MenuComponent.vue";

export default {
    components:{
        MenuComponent
    },
    mounted(){
        document.title = "IMPRESION OFSET 📄";
    },
}
</script>

<style>
.b-of
{
    background-image: url("../../assets/img/banner_ofset.webp");
}
.banner-page{
    width: 100%;
    height: 400px;
    object-fit: cover;
    position: relative;
}
.banner-cover{
    width: 100%;
    height: 400px;
    position: absolute;
    background: rgba(0,0,0,0.7);
}
.banner-title
{
    margin-top: 11%;
    margin-bottom: 10px;
    transition: .45s;
}
.banner-title h1{
    font-size: 50px;
    color: white;
    text-align: center;
    transition: .45s;
}
.bl{
    color:rgb(41, 160, 218);
}
.menu-left{
    width: 70%;
    padding: 10px;
    border-radius: 10px;
    background: white;
    box-shadow: 0px 0px 1px silver;
}
@media(max-width:1150px) {
    .banner-title{
        margin-top: 13%;
        margin-bottom: 10px;
    }
    .banner-title h1{
        font-size: 47px;
    }
}
@media(max-width:958px) {
    .banner-title{
        margin-top: 17%;
    }
    .banner-title{
        margin-top: 15%;
        margin-bottom: 10px;
    }
}
@media(max-width:873px) {
    .banner-title{
        margin-top: 19%;
    }
    .banner-title h1{
        font-size: 45px;
    }
}
@media(max-width:752px){
    .banner-title{
        margin-top: 24%;
    }
    .banner-title h1{
        font-size: 40px;
    }
}
@media(max-width:665px){
    .banner-title{
        margin-top: 30%;
    }
    .banner-title h1{
        font-size: 35px;
    }
}
@media(max-width:535px){
    .banner-title{
        margin-top: 40%;
    }
    .banner-title h1{
        font-size: 30px;
    }
}
@media(max-width:400px){
    .banner-title{
        margin-top: 52%;
    }
    .banner-title h1{
        font-size: 25px;
    }
}
</style>