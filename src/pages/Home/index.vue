<template>
  <div>我是首页
    <!-- 三级联动全局组件 三级联动已经注册为全局组件，不需要再引入 -->
    <TypeNav/>
    <ListContaiber/>
    <Recommend/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
//引入其余组件
import ListContaiber from '@/pages/Home/ListContainer'
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/Floor'
import Brand from '@/pages/Home/Brand'
export default {
  name:'',
  components:{
    ListContaiber,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  }
}
</script>

<style>

</style>