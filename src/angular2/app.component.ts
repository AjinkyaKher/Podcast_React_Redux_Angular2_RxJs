/**
 * @class AppComponent
 */

import {Component} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {AddTodoComponent} from './AddTodo.component';
import {VisibleTodoListComponent} from './VisibleTodoList.component';
import {IState, ITodo} from './IState';
import {AppTitleComponent} from './AppTitle.component';
import {FilterComponent} from './Filter.component';

@Component({
  directives: [MATERIAL_DIRECTIVES, AddTodoComponent, VisibleTodoListComponent, AppTitleComponent, FilterComponent],
  providers: [],
  selector: 'root1', 
  template: 
   `<div class="md-padding" layout="row" layout-align="center center">
        <div flex="80" layout="column" flex-xs="100">
            <md-card style="background-color: #3F51B5">
                <md-card-content>
                    <md-content layout-padding style="background-color: #3F51B5">
                        <AppTitle> </AppTitle>
                    </md-content>
                    <md-content layout-padding style="background-color: #E8EAF6">
                        <AddTodo (emitter)="UpdateToDoList($event)"> </AddTodo>
                    </md-content>
                    <md-content layout-padding style="background-color: #E8EAF6">
                        <Filter (emitter)="UpdateVisibilityFilter($event)"> </Filter>
                    </md-content>
                    <md-content layout-padding style="background-color: #3F51B5">
                        <VisibleTodoList state="{{compressedState}}" (emitter)="UpdateTodoItem($event)"> </VisibleTodoList>
                    </md-content>
                </md-card-content> 
            </md-card>
        </div>
    </div>
   `,
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