import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


// 创建状态仓库, 注意 Store, state 不能改
export default new Vuex.Store({
    state: {
      num: 88
    },
    mutations: {
      // 必须是同步操作
      // 定义状态改变函数
      decrease(state) {
        state.num = state.num - 20;
      },
      increase(state) {
        state.num++;
      }
    },
    actions: {
      // 可以使用 setTimeout() 实现异步操作
      // context为上下文对象
      decreaseAction: function (context) {
        // actions中只能对mutations进行操作
        context.commit('decrease')
      }
    },
    getters:{
      getNum(state){
        return state.num > 0 ? state.num : 0
      }
    }
  })