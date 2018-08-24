<template>
  <div class="dp-center-wrap" :style="[wrapSize, wrapPosition, wrapPadding]">
    <div class="preview" :style="[pageScale]">

    </div>
  </div>
</template>

<script>
export default {
  name: 'TheCenterWrap',
  data () {
    return {
      wrapSize: { width: '0px', height: '0px' },
      wrapPadding: { 'padding-top': '20px', 'padding-left': '20px' }
    }
  },
  computed: {
    wrapPosition () {
      let sidebarLeftWidth = this.$store.state.isCollapseLeftside ? 0 : 160

      // Resize canvas's position when left or right side collapsed.
      this.pageResize()

      return {
        left: sidebarLeftWidth + 'px',
        top: '60px'
      }
    },
    pageScale () {
      let scale = this.$store.state.pageScale
      return { transform: 'scale(' + scale + ')' }
    },
    inRenderComponents () {
      return this.$store.state.inRenderComponentList
    },
    selectedComponents () {
      return this.$store.state.selectedComponentList
    }
  },
  methods: {
    pageResize () {
      let viewportWidth = window.innerWidth
      let viewportHeight = window.innerHeight

      let sidebarLeftWidth = this.$store.state.isCollapseLeftside ? 0 : 160
      let sidebarRightWidth = this.$store.state.isCollapseRightside ? 0 : 360

      let scale = 0

      let wrapWdith = viewportWidth - sidebarLeftWidth - sidebarRightWidth
      let wrapHeight = viewportHeight - 90 // Header + Footer = 90px
      this.wrapSize = {
        width: wrapWdith + 'px',
        height: wrapHeight + 'px'
      }

      scale = Math.min((wrapWdith - 60) / 1920, (wrapHeight - 60) / 1080)

      this.wrapPadding = {
        'padding-left': (wrapWdith - 1920 * scale) / 2 + 'px',
        'padding-top': (wrapHeight - 1080 * scale) / 2 + 'px'
      }

      this.$store.commit('resizePage', scale)
    }
  },
  created () {
    this.pageResize()
    window.addEventListener('resize', this.pageResize)
  }
}
</script>

<style lang="scss" scope>
.dp-center-wrap {
  position: absolute;
  top: 60px;
  left: 160px;
  width: calc(100% - 520px);
  height: calc(100% - 30px);
  padding: 30px 0 0 30px;
  transition: all .2s linear;
  overflow: auto;

  .preview {
    // default's width and height is 1920*1080
    width: 1920px;
    height: 1080px;
    background-color: #333;
    transform-origin: left top;
    transition: all .2s linear;
    position: absolute;
  }
}
</style>
