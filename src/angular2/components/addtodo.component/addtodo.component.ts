/**
 * @class AddTodoComponent
 */

import {Component} from '@angular/core';
// import {MATERIAL_DIRECTIVES} from 'ng2-material';

import {FormDataService} from '../.././services/formdata.service';

@Component({
  directives: [],
  providers: [],
  selector: 'AddTodo',
  template: require('./addtodo.component.html'),
})

export class AddTodoComponent {
    private userInput: string = undefined;
    private id: number = 0;
    private formDataService: FormDataService;

    constructor(formDataService: FormDataService) {
      this.formDataService = formDataService;
    }

    private addTodo(): void {
        this.formDataService.getAddTodoDispatcher().next(
            [
              ...this.formDataService.getCurrentTodos(),
              {id: this.id,
               text: this.userInput,
               completed: false
              }
            ]);
        this.id++;
        this.userInput = undefined;
    }
}
