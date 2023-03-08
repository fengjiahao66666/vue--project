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
    <!-- <button @click="add">点我加一</button>
    <span>仓库的数据{{ count }}</span>
    <button>点我减一</button> -->
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

// import { mapState } from 'vuex'
export default {
  name:'',
  components:{
    ListContaiber,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  // computed:{
  //   ...mapState(['count'])
  // },
  // methods:{
  //   add(){
  //     //派发action
  //     this.$store.dispatch('add')
  //   }
  // }
}
</script>

<style>

</style>