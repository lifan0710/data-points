<template>
  <header class="dp-heading">
    <div class="logo-wrap">
      <img class="logo" alt="DataPoints" title="DataPoints" src="../../assets/img/logo-cover.png">
      <!-- <span class="title">DataPoints</span> -->
    </div>
    <div class="nav">
      <ul class="nav-list">
        <li v-for="(legend, index) in legends" :key="index">
          <div class="dp-heading-nav-item-wrap">
            <i :class="'fa ' + legend.icon"></i>
            <span v-text="legend.title"></span>
            <div class="components-panel">
              <ul class="components-menu">
                <li v-for="item in legend.components" :key="item.id" @click="addComponentToCanvas(item)">
                  <div class="components-nav-image">
                    <img :src="item.image">
                    <span class="mask" v-if="!item.enabled">
                      <i class="fa fa-hourglass-half"></i>
                      <br>
                      未开放
                    </span>
                  </div>
                  <h6 v-text="item.title"></h6>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="tools">
      <ul class="tools-list">
        <li><i class="fa fa-question-circle" aria-hidden="true"></i><span>帮助</span></li>
        <li><i class="fa fa-desktop" aria-hidden="true"></i><span>预览</span></li>
        <li><i class="fa fa-paper-plane" aria-hidden="true"></i><span>发布</span></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'theHeading',
  computed: {
    legends () {
      return this.$store.state.legendMenu
    }
  },
  method: {
    // 添加组件至中央画布
    addComponentToCanvas (component) {
      this.$store.commit('addComponent', component)
    }
  },
  created () {
    // 初始化顶部组件选择菜单
    this.$store.dispatch('getLegendsMenu')
  }
}
</script>

<style lang="scss" scoped>
.dp-heading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  z-index: 999;
  color: #fff;
  background-color: #292929;
  user-select: none;

  .logo-wrap {
    .logo {
      height: 35px;
      margin: 14px 0 0 20px;
      float: left;
    }

    .title {
      color: rgba(255, 255, 255, .9);
      font-size: 20px;
      font-weight: 700;
      margin-left: 10px;
      line-height: 60px;
      vertical-align: top;
    }
  }

  .nav-list {
    padding: 0;
    margin: 0;
    float: left;
    margin-left: 50px;

    & > li {
      float: left;
      list-style: none;
      height: 60px;
      width: 60px;
      text-align: center;
      line-height: 25px;
      cursor: pointer;
      font-size: 12px;
      position: relative;

      i {
        display: block;
        font-size: 20px;
        margin-top: 10px;
      }

      &:hover {
        background-color: #444;

        .components-panel {
          display: block;
        }
      }

      .components-nav-image {
        position: relative;

        .mask {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          color: #e5bf49;
          background-color: rgba(0,0,0,.3);
        }
      }
    }
    .components-panel {
      position: absolute;
      top: 60px;
      left: 0;
      background-color: #444;
      z-index: 999;
      display: none;
      max-height: 400px;
      overflow-y: auto;
    }
    .components-menu {
      padding: 10px;
      min-width: 360px;

      li {
        width: 100px;
        height: 100px;
        color: #999;
        float: left;
        margin-right: 10px;
        margin-bottom: 10px;
        list-style: none;
        line-height: 15px;

        h6 {
          font-weight: 400;
          margin: 5px auto;
        }

        img {
          display: block;
          width: 100%;
          height: 100%;
        }

        &:hover {
          color: #fff;

          img {
            border: 1px solid #00ceff;
          }
        }
      }
      &:after {
        content: "";
        display: table;
        clear: both;
      }
    }
  }
  .tools {
    float: right;

    .tools-list {
      margin: 0;
      font-size: 12px;
      margin-right: 10px;

      li {
        list-style: none;
        float: right;
        text-align: center;
        margin-right: 10px;
        cursor: pointer;
        height: 60px;
        padding: 0 15px;
        line-height: 25px;

        &:hover {
          background-color: #444
        }

        i {
          display: block;
          font-size: 20px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
