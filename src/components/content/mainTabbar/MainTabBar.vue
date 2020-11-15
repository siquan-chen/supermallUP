<template>
  <div id="MainTabBar">
    <TabBar>
      
        <tab-bar-item path = '/home' activeColor= "green"> <!-- 这个vue子组件是通过插槽（slot）使用的 -->
          <img src="~assets/img/icon-test.svg" alt="" slot="img">
          <img src="~assets/img/fenlei.svg" alt="" slot="img-active">
          <div slot="text">首页</div>
        </tab-bar-item>
      
      

      <tab-bar-item path = '/shopping' activeColor="orange">
        <img src="~assets/img/shangchengxiantiao.svg" alt="" slot="img">
        <img src="~assets/img/shangcheng.svg" alt="" slot="img-active">
        <div slot="text">商城</div>
      </tab-bar-item>



      <tab-bar-item path = "/sort" activeColor="black">
        <img src="~assets/img/shouye.svg" alt="" slot="img">
        <img src="~assets/img/shouye_1.svg" alt="" slot="img-active">
        <div slot="text">分类</div>
      </tab-bar-item>


      <tab-bar-item path = "/trolley" activeColor="green">
        <img src="~assets/img/dilanxianxingiconyihuifu_huabanfuben.svg" alt="" slot="img">
        <img src="~assets/img/gouwuche.svg" alt="" slot="img-active">
        <div slot="text">购物车</div>
      </tab-bar-item>


      <tab-bar-item path = "/files" activeColor="blue">
        <img src="~assets/img/wodedangxuan.svg" alt="" slot="img">
        <img src="~assets/img/wode.svg" alt="" slot="img-active">
        <div slot="text">我的</div>
      </tab-bar-item>


    </TabBar>
  </div>
</template>

<script>

const TabBar = () => import('components/common/tabbar/tabBar')
const TabBarItem = () => import('components/common/tabbar/tabBarItem')
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBarItem,
  }
}
</script>

<style>

</style>
