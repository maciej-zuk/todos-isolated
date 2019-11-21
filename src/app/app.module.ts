import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';

import { AppComponent } from './app.component';
import { TodoListWrapComponent } from './todo-list-wrap/todo-list-wrap.component';
import { TodoListContainerComponent } from './todo-list-container/todo-list-container.component';
import { environment } from '../environments/environment';

import { TodoListService } from './todo-list/todo-list-lazy.service';
import { TODO_LIST } from './todo-list/todo-list.token';
import { lazyArrayToObj } from './todo-list/todo-list-lazy';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [
        AppComponent,
        TodoListWrapComponent,
        TodoListContainerComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        FlexLayoutModule,
        NgxsReduxDevtoolsPluginModule.forRoot(),
    ],
    providers: [TodoListService, { provide: TODO_LIST, useFactory: lazyArrayToObj }],
    bootstrap: [AppComponent]
})
export class AppModule { }
