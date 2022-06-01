<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(name, index) in tabNames" :key="index">
      <span class="item-name" :class="{ name_active: activeIdx === index }" @click="changeActive(index)">
        {{ name }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    tabNames: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data() {
    return {
      activeIdx:0
    };
  },
  watch: {},
  computed: {},
  methods: {
    changeActive(index) {
      this.activeIdx = index
      this.$emit('type-change',this.activeIdx)
    }
  },
  created() { },
  mounted() {
    this.$emit('type-change',this.activeIdx)
   }
};
</script>
<style scoped>
.tab-control {
  display: flex;
}

.tab-control-item {
  flex-grow: 1;
  text-align: center;
}

.item-name {
  line-height: 35px;
  font-size: 15px;
}

.name_active {
  color: rgb(232, 154, 190);
  border-bottom: 1px solid rgb(232, 154, 190);
}
</style>