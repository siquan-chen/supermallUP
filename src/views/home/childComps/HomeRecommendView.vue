<template>
  <div class="HomeRecommendView">
    <div v-for="(item , index) in recommends" :key="index" class="HomeRecommendView-item">
      <a :href="item.link"><!-- 记住一定要动态绑定 -->
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>


<script>

export default {
  name: 'HomeRecommendView',
  props:{
    recommends:{
      type: Array,
      default(){
        return []
      }
    }
  },

  components:{

  }
}
</script>

<style>
  .HomeRecommendView{
    display: flex;
    text-align: center;
    font-size: 12px;
    padding: 10px 0 20px 0;
    border-bottom: 10px solid #eee;
  }
  .HomeRecommendView .HomeRecommendView-item{
    flex: 1;
  }
  .HomeRecommendView img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
