<template>
  <div class="good-list-item">
    <img :src="item.show.img" class="item-img" alt="">
    <div class="item-info">
      <p class="item-title">{{item.title}}</p>
      <p class="item-price">{{item.price}}</p>
      <p class="item-collect">{{item.cfav}}</p>
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
}
.good-list-item .item-img{
  width: 100%;
}
</style>