<template>
  <div class="goodsList"> 
      <GoodsListItem v-for="(item , index) in goodsList" :key="index" :goodsListItem = 'item'/>
  </div>
</template>

<script>
import GoodsListItem from './goodsListItem'
export default {
  name: 'goodsList',
  components:{
    GoodsListItem,
  },
  props:{
    goodsList:{
      type: Array,
      default(){
        return []
      }
    }
  },
}
</script>

<style>
  .goodsList{
    display: flex; /* 集体水平对齐 */
    flex-wrap: wrap; /* 不包裹 */
    justify-content: space-around;/* 秒啊！！水平均等分 */
  }
</style>
