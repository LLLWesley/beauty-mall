<template>
  <div id="home">
    <navbar class="navbar">
      <template v-slot:navbar-center>购物街</template>
    </navbar>
    <scroll class="home-main" ref="scroll" @pollup="updateGoods">
      <HomeSwiper :banner="banner" />
      <tab-control :tabNames="['时尚', '新潮', '促销']" @type-change="changeCurType" />
      <GoodList :goods="curGoodList" class="good-list" />
    </scroll>
  </div>
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
import Scroll from 'components/common/scroll/Scroll.vue';

import TabControl from 'components/content/TabControl.vue'
import GoodList from 'components/content/goodList/GoodList.vue';

import HomeSwiper from 'views/home/childCpn/HomeSwiper.vue'

import { getMultiData, getGoodsData } from 'network/home.js'
import {debounce,throttle} from 'util/lodash.js'

export default {
  components: {
    Navbar,
    HomeSwiper,
    TabControl,
    GoodList,
    Scroll
  },
  props: {},
  data() {
    return {
      banner: [],
      activeType: 'pop',   //正在展示的tab
      goodsData: {
        'pop': {
          page: 1,
          list: []
        },
        'new': {
          page: 1,
          list: []
        },
        'sell': {
          page: 1,
          list: []
        },
      },
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
   setRefresh(){
    let solvedFn = null 
    this.$bus.$on('refleshScroll',()=>{
      if(!solvedFn){
        solvedFn = debounce(this.$refs.scroll.refresh,500)
      }
      solvedFn()
    })
   },
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
    /*
     * 网络请求方法
    */
    //获取商品数据
    getGoodsData(type, page) {
      getGoodsData(type, page).then((res) => {
        this.goodsData[type].list.push(...res.data.list)
      });
    },
    updateGoods(){
      const type = this.activeType
      const page = ++this.goodsData[type].page
      this.getGoodsData(type,page)
    },
    //获取首页的多项数据
    getMultiData() {
      getMultiData().then((res) => {
        let list = res.data.banner.list;
        for (let i = 0; i < list.length; ++i) {
          this.banner.push(list[i].image);
        }
      });
    },
    
  },
  created() {
    this.getMultiData()
    this.getGoodsData('pop', 1)
    this.getGoodsData('new', 1)
    this.getGoodsData('sell', 1)
    this.setRefresh()
    this.updateGoods = throttle(this.updateGoods,2000)
  },
  mounted() {
   
  }
};
</script>
<style>
#home {
  box-sizing: border-box;
  position: relative;
  height: 100%;
  padding-top: 44px;
}

.navbar {
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  background-color: rgb(232, 154, 190);
  color: #fff;
  font-size: 20px;
}

.home-main {
  height: 100%;
}

</style>