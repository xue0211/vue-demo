<template>
  <div id="app">
    {{ user }}
    <hr>
    登录
    <form @click.prevent="onsubmit"> 
      <label>
        <span>用户名</span>
        <input type="text" :value="user.username" 
        @input="user.username = $event.target.value" />
      </label>
      <label>
        <span>密码</span>
        <input type="password" v-model="user.password" />
      </label>
      <button type="submit">登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    onsubmit() {
      console.log(this.user)
    }
  }
}
</script>
