<template>
    <div>
        <headerComponent />
        <bannerMulher />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerMulher from '@/components/mulher/bannerMulher.vue'
    import footerComponent from '@/components/home/footerComponent.vue'
    export default {
        name: 'UnhasView',

        components: {
            headerComponent,
            bannerMulher,
            footerComponent
        }
    }
</script>