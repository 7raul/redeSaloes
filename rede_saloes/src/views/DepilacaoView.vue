<template>
    <div>
        <headerComponent />
        <bannerDepilacao />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerDepilacao from '@/components/depilacao/bannerDepilacao.vue'
    import footerComponent from '@/components/home/footerComponent.vue'

    export default {
        name: 'MassagemView',

        components: {
            headerComponent,
            bannerDepilacao,
            footerComponent
        }
    }
</script>