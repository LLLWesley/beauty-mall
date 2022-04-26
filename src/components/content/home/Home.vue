<template>
  <div id="home">
    <navbar class="navbar">
      <template v-slot:center>
        首页
      </template>
    </navbar>
  </div>
  
</template>

<script>
import Navbar from 'components/common/navbar/Navbar.vue'
export default {
  components: {
    Navbar
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
#home .navbar{
  background-color: rgb(232, 154, 190);
  color: #fff;
  font-size: 20px;
}
</style>