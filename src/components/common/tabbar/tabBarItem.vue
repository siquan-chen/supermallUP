<template>
  <div class="tabbaritem" @click="onClick">

      <div v-if="!isActive"><slot name="img"></slot></div>
      <div v-else><slot name="img-active"></slot></div>
      <div :style="ActiveStyle"><slot name="text"></slot></div>
 
  </div>
</template>

<script>
export default {
  name: 'tab-bar-item',
  props:{
    path: String,  /* 将头组件中的path传入进来字符串类型 */
    activeColor: {
      type: String,
      default: "#f90",
    }
  },
  data() {
    return {
      active: 'active',
      index: 0
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1;  /* 用计算属性判断当前活跃的与全部作比较 */
    },
    ActiveStyle(){
      return this.isActive ? {color : this.activeColor} : {};
    }
  },
  methods: {
    onClick(){
      this.$router.push(this.path);
    }
  },
}
</script>

<style>
  .tabbaritem{
    font-size: 15px;
    flex: 1;
  }
  .tabbaritem img{
    vertical-align: middle;
    width: 25px;
    height: 25px;
  }
  .active{
    color: #f90;
  }
</style>