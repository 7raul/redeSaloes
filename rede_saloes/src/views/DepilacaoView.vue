<template>
    <div>
        <headerComponent />
        <bannerDepilacao />
        <searchDepilacao />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerDepilacao from '@/components/depilacao/bannerDepilacao.vue'
    import searchDepilacao from '@/components/depilacao/searchDepilacao.vue'
    import footerComponent from '@/components/home/footerComponent.vue'

    export default {
        name: 'DepilacaoView',

        components: {
            headerComponent,
            bannerDepilacao,
            searchDepilacao,
            footerComponent
        }
    }
</script>