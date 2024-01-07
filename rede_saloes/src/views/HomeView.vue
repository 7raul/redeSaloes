<template>
  <div>
    <headerComponent />
    <bannerComponent />
    <searchComponent />
    <saloesComponent />
    <worksComponent />
    <aboutComponent />
    <feedbackComponent />
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

  export default {
    name: 'HomeView',

    components: {
      headerComponent,
      bannerComponent,
      searchComponent,
      saloesComponent,
      worksComponent,
      aboutComponent,
      feedbackComponent
    }
  }
</script>

<style scoped>

</style>