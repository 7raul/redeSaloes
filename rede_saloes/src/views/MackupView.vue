<template>
    <div>
        <headerComponent />
        <bannerMackup />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerMackup from '@/components/mackup/bannerMackup.vue'
    import footerComponent from '@/components/home/footerComponent.vue'

    export default {
        name: 'MackupView',

        components: {
            headerComponent,
            bannerMackup,
            footerComponent
        }
    }
</script>