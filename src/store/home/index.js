import { reqCategoryList,reqGetBannerList } from "@/api";
//home模块的小仓库
const state = {
    //state中的数据默认初始值别瞎写,根据接口的返回值进行初始化
    categoryList:[],
    //轮播图数据
    bannerList:[],
};
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    },
    GETBANNERLIST(state,bannerList){
        state.bannerList = bannerList
    }
};
const actions = {
    //通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result);
        if(result.code==200){
            commit("CATEGORYLIST",result.data)
        }
    },
    //获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reqGetBannerList();
        if(result.code == 200){
            commit('GETBANNERLIST',result.data);
        }
    }
};
const getters = {};
export default{
    state,
    mutations,
    actions,
    getters
}