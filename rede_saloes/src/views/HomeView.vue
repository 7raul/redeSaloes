<template>
  <div>
    <headerComponent />
    <bannerComponent />
    <searchComponent />
    <saloesComponent />
    <worksComponent />
    <aboutComponent />
    <feedbackComponent />
    <footerComponent />
    
  </div>
</template>

<script>
  import headerComponent from '@/components/home/headerComponent.vue'
  import bannerComponent from '@/components/home/bannerComponent.vue'
  import searchComponent from '@/components/home/searchComponent.vue'
  import saloesComponent from '@/components/home/saloesComponent.vue'
  import worksComponent from '@/components/home/worksComponent.vue'
  import aboutComponent from '@/components/home/aboutComponent.vue'
  import feedbackComponent from '@/components/home/feedbackComponent.vue'
  import footerComponent from '@/components/home/footerComponent.vue'

  export default {
    name: 'HomeView',

    components: {
      headerComponent,
      bannerComponent,
      searchComponent,
      saloesComponent,
      worksComponent,
      aboutComponent,
      feedbackComponent,
      footerComponent
    }
  }
</script>

<style scoped>

</style>