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
  private currentVisibilityFilter: string;

  constructor() {
    this.addTodoDispatcher = new BehaviorSubject([]);
    this.visibilityFilterDispatcher = new BehaviorSubject('SHOW_ALL');
    this.currentTodos = [];
    this.currentVisibilityFilter = 'SHOW_ALL';

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
      this.currentTodos = currState.todos;
      this.currentVisibilityFilter = currState.visibilityFilter;
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

  public getCurrentVisibilityFilter(): string {
    return this.currentVisibilityFilter;
  }

  public getState(): Observable<IState> {
    return this.state;
  }
}
