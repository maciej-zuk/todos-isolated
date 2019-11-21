import { Subscription } from "rxjs";
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewContainerRef,
  ViewChild,
  Input,
  Output,
  EventEmitter,
  ComponentRef
} from '@angular/core';
import { TodoListService } from '../todo-list/todo-list-lazy.service';

@Component({
  selector: 'app-todo-list-wrap',
  templateUrl: './todo-list-wrap.component.html'
})
export class TodoListWrapComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef, static: false })  container: ViewContainerRef;
  @Input() listId: number;
  @Output() removeList = new EventEmitter<void>();
  ref: ComponentRef<any>;
  removeListSubscription: Subscription;

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  async ngAfterViewInit(){
    this.ref = await this.todoListService.loadList(this.container);
    this.ref.instance.listId = this.listId;
    this.removeListSubscription = this.ref.instance.removeList.subscribe(() => {
      this.removeList.emit();
    })
  }

  ngOnDestroy(){
    this.removeListSubscription.unsubscribe();
    this.ref.destroy();
  }

}
