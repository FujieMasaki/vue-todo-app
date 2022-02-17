const app = Vue.createApp({
    data: () => ({
        newItem: "",
        todos: []
        //1,オブジェクトとして取りたいから配列が必要
    }),
    methods: {
        addItem: function (event) {
            let todo = {
                item: this.newItem
                //inputから送られてきた値を取得する
            }
            this.todos.push(todo)
            //配列に追加
        }            
    }
})
app.mount('#app')