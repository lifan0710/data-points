<template>
  <div class="dp-footer" :style="position">
    <div class="status-info">
      <i class="fa fa-cog fa-spin"></i>
      <span v-text="systemInfo"></span>
    </div>
    <div class="resize">
      <span class="icon-button-minus" @click="zoomDown"><i class="fa fa-search-minus"></i></span>
      <div class="slider">
        <el-slider v-model="pageScale" :show-tooltip="true" :step="10"></el-slider>
      </div>
      <span class="icon-button-add" @click="zoomUp"><i class="fa fa-search-plus"></i></span>
      <span class="size-text" v-text="pageScaleText + '%'"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter',
  computed: {
    position () {
      return {
        left: this.$store.state.isCollapseLeftside ? '0px' : '160px',
        right: this.$store.state.isCollapseRightside ? '0px' : '360px'
      }
    },
    pageScaleText () {
      return (this.$store.state.pageScale * 100).toFixed(2)
    },
    pageScale: {
      get () {
        return this.$store.state.pageScale * 100
      },
      set (value) {
        this.$store.commit('resizePage', value / 100)
      }
    },
    systemInfo () {
      return '系统状态占位'
    }
  },
  methods: {
    zoomUp () {
      this.$store.commit('resizePage', this.$store.state.pageScale + 0.1)
    },
    zoomDown () {
      this.$store.commit('resizePage', this.$store.state.pageScale - 0.1)
    }
  }
}
</script>

<style scope lang="scss">
.dp-footer {
  position: fixed;
  left: 161px;
  right: 361px;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  background-color: #fff;
  transition: all 0.2s linear;

  .status-info {
    float: left;
    width: 200px;
    margin-left: 20px;
    font-size: 12px;

    & > i {
      font-size: 16px;
      margin-right: 10px;
    }
  }

  .resize {
    float: right;
    position: relative;

    .slider {
      width: 250px;
      padding: 0 100px 0 30px;
    }

    .icon-button-minus {
      left: 0;
    }

    .icon-button-add {
      right: 70px;
    }

    .size-text {
      right: 10px;
      color: #333;
      font-size: 12px;
    }

    & .icon-button-add,
    & .icon-button-minus,
    & .size-text {
      position: absolute;
      top: 3px;
      color: #20a0ff;
      cursor: pointer;
    }
  }
}
</style>
