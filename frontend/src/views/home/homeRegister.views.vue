<template>
    <div>
        <homeregister_component/>
    </div>
    <router-view/>
  </template>
  <script>
    import homeregister_component from '../../components/home/homeregister_component.vue';
    export default{
        name:"app",
        components:{homeregister_component}
    }
  </script>
