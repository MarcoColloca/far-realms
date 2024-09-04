<script>
    export default{
        
    }
</script>





<template>

   
    <div class="bento-box">            
        <slot></slot>
    </div>
    
</template>



<style lang="scss" scoped>
    .bento-box{
        border: 1px dotted rgb(255, 255, 255);
        border-radius: 18px;
        background-color: rgba(255, 255, 255, 0.075);
        padding: 10px;
    }
</style>