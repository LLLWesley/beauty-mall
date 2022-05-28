<template>
  <div class="swiper-item" 
   :style ="widthStyle"  
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    photoWidth:{
      type:String
    }
  },
  data() {
    return {
      widthStyle:{
        width:this.photoWidth
      }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>

<style>
.swiper-item{
  flex-grow: 1;
}
.swiper-item img{
  width: 100%;
}
</style>