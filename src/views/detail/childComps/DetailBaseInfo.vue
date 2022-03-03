<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-titile">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[2].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type:Object,
      default() {
        return {}
      }
    }
  },
  created() {

  }
}
</script>

<style scoped>
.base-info {
  padding: 10px 9px;

}
.info-titile {
  line-height: 25px;
}
.info-price {
  margin-bottom: 10px;
}
.n-price {
  color: #ff8198;
  font-size: 25px;
}
.o-price {
  margin-left: 10px;
  text-decoration: line-through;
  color: #666666;
  font-size: 14px;
}
.discount {
  margin-left: 8px;
  padding: 2px 6px;
  font-size: 14px;
  background: #ff8198;
  border-radius: 15px;
  position: absolute;
  color: #ffffff;
}
.info-other {
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}
.info-other span {
  color: #8d8d8d;
}
.info-service {
  display: flex;
  /*line-height: 40px;*/
  justify-content: space-between;
  border-top: 1px #d1cccc solid;
  padding: 24px 0;
  border-bottom: 4px #f1ecec solid;
}
.info-service-item {
  /*width: 100%;*/
}
.info-service-item img {
  width: 14px;
}
.info-service-item span {
  font-size: 14px;
}


</style>