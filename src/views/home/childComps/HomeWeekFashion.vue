<template>
<div class="HomeWF">
  <h1>本周流行</h1>
  <div class="HomeWeekFashion">
    <div v-for="(item , index) in recommends" :key="index" class="HomeWeekFashion-item">
      <a :href="item.link"><!-- 记住一定要动态绑定 -->
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
  <div class="HomeWeekFashion">
    <div v-for="(item , index) in recommends" :key="index" class="HomeWeekFashion-item">
      <a :href="item.link"><!-- 记住一定要动态绑定 -->
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</div>
</template>


<script>

export default {
  name: 'HomeWeekFashion',
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
  h1{
    text-align: center;
    font-size: 25px;
  }
  .HomeWeekFashion{
    display: flex;
    text-align: center;
    font-size: 12px;
  }
  .HomeWeekFashion .HomeWeekFashion-item{
    flex: 1;
  }
  .HomeWeekFashion img{
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
</style>
