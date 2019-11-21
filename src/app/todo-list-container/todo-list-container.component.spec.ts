import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosListContainerComponent } from './todos-list-container.component';

describe('TodosListContainerComponent', () => {
  let component: TodosListContainerComponent;
  let fixture: ComponentFixture<TodosListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosListContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
