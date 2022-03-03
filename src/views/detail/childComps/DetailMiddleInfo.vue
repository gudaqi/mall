<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="middle-info">
    <div class="info-desc clear-fix">
      <div class="start">
      </div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
    <div class="info-list">
      <img :src="item" alt="" v-for="(item,index) in detailInfo.detailImage[0].list"
           :key="index" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailMiddleInfo",
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      counter: 0,
      imageLength: 0
    }
  },
 methods: {
    imgLoad() {
      if (++this.counter === this.imageLength) {
        this.$emit('imageLoad')
      }
    }
 },
  watch: {
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length
    }
  }
}
</script>

<style scoped>
.middle-info {

}
.info-desc {
  border-top: 2px #d1cccc solid;
  padding: 8px;
}
.desc {
  text-align: center;
}
.info-key {
  margin-top: 25px;
  margin-bottom: 4px;
  padding-bottom: 25px;
  text-align: center;
  border-bottom: 2px #d1cccc solid;
}
.info-list {
  width: 100%;

}
.info-list img{
  width: 100%;
}

</style>