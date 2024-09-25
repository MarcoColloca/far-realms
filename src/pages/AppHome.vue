<script>
    import Runner from '../components/single-components/general/Runner.vue';

    export default{
        components:{
            Runner
        }
    }
</script>





<template>
    <section class="mt-5 hero container">
        <div class="h-100 ">
            <div class="hero-container">
                <h1 class="glow-text-purple">
                    Homepage
                </h1>
                <p>
                    Benvenuto nei Reami Remoti. Questo sito è dedicato a varie funzioni di d&d. <br>
                    È stato creato per utilizzo personale, tuttavia, sentiti libero/a di utilizzarlo! <br>
                </p>

            </div>
        </div>

    </section>
    <section class="bg-dark">
        <Runner>
            <div>ciao !!!!!! </div>
            <div>questo </div>
            <div>è solo </div>
            <div>un test.</div>
            <div>ciao !!!!!! </div>
            <div>questo </div>
            <div>è solo </div>
            <div>un test.</div>
        </Runner>
    </section>
</template>



<style lang="scss" scoped>
    .hero{
        height: 400px;
        background-color: rgba(173, 0, 241, 0);
        border-radius: 100px;
        color: rgb(255, 255, 255);
        padding: 0 50px;
        max-width: fit-content;
    }

    .hero-container{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;   
        p{
            font-size: 21px;
        }
    }
</style>