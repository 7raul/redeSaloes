<template>
    <div>
        <headerComponent />
        <bannerMulher />
        <searchMulher />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerMulher from '@/components/mulher/bannerMulher.vue'
    import searchMulher from '@/components/mulher/searchMulher.vue'
    import footerComponent from '@/components/home/footerComponent.vue'
    export default {
        name: 'MulherView',

        components: {
            headerComponent,
            bannerMulher,
            searchMulher,
            footerComponent
        }
    }
</script>