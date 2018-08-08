<template>
  <div class="dp-leftside" :class="{collapse: isCollapse}">
    <div class="btn-toggle" @click="toggle">
      <i class="fa fa-angle-double-left"></i>
    </div>
    <div class="layer-title">图层面板</div>
    <div class="layer-opt" :class="{'disabled': !isChecked}">
      <span class="reorder" @click="upLayer">上移</span>
      <span class="reorder" @click="downLayer">下移</span>
      <span class="reorder" @click="topLayer">置顶</span>
      <span class="reorder" @click="bottomLayer">置底</span>
    </div>

    <div class="layer-delete">
       <i class="fa fa-trash"></i> 删除图层
    </div>
  </div>
</template>

<script>
export default {
  name: 'theLeftsideLayer',
  computed: {
    isCollapse () {
      return this.$store.state.isCollapseLeftside
    },
    isChecked () {
      let checkedComponents = this.$store.state.currentComponentList

      if (checkedComponents.length) return true
      else return false
    }
  },
  methods: {
    toggle () {
      this.$store.commit('toggleLeftside')
    },
    upLayer () {},
    downLayer () {},
    topLayer () {},
    bottomLayer () {}
  }
}
</script>

<style lang="scss" scoped>
  .dp-leftside {
    position: fixed;
    width: 160px;
    left: 0;
    top: 60px;
    bottom: 0;
    background-color: #f7f7f7;
    border-right: 1px solid #d9d9d9;
    transition: all 0.2s linear;
    z-index: 999;

    &.collapse {
      left: -160px;
      .btn-toggle i {
        transform: rotate(180deg);
      }
    }
    .btn-toggle {
      position: absolute;
      width: 25px;
      right: -25px;
      top: 20px;
      background-color: #333;
      border: 1px solid #d2d2d2;
      border-left: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      line-height: 22px;
      text-align: center;
      font-size: 22px;
      color: #fff;
      cursor: pointer;
    }

    .layer-title {
      color: #555;
      text-align: center;
      background-color: #fff;
      padding: 8px 0;
      border-bottom: 1px solid #d9d9d9
    }

    .layer-opt {
      border-bottom: 1px solid #d9d9d9;
      font-size: 0;
      .reorder {
        font-size: 12px;
        display: inline-block;
        width: 25%;
        padding: 5px 0;
        text-align: center;
        cursor: pointer;
        border-right: 1px solid #d9d9d9;
        &:hover {
          background-color: rgb(0, 193, 222);
          color: #fff;
        }
        &:last-child {
          border: none;
        }
      }
      &.disabled {
        .reorder {
          cursor: not-allowed;
          color: #999;
          &:hover {
            background: none;
          }
        }
      }
    }

    .layer-delete {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      text-align: center;
      height: 30px;
      border-top: 1px solid #d9d9d9;
      line-height: 30px;
      cursor: pointer;
    }
  }
</style>
