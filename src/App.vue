<template>
  <div id="app">
      <!--<floyd id= "floyd"/>-->
      <!--<Backpack></Backpack>-->
      <Navbar></Navbar>
      <!--<router-link to="/floyd">floyd</router-link>-->
      <!--<router-link to="/backpack">backpack</router-link>-->
      <router-view></router-view>
  </div>
</template>

<script>
import floyd from './components/floyd/Floyd.vue'
import Backpack from "@/components/backpack/Backpack";
import Navbar from "@/components/Navbar";

export default {
  name: 'app',
  components: {
      Navbar
  }
}
</script>

<style>
</style>
