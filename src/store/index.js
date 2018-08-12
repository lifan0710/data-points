import Vue from 'vue'
import Vuex from 'vuex'
import legends from '../api/legends'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 是否折叠左侧面板
    isCollapseLeftside: false,
    // 是否折叠右侧面板
    isCollapseRightside: false,
    // 画布中渲染组件列表
    inRenderComponentList: [],
    // 已选中组件列表
    currentComponentList: [],
    // 画布设置选项
    pageSetting: {},
    // 页面缩放比例
    pageScale: 0,
    // 顶部组件菜单
    legendMenu: []
  },
  mutations: {
    // 折叠/显示左侧面板
    toggleLeftside: state => {
      state.isCollapseLeftside = !state.isCollapseLeftside
    },
    // 折叠/显示右侧面板
    toggleRightside: state => {
      state.isCollapseRightside = !state.isCollapseRightside
    },
    // 设置顶部组件菜单
    setLegendMenu: (state, legends) => {
      state.legendMenu = legends
    }
  },
  actions: {
    // 获取顶部组件菜单数据
    getLegendsMenu ({ commit }) {
      legends.getLegendsMenu(legends => {
        commit('setLegendMenu', legends)
      })
    }
  }
})
