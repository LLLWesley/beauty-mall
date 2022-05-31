<template>
  <div class="navbar">
    <div class="navbar-left"><slot name="navbar-left"></slot></div>
    <div class="navbar-center"><slot name="navbar-center"></slot></div>
    <div class="navbar-right"><slot name="navbar-right"></slot></div>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style>
  .navbar{
    display: flex;
    flex-flow: row flow;
    text-align: center;
    line-height: 44px;
  }
  .navbar-left,.navbar-right{
    width: 60px;
  }
  .navbar-center{
    flex: 1;
  }
</style>