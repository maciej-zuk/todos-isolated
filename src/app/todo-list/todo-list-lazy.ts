import { NgModuleFactory, Type } from '@angular/core';

export const lazyTodoList: { path: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>> }[] = [
  {
    path: 'todo_list',
    loadChildren: () => import('./todo-list.module').then(m => m.TodoListModule)
  }
];

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyTodoList) {
    result[w.path] = w.loadChildren;
  }
  return result;
}
