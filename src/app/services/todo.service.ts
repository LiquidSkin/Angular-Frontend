import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/model/todo';

const baseUrl:string = "http://localhost:8080/api";

const httpOptions = {
headers: new  HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {



  constructor(private http: HttpClient) { }

  getTodo(): Observable<Todo[]> 
  {
    return this.http.get<Todo[]>(baseUrl + "/todo", httpOptions);
  }

  addTodo(todo: Todo):Observable<Todo>
  {
    return this.http.post<Todo>(baseUrl + "/todo" , JSON.stringify(todo),httpOptions);
  }

}
