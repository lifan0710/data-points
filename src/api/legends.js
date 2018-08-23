/**
 * The api get legends from server.
 */

const charts = {
  title: '系统图表',
  icon: 'fa-area-chart',
  components: [
    {id: 1, title: '基本柱状图', componentName: 'baseBar', image: 'static/image/charts-base-bar.png', enabled: false},
    {id: 2, title: '堆叠柱状图', componentName: 'stackBar', image: 'static/image/charts-stack-bar.png', enabled: false},
    {id: 3, title: '水平堆叠柱状图', componentName: 'horizontalStackBar', image: 'static/image/charts-horizontal-stack-bar.png', enabled: false},
    {id: 4, title: '胶囊柱状图', componentName: 'capsuleBar', image: 'static/image/charts-capsule-bar.png', enabled: false},
    {id: 5, title: '水平胶囊柱状图', componentName: 'horizontalCapsuleBar', image: 'static/image/charts-horizontal-capsule-bar.png', enabled: false},
    {id: 6, title: '分组柱状图', componentName: 'groupBar', image: 'static/image/charts-group-bar.png', enabled: false},
    {id: 7, title: '基本折线图', componentName: 'baseLine', image: 'static/image/charts-base-line.png', enabled: false},
    {id: 8, title: '折线堆积图', componentName: 'stackLine', image: 'static/image/charts-stack-line.png', enabled: false},
    {id: 9, title: '基本饼图', componentName: 'basePie', image: 'static/image/charts-base-pie.png', enabled: false},
    {id: 10, title: '目标占比饼图', componentName: 'ratePie', image: 'static/image/charts-rate-pie.png', enabled: false},
    {id: 11, title: '气泡图', componentName: 'bubbleScatter', image: 'static/image/charts-bubble-scatter.png', enabled: false},
    {id: 12, title: '散点图', componentName: 'baseScatter', image: 'static/image/charts-base-scatter.png', enabled: false},
    {id: 13, title: '雷达图', componentName: 'baseRadar', image: 'static/image/charts-base-radar.png', enabled: false}
  ]
}

const points = {
  title: '指标',
  icon: 'fa-newspaper-o',
  components: [
    {id: 14, title: '轮播翻转列表', componentName: 'overturnList', image: 'static/image/points-overturn-list.png', enabled: false},
    {id: 15, title: '数字翻牌器', componentName: 'changeNumber', image: 'static/image/points-change-number.png', enabled: false},
    {id: 16, title: '文字标签', componentName: 'textLabel', image: 'static/image/points-text-label.png', enabled: false},
    {id: 17, title: '条形占比图', componentName: 'rateStrip', image: 'static/image/points-rate-strip.png', enabled: false}
  ]
}

const geography = {
  title: '地理',
  icon: 'fa-globe',
  components: [
    {id: 18, title: '商用地图', componentName: 'bdMap', image: 'static/image/geography-bd-map.png', enabled: false},
    {id: 19, title: 'GeoJson地图', componentName: 'chartMap', image: 'static/image/geography-charts-map.png', enabled: false}
  ]
}

const text = {
  title: '文字',
  icon: 'fa-font',
  components: [
    {id: 20, title: '通用标题', componentName: 'commonTitle', image: 'static/image/text-common-title.png', enabled: false, default: {}},
    {id: 21, title: 'K-V表格', componentName: 'keyValueTable', image: 'static/image/text-key-value-table.png', enabled: false},
    {id: 22, title: '轮播列表', componentName: 'carouselList', image: 'static/image/text-carousel-list.png', enabled: false},
    {id: 23, title: '滚动文本', componentName: 'scrollText', image: 'static/image/text-scroll-text.png', enabled: false},
    {id: 24, title: '多行文本', componentName: 'textTextarea', image: 'static/image/text-textarea.png', enabled: false}
  ]
}

const tools = {
  title: '辅助图形',
  icon: 'fa-object-group',
  components: [
    {id: 25, title: '自定义背景块', componentName: 'customBackground', image: 'static/image/tools-custom-background.png', enabled: false, default: {}},
    {id: 26, title: '边框', componentName: 'border', image: 'static/image/tools-border.png', enabled: false},
    {id: 27, title: '单图片', componentName: 'singleImage', image: 'static/image/tools-single-image.png', enabled: false},
    {id: 28, title: '轮播图', componentName: 'carouselImage', image: 'static/image/tools-carousel-image.png', enabled: false},
    {id: 29, title: '字体图标', componentName: 'iconFont', image: 'static/image/tools-icon-font.png', enabled: false, default: {}}
  ]
}

const legends = [charts, points, geography, text, tools]

export default {
  getLegendsMenu (cb) {
    setTimeout(() => cb(legends))
  }
}
