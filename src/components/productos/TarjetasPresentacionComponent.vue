<template>
    <div v-if="loading === true">
        <div class="loader">
            <img src="../../assets/logo2.png" alt="GIF" class="img">
        </div>
    </div>
    <div>
        <h1>Tarjetas</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: true
        }
    },
    methods: {
        
    },
    mounted() {
        setTimeout(() => {
            this.loading = false;
        }, 3000);
    },
}
</script>