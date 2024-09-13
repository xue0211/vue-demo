console.log(window.Vue)

const Vue = window.Vue

Vue.config.productionTip = false

import Demo from "./Demo.vue"

new Vue({
  components: { Demo },
  data:{
    n: 0
  },
  template: `
  <div>
     {{n}}
     <Demo :fn=" add "/>
  </div>
  `,
  methods:{
    add(){
      this.n += 1
    }
  },
}).$mount('#xue')
