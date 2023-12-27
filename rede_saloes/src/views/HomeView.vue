<template>
  <div>
    <headerComponent />
    <bannerComponent />
    <searchComponent />
    <saloesComponent />
    <worksComponent />
  </div>
</template>

<script>
  import headerComponent from '@/components/home/headerComponent.vue'
  import bannerComponent from '@/components/home/bannerComponent.vue'
  import searchComponent from '@/components/home/searchComponent.vue'
  import saloesComponent from '@/components/home/saloesComponent.vue'
  import worksComponent from '@/components/home/worksComponent.vue'
  export default {
    name: 'HomeView',

    components: {
      headerComponent,
      bannerComponent,
      searchComponent,
      saloesComponent,
      worksComponent
    }
  }
</script>

<style scoped>

</style>