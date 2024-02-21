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
    this.todosArray =[
      // {
      //   content:'',
      //   completed:false
      // }
    ]
  }

  toggleDone(id:number){
    this.todosArray.map((to,i)=>{
      if(i==id)
        to.completed = !to.completed;
      return to;
    })
  }

  deleteTodo(id:number){
    this.todosArray = this.todosArray.filter((to,i)=> i!=id);
  }

  addTodo(){
    this.todosArray.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo="";
  }

}
