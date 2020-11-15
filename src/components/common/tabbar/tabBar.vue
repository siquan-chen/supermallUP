<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'tabbar',
  components:{
    
  }
}
</script>

<style>
  #tabbar{
    width: 100%;
    height: 49px;
    display: flex;
    position: fixed; 
    left: 0; 
    right: 0;
    bottom: 0;
    background-color: #f6f6f6;
    box-shadow: 0px -2px 2px rgba(100, 100, 100, 0.1);
    margin-top: 49px;
    text-align: center;
  }
</style>
