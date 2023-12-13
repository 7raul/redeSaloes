<template>
  <div>
    <headerComponent />
    <bannerComponent />
  </div>
</template>

<script>
  import headerComponent from '@/components/home/headerComponent.vue'
  import bannerComponent from '@/components/home/bannerComponent.vue'
  export default {
    name: 'HomeView',

    components: {
      headerComponent,
      bannerComponent
    }
  }
</script>

<style scoped>

</style>