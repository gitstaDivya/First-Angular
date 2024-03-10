import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
todosArray!:Todo[];
inputTodo: string="";
  constructor() { }

  ngOnInit(): void {
    // this.todosArray =[
    //   // {
    //   //   content:'',
    //   //   completed:false
    //   // }
    // ]
    const storedTodos = localStorage.getItem('todos');
    this.todosArray = storedTodos ? JSON.parse(storedTodos) : [];
  }

  toggleDone(id:number){
    // this.todosArray.map((to,i)=>{
    //   if(i==id)
    //     to.completed = !to.completed;
    //   return to;
    // })
    this.todosArray[id].completed = !this.todosArray[id].completed;
    this.updateLocalStorage();
  }

  deleteTodo(id:number){
    // this.todosArray = this.todosArray.filter((to,i)=> i!=id);
    this.todosArray = this.todosArray.filter((todo, index) => index !== id);
    this.updateLocalStorage();
  }

  addTodo(){
    // this.todosArray.push({
    //   content: this.inputTodo,
    //   completed: false
    // });
    // this.inputTodo="";
    if (this.inputTodo.trim() === '') {
      return; // Don't add empty todos
    }

    this.todosArray.push({
      content: this.inputTodo,
      completed: false
    });

    this.inputTodo = '';
    this.updateLocalStorage();
  }
  private updateLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todosArray));
  }
}
