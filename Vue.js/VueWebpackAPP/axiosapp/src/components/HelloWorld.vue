<template>
  <div class="hello">
    <h3>我是axiosAPP,用来发送请求,拦截响应</h3>
    <button @click="getData">GET方式发送请求</button>
    <button @click="postData">POST方式发送请求</button>
    <ul>
      <li v-for="item in items">
         {{item.title}}
      </li>
    </ul>
  </div> 
</template>

<script>
Vue.prototype.$http = axios;
import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'
export default {
  name: 'HelloWorld',
  data() {
    return {
      items: []
    }
  },
  methods: {
    // 使用传统方法 function
    // getData() {
    //   var self = this;
    //   this.$http.get('https://cnodejs.org/api/v1/topics')
    //     .then(function (res) {
    //       // 此处的 this 指向的不是当前 Vue 实例
    //       self.items = res.data.data
    //       console.log(res.data.data)
    //     })
    //     .catch(function (err) {
    //       console.log(err)
    //     })
    // }
    // 使用 ES6 语法
    getData(){
      // 参数传递两种用法
      // 用法1
      // this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=15')
      // 用法2
      this.$http.get('https://cnodejs.org/api/v1/topics',{
        params:{
          page:1,
          limit: 10
        }
      })
       .then(res=>{
          this.items = res.data.data
          console.log(res.data.data)
       })
       .catch(function (err) {
          console.log(err)
        })
    },
    postData(){
      // 参数传递两种用法
      // 用法1
      // this.$http.get('https://cnodejs.org/api/v1/topics?page=1&limit=15')
      // 用法2
      this.$http.post(url,qs.stringify({
       page:1,
       limit:20
      })).then(res=>{
          this.items = res.data.data
          console.log(res.data.data)
       })
       .catch(function (err) {
          console.log(err)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
