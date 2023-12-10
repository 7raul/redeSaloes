<template>
  <div>
    <headerComponent />
    <h1>Home</h1>
  </div>
</template>

<script>
  import headerComponent from '@/components/home/headerComponent.vue'
  export default {
    name: 'HomeView',

    components: {
      headerComponent 
    }
  }
</script>

<style scoped>

</style>