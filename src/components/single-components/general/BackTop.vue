<script>
    export default {
        
    }
</script>





<template>
    <a class="back-top-button" href="#top">
        <font-awesome-icon :icon="['fas', 'arrow-up-long']" />
    </a>
</template>




<style lang="scss" scoped>
    @use '../../../assets/style/partials/variables.scss' as *;

    .back-top-button{
        position: absolute;
        right: calc(5% - 25px);
        bottom: calc(50% - 25px);
        background-color: $app-purple;
        color: $app-white;
        border: 1px solid $app-white;
        width: 50px;
        aspect-ratio: 1/1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        border-radius: 50%;
        &:hover{
            background-color: $app-white;
            color: $app-purple;
            border: 1px solid $app-purple;
        }
    }

    @media (max-width: 450px) {
        .back-top-button{
            right: calc(6% );
        }
    }
</style>