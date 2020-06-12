import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/model/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos: Todo[] = [];
  newTodo:Todo  = new Todo();
  
  constructor(public apiService: TodoService) { }

  ngOnInit(): void {
  }

  
  //get
  getTodo(): void
  {

  }

  //post

  addTodo(): void
  {

  }

  updateTodo(): void
  {

  }

  deleteTodo(): void
  {

  }

}
