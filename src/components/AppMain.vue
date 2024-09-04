<script>
    import { store } from '../store';

    export default {
        data(){
            return{
                store,                
            }
        },

        computed:{
            mountBg()
            {                
                return `/imgs/${this.$route.name}Bg.jpg`
            }
        }
    }
</script>



<template>
    <!-- Page Main -->
    <main  
    :style="{
        backgroundImage: `url(${mountBg})`, 
    }">
        <RouterView />     
    </main>
</template>



<style lang="scss" scoped>
    main{
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }

    @media (max-width: 450px) 
    {
        main{
            background-size: 0%;
            background-color: #030303;
        }
    }
</style>