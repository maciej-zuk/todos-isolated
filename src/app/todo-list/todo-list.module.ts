import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list.component';
import { NgxsModule } from '@ngxs/store';
import { TodoListState } from '../todos.state';
import { environment } from '../../environments/environment';
import { FormsModule } from '@angular/forms';

import {
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [TodoComponent, TodoListComponent],
    imports: [
        CommonModule,
        NgxsModule.forRoot([TodoListState], { developmentMode: !environment.production }),
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatCardModule,
        MatIconModule,
        FlexLayoutModule,
        FormsModule
    ],
    entryComponents: [TodoListComponent]
})
export class TodoListModule {
    static entry = TodoListComponent;
}
