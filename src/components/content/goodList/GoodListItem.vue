<template>
  <div class="good-list-item">
    <img :src="item.show.img" class="item-img" alt="">
    <div class="item-info">
      <span class="item-title">{{item.title}}</span>
      <p class="item-price">{{item.price}}</p>
      <p class="item-collect">收藏数：{{item.cfav}}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    'item':{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    
  }
};
</script>
<style scoped>
.good-list-item{
  border-radius: 7px;
  background-color: #fff;
  padding-bottom: 15px;
}
.item-info{
  margin-top: 5px;
  width: 100%;
}
.item-title{
    white-space: nowrap;  /*强制span不换行*/
    display: inline-block; 
    width: 100%;
    overflow: hidden;  /*超出宽度部分隐藏*/
    text-overflow: ellipsis;  /*超出部分以点号代替*/
    margin-bottom: 3px;
}

.item-price{
  float: left;
  margin-left: 15px;
  color: red;
}
.item-collect{
  float: right;
  margin-right: 30px;
}
.good-list-item .item-img{
  width: 100%;
  border-radius: 7px;
}
</style>