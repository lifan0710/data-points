<template>
  <div
    class="dp-transform-handler"
    :style="{left: left + 'px', top: top + 'px', width: width + 'px', height: height + 'px'}"
  >
    <div class="dp-tools-button">
      <span class="copy"><i class="fa fa-clone"></i></span>
      <span class="delete" @click="deleteComponent"><i class="fa fa-trash-o"></i></span>
    </div>
    <div class="dp-transform-tools">
      <div class="center" @mousedown.prevent="mousedownMove"></div>
      <div class="right"></div>
      <div class="bottom"></div>
      <dov class="right-bottom" @mousedown.prevent="mousedownResize"></dov>
    </div>
    <span class="resize"><i class="fa fa-caret-right"></i></span>
  </div>
</template>

<script>
  export default {
    name: 'TransformTool',
    props: ['dataSource'],
    data () {
      return {
        startX: 0,
        startY: 0
      }
    },
    computed: {
      width: {
        get () {
          return this.dataSource.style.width
        },
        set (value) {
          this.dataSource.style.width = value
        } 
      },
      height: {
        get () {
          return this.dataSource.style.height
        },
        set (value) {
          this.dataSource.style.height = value
        }
      },
      left: {
        get () {
          return this.dataSource.style.left
        },
        set (value) {
          this.dataSource.style.left = value
        }
      },
      top: {
        get () {
          return this.dataSource.style.top
        },
        set (value) {
          this.dataSource.style.top = value
        }
      }
    },
    methods: {
      // 组件拖拽时的鼠标按下事件
      mousedownMove (event) {
        this.startX = event.pageX - this.left * this.$store.state.pageScale
        this.startY = event.pageY - this.top * this.$store.state.pageScale

        document.addEventListener('mousemove', this.mouseDragMove)
        document.addEventListener('mouseup', this.mouseup)
      },
      // 组件拖拽时的鼠标移动事件
      mouseDragMove (event) {
        let newLeft = parseInt((event.pageX - this.startX) / this.$store.state.pageScale)
        let newTop = parseInt((event.pageY - this.startY) / this.$store.state.pageScale)
        let gutter = this.$store.state.page.gutter

        if (Math.abs(newLeft - this.left) > gutter) {
          this.left = parseInt(newLeft / gutter) * gutter
        }
        if (Math.abs(newTop - this.top) > gutter) {
          this.left = parseInt(newTop / gutter) * gutter
        }
      },
      // 组件缩放时的鼠标按下事件
      mousedownResize (event) {
        this.startX = event.pageX - this.width * this.$store.state.pageScale
        this.startY = event.pageY - this.height * this.$store.state.pageScale

        document.addEventListener('mousemove', this.mousemoveResize)
        document.addEventListener('mouseup', this.mouseup)
      },
      // 组件缩放时的鼠标移动事件
      mousemoveResize (event) {
        this.width = (event.pageX - this.startX) / this.$store.state.pageScale
        this.height = (event.pageY - this.startY) / this.$store.state.pageScale

        document.addEventListener('mousemove', this.mousemoveResize)
        document.addEventListener('mouseup', this.mouseup)
      },
      // 鼠标按键释放
      mouseup () {
        document.removeEventListener('mousemove', this.mouseDragMove)
        document.removeEventListener('mousemove', this.mousemoveResize)
        document.removeEventListener('mouseup', this.mouseup)
      },
      // 键盘事件，使用方向键移动组件位置，以页面栅格大小为单位
      keyboardDirection (event) {
        let gutter = this.$store.state.page.gutter
        switch (event.keyCode) {
          case 37: 
            this.left -= gutter
            break
          case 38:
            this.top -= gutter
            break
          case 39:
            this.left += gutter
            break
          case 40:
            this.top += gutter
            break
          default:
        }
      },
      // 删除组件
      deleteComponent () {
        this.$confirm('此操作将从画布中删除该组件，是否继续？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }),then(() => {
          this.$store.commit('deleteComponent', this.dataSource)
        })
      }
    },
    mounted () {
      document.addEventListener('keydown', this.keyboardDirection)
    },
    destroyed () {
      document.removeEventListener('keydown', this.keyboardDirection)
    }
  }
</script>

<style lang="scss" scoped>
  .dp-transform-handler {
    position: absolute;
    left: 40%;
    top: 40%;
    width: 300px;
    height: 200px;
    border: 1px solid #00c1de;
    .dp-tools-button {
      span {
        background-color: #00c1de;
        color: #fff;
        padding: 2px;
        display: inline-block;
        width: 25px;
        position: absolute;
        text-align: center;
        top: 0;
        cursor: pointer;
        z-index: 99;
        &:hover {
          background-color: #048ea2;
        }
      }
      .copy {
        left: 0;
      }
      .delete {
        left: 25px;
      }
    }
    .dp-transform-tools {
      .left-top {
        position: absolute;
        left: 0;
        top: 0;
        height: 20%;
        width: 20%;
        cursor: nw-resize;
      }
      .top {
        position: absolute;
        left: 20%;
        top: 0;
        height: 20%;
        width: 60%;
        cursor: n-resize;
      }
      .right-top {
        position: absolute;
        right: 0;
        top: 0;
        height: 20%;
        width: 20%;
        cursor: ne-resize;
      }
      .left {
        position: absolute;
        left: 0;
        top: 20%;
        height: 60%;
        width: 20%;
        cursor: w-resize;
      }
      .center {
        position: absolute;
        left: 20%;
        top: 20%;
        height: 60%;
        width: 60%;
        cursor: move;;
      }
      .right {
        position: absolute;
        right: 0;
        top: 20%;
        height: 60%;
        width: 20%;
        cursor: e-resize;
      }
      .left-bottom {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 20%;
        width: 20%;
        cursor: sw-resize;
      }
      .bottom {
        position: absolute;
        left: 20%;
        bottom: 0;
        height: 20%;
        width: 60%;
        cursor: s-resize;
      }
      .right-bottom {
        position: absolute;
        right: 0;
        bottom: 0;
        height: 20%;
        width: 20%;
        cursor: se-resize;
        z-index: 999;
      }
    }
    .resize {
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      border: 1px solid #00c1de;
      color: #00c1de;
      padding: 1px;
      width: 20px;
      height: 20px;
      cursor: se-resize;
      i {
        display: inline-block;
        transform: rotate(45deg);
        font-size: 22px;
        position: absolute;
        bottom: -5px;
        right: 1px;
      }
    }
  }
</style>
