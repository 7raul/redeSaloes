<template>
    <div>
        <headerComponent />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import footerComponent from '@/components/home/footerComponent.vue'
    export default {
        name: 'portfolioView',

        components: {
            headerComponent,
            footerComponent
        }
    }
</script>