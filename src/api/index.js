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

//获取搜索模块的数据 地址/api/list 请求方式：post
//参数：需要带参数
/*
{
  "category3Id": "61",
  "categoryName": "手机",
  "keyword": "小米",
  "order": "1:desc",
  "pageNo": 1,
  "pageSize": 10,
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
  "trademark": "4:小米"
}
*/
//当前函数需要接收外部传递的参数
//当前接口给服务器传递的参数params至少是一个空对象
//当前接口（获取搜索模块的数据 ，给服务器穿的一个默认参数，至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})