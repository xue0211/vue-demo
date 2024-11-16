<template>
    <div>
        我是outter拿到的全局状态： {{ getOutterCount }} <br>
        <button @click="outterAdd">outter组件---改变状态按钮</button> <br>
        <button @click="outterDeAction">outter组件---改变状态按钮(action)</button>
    </div>
</template>

<script>
export default{
    name: 'outer',
    computed:{
        getOutterCount:function(){
            return this.$store.state.num
        }
    },
    methods:{
        outterAdd(){
            this.$store.commit('increase')
        },
        outterDeAction(){
            this.$store.dispatch('decreaseAction')
        }
    }
}
</script>

<style>

</style>