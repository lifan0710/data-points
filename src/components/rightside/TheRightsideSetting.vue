<template>
  <div class="dp-rightside" :class="{collapse: isCollapse}">
    <div class="btn-toggle" @click="toggle">
      <i class="fa fa-angle-double-left"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'theRightsideSetting',
  computed: {
    isCollapse () {
      return this.$store.state.isCollapseRightside
    }
  },
  methods: {
    toggle () {
      this.$store.commit('toggleRightside')
    }
  }
}
</script>

<style lang="scss" scoped>
  .dp-rightside {
    position: fixed;
    width: 360px;
    top: 60px; bottom: 0; right: 0;
    background-color: #f7f7f7;
    border-left: 1px solid #d9d9d9;
    transition: all .2s linear;
    &.collapse {
      right: -360px;
      .btn-toggle {
        i {
          transform: rotate(180deg);
        }
      }
    }
    .btn-toggle {
      position: absolute;
      width: 20px;
      top: 10px;
      left: -20px;
      color: #fff;
      text-align: center;
      cursor: pointer;
      font-size: 1.2em;
      background-color: #333;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      i {
        display: inline-block;
        transform: rotate(0deg);
      }
    }
  }
</style>
