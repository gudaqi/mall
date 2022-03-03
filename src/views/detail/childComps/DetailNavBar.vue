<template>
  <div>
   <nav-bar>
     <template v-slot:nav-left>
       <div class="img-top" @click="btnBack">
         <img src="~assets/img/common/back.svg" alt="">
       </div>
     </template>
     <template v-slot:nav-center>
       <div class="title">
         <div v-for="(item, index) in titles"
              class="title-lis"
              :class="{active: index === currentIndex}"
              @click="btnColor(index)">{{item}}</div>
       </div>
     </template>
     <template v-slot:nav-right>
       <div>...</div>
     </template>

   </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import detail from "../detail";
export default {
  name: "DetailNavBar",
  components: {
    detail,
    NavBar

  },
  data() {
    return {
      titles:['商品', '参数', '评论', '推荐'],
      currentIndex: 0,


    }
  },
  methods: {
    btnColor(index) {
      this.currentIndex = index
    },
    btnBack() {
      this.$router.back()
    }
  },




}
</script>

<style scoped>
.title {
  display: flex;
  font-size: 16px;
  color: #666666;
  justify-items: center;
}
.title-lis {
  flex: 1;
  line-height: 26px;
  justify-items: center;
}
.active {
  color: #ff8198;
}
.img-top {
  text-align: center;
  margin-top: 10px;
}
</style>