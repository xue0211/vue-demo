<template>
    <div>
        <span>我是子组件</span>----------{{ msg }} <br>
        ------我是子组件中拿到的全局状态:{{ getNum }}
        <button @click="sendMsgToDad">向父组件传递数据</button> <br>
        <button @click="sonAdd">子组件---改变状态按钮</button> <br>
        <button @click="sonDeAction">子组件---改变状态按钮(action)</button>
    </div>
</template>

<script>
export default{
    name: 'son',
    data:function(){
        return{
            toFatherMsg:'我是你的son'
        }
    },
    props:{
        msg:{
            type: String,
            default: ''
        }
    },
    methods:{
        sendMsgToDad:function(){
            this.$emit('handle',this.toFatherMsg)
        },
        sonAdd(){
            this.$store.commit('increase')
        },
        sonDeAction(){
            this.$store.dispatch('decreaseAction')
        }
    },
    computed:{
        getNum:function(){
            return this.$store.state.num
        }
    }
}
</script>