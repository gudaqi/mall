<template>
  <div id="detauil">
    <detail-nav-bar class="nav-top" />
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-middle-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :info-param="infoParam" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailMiddleInfo from "./childComps/DetailMiddleInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";

import Scroll from "components/common/scroll/Scroll"

import {getDetail, Goods, Shop, GoodsParam} from "network/detail";
import emitter from "../../main";

export default {
  name: "detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailMiddleInfo,
    DetailParamInfo,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      infoParam: {},

    }
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid
    // console.log(this.$router.params)

    //2.进行网络请求
    getDetail(this.iid).then(res => {

      const data = res.result


      //1.获取顶部的图片
      this.topImages = data.itemInfo.topImages

      //2.获取商品信息
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

      // 3.获取商家信息
      this.shop = new Shop(data.shopInfo)

      // 4.获取商品详细信息
      this.detailInfo = data.detailInfo

      // 5.获取参数的信息
      this.infoParam = new  GoodsParam(data.itemParams.info, data.itemParams.rule)
    })
  },
  methods: {
      imageLoad() {
      this.$refs.scroll.scroll.refresh()
    }

  }
}
</script>

<style scoped>
#detauil {
  position: relative;
  z-index: 99;
  background: #ffffff;
  height: 100vh;
}
.nav-top {
  position: relative;
  z-index: 99;
  background: #ffffff;
}
.content {
  height: calc(100% - 44px);
}
</style>