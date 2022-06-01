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
  created() { },
  mounted() { }
};
</script>
<style scoped>
.good-list{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding:0 10px;
}

.good-list .item-container {
  width: 49%;
  margin-bottom: 10px;
  border-radius: 5px;
  overflow: hidden;
}
</style>