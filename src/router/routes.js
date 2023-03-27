//引入路由组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
//配置路由
export default[
    {
        path:"/detail/:skuid",
        component:Detail,
        meta:{show:true}
    },
    {
        path:"/home",
        component:Home,
        meta:{show:true}
    },
    {
        path:"/search/:keyword?",
        component:Search,
        meta:{show:true},
        name:"search",
        //路由组件能不能传递props数据？
        //布尔值写法
        //props:true,
        //对象写法:额外的给路由组件传递一些props
        //props:{a:1,b:2}
        //函数写法(最常用)：可以把params参数，query参数，通过props传递给路由组件
        props:($route)=>({keyword:$route.params.keyword,k:$route.query.k})
        
    },
    {
        path:"/login",
        component:Login,
        meta:{show:true}
    },
    {
        path:"/register",
        component:Register,
        meta:{show:true}
    },
    //重定向：当项目跑起来的时候，访问/，立马让它定位到首页
    {
        path:'*',
        redirect:"/home"
    }
]