<template>
  <div class="good-list">
    <tab-control 
      :itemNames = "['时尚','新潮','复古']"
      @type-change ="changeActiveIdx"/>
    <ul class="good-list-container">
        <li class="good-list-item-box" v-for="(item,index) in activeLists" :key="index">
          <good-list-item :item="item"/>
        </li>
    </ul>
  </div>
</template>

<script>
import TabControl from 'components/content/TabControl.vue';
import GoodListItem from 'components/content/goodList/GoodListItem.vue';
export default {
  components: { TabControl, GoodListItem },
  props: {
    'good':{
      type:Object,
    }
  },
  data() {
    return {
      activeIdx:0,
    };
  },
  watch: {},
  computed: {
    activeLists(){
      switch(this.activeIdx){
        case 0:
          return this.good['pop'].list
          break;
        case 1:
          return this.good['new'].list
          break;
        case 2:
          return this.good['sell'].list
          break;
      }
    }
  },
  methods: {
    changeActiveIdx(activeIdx){
      this.activeIdx = activeIdx
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.good-list-container{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 10px; 
}
.good-list-item-box{
  width: 49%;
  margin-bottom: 10px;
}
</style>