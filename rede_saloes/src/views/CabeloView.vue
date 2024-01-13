<template>
    <div>
        <headerComponent />
        <bannerCabelo />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerCabelo from '@/components/cabelo/bannerCabelo.vue'
    import footerComponent from '@/components/home/footerComponent.vue'
    export default {
        name: 'UnhasView',

        components: {
            headerComponent,
            bannerCabelo,
            footerComponent
        }
    }
</script>