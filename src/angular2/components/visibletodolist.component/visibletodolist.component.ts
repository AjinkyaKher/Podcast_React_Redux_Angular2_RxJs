/**
 * @class VisibleTodoListComponent
 */

import {Component} from '@angular/core';
import {MATERIAL_DIRECTIVES} from 'ng2-material';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

import {IState} from '../../interfaces/state.interface';
import {ITodo} from '../../interfaces/todo.interface';
import {FormDataService} from '../.././services/formdata.service';

@Component({
  directives: [MATERIAL_DIRECTIVES],
  providers: [],
  selector: 'VisibleTodoList',
  template: require('./visibletodolist.component.html'),
})

export class VisibleTodoListComponent {
  private formDataService: FormDataService;
  private allTodos: Observable<ITodo[]>;
  private activeTodos: Observable<ITodo[]>;
  private completedTodos: Observable<ITodo[]>;
  private currentTodos: Observable<ITodo[]>;

  constructor(formDataService: FormDataService) {
    this.formDataService = formDataService;

    this.allTodos = this.formDataService.getState()
                      .filter((currState: IState) => currState.visibilityFilter === 'SHOW_ALL')
                      .map((currState: IState) => currState.todos);

    this.activeTodos = this.formDataService.getState()
                      .filter((currState: IState) => currState.visibilityFilter === 'SHOW_ACTIVE')
                      .map((currState: IState) => currState.todos);

    this.completedTodos = this.formDataService.getState()
                      .filter((currState: IState) => currState.visibilityFilter === 'SHOW_COMPLETED')
                      .map((currState: IState) => currState.todos);

    switch(this.formDataService.getCurrentVisibilityFilter()) {
      case 'SHOW_ALL': { this.currentTodos = this.allTodos; break; }
      case 'SHOW_ACTIVE': { this.currentTodos = this.activeTodos; break; }
      case 'SHOW_COMPLETED': { this.currentTodos = this.completedTodos; break; }
    }
  }

  private ToggleTodo(todoId: number): void {
      let currentTodos: ITodo[] = this.formDataService.getCurrentTodos();
      let todoIndex: number = -1;
      currentTodos.every((todo, index) => {
        if (todo.id === todoId) {
          todoIndex = index;
          return false;
        }
      });
      if (todoIndex > -1) {
          currentTodos[todoIndex].completed = !currentTodos[todoIndex].completed;
      }
      this.formDataService.getAddTodoDispatcher().next(currentTodos);
  }
}
