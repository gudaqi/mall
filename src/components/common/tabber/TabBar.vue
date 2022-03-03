<template>
<div class="tabber">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.tabber {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fefefe;
  box-shadow: 0px -3px 1px 3px rgba(100, 100, 100, 0.1);
}

</style>