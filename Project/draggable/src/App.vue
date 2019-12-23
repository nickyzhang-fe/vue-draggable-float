<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <draggable>
      <div style="height: 100px; width: 100px; background: black;">test</div>
    </draggable>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Draggable from './components/Draggable'

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
