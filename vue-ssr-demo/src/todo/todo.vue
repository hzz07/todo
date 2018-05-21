<template>
    <section class="real-app">
        <!-- 输入框标签-->
        <!-- autofocus属性：页面进来后，自动选中 -->
        <!-- placeholder属性：hint提示文字 -->
        <!-- @keyup事件的写法等价于 v-on:keyup。enter是事件的修饰符 -->
        <input type="text" name=""
               class="add-input"
               autofocus='autofocus'
               placeholder="接下来要去干什么事"
               @keyup.enter='addTodo'
        >
        <!-- 通过循环，将底部的 各个 item 遍历出来。疑问：第一个属性的含义是？ -->
        <!-- 如果要删除某个item，可以通过 v-on:delItem 来监听子组件的删除操作，并传入id -->
        <Item
                :todo="todo"
                v-for="todo in filteredTodos"
                :key="todo.id"
                @del="deleteTodo"
        ></Item>
        <Tabs
                :filter="filter"
                :todos="todos"
                @toggle="togglefilter"
                @clearAllCompleted="clearAllCompleted"
        ></Tabs>
    </section>
</template>

<script>

    import Item from './item.vue'
    import Tabs from './tabs.vue'

    let id = 0;
    export default {
        data() {
            return {
                todos: [],
                filter: 'all'
            }
        },
        computed:{
            filteredTodos(){
                if(this.filter==='all'){
                    return this.todos
                }
                const completed=this.filter==='completed'
                return this.todos.filter(todo=>completed===todo.completed)
            }
        },
        methods: {
            addTodo(e) {
                this.todos.unshift({
                    id: id++,
                    content: e.target.value.trim(),
                    completed:false
                })
                e.target.value=''
            },
            deleteTodo(id){
                this.todos.splice(this.todos.findIndex(todo=>todo.id===id),1)
            },
            togglefilter(state){
                this.filter=state
            },
            clearAllCompleted(){
                this.todos=this.todos.filter(todo=>!todo.completed)
            }
        },
        components: {
            Item, Tabs
        }
    }
</script>

<style lang="stylus" scoped>
    .real-app {
        width: 600px;
        margin: 0 auto;
        box-shadow: 0 0 5px #666;
    }
    // 输入框的样式
    .add-input {
        position: relative;
        margin: 0;
        width: 100%;
        font-size: 24px;
        font-family: inherit;
        font-weight: inherit;
        line-height: 1.4em;
        border: 0;
        outline: none;
        color: inherit;
        padding: 6px;
        border: 1px solid #999;
        box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
        font-smoothing: antialiased;
        padding: 16px 16px 16px 60px;
        border: none;
        box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
    }

    .add-input {
        position relative;
        height 50px

    }

</style>