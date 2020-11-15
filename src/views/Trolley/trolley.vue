<template>
  <div id="trolley">
    <NavBar class="trolley-nav">
      <div slot="center" class="home-center">购物车({{counter}})</div>
    </NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'trolley',
  data() {
    return {
      counter: 0
    }
  },
  components:{
    NavBar,
  }
}
</script>

<style>
  .trolley-nav{
    background-color: var(--color-tint);
  }
</style>
