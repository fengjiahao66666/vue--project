import { reqGoodsInfo } from "@/api";
const state = {
    goodInfo : {},
};
const mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    }
};
const actions = {
    //获取产品信息的action
    async getGoodInfo({commit},skuId){
        let result = await reqGoodsInfo(skuId);
        if(result.code==200){
            commit('GETGOODINFO',result.data);
        }
    }
};
const getters = {
    //简化数据
    categoryView(state){
        //比如state.goodInfo初始状态是空对象，空对象的categoryView是undefined
        //当前categoryView属性值至善是一个空对象，就不会出现假报错
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state){
        return state.goodInfo.skuInfo || {};
    }
};
export default{
    state,
    mutations,
    actions,
    getters
}