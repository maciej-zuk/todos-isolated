import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, Select } from '@ngxs/store';

import { TodoListState } from '../todos.state';
import { TodoList } from '../todos.models';
import { Add, RenameList } from '../todos.actions';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    @Output() removeList = new EventEmitter<void>();
    listState: Observable<TodoList>;
    listStateSub: Subscription;
    list: TodoList;
    listId: number;
    name: string;
    editName: boolean = false;

    constructor(private store: Store) { }

    ngOnInit() {
        this.listState = this.store.select(TodoListState);
        this.listStateSub = this.listState.subscribe(
            list => {
                this.list = list;
                this.name = list.name;
            }
        )
    }

    ngOnDestroy() {
        this.listStateSub.unsubscribe();
    }

    onAddTodo(text) {
        this.store.dispatch(new Add(text))
    }

    startRenameList() {
        this.editName = true;
    }

    renameList(newName) {
        this.store.dispatch(new RenameList(newName));
        this.editName = false;
    }
}
