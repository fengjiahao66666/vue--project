//当前的模块：API进行统一管理
import requests from './request';
import mockRequests from './mockAjax'

//三级联动的接口
// /api/product/getBaseCategoryList  get无参数

//发请求:axios发请求返回的结果是Promise对象  /product/getBaseCategoryList
//export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqCategoryList = ()=>requests.get('/product/getBaseCategoryList');

//获取banner （home首页轮播图）的接口
export const reqGetBannerList = ()=>mockRequests.get('/banner');

//获取floor数据
export const reqFloorList = ()=>mockRequests.get('/floor');