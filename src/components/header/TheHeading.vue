<template>
  <div class="dp-heading">
    <img class="logo" alt="data-points" src="../../assets/img/logo.png">
    <span class="title">Data-Points</span>
  </div>
</template>

<style lang="scss" scoped>
.dp-heading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  background-color: #341e52;
  user-select: none;
  background: linear-gradient(to bottom, #24005f, #341e52);

  .logo {
    width: 50px;
    margin: 5px 0 0 20px;
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
</style>
