import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo } from './todo';
import { TodoService } from './todo.service';
import { CheckboxChangeEvent } from 'primeng/checkbox';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @ViewChild('todoTask') todoTask: any;

  task = '';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.todoService.getTodoList().subscribe(
      response => {
        this.todos = response;
      }
    )
  }

  updateTodo(e: CheckboxChangeEvent, todo: Todo) {
    this.todoService.updateTodo({ ...todo, completed: e.checked }).subscribe(
      response => console.log(response)
    )
  }

  deleteTodo(e: unknown, id: Todo['id']) {
    this.todoService.deleteTodo(id).subscribe(
      response => this.getList()
    )
  }

  addTodo() {
    this.todoService.addTodo({ task: this.task, completed: false }).subscribe(
      response => {
        this.todoTask.reset();
        this.getList();
      }
    )
  }
}
