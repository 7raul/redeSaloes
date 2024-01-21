<template>
    <div>
        <headerComponent />
        <bannerMackup />
        <searchMackup />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerMackup from '@/components/mackup/bannerMackup.vue'
    import searchMackup from '@/components/mackup/searchMackup.vue'
    import footerComponent from '@/components/home/footerComponent.vue'

    export default {
        name: 'MackupView',

        components: {
            headerComponent,
            bannerMackup,
            searchMackup,
            footerComponent
        }
    }
</script>