<template>
  <div class="param-info" v-if="Object.keys(infoParam).length">
    <table v-for="(table, index) in infoParam.sizes"
           :key="index" class="info-param-index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr " :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info, index) in infoParam.infos" :key="index">
        <td class="info-two-key">{{info.key}}</td>
        <td class="info-two-value">{{info.value}}</td>
      </tr>
    </table>
    <div v-if="infoParam.image.length !== 0">
      <img :src="infoParam.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    infoParam: {
      type: Object,
      default() {
        return {}
      }

    }
  }
}
</script>

<style scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
}
.param-info table {
  width: 100%;
  border-collapse: collapse;
}
.param-info table td {
  padding: 10px;
}
.info-param-index tr {
  border: 1px #d1cccc solid;
}

.info-param tr {
  padding: 6px;
  border-bottom: 1px #d1cccc solid;
}
.info-two-key {
  width: 20%;
}
.info-two-value {
  color: #ff8198;
}
img {
  width: 100%;
}

</style>