<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>
      我是传递过来的参数：<h1>{{$route.params.marsMsg}}</h1>
      <hr>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloMars',
    data () {
      return {
        msg: 'Hello Mars'
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  *{
    color: darkred
  }
  </style>
  