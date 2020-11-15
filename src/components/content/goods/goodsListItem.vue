<template>
  <div class="goodsListItem"> 
      <img :src="goodsListItem.show.img" alt="">
      <div>
        <p class="hide">{{goodsListItem.title}}</p>
        <span class="price">{{goodsListItem.price}}</span>
        <span>{{goodsListItem.cfav}}</span>
      </div>
  </div>
</template>


<script>
export default {
  name: 'goodsListItem',
  props:{
    goodsListItem:{
      type: Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style>
  .goodsListItem{
    /* margin-left: 3.5%; */
    text-align: center;
    display: inline-block;
    width: 45%;
    padding-bottom: 5px;
    font-size: 14px;
    padding: 2px;
  }
  .goodsListItem img{
    width: 100%;
    height: 220px;
    border-radius: 5px;
  }
  .hide{
    width: 100%;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }

</style>
