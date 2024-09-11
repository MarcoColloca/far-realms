<script>
  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';
  import AppMain from './components/AppMain.vue';
  import { store } from './store';

  export default{
    components:{
      AppHeader,
      AppMain,
      AppFooter,
    },

    data(){
      return{
        test: 'Hello!',
        store,
      }
    },
  }
</script>




<template>
  <AppHeader v-if="!store.notFound"></AppHeader>
  <AppMain></AppMain>
  <AppFooter v-if="!store.notFound"></AppFooter>
</template>




<style lang="scss">
#app{
  height: 100vh;
  display: flex;
  flex-direction: column;
  header,
  footer{
    flex-shrink: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  main{
    flex-grow: 1;
  }
}
</style>
