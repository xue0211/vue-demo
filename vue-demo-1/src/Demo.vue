<template>
    <div class="red">
       这里是 Demo 的内部
       <button @click="fn">call fn</button>
    </div>
</template>

<script>
export default {
   props: ['fn'] 
}                    
</script>

<style scoped>
  .red{
    color: red;
    border: 1px solid red;
  }
</style>