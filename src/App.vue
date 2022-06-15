<template>
  <div id="app">
    <router-view></router-view>
    <Tarbar>
      <!--首页-->
      <tarbar-item href="/home">
        <template v-slot:icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-home"></use>
          </svg>
        </template>
        <template v-slot:active-icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-home_fill"></use>
          </svg>
        </template>
        <template v-slot:text>首页</template>
      </tarbar-item>

      <!--分类 -->
      <tarbar-item href="/sort">
        <template v-slot:icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sort"></use>
          </svg>
        </template>
        <template v-slot:active-icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sort_fill"></use>
          </svg>
        </template>
        <template v-slot:text>分类</template>
      </tarbar-item>

      <!--购物车 -->
      <tarbar-item href="/cart">
        <template v-slot:icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cart"></use>
          </svg>
        </template>
        <template v-slot:active-icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cart_fill"></use>
          </svg>
        </template>
        <template v-slot:text>购物车</template>
      </tarbar-item>

      <!--我的-->
      <tarbar-item href="/profile">
        <template v-slot:icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-profile"></use>
          </svg>
        </template>
        <template v-slot:active-icon>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-profile_fill"></use>
          </svg>
        </template>
        <template v-slot:text>我的</template>
      </tarbar-item>
    </Tarbar>
  </div>
</template>
<script>
import Tarbar from "components/common/tarbar/Tarbar.vue";
import TarbarItem from "components/content/TarbarItem.vue";
export default {
  components: {
    Tarbar,
    TarbarItem,
  },
  mounted(){
    // console.log(this);
  }
};
</script>
<style>
@import "assets/css/common/reset.css";

#app {
  box-sizing: border-box;
  height: 100vh;
  padding-bottom: 49px;
}

.icon {
  width: 25px;
  height: 25px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
