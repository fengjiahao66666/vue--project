<template>
  <div class="swiper-container" ref="cur">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(carousel,index) in list" :key="carousel.id">
              <img :src="carousel.imgUrl">
          </div>
      </div>
      <!-- 如果需要分页器 -->
         <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  </div>
</template>

<script>
//引入Swiper
import Swiper from 'swiper';
export default {
    name:"Carousel",
    props:['list'],
    watch: {
        list:{
            //不管数据有没有变化，立即监听一次
            //为什么监听不到list的变化，因为数据是父亲给的，给的时候就是一个对象，该有的数据都是有的
            immediate:true,
            handler(){
                //只能监听到数据已经有了，但v-for动态渲染仍不确定，因此还需要nextTick
                this.$nextTick(()=>{
                    var mySwiper = new Swiper(this.$refs.cur, {
                        //direction: 'vertical', // 垂直切换选项
                        loop: true, // 循环模式选项

                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true,
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },

                        // 如果需要滚动条
                        scrollbar: {
                            el: '.swiper-scrollbar',
                        },
                    })
                })
            }
        }
    },
}
</script>

<style>

</style>