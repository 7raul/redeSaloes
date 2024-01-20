<template>
    <div>
        <headerComponent />
        <bannerCabelo />
        <searchCabelo />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerCabelo from '@/components/cabelo/bannerCabelo.vue'
    import searchCabelo from '@/components/cabelo/searchCabelo.vue'
    import footerComponent from '@/components/home/footerComponent.vue'
    export default {
        name: 'CabeloView',

        components: {
            headerComponent,
            bannerCabelo,
            searchCabelo,
            footerComponent
        }
    }
</script>