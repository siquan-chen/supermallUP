<template>
  <div class="navbar home-nav">
    <!-- 具名插槽 -->
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
    
  </div>
</template>

<script>

export default {
  name: 'navbar',
  components:{
    
  }
}
</script>

<style>
  .home-nav{
    background-color: var(--color-tint);
    z-index: 9;
    position: fixed;
    left: 0;
    right: 0px;
    top: 0;
  }
  .navbar{
    /* height: 44px; */
    display: flex;
    line-height: 44px; /* line-hieght可以撑起整个div（但必须要内容） */
    text-align: center;
    /* box-shadow: 0px 2px 2px rgba(244, 244, 244, 0.5); */
  }
  .left , .right{
    width: 60px;
  }
  .center{
    flex: 1;
  }
  .home-center{
    font-size: 25px;
    font-weight: bold;
    color: #fff;
  }
</style>
