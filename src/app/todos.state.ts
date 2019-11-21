import { State, Action, StateContext, createSelector, Store, Select } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { Inject } from '@angular/core';
import update from 'immutability-helper';
import {
    Todo,
    TodoList,
    MappedTodos
} from './todos.models';

import {
    Add,
    Remove,
    MarkDone,
    MarkUndone,
    RenameList
} from './todos.actions';

@State<TodoList>({
    name: "todo_list",
    defaults: {
        name: "My todo list",
        lastId: 2,
        todos: {
            "todo-1": {
                id: "todo-1",
                text: "Make some coffee",
                done: true,
            },
            "todo-2": {
                id: "todo-2",
                text: "Have some sleep",
                done: false,
            }
        }
    }
})
export class TodoListState {
    @Action(Add)
    addTodo(ctx: StateContext<TodoList>, action: Add) {
        const state = ctx.getState();
        const newId = state.lastId + 1;
        const newIdString = `todo-${newId}`;
        ctx.setState(update(state, {
            todos: {
                [newIdString]: {
                    $set: {
                        id: newIdString,
                        text: action.text,
                        done: false
                    }
                }
            },
            lastId: {
                $set: newId
            }
        }));
    }

    @Action(Remove)
    removeTodo(ctx: StateContext<TodoList>, action: Remove) {
        const state = ctx.getState();
        ctx.setState(update(state, {
            todos: {
                $unset: [action.id]
            }
        }));
    }

    @Action(MarkDone)
    markDone(ctx: StateContext<TodoList>, action: MarkDone) {
        const state = ctx.getState();
        ctx.setState(update(state, {
            todos: {
                [action.id]: {
                    done: {
                        $set: true
                    }
                }
            }
        }));
    }

    @Action(MarkUndone)
    markUndone(ctx: StateContext<TodoList>, action: MarkUndone) {
        const state = ctx.getState();
        ctx.setState(update(state, {
            todos: {
                [action.id]: {
                    done: {
                        $set: false
                    }
                }
            }
        }));
    }

    @Action(RenameList)
    renameList(ctx: StateContext<TodoList>, action: RenameList) {
        const state = ctx.getState();
        ctx.setState(update(state, {
            name: {
                $set: action.name
            }
        }));
    }
}
