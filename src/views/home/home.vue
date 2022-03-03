<template>
<div id="home">
 <nav-bar id="tab-nav">
     <template v-slot:nav-center>
       <div>购物街</div>
     </template>
 </nav-bar>
  <tab-control class="tab-control"
               :titles="['流行','新款','精选']"
               @tabClick="tabclick"
               ref="tabControl1" v-show="isTabFixed"></tab-control>
  <scroll class="content" ref="scroll"
          :probe-type="3"

          @scroll="wraPeScroll"
          :pull-up-load="true"
          @pullingUp="loadMore">
    <home-swiper :banner="banner" @swiperimgload="swiperImgLoad"></home-swiper>
    <recommendview :recommends="recommend"></recommendview>
    <feature-view></feature-view>

    <tab-control class="tab-control"
                 :titles="['流行','新款','精选']"
                 @tabClick="tabclick"
                 ref="tabControl2"></tab-control>

    <goods-list :goods="showGoods"></goods-list>
  </scroll>
  <back-top class="back-top" @click="backsClick" v-show="isScroll"></back-top>
</div>


</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import Recommendview from "./childComps/Recommendview";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";


import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import backTop from "components/content/backTop/backTop";

import {getHomeData,getHomeGoods} from "network/home";
import emitter from "../../main";



export default {
  name: "home",
  components: {
    NavBar,
    HomeSwiper,
    Recommendview,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    backTop
  },
  data() {
    return {
      // result: null,
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: [] },
        'new': {page: 0, list: [] },
        'sell': {page:0, list: [] },
      },
      currentType: 'pop',
      isScroll: false,
      tabOffsetTop1: 650,
      isTabFixed: false,
      saveY: 0,
    }
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    }
  },

  created() {
    //生命周期开始，组件刚创建发送请求
    // 1.请求多个数据
    this.getHomeDataS();

    //2.请求商品数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');


  },
  mounted() {
    const refresh = this.debounce(this.$refs.scroll.refresh)
    //1. 监听item图片加载完成
    //vue2的事件总线方法
    // $bus.$on('imgone', () => {
    //   // this.$refs.scroll.scroll.refresh()
    //   console.log($bus)
    // })
    emitter.on('imgone',() => {
      this.$refs.scroll.scroll.refresh()
    })

    // 2.获取tabControl的offsetTop
    // 所有的组件都有一个属性$el:用于获取组件中的元素




  },
  methods: {
    /*
    网络请求方法
    */
    getHomeDataS() {
      getHomeData().then(res => {
        // this.result = res;
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type,page).then(res => {
        // console.log(res)
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },
    /**
    事件监听的方法
    */
    tabclick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
              break
        case 1:
          this.currentType = 'new'
              break
        case 2:
          this.currentType = 'sell'
              break
      }
      this.$refs.tabControl1.currentType = index
      this.$refs.tabControl2.currentType = index
      // return this.currentType
    },
    /*
    回顶部
    */
    backsClick() {
      this.$refs.scroll.scrollTo(0,0,2000)
    },
    wraPeScroll(position) {
      // 1.判断回到顶部是否显示
      let y = -position.y
      this.isScroll = y > 1000
      // 2.决定tabControl是否吸顶(position:fixed)
      this.isTabFixed = (-position.y) > this.tabOffsetTop1

    },

    loadMore() {
      this.getHomeGoods(this.currentType)

      // this.$refs.scroll.scroll.refresh()
    },

    //防抖动
    debounce(func, delay) {
      let timer = null
      return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          func.apply(this, args)
        }, delay)
      }
    },
    /*首页的吸顶*/
    swiperImgLoad() {
      this.tabOffsetTop = this.$refs.tabControl1.$el.offsetTop
    }

  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y
  },



}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  position: relative;
  height: 100vh;
}
#tab-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #ff8198;
  z-index: 999;
}
.tab-control {
  position: relative;
  top: 44px;
  background: #ffffff;
  z-index: 9;
}
.content {
  /*height: calc(100% - 49px);*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 92px;
  left: 0;
  right: 0;

}
.istab {

}
.back-top {
  position: absolute;
  bottom: 90px;
  right: 0;
  z-index: 9999;
}
</style>