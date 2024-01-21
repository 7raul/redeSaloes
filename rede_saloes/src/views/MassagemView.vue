<template>
    <div>
        <headerComponent />
        <bannerMassagem />
        <searchMassagem />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerMassagem from '@/components/massagem/bannerMassagem.vue'
    import searchMassagem from '@/components/massagem/searchMassagem.vue'
    import footerComponent from '@/components/home/footerComponent.vue'

    export default {
        name: 'MassagemView',

        components: {
            headerComponent,
            bannerMassagem,
            searchMassagem,
            footerComponent
        }
    }
</script>