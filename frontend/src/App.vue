<template>
  <div>
    <head_component/>
  </div>
  <router-view/>
</template>
<script>
  import head_component from './components/fixed/head_component.vue';
  export default{
      name:"app",
      components:{head_component}
  }
</script>
<style>
  body{
    padding: 0;
    margin: 0;
  }
</style>
