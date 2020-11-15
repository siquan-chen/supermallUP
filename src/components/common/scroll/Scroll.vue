<template>
  <div ref="wrpper"> 
      <div class="content" >   
        <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  props: { // 父组件属性传递子组件
    probeType: {
      type: Number,
      default: 3,
    }
  },
  data() {
    return {
      scroll: null,
    }
  },
  components:{
    BScroll
  },
  mounted() {
    this.$nextTick(() => {
      // 0和1: 不侦测
      // 2： 在手指滚动的过程中侦测，手指离开后惯性滚动不侦测
      // 3： 只要是滚动，都侦测
      this.scroll = new BScroll(this.$refs.wrpper , {
        observeDOM: true, // 拖动
        click: true, // 点击事件
        probeType: this.probeType, // Y坐标
        pullUpLoad: true, // 上拉
        pullDownRefresh: false,
        // pullDownRefresh: {
          // threshold: 开端; 起点
          // threshold: 100  //当下拉距离超过100px时触发 pullingDown 事件
        // }, // 下拉
      });
      
      this.scroll.on("scroll" , (position) => {
        // console.log(position); // position 是拖动Y轴坐标
        this.$emit("ShowBackTop" , position); // 子组件的属性传递给父组件
      });


      this.scroll.on("pullingUp" , () => {
        // console.log("上拉加载更多"); // 只会执行一次
        this.$emit("pullingUp");
        this.$nextTick(() => {
          this.scroll.refresh() // DOM 结构发生变化后，重新初始化BScroll
        })
        setTimeout(() => {
          this.scroll.finishPullUp(); // 500ms再次调用方法pullingUp();
        } , 1500)
      });

      // this.scroll.on('pullingDown' , () => {
      //   console.log("下拉更新");
      //   this.$nextTick(() => {
      //     this.scroll.refresh() // DOM 结构发生变化后，重新初始化BScroll
      //   })
      //   setTimeout(() => {
      //     this.scroll.finishPullDown();
      //   }, 1500);
      // })
      })
  },  
  methods: {
    scrollTo(x , y , time){
      return this.scroll.scrollTo(x , y , time);
    }
  },
}
</script>

<style>
  
</style>
