<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67">
      <img src="~assets/img/home/recommend_bg.jpg" alt="">
    </a>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  props:{
    feature: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.feature {
  width: 100%;
  margin-bottom: 10px;
}
.feature a {
  display: inline-block;
  width: 100%;
}
.feature img {
  width: 98%;
}
</style>