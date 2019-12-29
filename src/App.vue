<!--
 * @Author: your name
 * @Date: 2019-12-29 11:13:00
 * @LastEditTime : 2019-12-29 11:18:02
 * @LastEditors  : Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-draggable-float/src/App.vue
 -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <draggable :distanceRight='100' :distanceBottom='100' :isScrollHidden='false' :isCanDraggable='true'>
      <div style="height: 50px; width: 50px; background: black;">test</div>
    </draggable>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Draggable from './components/Draggable'
// import Draggable from 'vue-draggable-float'
export default {
  name: 'app',
  components: {
    HelloWorld,
    Draggable
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
