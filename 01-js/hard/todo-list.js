/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.todos = []
  }


    add(todo){
      this.todos.push(todo) 
    }

    remove(index){
      this.todos.splice(index,1)
    }

    getAll(){
      return this.todos
    }

    get(index){
      if(index >= this.todos.length){
        return  null;
      }
      return this.todos[index]
    }

    clear(){

      this.todos = []
    }

    update(index , todo){
      if(index >= this.todos.length){
        return 
      }
      let temp = this.todos.slice(0,index)
      temp.push(todo)
      temp = temp.concat(this.todos.slice(index + 1, this.todos.length));
      this.todos = temp
    }
  }

    

module.exports = Todo;
