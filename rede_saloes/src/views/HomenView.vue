<template>
    <div>
        <headerComponent />
        <bannerHomen />
        <searchHomen />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerHomen from '@/components/homen/bannerHomen.vue'
    import searchHomen from '@/components/homen/searchHomen.vue'
    import footerComponent from '@/components/home/footerComponent.vue'
    export default {
        name: 'HomenView',

        components: {
            headerComponent,
            bannerHomen,
            searchHomen,
            footerComponent
        }
    }
</script>