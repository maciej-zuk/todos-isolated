import { Injectable, Injector, Compiler, Inject, NgModuleFactory, Type, ViewContainerRef } from '@angular/core';
import { TODO_LIST } from './todo-list.token';

@Injectable({
    providedIn: 'root'
})
export class TodoListService {

    constructor(
        private injector: Injector,
        private compiler: Compiler,
        @Inject(TODO_LIST) private lazyTodoList: { [key: string]: () => Promise<NgModuleFactory<any> | Type<any>> }
    ) { }

    async loadList(container: ViewContainerRef) {
        const tempModule = await this.lazyTodoList["todo_list"]();

        let moduleFactory;

        if (tempModule instanceof NgModuleFactory) {
            moduleFactory = tempModule;
        } else {
            moduleFactory = await this.compiler.compileModuleAsync(tempModule);
        }

        const entryComponent = (moduleFactory.moduleType as any).entry;
        const moduleRef = moduleFactory.create(this.injector);

        const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

        const component = container.createComponent(compFactory);
        return component;
    }


}
