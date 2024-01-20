<template>
    <div>
        <headerComponent />
        <bannerHomen />
        <footerComponent />
    </div>
</template>

<script>
    import headerComponent from '@/components/home/headerComponent.vue'
    import bannerHomen from '@/components/homen/bannerHomen.vue'
    import footerComponent from '@/components/home/footerComponent.vue'
    export default {
        name: 'HomenView',

        components: {
            headerComponent,
            bannerHomen,
            footerComponent
        }
    }
</script>