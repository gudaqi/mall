<template >
  <div class="tab-bar-item" @click="activeClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :class="{active: isActive}"><slot  name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
  },
  data() {
    return {
      // isActive: false,
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    activeClick() {
      this.$router.replace(this.path)
      // this.isActive = true
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  padding: 20px 0;
  text-align: center;
  font-size: 20px;
}
.active {
  color: red;
}

</style>