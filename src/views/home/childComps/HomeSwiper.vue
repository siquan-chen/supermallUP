<template>
  <div class="HomeSwiper">
    <Swiper>    
      <SwiperItem v-for="(item , index) in banners" :key='index'>
        <a :href="item.link"><!-- 必须动态绑定：v-bind -->
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>


<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
  name: 'HomeSwiper',
  props:{
    banners:{
      type: Array,
      default () {
        return []
      }
    },
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style>

</style>
