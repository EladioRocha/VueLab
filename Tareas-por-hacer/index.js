const vmFormTask = new Vue({
  el: '#showTasks',
  data: {
    tasks: []
  },
  methods: {
    addTask: function(e){
      this.tasks.push({
        id: new Date().getTime(),
        title: this.tasks.title, 
        description: this.tasks.description, 
        done: false
      })
    },
    deleteTask: function(id){
      this.tasks = this.tasks.filter(element => element.id != id);
    }
  }
})