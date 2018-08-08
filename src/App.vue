<template>
  <div id="app">
    <app-header></app-header>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/nav-menu/Header.vue';



export default {
  components: {
    "app-header": Header
  }
}
</script>

<style>
body {
  background-color: #F8F8FF;
}
</style>


