import Vue from "vue";
import Vuex from "vuex"
//需要使用一次插件
Vue.use(Vuex);
//引入小仓库
import home from "./home";
import search from "./search";
import detail from "./detail";

//对外暴露Store类的一个实例
export default new Vuex.Store({
    //实现vuex仓库模块式开发存储数据
    modules:{
        home,
        search,
        detail
    }
});