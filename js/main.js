const app = Vue.createApp({
    data: () => ({
        newItem: "",
        todos: []
        //1,オブジェクトとして取りたいから配列が必要
    }),
    methods: {
        addItem: function (event) {
            if (this.newItem === '') return
            let todo = {
                //todoはオブジェクト
                item: this.newItem
                //inputから送られてきた値を取得するしitemプロパティへ入れる
            }
            this.todos.push(todo)
            //配列に追加
            this.newItem = ''
        }            
    }
})
app.mount('#app')