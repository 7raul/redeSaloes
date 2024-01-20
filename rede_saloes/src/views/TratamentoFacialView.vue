<template>
    <div>
        <headerComponent />
        <bannerTratamentoFacial />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerTratamentoFacial from '@/components/tratamentoFacial/bannerTratamentoFacial.vue'
    import footerComponent from '@/components/home/footerComponent.vue'

    export default {
        name: 'TratamentoFacialView',

        components: {
            headerComponent,
            bannerTratamentoFacial,
            footerComponent
        }
    }
</script>