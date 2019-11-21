import { State, Action, StateContext } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export interface MappedTodos {
  [id: string]: Todo;
}

export interface TodoList {
  name: string;
  lastId: number;
  todos: MappedTodos;
}
