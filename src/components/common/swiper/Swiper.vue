<template>
  <div class="swiper">
    <div class="swiper-container" :style="containerStyle" @click="switchPage(true)">
      <slot name="swiper-items"></slot>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    // 轮播图参数
    swiperWidth: {
      type: String,
      default: '100vw'
    },
    photoNum: {
      type: Number,
      default: 0
    },
    switchInterval: {
      type: Number,
      default: 5000
    },
    slideDuration: {
      type: String,
      default: 500
    }
  },
  data() {
    return {
      // 数据
      container: null,
      //状态
      containerStyle:{
          width: `500vw`,
          transition: `transform ${this.slideDuration}`,             // swiper样式 
          transform: null
      },
      curIdx: 0  //当前的展示页序号
    };
  },
  watch: {},
  computed: {
    sWidth() {                                                    //处理过后的宽度
      let patten = new RegExp(`(^[0-9]*)([a-zA-Z]*$)`)
      let res = this.swiperWidth.match(patten);
      return {
        val: parseInt(res[1]),
        unit: res[2]                                                    //分别获取到值与单位
      }
    },
    offset() {
      return `${(-1) * this.curIdx * this.sWidth.val}${this.sWidth.unit}`;     //目的偏移值为当前页 * 图片的大小
    },
  },
  methods: {
    // 操作dom
    hindleDom: function () {
      let swiperItems = document.querySelectorAll(".swiper-item");
      let cloneItem = swiperItems[0].cloneNode(true);
      this.container.appendChild(cloneItem);
    },
    //换页,默认方向是下一页，非默认则是上一页
    switchPage(isDefault) {
      if (this.curIdx === this.photoNum && isDefault) {
        //证明此时是在最后一张--------与第一页相同的页
        this.curIdx = 0;
        this.containerStyle.transform = `translate(${this.offset})`;
        this.containerStyle.transition = null
        this.$nextTick(() => {
          let temp = this.container.offsetLeft   //使强制回流
          this.containerStyle.transition = `transform ${this.slideDuration}`
          this.switchPage(isDefault)
        })

      } else if (this.curIdx === this.photoNum && !isDefault) {

      } else {
        let direct = (isDefault) ? 1 : -1
        this.curIdx += direct;
        this.containerStyle.transform = `translate(${this.offset})`;
      }
    },
    //自动换页
    autoChange() {
      let timer = setInterval(() => {
        this.switchPage(true)
      }, this.switchInterval)
    }
  },
  created() {

  },
  mounted() {
    this.container = document.getElementsByClassName("swiper-container")[0]
    this.autoChange();
  },
  Updated() { },
};
</script>
<style>
.swiper {
  overflow: hidden;
}

.swiper-container {
  display: flex;
}
</style>