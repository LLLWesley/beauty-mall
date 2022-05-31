<template>
  <div class="good-list-item">
      <img :src="item.show.img" class="item-img" alt="">
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
.item-img{
  width: 100%;
}
</style>