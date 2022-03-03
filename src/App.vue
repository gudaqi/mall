<template >
<!--  vue2 写法-->
<!--  <keep-alive>-->
<!--    <router-view></router-view>-->
<!--  </keep-alive>-->
  <router-view v-slot="{ Component }">
    <keep-alive exclude="detail">
      <component :is="Component" />
    </keep-alive>
  </router-view>
  <div id="nav">
    <Maintab></Maintab>
  </div>
</template>

<script>
import Maintab from "components/common/tabber/Maintab";

export default {
  name:'app',
  components: {
    Maintab,
  }
}
</script>
<style>
@import "assets/css/base.css";

</style>
