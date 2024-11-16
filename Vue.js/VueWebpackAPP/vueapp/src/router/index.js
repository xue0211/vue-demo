import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'
import HelloMars from '../components/HelloMars'


Vue.use(router)


/* eslint-disable no-new */
// 配置路由
export default new router({
  routes:[
  {
    name:'helloworld',
    path:'/helloworld/:worldmsg', // 指定要跳转的路径
    component: HelloWorld // 指定要跳转的组件
  },
  {
    name:'hellomars',
    path:'/hellomars/:marsmsg', // 指定要跳转的路径
    component: HelloMars // 指定要跳转的组件
  }]
})