<template>
  <ul class="good-list">
    <li class="item-container" v-for="(item, index) in goods" :key="index">
      <good-list-item :item="item" />
    </li>
  </ul>
</template>

<script>
import TabControl from 'components/content/TabControl.vue';
import GoodListItem from 'components/content/goodList/GoodListItem.vue';
export default {
  components: { TabControl, GoodListItem },
  props: {
    'goods': {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      activeIdx: 0,
    };
  },
  watch: {},
  computed: {

  },
  methods: {

  },
  created() {
  },
  mounted() {
  }
};
</script>
<style scoped>
.good-list {
  display: flex;
  flex-flow: row wrap;
  padding: 10px;
  background-color: rgb(242, 242, 242);
}

.good-list .item-container {
  width: 49%;
  margin-bottom: 10px;
}
.item-container:nth-child(2n+0){
  margin-left: 2%;
} 
</style>