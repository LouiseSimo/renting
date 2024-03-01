import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  pageTitle:string=' To Do List';
  inputTodo:string='';

  todos!:Todo[];


  ngOnInit(){
    this.todos=[
      {
        content:'first task',
        completed: false
      },
      {
        content:'second task',
        completed: true
      },
      {
        content:'next second task',
        completed: true
      }
    ]
  }




  add(todo:NgForm){}

  toggleTodo(id:number){
    this.todos.map((v,i)=>{
      if(i==id) v.completed=!v.completed;
      return v;
    })
//this.todos[i].completed=!this.todos[i].completed;
  }

  deleteTodo(id:number){
    this.todos=this.todos.filter((v,i)=>i!==id)
  }

  addTodo(){
    this.todos.push({
      content:this.inputTodo,
      completed:false
    });
    this.inputTodo=''
  }

}
