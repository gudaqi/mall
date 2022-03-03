<template>
<div class="goods-item" @click="itemClick">
  <img :src="goodsitem.show.img" alt="" @load="imgone">
  <p>{{goodsitem.title}}</p>
  <span class="price">{{goodsitem.price}}</span>
  <span class="collect">{{goodsitem.cfav}}</span>
</div>
</template>

<script>
import emitter from "../../../main";

export default {
  name: "GoodsListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgone() {
      // vue2的事件总线方法
      // this.$bus.emit('imgone')
      emitter.emit('imgone')
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsitem.iid)
    }
  },

}
</script>

<style scoped>
.goods-item {
  /*padding-bottom: 40px;*/
  width: 167px;
  padding: 15px 10px 40px;
  flex: 50%;
}
.goods-item img {
  width: 100%;
  height: 250px;
  border-radius: 6px;
}
.goods-item p {
  margin-bottom: 8px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
}
.goods-item .price {

}
.goods-item .collect {
  margin-right: 15px;
  float: right;
}
</style>