import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/model/todo';
import { title } from 'process';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  newTodo:Todo  = new Todo();
  editingTodo:Todo = new Todo();
  editing: boolean;

  
  constructor(public apiService: TodoService) { }

  ngOnInit(): void {
  }

  
  //get
  getTodo(): void
  {
      this.apiService.getTodo().subscribe(
        
        (data) => {
          this.todos = data;        }
      )
  }

  //post

  addTodo(title:NgForm):void{ //html page
    this.apiService.addTodo(this.newTodo).subscribe(
      (data)=>{
          this.newTodo.title = title.value;
          this.getTodo();
      }
    ) 
    this.newTodo = new Todo();
  }

  updateTodo(id,todo:Todo):void{
    console.log(todo);
    this.apiService.updateTodo(todo.id,this.editingTodo)
    .subscribe((data)=>{
      let existingTodo = this.todos.find(todo => todo.id === data.id);
      // existingTodo = data;
      existingTodo.title = todo.title;
      this.editingTodo = existingTodo;
      this.clearEditing();
    });
    this.editingTodo = new Todo();
  }

  deleteTodo(id):void{
      this.apiService.deleteTodo(id)
      .subscribe((data) =>{
        this.todos = this.todos.filter(todo => todo.id!=id)
      })
  }
  toggleCompleted(todoData: Todo):void{
      todoData.completed = !todoData.completed;
      this.apiService.updateTodo(todoData.id,this.editingTodo)
      .subscribe((data)=>{
        let existingTodo = this.todos.find(todo => todo.id === data.id);
        this.editingTodo=existingTodo;
        this.editingTodo.completed = todoData.completed;
      })
      this.editingTodo = new Todo();
  }

  editTodo(todo:Todo):void{
    this.editing = true;
    this.editingTodo=todo;
    // Object.assign(this.editingTodo,todo);
  }
  

  clearEditing(): void{
    this.editingTodo = new Todo();
    this.editing = false;
  }

}
