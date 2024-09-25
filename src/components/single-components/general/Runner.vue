<script>
    export default{
        
    }
</script>





<template>
    <div class="runner run-left">            
        <slot></slot>
    </div>    
</template>



<style lang="scss">
    .runner{
        display: flex;
        align-items: center;
        background-color: transparent;
        font-size: 12rem;
        line-height: 10rem;
        text-transform: uppercase;
        padding: 80px 0;
        font-weight: 900;
        user-select: none;
        cursor: grab;
        width: max-content;

        &:active{
            cursor: grabbing;
        }

        img{
            height: 10rem;
            pointer-events: none;
        }
    }

    .runner > *{
        margin-right: 3rem;
    }
    
</style>