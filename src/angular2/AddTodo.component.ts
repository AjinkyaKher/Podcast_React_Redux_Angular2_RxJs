/**
 * @class AddTodoComponent
 */

import {Component, Output, EventEmitter} from 'angular2/core';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

@Component({
  directives: [MATERIAL_DIRECTIVES],
  providers: [],
  selector: 'AddTodo', 
  template: 
   `<form style="text-align: center">
        <div layout-gt-sm="row">
            <md-input-container style="text-align: center" class="md-block" flex-gt-sm>
                <label>Enter a new Todo task...</label>
                <input md-input
                       [(ngModel)]="userInput">
                <button md-raised-button class="md-raised md-primary"
                        (click)="AddTodo()"> 
                    ADD TODO
                </button>
            </md-input-container>
        </div>
    </form>
   `,
})

export class AddTodoComponent {
    private userInput: string = undefined;
    private id: number = 0;
    @Output() emitter = new EventEmitter();
    
    private AddTodo(): void {
        this.emitter.emit(
            {id: this.id, 
             text: this.userInput,
             completed: false
            });
        this.id++;
        this.userInput = undefined;
    }
}