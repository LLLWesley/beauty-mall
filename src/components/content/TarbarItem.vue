<template>
  <div class="tarbar-item" v-on:click="changeRouter">
     <div class="item-active-icon" v-if="onActive"><slot name="active-icon"></slot></div>
     <div class="item-icon" v-else><slot name="icon"></slot></div>
     <div class="item-text" :style="onActiveColor"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    href:String
  },
  data() {
    return {};
  },
  watch: {},
  computed: {
    // 图片处于活跃状态
    onActive(){
      return this.$route.path.indexOf(this.href) !== -1
    },
    // 图片处于活跃状态
    onActiveColor(){
      return this.onActive ? {'color':'rgb(232, 154, 190)'}:{};
    }
  },
  methods: {
    changeRouter(){
      this.$router.replace(this.href)
    },
    onClickActive(){
      
    }
  },
  created() {},
  mounted() {},
};
</script>
<style>
 .tarbar-item {
   flex-grow: 1;
   text-align: center;
   margin: auto;
   font-size: 15px;
  }
  .item-icon>img,.item-active-icon>img{
   width: 25px;
   height: 25px;
  }

  .tarbar-item.active{
    color:blue;
  }
</style>