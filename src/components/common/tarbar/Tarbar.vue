<template>
  <div id="tarbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
  },
  created() {},
  mounted() {}
};
</script>
<style>
  #tarbar{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 49px;
    background-color: rgb(247, 242, 242);
    /* 内部容器 */
    display: flex;
  }
</style>