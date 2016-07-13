/**
 * @class AppComponent
 */

import {Component} from '@angular/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material';

import {AddTodoComponent} from './components/addtodo.component/addtodo.component';
import {VisibleTodoListComponent} from './components/visibletodolist.component/visibletodolist.component';
import {AppTitleComponent} from './components/apptitle.component/apptitle.component';
import {FilterComponent} from './components/filter.component/filter.component';
import {IState} from './interfaces/state.interface';
import {ITodo} from './interfaces/todo.interface';

@Component({
  directives: [MATERIAL_DIRECTIVES,
               AddTodoComponent,
               VisibleTodoListComponent,
               AppTitleComponent,
               FilterComponent],
  providers: [],
  selector: 'root',
  template: require('./app.component.html'),
})

export class AppComponent {
    private state: IState = {
        visibilityFilter: 'SHOW_ALL',
        todos: []
    }

    private compressedState: string = undefined;

    private UpdateToDoList(todoItem: ITodo): void {
        console.log('I am handling event emitted by my child');
        console.log(todoItem);
        this.state.todos.push(todoItem);
        console.log('changing a variable which is input to another component');
        this.compressedState = JSON.stringify(this.state);
    }

    private UpdateTodoItem(todoId: number): void {
        this.state.todos.map((todo) => {
            if(todo.id == todoId) {
                todo.completed = !todo.completed;
                return;
            }
        })
        this.compressedState = JSON.stringify(this.state);
    }

    private UpdateVisibilityFilter(filter: string): void {
        this.state.visibilityFilter = filter;
        this.compressedState = JSON.stringify(this.state);
    }
}
