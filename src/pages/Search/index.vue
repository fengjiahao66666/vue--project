<template>
  <div>我是搜索
    <h1>params参数---{{ $route.params.keyword }}---{{ keyword }}</h1>
    <h1>query参数---{{ $route.query.k }}----{{ k }}</h1>
  </div>
</template>

<script>
export default {
  name:'',
  //路由组件是可以传递props数据
  props:['keyword','k']
}
</script>

<style>

</style>