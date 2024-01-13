<template>
    <div>
        <headerComponent />
        <bannerUnhas />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerUnhas from '@/components/unhas/bannerUnhas.vue'
    import footerComponent from '@/components/home/footerComponent.vue'
    export default {
        name: 'UnhasView',

        components: {
            headerComponent,
            bannerUnhas,
            footerComponent
        }
    }
</script>