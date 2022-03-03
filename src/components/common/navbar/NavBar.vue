<template>
<div class="nav-bar">
  <div class="nav-left"><slot name="nav-left"></slot></div>
  <div class="nav-center"><slot name="nav-center"></slot></div>
  <div class="nav-right"><slot name="nav-right"></slot></div>
</div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  box-shadow: 0px 2px 10px 1px rgba(75, 75, 75, 0.1);
}
.nav-left {
  width: 60px;
}
.nav-center {
  flex: 1;
  padding-top: 0.625rem;
  text-align: center;
  font-size: 1.5rem;
  color: #111111;
}
.nav-right {
  width: 60px;
}
</style>