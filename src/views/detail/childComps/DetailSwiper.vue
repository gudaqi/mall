<template>
  <div class="detail-swiper">
    <swiper class="detail-img">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";

export default {
  name: "DetailSwiper",
  components: {
    SwiperItem,
    Swiper
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.detail-swiper {
  width: 100%;
  height: 300px;
}
.detail-swiper img {
  width: 100%;
  height: 100%;
}
.detail-img {
  height: 300px;
}
</style>