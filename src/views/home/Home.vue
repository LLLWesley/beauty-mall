<template>
  <div id="home">
    <navbar class="navbar">
      <template v-slot:navbar-center>
        购物街
      </template>
    </navbar>
    <HomeSwiper :banner="banner" />
    <GoodList :good="good"/>
  </div>

</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import TabControl from 'components/content/TabControl.vue'
import GoodList from 'components/content/goodList/GoodList.vue';

import HomeSwiper from 'views/home/childCpn/HomeSwiper.vue'

import { getMultiData, getGoodsData } from 'network/home.js'


export default {
  components: {
    Navbar,
    HomeSwiper,
    TabControl,
    GoodList
  },
  props: {},
  data() {
    return {
      banner: [],
      good: {
        'pop':{
          page:0,
          list:[]
        },
        'new':{
          page:0,
          list:[]
        },
        'sell':{
          page:0,
          list:[]
        },
      }
   };
  },
  watch: {},
  computed: {
  },
  methods: {
    //获取商品数据
    getGoodsData(type, page) {
      getGoodsData(type,page).then((res) => {
        this.good[type].list.push(...res.data.list)
      });
    },
    //获取首页的多项数据
    getMultiData(){
      getMultiData().then((res) => {
      let list = res.data.banner.list;
      for (let i = 0; i < list.length; ++i) {
        this.banner.push(list[i].image);
      }
    });
    }
  },
  created() {
    this.getMultiData()
    this.getGoodsData('pop',1)
    this.getGoodsData('new',1)
    this.getGoodsData('sell',1)
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