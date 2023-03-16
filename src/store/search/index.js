import {reqGetSearchInfo} from '@/api';
//search模块的小仓库
const state = {
    //仓库初始状态
    searchList:{}
};
const mutations = {
    GETSEARCHLIST(state,searchList){
        state.searchList = searchList;
    }
};
const actions = {
    //获取search模块数据
    async getSearchList({commit},params={}){
        //当前这个reqGetSearchInfo函数在调用获取服务器数据的时候，至少传递一个参数（空对象
        //params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        // console.log(result);
        if(result.code == 200){
            commit('GETSEARCHLIST',result.data);
        }
    }
};
//计算属性  在项目中是为了简化仓库中的数据而生
//可以把将来我们在组件中需要用的数据简化一下，组件在获取数据时就方便了
const getters = {
    //当前形参state是当前仓库中的state，并非大仓库中的state
    goodsList(state){
        //这样书写是有问题的
        //如果服务器数据回来了state.searchList.goodsList是一个数组
        //加入没网络state.searchList.goodsList返回的就是undefined
        //返回值至少是个空数组
        return state.searchList.goodsList || [];
    },
    trademarkList(state){
        return state.searchList.trademarkList || [];
    },
    attrsList(state){
        return state.searchList.attrsList || [];
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}