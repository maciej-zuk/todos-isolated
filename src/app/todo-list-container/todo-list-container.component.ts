import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-container',
  templateUrl: './todo-list-container.component.html',
  styleUrls: ['./todo-list-container.component.scss']
})
export class TodoListContainerComponent implements OnInit {
  lists = [1, 2];
  lastId = 2;

  constructor() {
  }

  ngOnInit() {
  }

  addList(){
    this.lists.push(++this.lastId);
  }

  removeList(i){
    this.lists.splice(this.lists.indexOf(i), 1);
  }

}
