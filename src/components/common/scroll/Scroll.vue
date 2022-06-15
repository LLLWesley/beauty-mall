<template>
  <div class="scroll" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up'
BScroll.use(Pullup)
export default {
  components: {
  },
  props: {
    updateFunc:{
      type:Function,
      default:null
    }
  },
  data() {
    return {
      scroll:null
    };
  },
  watch: {},
  computed: {},
  methods: {
    refresh(){
      this.scroll.refresh()
    },
    onScroll(pos){
      this.$emit("pollup")
      this.scroll.finishPullUp()
    }
  },
  created() { },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      pullUpLoad: true
    })
    console.log(this.scroll);
    this.scroll.on('pullingUp', this.onScroll)
  }
}
</script>
<style scroped>
.scroll {
  overflow: hidden;
}

.content {
  /* height: calc(100% + 1px); */
}
</style>