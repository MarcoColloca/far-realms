<script>
 import BentoBox from '../components/single-components/general/BentoBox.vue'
 import BackTop from '../components/single-components/general/BackTop.vue'

    export default {
        components:{
            BentoBox,
            BackTop
        },

        data(){            
            return {
            }
        }
        
    }
</script>





<template>
    <!-- Page Footer -->
    <footer>
        <div class="container position-relative ">
            <BentoBox class="text-light ">
                <h2 class="mt-2 bento-container">
                    Marco Colloca - Full Stack Web Developer
                </h2>
            </BentoBox>
            <BackTop></BackTop>
        </div>
    </footer>
</template>




<style lang="scss" scoped>
@use '../assets/style/partials/variables' as *;

footer{
    height: 100px;
    background-color: $app-purple;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

@media (max-width: 450px) {
    .bento-container{
        max-width: 300px;
    }
}
</style>