import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import 'rxjs/add/observable/combineLatest';

import {ITodo} from '.././interfaces/todo.interface';
import {IState} from '.././interfaces/state.interface';

/**
 * @class FormDataService
 */
@Injectable()
export class FormDataService {
  private addTodoDispatcher: BehaviorSubject<ITodo[]>;
  private visibilityFilterDispatcher: BehaviorSubject<string>;
  private state: Observable<IState>;
  private currentTodos: ITodo[];

  constructor() {
    this.addTodoDispatcher = new BehaviorSubject([]);
    this.visibilityFilterDispatcher = new BehaviorSubject('SHOW_ALL');
    this.currentTodos = [];

    this.state = Observable.combineLatest(
      this.addTodoDispatcher,
      this.visibilityFilterDispatcher,
      (todos, visibilityFilter) => {
        return {
          visibilityFilter,
          todos,
        };
      }
    );

    this.state.subscribe((currState: IState) => {
      console.log('State Change'); console.log(currState);
      this.currentTodos = currState.todos;
    });
  }

  public getAddTodoDispatcher(): BehaviorSubject<ITodo[]> {
    return this.addTodoDispatcher;
  }

  public getVisibilityFilterDispatcher(): BehaviorSubject<string> {
    return this.visibilityFilterDispatcher;
  }

  public getCurrentTodos(): ITodo[] {
    return this.currentTodos;
  }

  public getState(): Observable<IState> {
    return this.state;
  }
}
