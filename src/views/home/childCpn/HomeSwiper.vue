<template>
    <div>
        <swiper swiperWidth="100vw" :photoNum="4" :switchInterval="2000" slideDuration="500ms">
            <template v-slot:swiper-items>
                <swiper-item><img :src="banner[0]" alt="" /></swiper-item>
                <swiper-item><img :src="banner[1]" alt="" /></swiper-item>
                <swiper-item><img :src="banner[2]" alt="" /></swiper-item>
                <swiper-item><img :src="banner[3]" alt="" /></swiper-item>
                <swiper-item><img :src="banner[0]" alt="" /></swiper-item>
            </template>
        </swiper>
    </div>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper.vue';
import SwiperItem from 'components/common/swiper/SwiperItem.vue';
export default {
    components: {
        Swiper,
        SwiperItem
    },
    props: {
        banner:{
            type:Array
        }
    },
    data() {
        return {
        };
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style>
</style>