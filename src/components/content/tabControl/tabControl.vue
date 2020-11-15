<template>
  <div class="tabControl"> 
      <div v-for="(item , index) in titles" :key="index" class="tabCotrol-item">
        <!--  确定当前的被赋值的currentIndex是否与存在的三个的index匹配 -->
        <span :class="{active : index === currentIndex}" @click="itemClick(index)">{{item}}</span>
      </div>
  </div>
</template>


<script>
export default {
  name: 'tabControl',
  data() {
    return {
      currentIndex : 0,
    }
  },
  props:{
    titles:{ //定义父组件传来的数据
      type: Array,
      default(){
        return []
      }
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index;
      this.$emit("itemClick" , index)
    }
  },
}
</script>

<style>
  .tabControl{
    display: flex;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
  }
  .tabCotrol-item{
    flex: 1;
  }
  .tabControl .tabCotrol-item .active{
    padding-bottom: 3px;
    border-bottom: 3px solid var(--color-tint);
  }
</style>
