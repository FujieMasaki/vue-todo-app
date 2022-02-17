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
                item: this.newItem,
                //inputから送られてきた値を取得しitemプロパティへ入れる
                isDone: false
            }
            this.todos.push(todo)
            //配列に追加
            this.newItem = ''
        },
        deleteItem: function (index) {
            //一つずつ削除するから、値にユニークな番号を渡さないといけない。その為にindexを引数に追加
            // console.log('Delete')
            // console.log(index)
            this.todos.splice(index, 1)
            //削除するメソッド。第一引数が削除を始める配列index。第二引数が削除する長さ
        }
    }
})
app.mount('#app')