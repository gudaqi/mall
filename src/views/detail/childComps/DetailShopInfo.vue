<template>
  <div class="shop-info">
    <div class="top-info">
      <img :src="shop.logo" alt="">
      <span class="top-name">{{shop.name}}</span>
    </div>
    <div class="shop-details">
      <div class="shop-left">
        <div class="info-sells">
          <div class="sells-count">
            {{fiter}}
          </div>
          <div class="sells-sales">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{shop.goodsCount}}
          </div>
          <div class="goods-all">全部宝贝</div>
        </div>
      </div>
      <div class="shop-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-better' : item.isBetter}" >{{item.score}}</td>
            <td class="better" :class="{'better-more' : item.isBetter}" >
              <span>{{item.isBetter ? '高':'低'}}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",

  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    },
  },
  computed: {
    fiter() {
      if(this.shop.sells < 10000) return this.sells;
      return (this.shop.sells / 10000 ).toFixed(1) + '万'
    }
  }

}
</script>

<style scoped>
.shop-info {
margin: 8px;
}
.top-info {
  padding: 5px 5px 15px 5px;
}
.top-info img {
  vertical-align: middle;
  border-radius: 50%;
  border: 1px #d1cccc solid;
  width: 60px;
  height: auto;
}
.top-name {
  margin-left: 15px;
}
.shop-details {
  display: flex;
  height: 50px;
}

.info-sells {
  margin-right: 15px;
}
.info-goods {
}

.sells-count {
  text-align: center;
}
.goods-count {
  text-align: center;
}

.shop-left {
  flex: 1;
  display: flex;
  justify-content: space-around;
  border-right: 1px #d1cccc solid;
}
.shop-right {
  flex: 1;
  display: flex;
  justify-content: space-around
}
table tr td:nth-child(1),
table tr td:nth-child(2) {
  padding-right: 15px;
}
.score {
  color: darkgreen;
}
.score-better {
  /*background: #ff5777;*/
  color: #ff5777;
}
.better span {
  background: darkgreen;
  color: #ffffff;
}
.better-more span {
  background: #ff5777;
  color: #ffffff;
}



.shop-bottom {
  margin-top: 15px;
text-align: center;
}
</style>