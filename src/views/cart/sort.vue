<template>
  <div class="wrapper">
    <NavBar class="sort-nav">
      <div slot="center" class="home-center">商品分类</div>
    </NavBar>
  <router-view></router-view>
  </div>
   
</template>

<script>
import BScroll from  "better-scroll";
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'sort',
  data() {
    return {
      scroll: null,
    }
  },
  components:{
    NavBar,
    BScroll
  },
  // 组件创建完之后调用
  created() {
    
  },
  // 组件挂载完之后的生命周期函数
  mounted(){
    this.scroll = new BScroll(document.querySelector(".wrapper") , {

    })
  }
}
</script>

<style>
  .sort-nav{
    background-color: var(--color-tint);
    /* overflow: hidden; */
    /* overflow-y: scroll; */
  }
</style>
