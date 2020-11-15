<template>
  <div id="home">

    <NavBar><div slot="center" class="home-center">购物街</div></NavBar>
    <Scroll class="content" ref="scroll" :probeType = "3" @ShowBackTop = "ShowBackTop" @pullingUp = "PullingUp">
        <HomeSwiper :banners = "banners"/>
        <HomeRecommendView :recommends = "recommends"/>
        <HomeWeekFashion :recommends= "recommends"/>
        <TabControl :titles = 'titles' @itemClick = 'TabClick'/>
        <GoodsList :goodsList = "showGoods"/>
    </Scroll>
    <!--监听一个组件的原生事件时，必须给对应的事件加上.native修饰符，才能监听 -->
    <BackTop @click.native="backClick" v-show="isBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import HomeWeekFashion from './childComps/HomeWeekFashion'

import GoodsList from 'components/content/goods/goodsList'
import TabControl from 'components/content/tabControl/tabControl'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata , getHomeGoods} from 'network/home'


export default {

  name: 'home',
  data() {
    return {
      banners :[],
      recommends: [],
      titles: ["流行" , "新品" , "精选"],
      goods: {
        "pop": {page: 0 , list: []},
        "new":{page: 0 , list: []},
        "sell":{page: 0 , list: []},
      },
      currentType : 'pop',
      isBackTop: false,
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeWeekFashion,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  computed: {
    showGoods(){
      return this.goods[this.currentType].list
    },
  },
  /* 在创建组件时，会生成一个生命周期函数created() */
  created(){
    //这里执行的都是异步操作
    this.getHomeMultidata()

    // 复杂方法接口的使用
    // 请求商品数据
    this.getHomeGoods("pop")
    this.getHomeGoods("new")
    this.getHomeGoods("sell")
  },
  methods: {
    /* 
    * 数据交互用到的方法
    */
    TabClick(index){ //点击TabControl切换商品
      switch(index){
        case 0 :
          this.currentType = 'pop';
          break;
        case 1 :
          this.currentType = 'new';
          break;
        case 2 :
          this.currentType = 'sell';
          break;
      }  
    },
    backClick(){
      // this.$refs.refname方法是两个组件之间通信的方法之一
      this.$refs.scroll.scrollTo(0 , 0 , 500)
    },
    ShowBackTop(position){
      // 用v-show与position.y 判断组件是否显示
      if(position.y <= -1150){
        this.isBackTop = true;
      }else{
        this.isBackTop = false;
      }
    },
    PullingUp(){
      this.getHomeGoods(this.currentType);
    },
    /* 
    * 网络请求使用的方法
    */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      }).catch(err => {
        console.log(err);
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type , page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      }).catch( err => {
        console.log(err);
      })
    }
  },
}
</script>

<style scoped> /* scoped：作用域 */
/*粘型定位  只存在文档流中*/
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .content{
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0px;
    right: 0px;
  }
</style>
