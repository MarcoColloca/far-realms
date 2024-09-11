<script>

    export default {
        components:{
        },

        data(){            
            return {
            }
        }
        
    }
</script>





<template>
    <section>
        <div class="container404">
            <img src="/public/imgs/mf404.png" alt="404 img">
            <h1 class="text-center p-3">
                Oh ciao. Non mi aspettavo di trovarti qui. <br>
                Ho quasi finito. Puoi attendere un attimo... <br>
                o tornare alla <RouterLink  :to="{name: 'home'}">Home.</RouterLink>
            </h1>
        </div>
    </section>
</template>




<style lang="scss" scoped>

@use '../assets/style/partials/variables' as *;

section{
    height: 100%;
    color: $app-purple;
    background-color: rgb(11, 11, 11);
    display: flex;
    align-items: start;
    justify-content: center;

    .container404{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        img{
            width: 100%;
            max-width: 700px;
        }

        h1{
            line-height: 150%;
        }

        a{
            color: $app-coral;
            &:hover{
                text-decoration: underline;
                color: $app-white;
            }
        }
    }
}
</style>