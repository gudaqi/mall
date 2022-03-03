<template>
  <swiper>
    <swiper-item v-for="item in banner">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperimgload">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "components/common/swiper/index"
export default {
  name: "HomeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    swiperimgload() {
      if (!this.isLoad) {
        this.$emit('swiperimgload')
        this.isLoad = true
      }
    }
  }
}
</script>

<style scoped>
.slide a img {
  width: 100%;
}
</style>