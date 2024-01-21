<template>
    <div>
        <headerComponent />
        <bannerUnhas />
        <searchUnhas />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerUnhas from '@/components/unhas/bannerUnhas.vue'
    import searchUnhas from '@/components/unhas/searchUnhas.vue'
    import footerComponent from '@/components/home/footerComponent.vue'
    export default {
        name: 'UnhasView',

        components: {
            headerComponent,
            bannerUnhas,
            searchUnhas,
            footerComponent
        }
    }
</script>