<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>



export default {
  name: 'App',

}
</script>

<style scope lang="less">
.box{
  width:100px;
  background: red;
  height:100px;

 display: flex;
  overflow-x: scroll;
  .box1{
    width:40px;
    height:30px;
    flex: 0 0 auto;
  }
}
</style>
