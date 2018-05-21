<template>
    <div class="helper">
        <span class="left"> {{unFinishedTodoLength}} items left</span>
        <span class="tabs">
             <!-- （1）通过 v-for 的形式展现三个tab-->
            <!-- （2）加上 :key 属性，去复用节点 -->
            <!-- （3）因为有选中和未选中的状态，所以要加上 :class 属性。首先有一个 state 属性，然后根据传进来的 filter判断是否跟当前 state一致 -->
            <!-- （4）最后，加上 click 事件，将 state传给组件 -->
            <span v-for="state in states" :key="state" :class="[state,filter=== state?'actived':'']"
                  @click="toggleFilter(state)">{{state}}</span>
        </span>
        <span class="clear" @click="clearAllCompleted"> Clear Completed</span>
    </div>
</template>

<script>
    export default {
        props:{
            filter:{
                type:String,
                required:true // required 表示这个参数一定要传入
            },
            todos:{
                type:Array,
                required:true // required 表示这个参数一定要传入
            }
        },
        data() {
            return {
                states: ['all', 'active', 'completed']
            }
        },
        computed:{
          unFinishedTodoLength(){
              return this.todos.filter(todo=>!todo.completed).length
          }
        },
        methods:{
            clearAllCompleted(){
                this.$emit('clearAllCompleted') //通过 emit，将删除操作传递给父组件
            },
            toggleFilter(state){
                this.$emit('toggle',state) //通过 emit，将删除操作传递给父组件
            }
        }
    }
</script>

<style lang="stylus" scoped >
    .helper {
        font-weight: 100;
        display: flex;
        justify-content: space-between;
        padding: 5px 0;
        line-height: 30px;
        background-color: #fff;
        font-size: 14px;
        font-smoothing: antialiased;
    }
    .left, .clear, .tabs {
        padding: 0 10px;
        box-sizing: border-box;
    }
    .left, .clear {
        width: 150px;
    }
    .left {
        text-align: left;
    }
    .clear {
        text-align: right;
        cursor: pointer;
    }
    .tabs {
        width: 200px;
        display: flex;
        justify-content: space-around;
        * {
            display: inline-block;
            padding: 0 10px;
            cursor: pointer;
            border: 1px solid rgba(175, 47, 47, 0);
            &.actived {
                border-color: rgba(175, 47, 47, 0.4);
                border-radius: 5px;
            }
        }
    }
</style>