<template>
  <div>
    <headerComponent />
    <bannerComponent />
    <searchComponent />
  </div>
</template>

<script>
  import headerComponent from '@/components/home/headerComponent.vue'
  import bannerComponent from '@/components/home/bannerComponent.vue'
  import searchComponent from '@/components/home/searchComponent.vue'
  export default {
    name: 'HomeView',

    components: {
      headerComponent,
      bannerComponent,
      searchComponent
    }
  }
</script>

<style scoped>

</style>