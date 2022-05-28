<template>
  <div id="home">
    <navbar class="navbar">
      <template v-slot:center>
        购物街
      </template>
    </navbar>
    <swiper 
      swiperWidth="100vw"
      :photoNum = "4"
      :switchInterval= "5000"
      slideDuration="500ms"
    >
      <template v-slot:photos>
        <swiper-item v-for="(item) of banner" :key="item">
          <img :src = "item" alt="" />
        </swiper-item>

      </template>
    </swiper>
  </div>

</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import { getMultiData } from 'network/home.js'
import Swiper from '../../common/swiper/Swiper.vue';
import SwiperItem from '../../common/swiper/SwiperItem.vue';
export default {
  components: {
    Navbar,
    Swiper,
    SwiperItem
  },
  props: {},
  data() {
    return {
      banner: []
    };
  },
  watch: {},
  computed: {
  },
  methods: {},
  created() {
      //获取数据
    getMultiData().then((res) => {
      let list = res.data.banner.list;
      for (let i = 0; i < list.length; ++i) {
        this.banner.push(list[i].image);
      }
    });
  },
  mounted() {

   }
};
</script>
<style>
#home .navbar {
  background-color: rgb(232, 154, 190);
  color: #fff;
  font-size: 20px;
}

</style>