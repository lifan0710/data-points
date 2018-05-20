<template>
  <div id="app">
    <the-heading></the-heading>
    <the-leftside-layer></the-leftside-layer>
    <the-rightside-setting></the-rightside-setting>
  </div>
</template>

<script>
import theHeading from './components/header/TheHeading'
import theLeftsideLayer from './components/leftside/TheLeftsideLayer'
import theRightsideSetting from './components/rightside/TheRightsideSetting'

export default {
  name: 'index',
  data () {
    return {}
  },
  components: {
    theHeading,
    theLeftsideLayer,
    theRightsideSetting
  }
}
</script>

<style lang="scss" scoped>
#app {
  height: 100%;
  background: url(./assets/img/main-bg.png) repeat;
  background-size: 8px 8px;
}
</style>
