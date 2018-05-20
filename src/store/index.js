import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 折叠/显示左侧面板
    isCollapseLeftside: false,
    // 折叠/显示右侧面板
    isCollapseRightside: false,
    // 画布中渲染组件列表
    inRenderComponentList: [],
    // 已选中组件列表
    currentComponentList: [],
    // 画布设置选项
    pageSetting: {}
  },
  mutations: {
    toggleLeftside: state => {
      state.isCollapseLeftside = !state.isCollapseLeftside
    },
    toggleRightside: state => {
      state.isCollapseRightside = !state.isCollapseRightside
    }
  },
  actions: {}
})
