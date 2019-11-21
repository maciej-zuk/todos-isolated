import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngxs/store';

import { Todo } from "../../todos.models";
import { Remove, MarkDone, MarkUndone } from '../../todos.actions';


@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
    @Input() todo: Todo;

    constructor(private store: Store) { }

    ngOnInit() {
    }

    removeTodo() {
        this.store.dispatch(new Remove(this.todo.id));
    }

    markDone() {
        this.store.dispatch(new MarkDone(this.todo.id));
    }

    markUndone() {
        this.store.dispatch(new MarkUndone(this.todo.id));
    }

}
