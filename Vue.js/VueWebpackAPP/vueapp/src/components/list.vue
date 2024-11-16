<template>
    <ul>
        <li>
           <router-link :to="{name:'helloworld', params:{worldMsg:'你好世界'}}">Hello World</router-link> 
        </li>
        <li>
           <router-link :to="{name:'hellomars', params:{marsMsg:'你好火星'}}">Hello Mars</router-link> 
        </li>
    </ul>
</template>

<script export default>
name: 'list'
</script>

<style scoped>

</style>