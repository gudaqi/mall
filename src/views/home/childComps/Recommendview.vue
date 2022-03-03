<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recommendview",
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  margin-top: 10px;
  padding-bottom: 10px;
  display: flex;
  box-shadow: 0px 2px 10px 2px rgba(75, 75, 75, 0.2);
}
.recommend-item {
  flex: 1;
}
.recommend-item a img {
  padding: 10px;
  width: 100%;
}
.recommend-item a div {
  text-align: center;
  font-size: 12px;
}

</style>