<template>
  <div id="home">
    <navbar class="navbar">
      <template v-slot:navbar-center>购物街</template>
    </navbar>
    <div class="home-main wrapper" ref="wrapper">
      <div class="content">
        <HomeSwiper :banner="banner" />
        <tab-control :tabNames="['时尚', '新潮', '促销']" @type-change="changeCurType" />
        <GoodList :goods="curGoodList" class="good-list" />
      </div>
    </div>,
    <!-- <button @click="clickMe" class="aaa">123</button> -->
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import TabControl from 'components/content/TabControl.vue'
import GoodList from 'components/content/goodList/GoodList.vue';
// import BScroll from 'better-scroll';
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
      activeType: 'pop',   //正在展示的tab
      goodsData: {
        'pop': {
          page: 0,
          list: []
        },
        'new': {
          page: 0,
          list: []
        },
        'sell': {
          page: 0,
          list: []
        },
      }
    };
  },
  watch: {},
  computed: {
    curGoodList() {
      return this.goodsData[this.activeType].list
    }
  },
  methods: {
    /*
     *监听事件方法  
    */
    changeCurType(activeIdx) {
      switch (activeIdx) {
        case 0:
          this.activeType = 'pop'
          break;
        case 1:
          this.activeType = 'new'
          break;
        case 2:
          this.activeType = 'sell'
          break;
      }
    },
    // clickMe() {
    //   this.$nextTick(() => {
    //     let b = document.getElementsByClassName("home-main")[0]
    //     let j = b.style.offsetLeft
    //     let a = new BScroll(this.$refs.wrapper, {})
    //     console.log(a);
    //   })
    // },
    /*
     * 网络请求方法
    */
    //获取商品数据
    getGoodsData(type, page) {
      getGoodsData(type, page).then((res) => {
        this.goodsData[type].list.push(...res.data.list)
      });
    },
    //获取首页的多项数据
    getMultiData() {
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
    this.getGoodsData('pop', 1)
    this.getGoodsData('new', 1)
    this.getGoodsData('sell', 1)
  },
  mounted() {

  }
};
</script>
<style>
#home {
  height:0;
  flex:1;
  display: flex;
  flex-flow: column nowrap;
}

.navbar {
  background-color: rgb(232, 154, 190);
  color: #fff;
  font-size: 20px;
}

.home-main {
  height: 0;
  flex: 1;
  overflow: hidden;
}
.aaa{
  position: absolute;
  z-index: 100;
}
</style>