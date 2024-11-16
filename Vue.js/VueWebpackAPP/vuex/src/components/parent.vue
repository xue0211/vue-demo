<template>
    <div>
        <span>我是父组件</span>----------{{ fromSonMsg }} <br>
        我是父组件中拿到的全局状态： {{ getCount }} <br>
        <button @click="parentAdd">父组件---改变状态按钮</button> <br>
        <button @click="parentDeAction">父组件---改变状态按钮(action)</button> <br>
        <hr>
        <son :msg="toSonMsg" @handle="getMsgFromSon"></son>
    </div>
</template>

<script>
import son from './son'
export default{
    name: 'parent',
    data:function(){
        return{
            toSonMsg: '我是你的父亲',
            fromSonMsg:''
        }
    },
    components:{
        son
    },
    methods:{
        getMsgFromSon:function(value){
            this.fromSonMsg = value

        },
        parentAdd(){
            this.$store.commit('increase')
        },
        parentDeAction(){
            this.$store.dispatch('decreaseAction')
        }
    },
    computed:{
        getCount:function(){
            // return this.$store.state.num
            return this.$store.getters.getNum;
        },
    }
}
</script>

<style>
</style>