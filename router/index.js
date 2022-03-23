import Vue from "vue";
import VueRouter from "vue-router"; //第一步：导入路由对象

//import Home from "../views/Home";
//路由懒加载
const Main = () => import('../views/Main');
const User = () => import('../views/user/User');
const Home = () => import('../views/home/Home');
const Mall = () => import('../views/mall/Mall');
const PageOne = () => import('../views/other/PageOne');
const PageTwo = () => import('../views/other/PageTwo');

//第一步：并安装vue-router插件
Vue.use(VueRouter)

//配置路由和组件之间的映射关系,routes直接写在VueRouter对象里面也可以
const routes = [
    {
        path: '/',
        name: 'main',
        component: Main,
        children: [
            {
              path: '',
              redirect: '/home'
            },
            {
                path: '/home',
                name: 'home',
                component: Home,
            },
            {
                path: '/mall',
                name: 'mall',
                component: Mall,
            },
            {
                path: '/user',
                name: 'user',
                component: User
            },
            {
                path: '/page1',
                name: 'page1',
                component: PageOne
            },
            {
              path: '/page2',
              name: 'page2',
              component: PageTwo
            }
        ]
    },
]

//第二步：创建Router对象实例
const router = new VueRouter({
    mode: "history",
    routes
})

//第三步：将Router对象传入到Vue实例。也可以直接在第二步new VueRouter前面直接写export default
export default router

