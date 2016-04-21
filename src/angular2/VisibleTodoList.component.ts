/**
 * @class VisibleTodoListComponent
 */

import {Component, Input,  Output, EventEmitter} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {IState, ITodo} from './IState';

@Component({
  directives: [MATERIAL_DIRECTIVES],
  providers: [],
  selector: 'VisibleTodoList', 
  template: 
   `<ul style="font-size: 2.5em; text-align: center; list-style: none">
        <li key="#todo.id" 
            *ngFor="#todo of currentTodos"
            style="cursor: pointer; color: #FFFFFF"
            (click)="ToggleTodo(todo.id)">
            <span *ngIf="todo.completed"> 
                <i class="fa fa-check-circle"></i> 
            </span>
            <span *ngIf="!todo.completed">
                <i class="fa fa-circle"></i>
            </span>
            {{todo.text}}
        </li>
    </ul>
   `,
})

export class VisibleTodoListComponent {
    private currentTodos: ITodos[]; 
    @Input()
    private state: IState;
    @Output() emitter = new EventEmitter();
    
    public ngOnChanges(changes: any): void {
        if(changes.state && changes.state.currentValue) {
            this.state = JSON.parse(changes.state.currentValue);
            if (this.state.visibilityFilter === 'SHOW_ALL') {
                this.currentTodos = this.state.todos;
            } else if (this.state.visibilityFilter === 'SHOW_COMPLETED') {
                this.currentTodos = this.state.todos.filter(t => t.completed);
            } else {
                this.currentTodos = this.state.todos.filter(t => !t.completed);
            }            
        }
    }
    
    private ToggleTodo(todoId: number): void {
        this.emitter.emit(todoId);
    }
}