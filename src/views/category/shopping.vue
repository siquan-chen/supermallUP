<template>
  <div id="shopping">
    <NavBar class="shopping-nav">
      <div slot="center" class="home-center">精选商城</div>
    </NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'shopping',
  components:{
    NavBar,
  }
}
</script>

<style>
  .shopping-nav{
    background-color: var(--color-tint);
  }
</style>
