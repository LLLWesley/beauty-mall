<template>
  <div class="navbar">
    <div class="left-item"><slot name="left"></slot></div>
    <div class="center-item"><slot name="center"></slot></div>
    <div class="right-item"><slot name="right"></slot></div>
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
    text-align: center;
    line-height: 44px;
  }
  .left-item,.right-item{
    width: 60px;
  }
  .center-item{
    flex: 1;
  }
</style>